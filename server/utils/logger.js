const { randomUUID } = require('crypto');
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const SENSITIVE_KEYS = new Set([
    'token', 'password', 'csrftoken', 'x-reauth-token', 'authorization', 'cookie', 'set-cookie', 'htmlbody', 'textbody'
]);

// Helper for deep cloning and redacting objects (simplistic)
function redact(obj) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map(item => redact(item));
    }

    const redactedObj = {};
    for (const key of Object.keys(obj)) {
        if (SENSITIVE_KEYS.has(key.toLowerCase())) {
            // Truncate only Authorization headers for debugging (Bearer ...[REDACTED])
            // Fully redact passwords, CSRF tokens, and ReAuth tokens
            if (key.toLowerCase() === 'authorization' && typeof obj[key] === 'string' && obj[key].length > 8) {
                redactedObj[key] = obj[key].substring(0, 4) + '...[REDACTED]';
            } else {
                redactedObj[key] = '[REDACTED]';
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            redactedObj[key] = redact(obj[key]);
        } else {
            redactedObj[key] = obj[key];
        }
    }
    return redactedObj;
}

const formatLog = (level, message, context = {}) => {
    const store = asyncLocalStorage.getStore();
    const req_id = store ? store.get('req_id') : undefined;

    // Extract raw error before redaction (Error props are non-enumerable and vanish in redact)
    let rawErr = context?.err;

    let safeContext = Object.keys(context).length > 0 ? redact(context) : undefined;

    if (safeContext && rawErr) {
        safeContext.error_msg = rawErr.message || rawErr.toString();
        if (process.env.NODE_ENV !== 'production' || level === 'FATAL') {
            safeContext.error_stack = rawErr.stack;
        }
        delete safeContext.err;
    }

    const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        req_id,
        message,
        context: safeContext
    };

    return JSON.stringify(logEntry);
};

const logger = {
    info: (message, context) => console.log(formatLog('INFO', message, context)),
    warn: (message, context) => console.warn(formatLog('WARN', message, context)),
    error: (message, context) => console.error(formatLog('ERROR', message, context)),
    fatal: (message, context) => console.error(formatLog('FATAL', message, context)),
};

const requestCorrelationMiddleware = (req, res, next) => {
    const req_id = `req-${randomUUID()}`;
    req.id = req_id;
    res.setHeader('X-Request-ID', req_id);

    const store = new Map();
    store.set('req_id', req_id);

    asyncLocalStorage.run(store, () => {
        next();
    });
};

module.exports = {
    logger,
    requestCorrelationMiddleware,
    asyncLocalStorage
};
