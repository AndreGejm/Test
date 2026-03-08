'use strict';

const { z } = require('zod');

/**
 * Validate required environment variables at server startup.
 * Halts the process immediately with clear error messages if
 * critical configuration is missing or malformed.
 */
const envSchema = z.object({
    JWT_SECRET: z.string().min(16, 'JWT_SECRET must be at least 16 characters'),
    GOOGLE_CLIENT_ID: z.string().min(1, 'GOOGLE_CLIENT_ID is required'),
    ADMIN_EMAIL: z.string().email('ADMIN_EMAIL must be a valid email address'),
    FRONTEND_URL: z.string().url().optional(),
    DATABASE_URL: z.string().min(1).optional(),
    EMAIL_MODE: z.enum(['production', 'staging', 'test', 'disabled']).default('disabled'),
});

function validateEnv() {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
        console.error('\n❌ Environment validation failed:\n');
        result.error.issues.forEach(issue => {
            console.error(`  • ${issue.path.join('.')}: ${issue.message}`);
        });
        console.error('\nPlease check your .env file or environment variables.\n');
        process.exit(1);
    }
}

module.exports = validateEnv;
