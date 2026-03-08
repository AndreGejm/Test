const crypto = require('crypto');

/**
 * CSRF Protection Middleware using Double-Submit Cookie pattern.
 * The client must read the `csrf_token` cookie and send it back in the `X-CSRF-Token` header for state-changing endpoints.
 */

// Generate a new CSRF token and attach it to both a cookie and the response body
function generateCsrfToken(req, res) {
    const token = crypto.randomBytes(32).toString('hex');

    // Cookie is intentionally NOT HttpOnly so the React app can read it and attach it to the header
    // __Host- prefix enforces Secure, Path=/, and prevents subdomain overwrite
    res.cookie('__Host-csrf_token', token, {
        httpOnly: false,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });

    return token;
}

// Middleware to enforce CSRF on POST/PUT/PATCH/DELETE
function requireCsrf(req, res, next) {
    // Skip CSRF checks for safe methods
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
        return next();
    }

    const headerToken = req.headers['x-csrf-token'];
    const cookieToken = req.cookies['__Host-csrf_token'];

    // If either is missing, or they do not strictly match, reject
    if (!headerToken || !cookieToken || headerToken !== cookieToken) {
        return res.status(403).json({ error: 'Forbidden: Invalid or missing CSRF token' });
    }

    next();
}

module.exports = {
    generateCsrfToken,
    requireCsrf
};
