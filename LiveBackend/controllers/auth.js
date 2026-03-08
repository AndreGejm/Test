const { logger } = require('../utils/logger');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');
const { googleClient } = require('../middlewares/auth');

const login = async (req, res, _next) => {
    const { credential } = req.body;
    if (!credential) return res.status(400).json({ error: 'Missing Google credential' });

    try {
        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const adminEmail = payload.email;

        // Check if email is an allowed admin
        const adminUser = await prisma.adminUser.findUnique({
            where: { email: adminEmail }
        });

        if (!adminUser) {
            return res.status(403).json({ error: 'Forbidden: Email not authorized as Admin' });
        }

        // Issue JWT for stateless authentication
        const token = jwt.sign({ email: adminEmail }, process.env.JWT_SECRET, { expiresIn: '24h' });

        const isProduction = process.env.NODE_ENV === 'production';
        res.cookie('__Host-admin_session', token, {
            httpOnly: true,
            secure: true,
            sameSite: isProduction ? 'none' : 'lax',
            path: '/',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ message: 'Authenticated successfully', admin: { email: adminUser.email, name: adminUser.name } });

    } catch (error) {
        logger.error('Google Auth Error:', error);
        res.status(401).json({ error: 'Invalid Google Identity Token' });
    }
};

const logout = (req, res, _next) => {
    res.clearCookie('__Host-admin_session', { path: '/' });
    res.json({ message: 'Logged out successfully' });
};

module.exports = {
    login,
    logout
};
