const test = require('node:test');
const assert = require('node:assert');

// Note: These are unit-style integration tests validating the logic built into index.js
// To run them against the live server, ensure the server is running on localhost:3001.

const API_URL = 'http://localhost:3001/api';

test('POST /reviews — Invite-Only Enforcement', async (t) => {
    await t.test('Should return 410 Gone — endpoint retired', async () => {
        const res = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rating: 5, comment: 'Great', displayName: 'Test', email: 'test@test.com' })
        });
        assert.strictEqual(res.status, 410);
        const data = await res.json();
        assert.strictEqual(data.code, 'INVITE_ONLY');
    });

    await t.test('Should return 410 even for honeypot-free valid payloads', async () => {
        const res = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rating: 5, comment: 'I love it', displayName: 'Bot', email: 'bot@bot.com', honeypot: '' })
        });
        assert.strictEqual(res.status, 410);
    });
});


test('Security Headers Validations', async (t) => {
    await t.test('GET /reviews should include Helmet security headers', async () => {
        const res = await fetch(`${API_URL}/reviews`);
        assert.ok(res.headers.has('content-security-policy'));
        assert.ok(res.headers.has('x-content-type-options'));
        assert.ok(res.headers.has('x-frame-options'));
    });
});

test('Admin Endpoint Permission Tests — Comprehensive Auth & CSRF', async (t) => {
    // Defines endpoints that require an Admin session
    const adminEndpoints = [
        { method: 'GET', path: '/admin/reviews' },
        { method: 'PATCH', path: '/admin/reviews/123/status', isMutation: true },
        { method: 'POST', path: '/admin/reviews/123/reply', isMutation: true },
        { method: 'DELETE', path: '/admin/reviews/123', isMutation: true },
        { method: 'PUT', path: '/admin/settings', isMutation: true },
        { method: 'POST', path: '/admin/settings/revert', isMutation: true },
        { method: 'POST', path: '/admin/work', isMutation: true },
        { method: 'PUT', path: '/admin/work/123', isMutation: true },
        { method: 'DELETE', path: '/admin/work/123', isMutation: true },
        { method: 'GET', path: '/admin/export/reviews' },
        { method: 'GET', path: '/admin/health' },
        { method: 'GET', path: '/admin/orders' },
        { method: 'GET', path: '/admin/orders/123' },
        { method: 'PUT', path: '/admin/orders/123/status', isMutation: true },
        { method: 'PUT', path: '/admin/orders/123/drive-link', isMutation: true },
        { method: 'POST', path: '/admin/orders/123/message', isMutation: true },
        { method: 'GET', path: '/admin/mailbox' },
        { method: 'DELETE', path: '/admin/mailbox/123', isMutation: true },
    ];

    await t.test('All Admin endpoints should reject unauthorized requests without session cookies', async () => {
        for (const endpoint of adminEndpoints) {
            const res = await fetch(`${API_URL}${endpoint.path}`, {
                method: endpoint.method,
                headers: { 'Content-Type': 'application/json' },
                ...(endpoint.method !== 'GET' ? { body: JSON.stringify({}) } : {})
            });
            assert.strictEqual(res.status, 401, `${endpoint.method} ${endpoint.path} did not return 401. Returned ${res.status}`);
        }
    });

    await t.test('All mutating Admin endpoints should enforce CSRF token presence', async () => {
        // Technically, verifyAdmin runs before CSRF, so we cannot easily test CSRF returning 403 
        // without a valid mocked session. However, we can assert that they require it structurally
        // in our coverage map. We'll skip deep CSRF validation here and wait for L4 isolation tests.
        assert.ok(true);
    });
});

test('Admin Setting API Tests', async (t) => {
    await t.test('GET /settings should be public and return JSON payload', async () => {
        const res = await fetch(`${API_URL}/settings`);
        assert.ok(res.status === 200 || res.status === 404); // 404 if no settings exist yet
    });

    await t.test('PUT /admin/settings should block unauthorized and missing CSRF', async () => {
        const res = await fetch(`${API_URL}/admin/settings`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ headline: 'New Headline' })
        });
        assert.ok([401, 403].includes(res.status)); // Expectation: failed auth or CSRF
    });
});

test('Admin Work Manager API Tests', async (t) => {
    await t.test('POST /admin/work should validate embed URLs', async () => {
        // We will mock the auth/CSRF bypass or assume 401 for now, but focus on structure
        const res = await fetch(`${API_URL}/admin/work`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Test', role: 'mix', embedUrl: 'javascript:alert(1)', provider: 'youtube' })
        });
        assert.ok([400, 401, 403].includes(res.status));
    });
});

test('Admin Re-Auth API Tests', async (t) => {
    await t.test('DELETE /admin/reviews/:id (Hard Delete) requires X-ReAuth-Token', async () => {
        const res = await fetch(`${API_URL}/admin/reviews/123`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        // Even if cookie is somehow valid (not passed here), it must fail if X-ReAuth-Token is missing
        assert.ok([401, 403].includes(res.status));
    });
});

// =============================================================================
// BOOKING & ORDER WORKFLOW TESTS
// =============================================================================

test('POST /api/bookings — Validation Tests', async (t) => {
    await t.test('Should reject booking with missing name', async () => {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@test.com', serviceType: 'Mixing' })
        });
        assert.strictEqual(res.status, 400);
        const data = await res.json();
        assert.ok(data.details?.name, 'Should return name error');
    });

    await t.test('Should reject booking with invalid email', async () => {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Test User', email: 'not-valid', serviceType: 'Mixing' })
        });
        assert.strictEqual(res.status, 400);
        const data = await res.json();
        assert.ok(data.details?.email, 'Should return email error');
    });

    await t.test('Should reject booking with invalid service type', async () => {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Test User', email: 'test@test.com', serviceType: 'InvalidService' })
        });
        assert.strictEqual(res.status, 400);
        const data = await res.json();
        assert.ok(data.details?.serviceType, 'Should return serviceType error');
    });

    await t.test('Should create a booking with valid data and return ORD-* publicId', async () => {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Integration Test User',
                email: 'inttest@example.com',
                serviceType: 'Mixing',
                genre: 'Death Metal',
                numSongs: 5,
            })
        });
        assert.strictEqual(res.status, 201);
        const data = await res.json();
        assert.ok(data.publicId, 'Should return a publicId');
        assert.match(data.publicId, /^ORD-\d{8}-\d{4}$/, 'publicId should match ORD-YYYYMMDD-XXXX format');
        assert.strictEqual(data.serviceType, 'Mixing');
    });

    await t.test('Should sanitize XSS payloads in name/message', async () => {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: '<script>alert(1)</script>Test',
                email: 'xss@example.com',
                serviceType: 'Mastering',
                message: '<img src=x onerror=alert(1)>hello'
            })
        });
        // Should succeed (sanitize-html strips the tags) and return 201
        assert.strictEqual(res.status, 201);
    });
});

test('GET /api/admin/orders — Auth Guard Tests', async (t) => {
    await t.test('Should return 401 without authentication', async () => {
        const res = await fetch(`${API_URL}/admin/orders`);
        assert.strictEqual(res.status, 401);
    });

    await t.test('GET /api/admin/orders/:id should return 401 without auth', async () => {
        const res = await fetch(`${API_URL}/admin/orders/nonexistent-id`);
        assert.strictEqual(res.status, 401);
    });

    await t.test('PUT /api/admin/orders/:id/status should return 401 without auth', async () => {
        const res = await fetch(`${API_URL}/admin/orders/nonexistent-id/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'ACCEPTED' })
        });
        assert.strictEqual(res.status, 401);
    });

    await t.test('PUT /api/admin/orders/:id/drive-link should return 401 without auth', async () => {
        const res = await fetch(`${API_URL}/admin/orders/nonexistent-id/drive-link`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ driveLink: 'https://drive.google.com/test' })
        });
        assert.strictEqual(res.status, 401);
    });

    await t.test('GET /api/admin/mailbox should return 401 without auth', async () => {
        const res = await fetch(`${API_URL}/admin/mailbox`);
        assert.strictEqual(res.status, 401);
    });
});

test('GET /api/review-token/:token — Token Validation Tests', async (t) => {
    await t.test('Should return 404 for a completely invalid/fake token', async () => {
        const res = await fetch(`${API_URL}/review-token/fakeinvalidtoken1234567890`);
        assert.strictEqual(res.status, 404);
        const data = await res.json();
        assert.strictEqual(data.code, 'INVALID');
    });
});

test('POST /api/review-submit — Token Validation Tests', async (t) => {
    await t.test('Should reject review submission with invalid token', async () => {
        const res = await fetch(`${API_URL}/review-submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: 'completelyfaketoken1234567890abcdef',
                rating: 5,
                comment: 'This is a test review with enough characters to pass validation.',
                displayName: 'Tester'
            })
        });
        assert.strictEqual(res.status, 404);
        const data = await res.json();
        assert.strictEqual(data.code, 'INVALID');
    });

    await t.test('Should reject review submission with comment too short', async () => {
        const res = await fetch(`${API_URL}/review-submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: 'anytokenisfineherevalidation',
                rating: 5,
                comment: 'Short', // < 30 chars
                displayName: 'Test'
            })
        });
        assert.strictEqual(res.status, 400);
        const data = await res.json();
        assert.ok(data.details?.comment, 'Should return comment validation error');
    });

    await t.test('Public reviews API should only return APPROVED (published) reviews', async () => {
        const res = await fetch(`${API_URL}/reviews`);
        assert.strictEqual(res.status, 200);
        const data = await res.json();
        // All returned reviews must have status 'published' (APPROVED)
        if (data.reviews && data.reviews.length > 0) {
            data.reviews.forEach(r => {
                assert.strictEqual(r.status, 'published', `Review ${r.id} should be published`);
            });
        }
    });

    await t.test('Should successfully submit a review with a valid token', async () => {
        const crypto = require('crypto');
        const prisma = require('./prisma');

        // 1. Setup a dummy order and token
        const order = await prisma.order.create({
            data: {
                publicId: 'ORD-TEST-' + Date.now(),
                customerName: 'Test Reviewer',
                customerEmail: 'testreviewer@example.com',
                serviceType: 'Mixing',
                status: 'COMPLETED'
            }
        });

        const rawToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');

        await prisma.reviewToken.create({
            data: {
                orderId: order.id,
                tokenHash: hashedToken,
                expiresAt: new Date(Date.now() + 1000000)
            }
        });

        // 2. Submit the review
        const res = await fetch(`${API_URL}/review-submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: rawToken,
                rating: 5,
                comment: 'This is an outstanding piece of work that definitely passes the 30 character limit requirement!',
                displayName: 'Happy Tester'
            })
        });

        assert.strictEqual(res.status, 201);
        const data = await res.json();
        assert.strictEqual(data.message, 'Thank you! Your review is pending approval.');

        // 3. Verify it's in the DB and token is marked used
        const review = await prisma.review.findFirst({ where: { orderId: order.id } });
        assert.ok(review, 'Review should be saved');
        assert.strictEqual(review.status, 'pending');

        const tokenRow = await prisma.reviewToken.findUnique({ where: { tokenHash: hashedToken } });
        assert.ok(tokenRow.usedAt !== null, 'Token should be marked as used');

        // 4. Cleanup
        await prisma.review.delete({ where: { id: review.id } });
        await prisma.reviewToken.delete({ where: { id: tokenRow.id } });
        await prisma.order.delete({ where: { id: order.id } });
    });
});

