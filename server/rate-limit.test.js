const test = require('node:test');
const assert = require('node:assert');
const http = require('http');
const express = require('express');
const rateLimit = require('express-rate-limit');

/**
 * Rate Limiting Tests
 *
 * These tests use a standalone Express app with fresh rate limiter instances
 * to avoid interference from:
 *   - DISABLE_RATE_LIMIT=true in .env (loaded by dotenv in the main app)
 *   - Shared in-memory rate limiter stores across test files
 */

test('Rate Limiting & Proxy Spoofing Tests', async (t) => {
    let server;
    let url;

    // Build a minimal, isolated Express app with known rate limits
    const app = express();
    app.set('trust proxy', 'loopback');
    app.use(express.json());

    const testLimiter = rateLimit({
        windowMs: 60 * 1000,
        max: 3,
        message: { error: 'Too many requests from this IP, please try again later.' },
        validate: { xForwardedForHeader: false }
    });

    app.post('/test-endpoint', testLimiter, (req, res) => {
        res.json({ ok: true });
    });

    t.before(async () => {
        await new Promise(resolve => {
            server = http.createServer(app);
            server.listen(0, '127.0.0.1', () => {
                const port = server.address().port;
                url = `http://127.0.0.1:${port}`;
                resolve();
            });
        });
    });

    t.after(() => {
        if (server) server.close();
    });

    await t.test('Rate limiter should return 429 after exceeding max requests', async () => {
        const testIp = '198.51.100.10';

        // Send 3 requests — all should be allowed (max: 3)
        for (let i = 0; i < 3; i++) {
            const res = await fetch(`${url}/test-endpoint`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Forwarded-For': testIp
                }
            });
            assert.strictEqual(res.status, 200, `Request ${i + 1} should succeed`);
        }

        // 4th request should be blocked
        const resBlocked = await fetch(`${url}/test-endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': testIp
            }
        });
        assert.strictEqual(resBlocked.status, 429, '4th request should be rate-limited');
        const data = await resBlocked.json();
        assert.match(data.error, /Too many requests/);
    });

    await t.test('X-Forwarded-For from trusted proxy gives each IP its own rate limit bucket', async () => {
        // Use a unique IP to exhaust the rate limit
        const exhaustedIp = '198.51.100.20';
        const freshIp = '198.51.100.21';

        // Exhaust the limit for exhaustedIp
        for (let i = 0; i < 3; i++) {
            await fetch(`${url}/test-endpoint`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Forwarded-For': exhaustedIp
                }
            });
        }

        // Next request from exhaustedIp should be blocked
        const resBlocked = await fetch(`${url}/test-endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': exhaustedIp
            }
        });
        assert.strictEqual(resBlocked.status, 429, 'Exhausted IP should get 429');

        // Request from freshIp should NOT be blocked — proves X-Forwarded-For is trusted
        // and each IP gets its own rate limit bucket
        const resFresh = await fetch(`${url}/test-endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': freshIp
            }
        });
        assert.strictEqual(resFresh.status, 200, 'Fresh IP from trusted proxy should get a new bucket');
    });

    await t.test('Express trust proxy is configured to loopback only', async () => {
        // Verify the actual production app has the correct trust proxy setting
        process.env.SMTP_PASS = '';
        const productionApp = require('./index.js');
        assert.strictEqual(productionApp.get('trust proxy'), 'loopback');
    });
});
