const test = require('node:test');
const assert = require('node:assert');
const { logger, requestCorrelationMiddleware } = require('./utils/logger');
const { AsyncLocalStorage } = require('async_hooks');

test('Observability & Logging Contract Tests', async (t) => {
    let capturedLogs = [];
    let originalConsoleInfo;
    let originalConsoleWarn;
    let originalConsoleError;

    t.before(() => {
        originalConsoleInfo = console.log;
        originalConsoleWarn = console.warn;
        originalConsoleError = console.error;

        // Hijack stdout/stderr for testing log emissions
        console.log = (msg) => capturedLogs.push(msg);
        console.warn = (msg) => capturedLogs.push(msg);
        console.error = (msg) => capturedLogs.push(msg);
    });

    t.afterEach(() => {
        capturedLogs = []; // Reset after every subtest
    });

    t.after(() => {
        console.log = originalConsoleInfo;
        console.warn = originalConsoleWarn;
        console.error = originalConsoleError;
    });

    await t.test('1. Logs should be structured JSON containing timestamp, level, message', () => {
        logger.info('Test generic log', { user: 'test' });

        assert.strictEqual(capturedLogs.length, 1);
        const parsed = JSON.parse(capturedLogs[0]);

        assert.strictEqual(parsed.level, 'INFO');
        assert.strictEqual(parsed.message, 'Test generic log');
        assert.ok(parsed.timestamp, 'Missing timestamp');
        assert.deepStrictEqual(parsed.context, { user: 'test' });
    });

    await t.test('2. Sensitive fields must be deeply redacted (tokens, passwords, CSRF)', () => {
        const payload = {
            body: {
                password: 'superSecretPassword',
                csrfToken: '1234abcd',
                safeData: 'hello'
            },
            headers: {
                Authorization: 'Bearer my-jwt-token',
                'X-ReAuth-Token': 'reauth-123'
            }
        };

        logger.warn('Auth attempt', payload);

        const parsed = JSON.parse(capturedLogs[0]);
        // Simple strings like passwords get fully redacted
        assert.strictEqual(parsed.context.body.password, '[REDACTED]', 'Password not redacted');
        assert.strictEqual(parsed.context.body.csrfToken, '[REDACTED]', 'CSRF not redacted');
        assert.strictEqual(parsed.context.headers['X-ReAuth-Token'], '[REDACTED]', 'ReAuth token not redacted');

        // Long strings get truncated with [REDACTED] suffix
        assert.ok(parsed.context.headers.Authorization.includes('[REDACTED]'), 'Auth header not redacted');
        assert.ok(parsed.context.headers.Authorization.startsWith('Bear'), 'Auth header truncation incorrect');

        assert.strictEqual(parsed.context.body.safeData, 'hello', 'Safe data should not be altered');
    });

    await t.test('3. Request Correlation middleware injects req_id into logs automatically', async () => {
        // Mock a request object
        const req = { method: 'GET', url: '/test' };
        const res = { setHeader: () => { } };
        const next = () => {
            // Inside the middleware context, any log should auto-attach the req_id
            logger.info('Action inside request');
            logger.error('Error inside request');
        };

        requestCorrelationMiddleware(req, res, next);

        assert.strictEqual(capturedLogs.length, 2);

        const infoLog = JSON.parse(capturedLogs[0]);
        const errorLog = JSON.parse(capturedLogs[1]);

        assert.ok(infoLog.req_id, 'Missing req_id in INFO log');
        assert.strictEqual(infoLog.req_id, errorLog.req_id, 'req_id must correlate across logs within the same ALC store');
        assert.ok(infoLog.req_id.startsWith('req-'), 'req_id must follow convention');
    });

    await t.test('4. Error objects passed in context are parsed and stacked safely', () => {
        const testError = new Error('Database disconnected');

        logger.error('DB Failure', { err: testError });

        const parsed = JSON.parse(capturedLogs[0]);
        assert.strictEqual(parsed.context.error_msg, 'Database disconnected');
        assert.ok(parsed.context.error_stack, 'Missing error stack');
        assert.strictEqual(parsed.context.err, undefined, 'Raw err object should be deleted/flattened');
    });
});
