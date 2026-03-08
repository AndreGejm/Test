# Stability Report
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Summary

The backend is generally robust. Express 5 auto-catches async handler rejections. All controllers use try/catch or `next(err)`. The graceful shutdown is implemented. Issues found are in the **proxy trust configuration** and **missing pagination clamps**.

---

## ✅ Passing Checks

| Check | Result | Evidence |
| :--- | :--- | :--- |
| Binds to `PORT` env var | ✅ | `server/index.js:137` |
| Listens on `0.0.0.0` | ✅ | `app.listen(PORT, '0.0.0.0', ...)` |
| SIGTERM graceful shutdown | ✅ | `process.on('SIGTERM', gracefulShutdown)` |
| SIGINT graceful shutdown | ✅ | `process.on('SIGINT', gracefulShutdown)` |
| Prisma disconnect on shutdown | ✅ | `await prisma.$disconnect()` in close callback |
| Force-kill after 10s timeout | ✅ | `setTimeout(..., 10000)` in gracefulShutdown |
| `/healthz` health endpoint | ✅ | `app.get(['/api/health', '/healthz'], ...)` |
| Global error handler | ✅ | `app.use(errorHandler)` — 4-arg middleware |
| No stack trace in production | ✅ | `errorHandler.js:19` checks `NODE_ENV` |
| Async route error forwarding | ✅ | All controllers use `next(err)` or `throw` |
| Express 5 auto-catches async | ✅ | Express 5 wraps async handlers automatically |
| Zod input validation | ✅ | All public mutation routes use safeParse |
| HTML sanitization | ✅ | `sanitize-html` used on all user text fields |
| Structured JSON logging | ✅ | `utils/logger.js` with secret redaction |
| Request correlation ID | ✅ | `X-Request-ID` header + AsyncLocalStorage |
| Environment validated at boot | ✅ | `validate-env.js` exits if required vars missing |
| Atomic review submission | ✅ | Prisma `$transaction` for token + review creation |

---

## ⚠️ Issues Found

### ISSUE-S1: Trust Proxy Misconfiguration (Cloud Run) — **HIGH**
- **File:** `server/index.js:18`
- **Code:** `app.set('trust proxy', 'loopback')`
- **Risk:** Cloud Run sits behind Google's load balancer (not a loopback interface). With this setting, `req.ip` will return Google's internal IP instead of the actual client IP. Rate limiting will be effectively shared across ALL clients, making IP-based rate limiting useless.
- **Fix:** Change to `app.set('trust proxy', 1)` for Cloud Run.

### ISSUE-S2: Unbounded Pagination on `/api/reviews` — **LOW**
- **File:** `server/controllers/reviews.js:23-25`
- **Code:** `const limit = parseInt(req.query.limit) || 10;`
- **Risk:** A caller can request `limit=100000`, causing a large DB read and memory spike.
- **Fix:** Add `const limit = Math.min(parseInt(req.query.limit) || 10, 50);`

### ISSUE-S3: `require()` Inside Request Handler — **LOW (cosmetic)**
- **File:** `server/index.js:69`
- **Code:** `const emailModule = require('./services/email');` inside the route handler.
- **Risk:** Functionally safe (Node caches modules), but it runs on every health check request.
- **Fix:** Hoist `require` to top of file.

### ISSUE-S4: Inline Route Handlers Lack Controller Separation — **LOW**
- **File:** `server/index.js:95-124`
- **Details:** `/api/settings` and `/api/work` are implemented inline rather than in a controller. If the project grows, this becomes a maintenance issue.
- **Fix:** Move to `controllers/public.js` (non-blocking for production).

---

## Graceful Shutdown Verification

```js
// server/index.js
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT',  gracefulShutdown);

const gracefulShutdown = () => {
    server.close(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
    setTimeout(() => { process.exit(1); }, 10000); // Force close
};
```
✅ **Verdict:** Cloud Run-safe. SIGTERM is handled, Prisma disconnects gracefully.
