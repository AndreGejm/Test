const { logger } = require('../utils/logger');
const crypto = require('crypto');
const sanitizeHtml = require('sanitize-html');
const prisma = require('../prisma');
const email = require('../services/email');
const { logAudit } = require('../middlewares/auth');

const {
    replySchema,
    settingsSchema,
    workItemSchema,
    statusChangeSchema,
    driveLinkSchema,
    ALLOWED_TRANSITIONS
} = require('../validations');

function hashToken(plaintext) {
    return crypto.createHash('sha256').update(plaintext).digest('hex');
}

const getReviews = async (req, res, next) => {
    try {
        const statusFilter = req.query.status;
        const where = statusFilter ? { status: statusFilter } : {};

        const reviews = await prisma.review.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: { reply: true }
        });

        res.json({ reviews });
    } catch (error) {
        next(error);
    }
};

const updateReviewStatus = async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['published', 'rejected', 'deleted'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const review = await prisma.review.update({
            where: { id },
            data: { status }
        });
        res.json({ message: `Review marked as ${status}`, review });
    } catch (error) {
        next(error);
    }
};

const replyToReview = async (req, res, next) => {
    const { id } = req.params;

    try {
        const data = replySchema.parse(req.body);

        // Sanitize reply content
        const safeReply = sanitizeHtml(data.content, { allowedTags: [], allowedAttributes: {} });

        // Upsert equivalent: find if exists, update vs create
        const reply = await prisma.adminReply.upsert({
            where: { reviewId: id },
            update: { content: safeReply },
            create: { content: safeReply, reviewId: id }
        });

        res.json({ message: 'Reply saved', reply });
    } catch (error) {
        next(error);
    }
};

const deleteReview = async (req, res, next) => {
    const { id } = req.params;
    try {
        // Must delete reply first due to foreign key constraints if cascading deletes are not enabled
        await prisma.adminReply.deleteMany({ where: { reviewId: id } });
        await prisma.review.delete({ where: { id } });

        await logAudit('HARD_DELETE_REVIEW', req.admin.email, id);
        res.json({ message: 'Review hard deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const updateSettings = async (req, res, next) => {
    try {
        const data = settingsSchema.parse(req.body);

        // Strict URL Validation for specific providers to prevent trivial XSS
        if (data.calendlyUrl && !data.calendlyUrl.startsWith('https://calendly.com/')) {
            return res.status(400).json({ error: 'Invalid Calendly URL' });
        }

        const newVersion = await prisma.siteSettingVersion.create({
            data: {
                payload: JSON.stringify(data),
                changedBy: req.admin.email
            }
        });

        await logAudit('UPDATE_SETTINGS', req.admin.email, String(newVersion.version));
        res.json({ message: 'Settings saved successfully', version: newVersion.version });
    } catch (error) {
        next(error);
    }
};

const revertSettings = async (req, res, next) => {
    const { version } = req.body;
    try {
        const targetVersion = await prisma.siteSettingVersion.findUnique({ where: { version } });
        if (!targetVersion) return res.status(404).json({ error: 'Config version not found' });

        // Create a new version duplicating the old payload
        const newVersion = await prisma.siteSettingVersion.create({
            data: {
                payload: targetVersion.payload,
                changedBy: req.admin.email
            }
        });
        await logAudit('REVERT_SETTINGS', req.admin.email, String(version));
        res.json({ message: 'Reverted successfully', version: newVersion.version });
    } catch (error) {
        next(error);
    }
};

const addWorkItem = async (req, res, next) => {
    try {
        const data = workItemSchema.parse(req.body);

        const urlValidation = {
            'youtube': (url) => url.startsWith('https://www.youtube.com') || url.startsWith('https://youtu.be'),
            'bandcamp': (url) => url.includes('bandcamp.com'),
            'soundcloud': (url) => url.startsWith('https://soundcloud.com') || url.startsWith('https://w.soundcloud.com'),
            'spotify': (url) => url.startsWith('https://open.spotify.com'),
            'tidal': (url) => url.startsWith('https://tidal.com') || url.startsWith('https://listen.tidal.com'),
        };

        if (!urlValidation[data.provider]?.(data.embedUrl)) {
            return res.status(400).json({ error: `You selected "${data.provider}" but provided an invalid URL. Make sure the dropdown matches the URL.` });
        }

        const work = await prisma.workItem.create({ data });
        await logAudit('ADD_WORK_ITEM', req.admin.email, work.id);
        res.status(201).json({ message: 'Work item created', work });
    } catch (error) {
        next(error);
    }
};

const updateWorkItem = async (req, res, _next) => {
    try {
        const data = workItemSchema.parse(req.body);

        const urlValidation = {
            'youtube': (url) => url.startsWith('https://www.youtube.com') || url.startsWith('https://youtu.be'),
            'bandcamp': (url) => url.includes('bandcamp.com'),
            'soundcloud': (url) => url.startsWith('https://soundcloud.com') || url.startsWith('https://w.soundcloud.com'),
            'spotify': (url) => url.startsWith('https://open.spotify.com'),
            'tidal': (url) => url.startsWith('https://tidal.com') || url.startsWith('https://listen.tidal.com'),
        };

        if (!urlValidation[data.provider]?.(data.embedUrl)) {
            return res.status(400).json({ error: `You selected "${data.provider}" but provided an invalid URL. Make sure the dropdown matches the URL.` });
        }

        const { id } = req.params;
        const work = await prisma.workItem.update({
            where: { id },
            data
        });
        await logAudit('UPDATE_WORK_ITEM', req.admin.email, id);
        res.json({ message: 'Work item updated', work });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteWorkItem = async (req, res, _next) => {
    const { id } = req.params;
    try {
        await prisma.workItem.delete({ where: { id } });
        await logAudit('DELETE_WORK_ITEM', req.admin.email, id);
        res.json({ message: 'Work item deleted' });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const exportReviews = async (req, res, _next) => {
    try {
        const reviews = await prisma.review.findMany({ include: { reply: true } });
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename="reviews_export.json"');
        res.send(JSON.stringify(reviews, null, 2));
    } catch {
        res.status(500).json({ error: 'Export failed' });
    }
};

const healthCheck = async (req, res, next) => {
    try {
        const dbConnected = await prisma.$queryRaw`SELECT 1`;

        let settingsWarning = null;
        const latestSetting = await prisma.siteSettingVersion.findFirst({ orderBy: { version: 'desc' } });
        if (latestSetting) {
            const parsed = JSON.parse(latestSetting.payload);
            if (parsed.bookingEnabled && !parsed.calendlyUrl) {
                settingsWarning = 'Booking is enabled but no Calendly URL is provided.';
            }
        }

        res.json({
            status: 'ok',
            database: !!dbConnected,
            securityHeaders: 'enabled',
            authGuard: process.env.GOOGLE_CLIENT_ID ? 'configured' : 'missing',
            version: '1.0.0',
            settingsWarning
        });
    } catch (error) {
        next(error);
    }
};

const getOrders = async (req, res, _next) => {
    const { status, search } = req.query;
    const where = {};
    if (status) where.status = status;
    if (search) {
        where.OR = [
            { customerEmail: { contains: search } },
            { customerName: { contains: search } },
            { publicId: { contains: search } },
        ];
    }
    try {
        const orders = await prisma.order.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true, publicId: true, customerName: true, customerEmail: true,
                serviceType: true, status: true, driveLink: true, createdAt: true,
            }
        });
        res.json(orders);
    } catch {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

const getOrderDetail = async (req, res, _next) => {
    try {
        const order = await prisma.order.findFirst({
            where: { OR: [{ id: req.params.id }, { publicId: req.params.id }] },
            include: {
                statusHistory: { orderBy: { createdAt: 'asc' } },
                reviewToken: { select: { usedAt: true, expiresAt: true } },
                review: { select: { id: true, status: true, rating: true } },
            }
        });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};

const updateOrderStatus = async (req, res, next) => {
    const parsed = statusChangeSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    const { status: newStatus, message: adminMessage, force } = parsed.data;

    try {
        const order = await prisma.order.findFirst({
            where: { OR: [{ id: req.params.id }, { publicId: req.params.id }] }
        });
        if (!order) return res.status(404).json({ error: 'Order not found' });

        const allowedNext = ALLOWED_TRANSITIONS[order.status] || [];
        if (!force && !allowedNext.includes(newStatus)) {
            return res.status(409).json({
                error: `Invalid transition: ${order.status} -> ${newStatus}`,
                allowed: allowedNext
            });
        }

        const oldStatus = order.status;

        // Persist state first — email failure must not corrupt state
        const updated = await prisma.order.update({
            where: { id: order.id },
            data: { status: newStatus }
        });

        await prisma.orderStatusHistory.create({
            data: {
                orderId: order.id,
                fromStatus: oldStatus,
                toStatus: newStatus,
                changedBy: req.admin.email,
                message: adminMessage || null,
            }
        });

        await prisma.auditLog.create({
            data: {
                action: 'CHANGE_ORDER_STATUS',
                entityId: order.id,
                adminEmail: req.admin.email,
                details: JSON.stringify({ from: oldStatus, to: newStatus, force: !!force })
            }
        });

        // Send customer notification email — failure is logged, not thrown
        let emailWarning = null;
        try {
            logger.info(`[EMAIL_EVENT] STATUS_CHANGED orderId=${updated.publicId} newStatus=${newStatus}`);
            await email.statusChanged(updated, oldStatus, newStatus, adminMessage);
            logger.info(`[EMAIL_EVENT] STATUS_CHANGED_SENT orderId=${updated.publicId}`);

            if (newStatus === 'COMPLETED') {
                try {
                    const crypto = require('crypto');
                    const token = crypto.randomBytes(32).toString('hex');
                    const hashed = hashToken(token);

                    await prisma.reviewToken.upsert({
                        where: { orderId: updated.id },
                        update: {
                            tokenHash: hashed,
                            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        },
                        create: {
                            orderId: updated.id,
                            tokenHash: hashed,
                            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        }
                    });

                    logger.info(`[EMAIL_EVENT] REVIEW_INVITE orderId=${updated.publicId}`);
                    await email.reviewInvite(updated, token);
                    logger.info(`[EMAIL_EVENT] REVIEW_INVITE_SENT orderId=${updated.publicId}`);
                } catch (emailErr) {
                    logger.error(`[EMAIL_EVENT] REVIEW_INVITE_FAILED orderId=${updated.publicId} error=${emailErr.message}`);
                    emailWarning = 'Order status updated, but review invite email failed to send.';
                }
            }
        } catch (emailErr) {
            logger.error(`[EMAIL_EVENT] STATUS_CHANGED_FAILED orderId=${updated.publicId} error=${emailErr.message}`);
            emailWarning = 'Order status updated, but notification email failed to send.';
        }

        res.json({
            message: `Order status updated to ${newStatus}`,
            warning: emailWarning,
            order: updated
        });
    } catch (err) {
        next(err);
    }
};

const updateOrderDriveLink = async (req, res, next) => {
    const parsed = driveLinkSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    try {
        const order = await prisma.order.findFirst({
            where: { OR: [{ id: req.params.id }, { publicId: req.params.id }] }
        });
        if (!order) return res.status(404).json({ error: 'Order not found' });

        const updated = await prisma.order.update({
            where: { id: order.id },
            data: { driveLink: parsed.data.driveLink }
        });

        await prisma.auditLog.create({
            data: {
                action: 'SET_DRIVE_LINK',
                entityId: order.id,
                adminEmail: req.admin.email,
                details: JSON.stringify({ driveLink: parsed.data.driveLink })
            }
        });

        let emailWarning = null;
        try {
            logger.info(`[EMAIL_EVENT] DRIVE_LINK orderId=${updated.publicId}`);
            await email.driveLinkShared(updated);
            logger.info(`[EMAIL_EVENT] DRIVE_LINK_SENT orderId=${updated.publicId}`);
        } catch (emailErr) {
            logger.error(`[EMAIL_EVENT] DRIVE_LINK_FAILED orderId=${updated.publicId} error=${emailErr.message}`);
            emailWarning = 'Drive link updated, but notification email failed to send.';
        }

        res.json({
            message: 'Drive link updated',
            warning: emailWarning,
            order: updated
        });
    } catch (err) {
        next(err);
    }
};

const sendOrderMessage = async (req, res, next) => {
    const { message: adminMessage } = req.body;
    if (!adminMessage || typeof adminMessage !== 'string' || adminMessage.trim().length < 1) {
        return res.status(400).json({ error: 'Message cannot be empty' });
    }
    if (adminMessage.trim().length > 2000) {
        return res.status(400).json({ error: 'Message must be 2000 characters or less' });
    }
    const sanitized = sanitizeHtml(adminMessage, { allowedTags: [], allowedAttributes: {} });
    try {
        const order = await prisma.order.findFirst({
            where: { OR: [{ id: req.params.id }, { publicId: req.params.id }] }
        });
        if (!order) return res.status(404).json({ error: 'Order not found' });

        // Persist first — email failure must not lose the audit record
        await prisma.orderStatusHistory.create({
            data: {
                orderId: order.id,
                fromStatus: order.status,
                toStatus: order.status,
                changedBy: req.admin.email,
                message: `[Admin message] ${sanitized}`,
            }
        });

        let emailWarning = null;
        try {
            logger.info(`[EMAIL_EVENT] ADMIN_MESSAGE orderId=${order.publicId}`);
            await email.statusChanged(order, order.status, order.status, sanitized);
            logger.info(`[EMAIL_EVENT] ADMIN_MESSAGE_SENT orderId=${order.publicId}`);
        } catch (emailErr) {
            logger.error(`[EMAIL_EVENT] ADMIN_MESSAGE_FAILED orderId=${order.publicId} error=${emailErr.message}`);
            emailWarning = 'Message saved, but notification email failed to send.';
        }

        res.json({
            message: 'Admin message sent',
            warning: emailWarning,
            order
        });
    } catch (err) {
        next(err);
    }
};

const getMailbox = async (req, res, _next) => {
    try {
        const emails = await prisma.devEmail.findMany({
            orderBy: { sentAt: 'desc' },
            take: 100,
        });
        res.json(emails);
    } catch {
        res.status(500).json({ error: 'Failed to fetch mailbox' });
    }
};

const deleteMailboxEmail = async (req, res, _next) => {
    try {
        await prisma.devEmail.delete({ where: { id: req.params.id } });
        res.json({ ok: true });
    } catch {
        res.status(404).json({ error: 'Email not found' });
    }
};

module.exports = {
    getReviews,
    updateReviewStatus,
    replyToReview,
    deleteReview,
    updateSettings,
    revertSettings,
    addWorkItem,
    updateWorkItem,
    deleteWorkItem,
    exportReviews,
    healthCheck,
    getOrders,
    getOrderDetail,
    updateOrderStatus,
    updateOrderDriveLink,
    sendOrderMessage,
    getMailbox,
    deleteMailboxEmail
};
