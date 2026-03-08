const { logger } = require('../utils/logger');

/**
 * Global Error Handler Middleware
 * 
 * Catches all unhandled errors and rejected promises in Express 5.
 * Returns structured JSON without leaking stack traces in production.
 */
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    // Use our centralized logger, passing the error inside context for redaction parsing
    logger.error(`[ERROR] ${req.method} ${req.url}`, { err });

    const isProduction = process.env.NODE_ENV === 'production';
    const response = {
        error: isProduction ? 'Internal Server Error' : err.message,
    };

    if (!isProduction && err.stack) {
        response.stack = err.stack;
    }

    res.status(err.status || 500).json(response);
}

module.exports = errorHandler;
