'use strict';

/**
 * Email Service
 * =============
 * Provides a unified sendEmail() interface with two adapters:
 *
 *   DEV  adapter — when SMTP_HOST is not configured:
 *     - Logs the full email to console
 *     - Stores it in the DevEmail DB table (viewable in admin Mailbox tab)
 *
 *   SMTP adapter — when SMTP_HOST is set:
 *     - Sends via nodemailer using the configured SMTP credentials
 *
 * All business-logic email helpers (bookingConfirmation, statusChanged, etc.)
 * are exported from this file so routes just call e.g. email.statusChanged(order, ...)
 */

const nodemailer = require('nodemailer');
const prisma = require('../prisma');
const { asyncLocalStorage } = require('../utils/logger');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@localhost';
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const SMTP_FROM = process.env.SMTP_FROM || 'Lauridsen Production <noreply@lauridsenproduction.com>';

// ── Adapter Selection ──────────────────────────────────────────────────────────

let transporter = null;

// Only activate SMTP if BOTH host and password are provided.
// If SMTP_PASS is blank, fall back to dev adapter so emails show in Admin Mailbox.
const smtpReady = Boolean(process.env.SMTP_HOST && process.env.SMTP_PASS);

if (smtpReady) {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    // Verify connection on startup so misconfigurations are caught immediately
    transporter.verify((err) => {
        if (err) {
            console.error('[email] SMTP connection failed — falling back to dev adapter:', err.message);
            transporter = null; // Revert to dev adapter so emails aren't lost
        } else {
            console.log('[email] SMTP adapter active — emails will be sent via', process.env.SMTP_HOST);
        }
    });
} else {
    const reason = process.env.SMTP_HOST ? 'SMTP_PASS not set' : 'SMTP_HOST not set';
    console.log(`[email] Dev adapter active (${reason}) — emails stored in DevEmail table + logged to console`);
}

// ── Core sendEmail() ───────────────────────────────────────────────────────────

/**
 * Send an email using the configured adapter.
 * @param {{ to: string, subject: string, html: string, text?: string }} opts
 * @returns {Promise<void>} — throws on adapter failure so callers can warn/log accurately
 */
async function sendEmail({ to, subject, html, text, orderId, template }) {
    if (!to || !subject || !html) {
        console.warn('[email] sendEmail called with missing fields — skipping');
        return;
    }

    const EMAIL_MODE = process.env.EMAIL_MODE || 'disabled';
    const intendedTo = to;
    let actualTo = intendedTo;
    let finalSubject = subject;
    let finalHtml = html;
    let finalText = text || '';

    if (EMAIL_MODE === 'staging' || EMAIL_MODE === 'test') {
        actualTo = ADMIN_EMAIL;
        finalSubject = `[${EMAIL_MODE.toUpperCase()}] ${subject}`;
        const amendmentHtml = `<div style="background:#333;color:#fff;padding:8px;margin-bottom:16px;text-align:center;"><strong>Original intended recipients:</strong> ${intendedTo}</div>`;
        const amendmentText = `[Original intended recipients: ${intendedTo}]\n\n`;

        finalHtml = finalHtml.replace('<body>', `<body>\n${amendmentHtml}`);
        if (!finalHtml.includes('<body>')) finalHtml = amendmentHtml + finalHtml;
        finalText = amendmentText + finalText;
    }

    // Strict Guardrail
    if (EMAIL_MODE !== 'production' && EMAIL_MODE !== 'disabled' && actualTo !== ADMIN_EMAIL) {
        throw new Error(`[EMAIL_SAFETY_GUARDRAIL] Attempted to send email to ${actualTo} outside of production mode.`);
    }

    let status = 'QUEUED';
    let errorCode = null;
    let errorSummary = null;

    if (EMAIL_MODE === 'disabled') {
        status = 'SUPPRESSED';
    }

    // Safe Redaction
    let redactedTo = intendedTo;
    if (redactedTo.includes('@')) {
        const [local, domain] = redactedTo.split('@');
        const visible = local.length > 2 ? local.substring(0, 2) : local.charAt(0);
        redactedTo = `${visible}***@${domain}`;
    } else {
        redactedTo = '***[REDACTED]***';
    }

    const store = asyncLocalStorage ? asyncLocalStorage.getStore() : null;
    const requestId = store ? store.get('req_id') : undefined;

    try {
        if (EMAIL_MODE !== 'disabled') {
            if (transporter) {
                await transporter.sendMail({ from: SMTP_FROM, to: actualTo, subject: finalSubject, html: finalHtml, text: finalText });
            } else {
                console.log('\n━━━━━━━━━━━━━━━━ [DEV EMAIL] ━━━━━━━━━━━━━━━━');
                console.log(`  To:      ${actualTo}`);
                console.log(`  Subject: ${finalSubject}`);
                console.log(`  Body:    ${finalText || '(see HTML)'}`);
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

                await prisma.devEmail.create({
                    data: { toAddress: actualTo, subject: finalSubject, htmlBody: finalHtml, textBody: finalText }
                });
            }
            status = 'SENT';
        }
    } catch (err) {
        status = 'FAILED';
        errorCode = err.code || 'UNKNOWN';
        errorSummary = err.message || err.toString();
        throw err;
    } finally {
        await prisma.emailEvent.create({
            data: {
                timestamp: new Date(),
                eventTemplate: template || null,
                orderId: orderId || null,
                intendedCount: 1, // Only sending to 1 explicitly
                intendedTo: redactedTo,
                actualTo,
                subject: finalSubject,
                status,
                errorCode,
                errorSummary,
                requestId
            }
        });
    }
}

// ── Status Labels ──────────────────────────────────────────────────────────────

const STATUS_LABELS = {
    PENDING: 'Pending Review',
    ACCEPTED: 'Accepted',
    REJECTED: 'Rejected',
    IN_PROGRESS: 'In Progress',
    READY_FOR_REVIEW: 'Ready for Review',
    UPDATING: 'Updating',
    COMPLETED: 'Completed',
};

const STATUS_GUIDANCE = {
    ACCEPTED: 'I will reach out shortly with next steps. A Google Drive upload folder will be provided once the project is set up.',
    REJECTED: 'Unfortunately your request could not be accommodated at this time. Feel free to reach out via email if you have questions.',
    IN_PROGRESS: 'Work on your project has begun. You will be notified when a draft is ready for your review.',
    READY_FOR_REVIEW: 'A draft is ready for your feedback. Please listen carefully and send any revision notes to me directly.',
    UPDATING: 'Revisions are in progress based on your feedback. I will notify you once the update is complete.',
    COMPLETED: 'Your project is complete! You will receive a separate email with a link to leave a review.',
};

function label(status) {
    return STATUS_LABELS[status] || status;
}

// ── Email Templates ────────────────────────────────────────────────────────────

function orderSummaryHtml(order) {
    return `
    <table style="border-collapse:collapse;width:100%;font-family:monospace;font-size:14px;">
      <tr><td style="padding:6px 12px;color:#888;width:180px">Order ID</td><td style="padding:6px 12px"><strong>${order.publicId}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#888">Service</td><td style="padding:6px 12px">${order.serviceType}</td></tr>
      ${order.genre ? `<tr><td style="padding:6px 12px;color:#888">Genre</td><td style="padding:6px 12px">${order.genre}</td></tr>` : ''}
      ${order.numSongs != null ? `<tr><td style="padding:6px 12px;color:#888">Songs</td><td style="padding:6px 12px">${order.numSongs}</td></tr>` : ''}
      ${order.songLength ? `<tr><td style="padding:6px 12px;color:#888">Song Length</td><td style="padding:6px 12px">${order.songLength}</td></tr>` : ''}
      ${order.numStems != null ? `<tr><td style="padding:6px 12px;color:#888">Stems</td><td style="padding:6px 12px">${order.numStems}</td></tr>` : ''}
      ${order.message ? `<tr><td style="padding:6px 12px;color:#888;vertical-align:top">Message</td><td style="padding:6px 12px">${order.message}</td></tr>` : ''}
    </table>`;
}

function wrapEmail(bodyHtml) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: 'Helvetica Neue', Arial, sans-serif; background:#0a0a0a; color:#e0e0e0; margin:0; padding:0; }
  .container { max-width:600px; margin:0 auto; background:#111; border:1px solid #222; }
  .header { background:#d11a2a; padding:24px 32px; }
  .header h1 { margin:0; font-size:20px; color:#fff; letter-spacing:2px; }
  .body { padding:32px; }
  .footer { padding:16px 32px; border-top:1px solid #222; font-size:12px; color:#555; }
</style></head>
<body>
  <div class="container">
    <div class="header"><h1>LAURIDSEN PRODUCTION</h1></div>
    <div class="body">${bodyHtml}</div>
    <div class="footer">Lauridsen Production · Professional Audio Engineering</div>
  </div>
</body>
</html>`;
}

// ── Business Email Functions ───────────────────────────────────────────────────

/**
 * Customer: booking received confirmation
 */
async function bookingConfirmation(order) {
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">REQUEST RECEIVED</h2>
        <p>Hi ${order.customerName},</p>
        <p>Your booking request has been received and is <strong>pending review</strong>. I will get back to you within 1–2 business days.</p>
        <h3 style="letter-spacing:1px;margin-top:24px">Your Submission</h3>
        ${orderSummaryHtml(order)}
        <p style="margin-top:24px;color:#888">Keep this email for your records. Your Order ID is <strong>${order.publicId}</strong>.</p>
    `);
    await sendEmail({
        to: order.customerEmail,
        subject: `Request received – Pending review (${order.publicId})`,
        html,
        text: `Hi ${order.customerName},\n\nYour booking request (${order.publicId}) has been received and is pending review.\n\nService: ${order.serviceType}\n\nI will be in touch within 1–2 business days.\n\nLauridsen Production`,
        orderId: order.id,
        template: 'BOOKING_CONFIRMATION'
    });
}

/**
 * Admin: new booking notification
 */
async function adminNewBooking(order) {
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">NEW BOOKING REQUEST</h2>
        <p><strong>Status:</strong> PENDING</p>
        <h3 style="letter-spacing:1px;margin-top:24px">Customer Details</h3>
        <p><strong>Name:</strong> ${order.customerName}<br><strong>Email:</strong> ${order.customerEmail}</p>
        <h3 style="letter-spacing:1px;margin-top:24px">Booking Details</h3>
        ${orderSummaryHtml(order)}
        <p style="margin-top:24px"><a href="${BASE_URL}/#admin" style="color:#d11a2a">Open Admin Console →</a></p>
    `);
    await sendEmail({
        to: ADMIN_EMAIL,
        subject: `New booking request – Pending (${order.publicId})`,
        html,
        text: `New booking received.\n\nOrder ID: ${order.publicId}\nCustomer: ${order.customerName} <${order.customerEmail}>\nService: ${order.serviceType}\nStatus: PENDING`,
        orderId: order.id,
        template: 'ADMIN_NEW_BOOKING'
    });
}

/**
 * Customer: order status changed
 */
async function statusChanged(order, fromStatus, toStatus, adminMessage) {
    const guidance = STATUS_GUIDANCE[toStatus] || '';
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">ORDER UPDATE</h2>
        <p>Hi ${order.customerName},</p>
        <p>Your order <strong>${order.publicId}</strong> status has been updated:</p>
        <p style="font-size:22px;text-align:center;padding:16px 0">
            <span style="color:#888">${label(fromStatus)}</span>
            &nbsp;→&nbsp;
            <strong style="color:#e0e0e0">${label(toStatus)}</strong>
        </p>
        ${adminMessage ? `<div style="background:#1a1a1a;border-left:3px solid #d11a2a;padding:12px 16px;margin:16px 0"><p style="margin:0;color:#ccc">${adminMessage}</p></div>` : ''}
        ${guidance ? `<p style="margin-top:16px;color:#aaa">${guidance}</p>` : ''}
    `);
    await sendEmail({
        to: order.customerEmail,
        subject: `Order update: ${label(toStatus)} (${order.publicId})`,
        html,
        text: `Hi ${order.customerName},\n\nOrder ${order.publicId} updated: ${label(fromStatus)} → ${label(toStatus)}\n\n${adminMessage || ''}\n\n${guidance}\n\nLauridsen Production`,
        orderId: order.id,
        template: 'STATUS_CHANGED'
    });
}

/**
 * Customer: Google Drive upload folder link shared
 */
async function driveLinkShared(order) {
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">FILE UPLOAD LINK</h2>
        <p>Hi ${order.customerName},</p>
        <p>Your Google Drive folder for order <strong>${order.publicId}</strong> is ready. Please upload your files there:</p>
        <p style="text-align:center;margin:24px 0">
            <a href="${order.driveLink}" style="background:#d11a2a;color:#fff;padding:14px 28px;text-decoration:none;letter-spacing:2px;font-family:monospace">
                OPEN DRIVE FOLDER →
            </a>
        </p>
        <h3 style="letter-spacing:1px">What to Upload</h3>
        <ul style="color:#aaa;line-height:1.8">
            <li>Stems — exported as consolidated WAV files (24-bit / 48 kHz)</li>
            <li>A reference mix or reference track (if applicable)</li>
            <li>A text file with any notes, tempo, key, and revision instructions</li>
            <li>All processing bypassed on individual tracks unless intentional</li>
        </ul>
        <p style="color:#888;margin-top:24px">If you have any questions about the upload, just reply to this email.</p>
    `);
    await sendEmail({
        to: order.customerEmail,
        subject: `File upload link for Order ${order.publicId}`,
        html,
        text: `Hi ${order.customerName},\n\nYour Google Drive upload folder for order ${order.publicId} is ready:\n${order.driveLink}\n\nPlease upload your stems (24-bit WAV), reference tracks, and notes.\n\nLauridsen Production`,
        orderId: order.id,
        template: 'DRIVE_LINK_SHARED'
    });
}

/**
 * Customer: order completed + review invite
 * NOTE: plaintext token is passed but NEVER logged or stored — only the hash is in DB
 */
async function reviewInvite(order, plaintextToken) {
    const reviewUrl = `${BASE_URL}/#review?token=${plaintextToken}`;
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">ORDER COMPLETED</h2>
        <p>Hi ${order.customerName},</p>
        <p>Your order <strong>${order.publicId}</strong> is complete. Thank you for working with me!</p>
        <p>If you're happy with the result, I'd really appreciate a short review. The link below is personal to you and expires in 30 days.</p>
        <p style="text-align:center;margin:24px 0">
            <a href="${reviewUrl}" style="background:#d11a2a;color:#fff;padding:14px 28px;text-decoration:none;letter-spacing:2px;font-family:monospace">
                LEAVE A REVIEW →
            </a>
        </p>
        <p style="color:#888;font-size:12px">This link can only be used once and will expire on ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}. Reviews are moderated before appearing on the site.</p>
    `);
    await sendEmail({
        to: order.customerEmail,
        subject: `Order completed – Leave a review (${order.publicId})`,
        html,
        // Do NOT include token in text body either — keep it out of logs
        text: `Hi ${order.customerName},\n\nYour order ${order.publicId} is complete! You can leave a review here:\n${reviewUrl}\n\nThis link expires in 30 days and can only be used once.\n\nThank you,\nLauridsen Production`,
        orderId: order.id,
        template: 'REVIEW_INVITE'
    });
}

/**
 * Admin: new review submitted and pending moderation
 */
async function adminNewReview(order, review) {
    const html = wrapEmail(`
        <h2 style="color:#d11a2a;letter-spacing:2px">NEW REVIEW SUBMITTED</h2>
        <p><strong>Order:</strong> ${order.publicId} — ${order.customerName}</p>
        <p><strong>Rating:</strong> ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)} (${review.rating}/5)</p>
        <p><strong>Name on review:</strong> ${review.displayName}</p>
        <p><strong>Comment:</strong> ${review.comment}</p>
        <p style="margin-top:24px"><a href="${BASE_URL}/#admin" style="color:#d11a2a">Moderate in Admin Console →</a></p>
    `);
    await sendEmail({
        to: ADMIN_EMAIL,
        subject: `New review pending moderation (${order.publicId})`,
        html,
        text: `New review submitted for order ${order.publicId}.\n\nRating: ${review.rating}/5\nName: ${review.displayName}\nComment: ${review.comment}\n\nPlease moderate in the admin console.`,
        orderId: order.id,
        template: 'ADMIN_NEW_REVIEW'
    });
}

function getAdapterInfo() {
    return transporter ? 'smtp' : 'dev_mailbox';
}

module.exports = {
    sendEmail,
    getAdapterInfo,
    bookingConfirmation,
    adminNewBooking,
    statusChanged,
    driveLinkShared,
    reviewInvite,
    adminNewReview,
};
