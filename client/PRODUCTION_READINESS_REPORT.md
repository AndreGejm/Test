# Production Readiness Report
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Final Verdict: ⚠️ NOT SAFE TO PUBLISH YET — 4 blockers must be resolved first

---

## 1. Critical Blockers (Must Fix Before Publish)

| ID | Issue | File | Action |
| :--- | :--- | :--- | :--- |
| **BLOCKER-1** | **Trust proxy misconfiguration** | `server/index.js:18` | Change `'loopback'` → `1`. Without this, rate limiting is completely broken on Cloud Run |
| **BLOCKER-2** | **Rotate exposed secrets** | N/A | `server/.env` was in git history. Rotate: SMTP App Password, JWT_SECRET immediately |
| **BLOCKER-3** | **No `.env.production` / `VITE_API_URL`** | (missing file) | Create `.env.production` with `VITE_API_URL=https://<cloud-run-url>/api`; otherwise all API calls 404 on Firebase |
| **BLOCKER-4** | **Firebase project ID placeholder** | `.firebaserc` | Replace `"your-firebase-project-id"` with real project ID before `firebase deploy` |

---

## 2. Major Risks (Fix Before or Shortly After Launch)

| ID | Issue | File | Severity |
| :--- | :--- | :--- | :--- |
| **MAJOR-1** | Unbounded `limit` on `GET /api/reviews` | `controllers/reviews.js:24` | High |
| **MAJOR-2** | `/api/health` leaks internal config (smtp_host, rate_limits_disabled) to public | `index.js:83-84` | Medium |
| **MAJOR-3** | driveLink not restricted to `drive.google.com` domain | `validations.js:64` | Medium |
| **MAJOR-4** | No max instance limit enforced in deploy | deploy config | High (cost risk) |
| **MAJOR-5** | High-severity npm vulns (minimatch, rollup) | `node_modules` | High |
| **MAJOR-6** | No `.env.production` CI/CD workflow | — | High (deploy blocker) |

---

## 3. Minor Improvements (Post-Launch)

| ID | Issue | File | Severity |
| :--- | :--- | :--- | :--- |
| **MINOR-1** | Container runs as root | `server/Dockerfile` | Low |
| **MINOR-2** | `require()` inside health route handler | `server/index.js:69` | Low |
| **MINOR-3** | `/api/settings` and `/api/work` are inline, not in a controller | `server/index.js:95-124` | Low |
| **MINOR-4** | Missing static asset caching headers in `firebase.json` | `firebase.json` | Low |
| **MINOR-5** | Verbose INFO logging for every request may raise Cloud Logging costs | `server/index.js:46-49` | Low |
| **MINOR-6** | Hash-based routing limits SEO | `src/App.jsx` | Low |
| **MINOR-7** | PostgreSQL connection pool management not configured for scale-to-zero | Prisma config | Low |

---

## 4. Validation Run Summary

| Test | Result |
| :--- | :--- |
| `npm run build` (frontend) | ✅ Passes |
| Backend starts (`node index.js`) | ✅ Starts on port 3001 |
| `GET /healthz` responds | ✅ Returns `{ status: 'ok' }` |
| `GET /api/csrf-token` | ✅ |
| Backend test suite | ✅ Core tests passing (some rate-limit tests fail with bad proxy config) |
| Frontend npm audit | 2 high (rollup — build-time only) |
| Backend npm audit | 8 vulns (2 low, 6 high — minimatch + @tootallnate/once) |

---

## 5. Exact Remediation Plan

### Step 1: Fix Trust Proxy (5 min)
```js
// server/index.js line 18 — CHANGE:
app.set('trust proxy', 'loopback');
// TO:
app.set('trust proxy', 1);
```

### Step 2: Rotate Secrets (10 min)
1. **Gmail:** myaccount.google.com → Security → App Passwords → revoke old → generate new  
2. **JWT_SECRET:** Generate new: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
3. Update your local `server/.env` with new values  
4. Update Cloud Run env vars with new values after deploy  

### Step 3: Run Dependency Audit Fixes (5 min)
```bash
cd studio-website && npm audit fix
cd server && npm audit fix
```

### Step 4: Fix Pagination Clamp (2 min)
```js
// server/controllers/reviews.js line 24 — CHANGE:
const limit = parseInt(req.query.limit) || 10;
// TO:
const limit = Math.min(parseInt(req.query.limit) || 10, 50);
```

### Step 5: Create `.env.production` + Provision Database (variable)
1. Provision PostgreSQL on [Neon.tech](https://neon.tech) (free tier)
2. Run: `cd server && DATABASE_URL="<postgres-url>" npx prisma migrate deploy`
3. Create `studio-website/.env.production`:
   ```env
   VITE_API_URL=https://<your-cloud-run-url>/api
   ```

### Step 6: Update `.firebaserc` (1 min)
```json
{ "projects": { "default": "your-actual-firebase-project-id" } }
```

### Step 7: Deploy Backend to Cloud Run (10 min)
```bash
cd server/
gcloud run deploy studio-backend --source . --region us-central1 \
  --allow-unauthenticated --max-instances 3 --memory 256Mi --timeout 60 \
  --set-env-vars NODE_ENV=production,FRONTEND_URL=https://your-firebase-app.web.app
  # (set secrets via --update-secrets or GCP Console)
```

### Step 8: Deploy Frontend to Firebase (5 min)
```bash
cd studio-website/
npm run deploy:hosting
# (runs: vite build, firebase deploy --only hosting)
# Vite will pick up .env.production for VITE_API_URL
```

### Step 9 (Optional but Recommended): Add GCP Budget Alert
- GCP Console → Billing → Budgets & Alerts → Create budget at $5/month

---

## 6. Final Pre-Publish Checklist

```
[x] Frontend builds (npm run build passes)
[x] Backend starts (server binds PORT / 0.0.0.0)
[x] Health endpoint responds (/healthz)
[x] Graceful shutdown implemented (SIGTERM)
[x] Firebase config present (firebase.json, SPA rewrites)
[x] Dockerfile present (Cloud Run ready)
[x] Environment variables documented (BACKEND_ENV.md)
[x] .env excluded from git (.gitignore)
[x] Secrets purged from git history (force-pushed)
[x] CSRF protection (double-submit cookie)
[x] Rate limiting configured (auth/booking/review)
[x] Input validation (Zod + sanitize-html)
[x] Auth: JWT + Google OAuth + DB revocation
[x] Error handler: no stack trace in production

[ ] BLOCKER: trust proxy → set to 1 before Cloud Run deployxxx
[ ] BLOCKER: rotate SMTP + JWT secrets
[ ] BLOCKER: create .env.production with VITE_API_URL
[ ] BLOCKER: update .firebaserc with real project ID
[ ] Provision PostgreSQL and run prisma migrate deploy
[ ] npm audit fix (frontend + backend)
[ ] Clamp review pagination limit to 50
[ ] Set --max-instances 3 on Cloud Run
[ ] Create GCP Budget Alert
```

---

## Confidence Assessment

| Area | Score | Notes |
| :--- | :--- | :--- |
| Auth & Session Security | 9/10 | JWT + __Host cookie + CSRF + re-auth is excellent |
| Input Validation | 8/10 | Comprehensive Zod schemas, HTML sanitized |
| Reliability | 7/10 | Trust proxy fix needed; rest is solid |
| Operational Safety | 6/10 | Secrets need rotation; max instances not set |
| Frontend Deploy | 8/10 | Needs `.env.production` + real Firebase project ID |
| Dependency Health | 6/10 | 6 high-severity vulns need `npm audit fix` |
| **Overall** | **6.5/10** | **Fix 4 blockers → safe to publish** |
