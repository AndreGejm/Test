const { PrismaClient } = require('./prisma/generated/client');

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Execute WAL mode pragmas immediately for concurrency
prisma.$queryRaw`PRAGMA journal_mode = WAL;`.catch(console.error);
prisma.$queryRaw`PRAGMA synchronous = NORMAL;`.catch(console.error);
prisma.$queryRaw`PRAGMA busy_timeout = 5000;`.catch(console.error);

module.exports = prisma;
