const { logger } = require('../utils/logger');
const crypto = require('crypto');
const sanitizeHtml = require('sanitize-html');
const prisma = require('../prisma');
const email = require('../services/email');
const { reviewSubmitSchema } = require('../validations');

// Helper: hash token for storage
function hashToken(plaintext) {
    return crypto.createHash('sha256').update(plaintext).digest('hex');
}

const rejectDirectSubmit = (req, res, _next) => {
    res.status(410).json({
        error: 'This endpoint is no longer available.',
        code: 'INVITE_ONLY',
        message: 'Reviews are by invitation only. You will receive a personal review link by email when your order is completed.',
    });
};

const getReviews = async (req, res, next) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(Math.max(1, parseInt(req.query.limit) || 10), 50);
        const skip = (page - 1) * limit;

        // Fetch only PUBLISHED reviews, include admin replies
        const reviews = await prisma.review.findMany({
            where: { status: 'published' },
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: { reply: true },
        });

        // Aggregations
        const aggregations = await prisma.review.aggregate({
            where: { status: 'published' },
            _avg: { rating: true },
            _count: { id: true }
        });

        // Rating Histogram (efficient group by)
        const histogramData = await prisma.review.groupBy({
            by: ['rating'],
            where: { status: 'published' },
            _count: { rating: true }
        });

        const histogram = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        histogramData.forEach(h => {
            histogram[h.rating] = h._count.rating;
        });

        // Do NOT expose email to public
        const sanitizedReviews = reviews.map(r => {
            const { email: _email, ipAddress: _ipAddress, ...safeReview } = r;
            return safeReview;
        });

        res.json({
            reviews: sanitizedReviews,
            meta: {
                totalItems: aggregations._count.id,
                currentPage: page,
                totalPages: Math.ceil(aggregations._count.id / limit),
            },
            aggregations: {
                averageRating: aggregations._avg.rating || 0,
                totalReviews: aggregations._count.id,
                histogram
            }
        });
    } catch (error) {
        next(error);
    }
};

const validateToken = async (req, res, next) => {
    const tokenHash = hashToken(req.params.token);
    try {
        const tokenRecord = await prisma.reviewToken.findUnique({
            where: { tokenHash },
            include: {
                order: { select: { publicId: true, status: true, customerName: true } }
            }
        });

        if (!tokenRecord) return res.status(404).json({ error: 'Invalid token', code: 'INVALID' });
        if (tokenRecord.usedAt) return res.status(410).json({ error: 'This review link has already been used.', code: 'USED' });
        if (new Date() > tokenRecord.expiresAt) return res.status(410).json({ error: 'This review link has expired.', code: 'EXPIRED' });
        if (tokenRecord.order.status !== 'COMPLETED') return res.status(400).json({ error: 'Order is not yet completed.', code: 'NOT_COMPLETED' });

        const existingReview = await prisma.review.findUnique({ where: { orderId: tokenRecord.orderId } });
        if (existingReview) return res.status(409).json({ error: 'A review already exists for this order.', code: 'ALREADY_REVIEWED' });

        // Return just enough for the UI â€” no customer email, no token info
        res.json({
            valid: true,
            orderId: tokenRecord.orderId,
            orderPublicId: tokenRecord.order.publicId,
            customerName: tokenRecord.order.customerName,
        });
    } catch (err) {
        next(err);
    }
};

const submitReview = async (req, res, _next) => {
    const parsed = reviewSubmitSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    const { token, rating, comment, displayName } = parsed.data;
    const tokenHash = hashToken(token);

    try {
        // Re-validate token inside a transaction for atomic single-use enforcement
        const result = await prisma.$transaction(async (tx) => {
            const tokenRecord = await tx.reviewToken.findUnique({
                where: { tokenHash },
                include: { order: true }
            });

            if (!tokenRecord) throw Object.assign(new Error('Invalid token'), { code: 'INVALID', status: 404 });
            if (tokenRecord.usedAt) throw Object.assign(new Error('Token already used'), { code: 'USED', status: 410 });
            if (new Date() > tokenRecord.expiresAt) throw Object.assign(new Error('Token expired'), { code: 'EXPIRED', status: 410 });
            if (tokenRecord.order.status !== 'COMPLETED') throw Object.assign(new Error('Order not completed'), { code: 'NOT_COMPLETED', status: 400 });

            const existing = await tx.review.findUnique({ where: { orderId: tokenRecord.orderId } });
            if (existing) throw Object.assign(new Error('Review already exists'), { code: 'ALREADY_REVIEWED', status: 409 });

            // Mark token used (atomic)
            await tx.reviewToken.update({
                where: { id: tokenRecord.id },
                data: { usedAt: new Date() }
            });

            // Create review linked to order
            const review = await tx.review.create({
                data: {
                    rating,
                    comment: sanitizeHtml(comment, { allowedTags: [], allowedAttributes: {} }),
                    displayName: sanitizeHtml(displayName, { allowedTags: [], allowedAttributes: {} }),
                    email: tokenRecord.order.customerEmail,
                    orderId: tokenRecord.orderId,
                    status: 'pending',
                }
            });

            return { review, order: tokenRecord.order };
        });

        // Fire admin notification
        try {
            logger.info(`[EMAIL_EVENT] ADMIN_NEW_REVIEW orderId=${result.order.publicId}`);
            await email.adminNewReview(result.order, result.review);
            logger.info(`[EMAIL_EVENT] ADMIN_NEW_REVIEW_SENT orderId=${result.order.publicId}`);
        } catch (emailErr) {
            logger.error(`[EMAIL_EVENT] ADMIN_NEW_REVIEW_FAILED orderId=${result.order.publicId} error=${emailErr.message}`);
        }

        res.status(201).json({ ok: true, message: 'Thank you! Your review is pending approval.' });
    } catch (err) {
        if (err.code) {
            return res.status(err.status || 400).json({ error: err.message, code: err.code });
        }
        throw err; // Forward to error handler
    }
};

module.exports = {
    rejectDirectSubmit,
    getReviews,
    validateToken,
    submitReview
};
