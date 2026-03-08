const rateLimit = require('express-rate-limit');

// Rate Limiting
// Set DISABLE_RATE_LIMIT=true in server/.env to bypass all limits during local testing
// Do not check DISABLE_RATE_LIMIT if NODE_ENV is production
const isProduction = process.env.NODE_ENV === 'production';
const RATE_LIMIT_DISABLED = !isProduction && process.env.DISABLE_RATE_LIMIT === 'true';

if (RATE_LIMIT_DISABLED) {
    console.warn('[WARN] DISABLE_RATE_LIMIT=true - all rate limiters bypassed. Do NOT use in production.');
}

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: RATE_LIMIT_DISABLED ? 10000 : 10,
    message: { error: 'Too many login attempts from this IP, please try again later.' },
    validate: { xForwardedForHeader: false }
});

const bookingLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: RATE_LIMIT_DISABLED ? 10000 : 5,
    message: { error: 'Too many booking requests from this IP, please try again in 15 minutes.' },
    validate: { xForwardedForHeader: false }
});

const reviewSubmitLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: RATE_LIMIT_DISABLED ? 10000 : 5,
    message: { error: 'Too many review submissions from this IP, please try again in 15 minutes.' },
    validate: { xForwardedForHeader: false }
});

module.exports = {
    authLimiter,
    bookingLimiter,
    reviewSubmitLimiter,
    RATE_LIMIT_DISABLED
};
