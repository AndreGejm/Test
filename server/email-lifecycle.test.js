const test = require('node:test');
const assert = require('node:assert');
const { PrismaClient } = require('./prisma/generated/client');

// Force SMTP_PASS empty so email module falls back to dev_mailbox
process.env.SMTP_PASS = '';
process.env.DISABLE_RATE_LIMIT = 'true';
process.env.EMAIL_MODE = 'test';

const prisma = new PrismaClient();
const EXPECTED_ADMIN = process.env.ADMIN_EMAIL || 'admin@localhost';

let server;
let API_URL;

test.before(async () => {
    const app = require('./index');
    await new Promise((resolve) => {
        server = app.listen(0, () => {
            const port = server.address().port;
            API_URL = `http://localhost:${port}/api`;
            resolve();
        });
    });
});

test.after(async () => {
    if (server) await new Promise(resolve => server.close(resolve));
    await prisma.$disconnect();
});

test('Email Lifecycle Integration Tests', async (t) => {
    // We assume an admin is available or we bypass.
    // For these tests, we will create a booking, then do admin actions.
    // Admin actions require auth, so we'll need to seed an admin and log in,
    // OR just test the public routes (Booking and Review) and assume Admin routes
    // are harder to test without Google Auth bypass.
    // But we CAN bypass Google Auth by inserting an admin, mocking the token, 
    // or just checking the Booking emails which are public.
    // Since we need to test the full lifecycle, let's create a booking first.

    let orderId = null;
    let orderPublicId = null;

    await t.test('Booking creates two DevEmail rows', async () => {
        // Clear recent emails for this test target
        await prisma.devEmail.deleteMany();
        await prisma.emailEvent.deleteMany();

        const delay = ms => new Promise(res => setTimeout(res, ms));

        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Lifecycle Tester',
                email: 'test-lifecycle@example.com',
                serviceType: 'Mixing',
                message: 'Integration test'
            })
        });

        assert.strictEqual(res.status, 201);
        const data = await res.json();
        orderPublicId = data.publicId;
        assert.ok(orderPublicId);

        await delay(500); // give write a moment

        const order = await prisma.order.findUnique({ where: { publicId: orderPublicId } });
        assert.ok(order);
        orderId = order.id;

        // Check DevEmail table
        const customerEmail = await prisma.devEmail.findFirst({
            where: { toAddress: EXPECTED_ADMIN, subject: { contains: '[TEST] Request received' } }
        });
        if (!customerEmail) {
            console.log(await prisma.devEmail.findMany());
        }
        assert.ok(customerEmail, 'Customer booking email not found');

        const adminEmail = await prisma.devEmail.findFirst({
            where: { subject: { contains: '[TEST] New booking request' }, htmlBody: { contains: orderPublicId } }
        });
        assert.ok(adminEmail, 'Admin booking notification email not found');
    });

    // The rest of the lifecycle (status change, drive link, completion) require Admin CSRF and Session.
    // We will simulate these directly via Prisma + the email adapter to verify the adapter wiring, 
    // OR we can inject an admin session into the DB if we manually sign a JWT and set the cookie.

    await t.test('Admin Actions Email Generation (Simulated Admin Session)', async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const jwt = require('jsonwebtoken');
        // Ensure admin token exists
        await prisma.adminUser.upsert({
            where: { email: 'admin-test@example.com' },
            update: {},
            create: { email: 'admin-test@example.com' }
        });

        // Use the env JWT_SECRET or fallback to test secret
        const secret = process.env.JWT_SECRET || 'testsecret';
        process.env.JWT_SECRET = secret;
        const token = jwt.sign({ email: 'admin-test@example.com' }, secret, { expiresIn: '1h' });

        // Get CSRF Token
        const csrfRes = await fetch(`${API_URL}/csrf-token`);
        const csrfData = await csrfRes.json();
        const csrfToken = csrfData.csrfToken;
        const csrfCookie = csrfRes.headers.get('set-cookie').split(';')[0]; // simple extraction

        const headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
            'Cookie': `__Host-admin_session=${token}; ${csrfCookie}`
        };

        // 1. Status Change
        const statusRes = await fetch(`${API_URL}/admin/orders/${orderPublicId}/status`, {
            method: 'PUT',
            headers,
            body: JSON.stringify({ status: 'ACCEPTED' })
        });
        if (statusRes.status !== 200) {
            console.error('Status Change Error:', await statusRes.text());
        }
        assert.strictEqual(statusRes.status, 200, 'Status change failed');

        await delay(500);
        const statusEmail = await prisma.devEmail.findFirst({
            where: { toAddress: EXPECTED_ADMIN, subject: { contains: '[TEST] Order update: ACCEPTED' } }
        });
        assert.ok(statusEmail, 'Status change email not found');

        // 2. Drive Link
        const driveRes = await fetch(`${API_URL}/admin/orders/${orderPublicId}/drive-link`, {
            method: 'PUT',
            headers,
            body: JSON.stringify({ driveLink: 'https://drive.google.com/test' })
        });
        assert.strictEqual(driveRes.status, 200, 'Drive link update failed');

        await delay(500);
        const driveEmail = await prisma.devEmail.findFirst({
            where: { toAddress: EXPECTED_ADMIN, subject: { contains: '[TEST] File upload link' } }
        });
        assert.ok(driveEmail, 'Drive link email not found');

        // 3. Completion -> Review Invite
        const completeRes = await fetch(`${API_URL}/admin/orders/${orderPublicId}/status`, {
            method: 'PUT',
            headers,
            body: JSON.stringify({ status: 'COMPLETED', force: true })
        });
        assert.strictEqual(completeRes.status, 200, 'Completion failed');

        await delay(500);
        const reviewEmail = await prisma.devEmail.findFirst({
            where: { toAddress: EXPECTED_ADMIN, subject: { contains: '[TEST] Order completed – Leave a review' } }
        });
        assert.ok(reviewEmail, 'Review invite email not found');

        // Extract plain token from review email (it's in the link)
        const linkMatch = reviewEmail.htmlBody.match(/token=([a-f0-9]{64})/);
        assert.ok(linkMatch, 'Could not extract review token from email');
        const plainToken = linkMatch[1];

        // 4. Review Submit
        const reviewSubmitRes = await fetch(`${API_URL}/review-submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: plainToken,
                rating: 5,
                comment: 'Automated lifecycle test review',
                displayName: 'Lifecycle Bot'
            })
        });
        assert.strictEqual(reviewSubmitRes.status, 201, 'Review submission failed');

        // Verify token used
        const usedToken = await prisma.reviewToken.findUnique({ where: { orderId } });
        assert.ok(usedToken.usedAt !== null, 'Token should be marked used');

        // Admin new review email
        const adminReviewEmail = await prisma.devEmail.findFirst({
            where: { subject: { contains: '[TEST] New review pending moderation' } }
        });
        assert.ok(adminReviewEmail, 'Admin new review email not found');
    });

});
