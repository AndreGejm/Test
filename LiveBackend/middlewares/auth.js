const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const prisma = require('../prisma');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Middleware to verify Admin JWT + DB-level revocation check
const verifyAdmin = async (req, res, next) => {
    const token = req.cookies['__Host-admin_session'];
    if (!token) return res.status(401).json({ error: 'Unauthorized: No session token' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Verify admin still exists in DB (immediate revocation support)
        const adminUser = await prisma.adminUser.findUnique({
            where: { email: decoded.email }
        });
        if (!adminUser) return res.status(401).json({ error: 'Unauthorized: Admin account revoked' });

        req.admin = decoded; // { email: ... }
        next();
    } catch {
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
    }
};

// Middleware to enforce Fresh Google ID Token for destructive actions
const requireReAuth = async (req, res, next) => {
    const reAuthToken = req.headers['x-reauth-token'];
    if (!reAuthToken) return res.status(401).json({ error: 'Re-authentication required for this action' });
    try {
        const ticket = await googleClient.verifyIdToken({ idToken: reAuthToken, audience: process.env.GOOGLE_CLIENT_ID });
        const payload = ticket.getPayload();
        if (payload.email !== req.admin.email) return res.status(403).json({ error: 'Forbidden: Email mismatch during Re-Auth' });

        // Ensure token was issued recently (e.g. last 5 minutes)
        if (Date.now() / 1000 - payload.iat > 300) {
            return res.status(401).json({ error: 'Re-Auth token expired, please authenticate again' });
        }
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid Re-Auth token' });
    }
};

// System Audit Logger
const logAudit = async (action, adminEmail, entityId = null, details = null) => {
    try {
        await prisma.auditLog.create({
            data: { action, adminEmail, entityId, details: details ? JSON.stringify(details) : null }
        });
    } catch (e) {
        console.error('Audit Log saving failed:', e);
    }
};

module.exports = {
    googleClient,
    verifyAdmin,
    requireReAuth,
    logAudit
};
