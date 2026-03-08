const { logger } = require('../utils/logger');
const sanitizeHtml = require('sanitize-html');
const prisma = require('../prisma');
const email = require('../services/email');
const { bookingSchema } = require('../validations');

// Helper: generate public Order ID (ORD-YYYYMMDD-XXXX)
async function generatePublicOrderId() {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const prefix = `ORD-${dateStr}-`;
    const count = await prisma.order.count({
        where: { publicId: { startsWith: prefix } }
    });
    const seq = String(count + 1).padStart(4, '0');
    return `${prefix}${seq}`;
}

const createBooking = async (req, res, next) => {
    const parsed = bookingSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    const data = parsed.data;
    const clean = {
        customerName: sanitizeHtml(data.name, { allowedTags: [], allowedAttributes: {} }),
        customerEmail: data.email.toLowerCase().trim(),
        serviceType: data.serviceType,
        genre: data.genre ? sanitizeHtml(data.genre, { allowedTags: [], allowedAttributes: {} }) : null,
        message: data.message ? sanitizeHtml(data.message, { allowedTags: [], allowedAttributes: {} }) : null,
        numSongs: data.numSongs ?? null,
        songLength: data.songLength || null,
        numStems: data.numStems ?? null,
    };

    try {
        let order = null;
        for (let attempt = 0; attempt < 5; attempt++) {
            const publicId = await generatePublicOrderId();
            try {
                order = await prisma.order.create({
                    data: { publicId, ...clean }
                });
                break;
            } catch (err) {
                if (err.code === 'P2002' && err.meta?.target?.includes('publicId')) {
                    continue;
                }
                throw err;
            }
        }

        if (!order) {
            throw new Error('Failed to generate unique public ID after 5 attempts.');
        }

        try {
            await email.bookingConfirmation(order);
            logger.info(`[EMAIL_EVENT] BOOKING_CONFIRM orderId=${order.publicId}`);
            logger.info(`[EMAIL_EVENT] BOOKING_CONFIRM_SENT orderId=${order.publicId}`);
        } catch (e) {
            logger.error(`[EMAIL_EVENT] BOOKING_CONFIRM_FAILED orderId=${order.publicId} error=${e.message}`);
        }

        try {
            await email.adminNewBooking(order);
            logger.info(`[EMAIL_EVENT] ADMIN_NEW_BOOKING orderId=${order.publicId}`);
            logger.info(`[EMAIL_EVENT] ADMIN_NEW_BOOKING_SENT orderId=${order.publicId}`);
        } catch (e) {
            logger.error(`[EMAIL_EVENT] ADMIN_NEW_BOOKING_FAILED orderId=${order.publicId} error=${e.message}`);
        }

        await prisma.auditLog.create({
            data: { action: 'CREATE_ORDER', entityId: order.id, adminEmail: 'public', details: JSON.stringify({ publicId: order.publicId }) }
        });

        res.status(201).json({
            publicId: order.publicId,
            serviceType: order.serviceType,
            message: 'Your booking request has been received and is pending review.'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createBooking
};
