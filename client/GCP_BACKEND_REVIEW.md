# GCP Backend Review (Cloud Run)
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Summary

The backend is well-prepared for Cloud Run: Dockerfile is present, health check endpoints are defined, graceful shutdown is implemented, and the app binds to `0.0.0.0:PORT`. The main pre-deploy blocker is the **trust proxy misconfiguration** which will break IP-based rate limiting, and the need to provision a **PostgreSQL database** before first deployment.

---

## 1. Containerization Readiness

```dockerfile
# server/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "index.js"]
```

| Check | Result | Note |
| :--- | :--- | :--- |
| Uses official Node image | ✅ | `node:20-alpine` |
| Non-root user | ❌ Missing | Container runs as root by default |
| Production deps only | ✅ | `npm ci --only=production` |
| Prisma client generated at build | ✅ | `npx prisma generate` in Dockerfile |
| Port exposed | ✅ | `EXPOSE 8080` |
| CMD uses `node` directly | ✅ | No shell wrapper |

> **ISSUE-G1 (Security/Low):** Container runs as root. Add `USER node` after `COPY . .` to drop privileges.

---

## 2. Environment Variable Configuration

| Variable | Required | Source |
| :--- | :--- | :--- |
| `PORT` | Injected by Cloud Run | Cloud Run provides this automatically |
| `DATABASE_URL` | **Yes** | Must be set in Cloud Run env / Secret Manager |
| `JWT_SECRET` | **Yes** | Cloud Run Secret Manager recommended |
| `GOOGLE_CLIENT_ID` | **Yes** | Cloud Run env |
| `ADMIN_EMAIL` | **Yes** | Cloud Run env |
| `FRONTEND_URL` | **Yes** | Cloud Run env (set to Firebase domain) |
| `NODE_ENV` | **Yes** | Set to `production` |
| SMTP vars | Conditional | If `EMAIL_MODE=production` |

---

## 3. Stateless Service Design

| Check | Result | Note |
| :--- | :--- | :--- |
| No local file storage | ✅ | All state in DB |
| No in-memory session storage | ✅ | JWT cookie is stateless |
| SQLite file dependency | ❌ Removed | `schema.prisma` is PostgreSQL |
| Safe for horizontal scaling | ✅ (with PostgreSQL) | |

> **ISSUE-G2 (Blocker):** A PostgreSQL database must be provisioned **before first deployment**. Recommended: [Neon.tech](https://neon.tech) (free tier) or Cloud SQL (paid). Then run `npx prisma migrate deploy` against the production DB URL.

---

## 4. Logging Behavior

| Check | Result | Note |
| :--- | :--- | :--- |
| Structured JSON logs | ✅ | All `logger.*` calls output JSON |
| Logs to stdout/stderr | ✅ | `console.log` / `console.error` — Cloud Logging captures these |
| Request IDs in logs | ✅ | `X-Request-ID` header + AsyncLocalStorage |
| Secrets redacted | ✅ | `SENSITIVE_KEYS` set in `logger.js` |
| Stack traces suppressed in prod | ✅ | `errorHandler.js:22` |

---

## 5. Health Checks

| Endpoint | Status | Notes |
| :--- | :--- | :--- |
| `GET /healthz` | ✅ | Returns `{ status: 'ok', database, ... }` |
| `GET /api/health` | ✅ | Same handler, admin-accessible alias |
| DB connectivity checked | ✅ | `SELECT 1` query |

> **ISSUE-SEC5 (from Security Audit):** `/api/health` is public and leaks `smtp_host` and `rate_limits_disabled`. Keep `/healthz` as the simple probe and restrict `/api/health` to admins.

---

## 6. Scaling & Timeout Recommendations

| Setting | Recommended Value | Rationale |
| :--- | :--- | :--- |
| Min instances | 0 | Scale to zero when idle (cost saving) |
| Max instances | 3 | Limit blast radius during traffic spikes |
| Concurrency | 80 (default) | Node.js handles concurrency well |
| Request timeout | 60s | Email operations can be slow; 60s is safe |
| Memory | 256 MB | Sufficient for this app; Prisma adds ~50MB |
| CPU | 1 | Adequate for this load |

---

## 7. Trust Proxy — CRITICAL for Rate Limiting

**File:** `server/index.js:18`
```js
app.set('trust proxy', 'loopback');  // ❌ Wrong for Cloud Run
```
**Must be changed to:**
```js
app.set('trust proxy', 1);  // ✅ Trusts first proxy hop (Google LB)
```
Without this fix, `req.ip` returns an internal Google IP, and rate limiter applies to ALL users collectively, making it useless.

---

## 8. Deploy Command

```bash
cd server/
gcloud run deploy studio-backend \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --max-instances 3 \
  --memory 256Mi \
  --timeout 60
```
