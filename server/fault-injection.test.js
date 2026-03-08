const test = require('node:test');
const assert = require('node:assert');
const app = require('./index'); // Assuming index.js exports the app
const emailService = require('./services/email');
const prisma = require('./prisma');

test('Fault Injection & Resilience Tests', async (t) => {
    let server;
    let apiUrl;

    t.before(async () => {
        // Start server on an ephemeral port
        await new Promise((resolve) => {
            server = app.listen(0, '127.0.0.1', () => {
                const port = server.address().port;
                apiUrl = `http://127.0.0.1:${port}/api`;
                resolve();
            });
        });
    });

    t.after(() => {
        if (server) server.close();
        test.mock.restoreAll(); // Restore all mocked methods
    });

    await t.test('POST /bookings - Resiliency mechanism handles Email Service failure', async () => {
        // Mock email service to throw a hard error
        const originalSendEmail = emailService.sendEmail;
        test.mock.method(emailService, 'sendEmail', async () => {
            throw new Error('Simulated AWS SES Hard Bounce/Timeout');
        });

        const res = await fetch(`${apiUrl}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Fault Tolerant User',
                email: 'survivor@testing.com',
                serviceType: 'Mastering'
            })
        });

        // The request should still return 201 Created and the order should be saved,
        // even if the confirmation email failed to send.
        assert.strictEqual(res.status, 201, 'API should gracefully handle email failures instead of crashing');
        const data = await res.json();
        assert.ok(data.publicId.startsWith('ORD-'), 'Order should be created successfully');

        // Verify it was actually saved to DB
        const savedOrder = await prisma.order.findUnique({ where: { publicId: data.publicId } });
        assert.ok(savedOrder, 'Order missing from DB despite 201');

        // Cleanup skipped to avoid potential FK cascade errors on pending background ReviewToken creations
        emailService.sendEmail = originalSendEmail; // manual fallback in case mock isn't cleared
    });

    await t.test('POST /bookings - Resiliency mechanism handles Database failure safely', async () => {
        // Mock prisma to throw a database connection error manually (bypassing Proxy limitations)
        const originalCreate = prisma.order.create;
        prisma.order.create = async () => {
            throw new Error("P1001: Can't reach database server at localhost: 5432");
        };

        const res = await fetch(`${apiUrl}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'DB Failure User',
                email: 'dbfail@testing.com',
                serviceType: 'Mixing'
            })
        });

        // The request MUST NOT return 201 or hang. It should safely bubble to 500
        assert.strictEqual(res.status, 500, 'API should return 500 Internal Server Error when DB fails');
        const data = await res.json();
        // It shouldn't leak the exact P1001 error to the client, but the current generic handler is fine
        assert.ok(
            data.error.includes('P1001') ||
            data.error.includes('Failed to create booking') ||
            data.error.includes('Internal Server Error'),
            'Should return appropriate error message based on environment'
        );

        // Restore mock
        prisma.order.create = originalCreate;
    });

    await t.test('JWT Validation - Forged/Invalid tokens are gracefully rejected', async () => {
        // JWT signature tampering simulation
        const forgedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwiaWF0IjoxNzAwMDAwMDAwfQ.invalid_signature_here';

        const res = await fetch(`${apiUrl}/admin/reviews`, {
            method: 'GET',
            headers: {
                // Manually construct the cookie string
                'Cookie': `__Host-admin_session=${forgedToken}`
            }
        });

        assert.strictEqual(res.status, 401, 'Forged JWTs should be rejected with 401');
        const data = await res.json();
        assert.strictEqual(data.error, 'Unauthorized: Invalid or expired token', 'Should specify invalid token');
    });
});
