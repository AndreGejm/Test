const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

require('dotenv').config();

const { generateCsrfToken } = require('./middlewares/csrf');
const prisma = require('./prisma');
const errorHandler = require('./middlewares/errorHandler');

const authRoutes = require('./routes/auth');
const bookingsRoutes = require('./routes/bookings');
const reviewsRoutes = require('./routes/reviews');
const adminRoutes = require('./routes/admin');

const app = express();
app.set('trust proxy', 1); // Trust first proxy hop (Google L7 LB on Cloud Run, Cloudflare locally)

// Middleware
app.use(helmet());
app.use(cors({
    origin: (origin, callback) => {
        const allowed = [
            process.env.FRONTEND_URL || 'http://localhost:5173',
            'https://lauridsenproduction.vip',
            'https://www.lauridsenproduction.vip'
        ];

        const allowTunnel = process.env.NODE_ENV !== 'production' || process.env.ALLOW_TUNNEL_ORIGINS === 'true';
        const isAllowedTunnel = allowTunnel && /\.trycloudflare\.com$/.test(origin || '');

        if (!origin || allowed.includes(origin) || isAllowedTunnel) {
            callback(null, true);
        } else {
            callback(new Error('CORS: Origin not allowed'));
        }
    },
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const { requestCorrelationMiddleware, logger } = require('./utils/logger');
app.use(requestCorrelationMiddleware);

// Middleware to log all incoming requests (optional but useful for traceability)
app.use((req, res, next) => {
    logger.info(`Received ${req.method} ${req.url}`);
    next();
});

// ---------------------------------------------------------
// PUBLIC API ROUTERS
// ---------------------------------------------------------
app.use('/api', reviewsRoutes); // /api/reviews, /api/review-token/:token, /api/review-submit
app.use('/api/bookings', bookingsRoutes);

// ---------------------------------------------------------
// ADMIN API ROUTERS
// ---------------------------------------------------------
app.use('/api/admin', authRoutes); // /api/admin/auth, /api/admin/logout
app.use('/api/admin', adminRoutes);

// ---------------------------------------------------------
// PUBLIC ENDPOINTS (Health, Settings, Work)
// ---------------------------------------------------------

// GET /api/health - Diagnostic endpoint: confirms server, DB, and email adapter status
app.get(['/api/health', '/healthz'], async (req, res) => {
    const emailModule = require('./services/email');
    let dbOk = false;
    try {
        await prisma.$queryRaw`SELECT 1`;
        dbOk = true;
    } catch (err) {
        logger.error('Healthcheck DB connection failed', { err });
    }
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime_seconds: Math.floor(process.uptime()),
        database: dbOk ? 'connected' : 'error',
        email_adapter: typeof emailModule.getAdapterInfo === 'function' ? emailModule.getAdapterInfo() : 'dev_mailbox',
        smtp_host: process.env.SMTP_HOST || null,
        rate_limits_disabled: process.env.DISABLE_RATE_LIMIT === 'true',
    });
});

// GET /api/csrf-token - Issue a Double-Submit CSRF cookie to frontend
app.get('/api/csrf-token', (req, res) => {
    const token = generateCsrfToken(req, res);
    res.json({ csrfToken: token });
});

// GET /api/settings - Fetch latest settings public payload
app.get('/api/settings', async (req, res) => {
    try {
        const latestSetting = await prisma.siteSettingVersion.findFirst({
            orderBy: { version: 'desc' }
        });

        if (!latestSetting) {
            return res.status(404).json({ error: 'Settings not found' });
        }

        res.json(JSON.parse(latestSetting.payload));
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/work - Fetch public work items list
app.get('/api/work', async (req, res) => {
    try {
        const items = await prisma.workItem.findMany({
            where: { status: 'published' },
            orderBy: [{ orderIndex: 'asc' }, { createdAt: 'desc' }]
        });
        res.json({ works: items });
    } catch (error) {
        console.error('Error fetching work items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Global Error Handler
app.use(errorHandler);

// ---------------------------------------------------------
// SERVER START
// ---------------------------------------------------------

if (require.main === module) {
    // Validate environment before starting — only on direct server launch, not test imports
    require('./validate-env')();

    const PORT = process.env.PORT || 3001;
    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
    });

    // Cloud Run graceful shutdown
    const gracefulShutdown = () => {
        console.log('Received kill signal, shutting down gracefully');
        server.close(async () => {
            console.log('Closed out remaining connections');
            await prisma.$disconnect();
            process.exit(0);
        });

        // Force close after 10s
        setTimeout(() => {
            console.error('Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 10000);
    };

    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);
}

module.exports = app;
