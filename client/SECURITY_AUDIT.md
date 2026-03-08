# Security Audit
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Summary

The backend security posture is strong overall. Google OAuth + JWT, __Host-prefixed cookies, CSRF double-submit, Helmet, sanitize-html, and Zod validation are all properly implemented. The main risk area is the **previously exposed `.env` file** (now purged from git history, but secrets should be rotated). Additional issues are minor.

---

## ✅ Passing Security Checks

| Check | Result | Notes |
| :--- | :--- | :--- |
| No plaintext secrets in committed code | ✅ | `.env` purged from history; `.gitignore` updated |
| JWT signed with `JWT_SECRET` env var | ✅ | `auth.js:28` |
| Admin session cookie: `HttpOnly` | ✅ | `__Host-admin_session` is HttpOnly |
| Admin session cookie: `Secure` | ✅ | Requires HTTPS |
| Admin session cookie: `SameSite=Strict` | ✅ | Prevents CSRF against cookie |
| `__Host-` cookie prefix enforced | ✅ | Cannot be set from subdomain |
| CSRF token: double-submit pattern | ✅ | `__Host-csrf_token` not HttpOnly, sent via `X-CSRF-Token` header |
| All admin mutations require CSRF | ✅ | `requireCsrf` on all POST/PUT/PATCH/DELETE admin routes |
| Destructive actions require re-auth | ✅ | `requireReAuth` on delete/revert operations |
| Admin DB-level revocation | ✅ | `verifyAdmin` checks DB on every request |
| Google ID token freshness check | ✅ | Re-auth token `iat` checked (< 5 min) |
| Helmet security headers | ✅ | CSP, X-Frame-Options, HSTS etc. |
| Input validated with Zod | ✅ | All public mutation routes |
| HTML sanitized with sanitize-html | ✅ | `allowedTags: []` (strip all) |
| Structured logs redact secrets | ✅ | `logger.js` SENSITIVE_KEYS set |
| No stack traces in production logs | ✅ | `errorHandler.js:22` |
| Rate limiting on public endpoints | ✅ | Booking (5/15min), Review submit (5/15min), Auth (10/15min) |
| CORS: allowlist-based | ✅ | Only `FRONTEND_URL` + tunnel (dev-only) |
| Invite-only review system | ✅ | `POST /api/reviews` returns 410 |
| Review token hashed in DB | ✅ | SHA-256, not stored in plaintext |
| Atomic token + review creation | ✅ | `$transaction` prevents replay |
| Public reviews strip email/IP | ✅ | `reviews.js:56-58` destructures and drops PII |
| AuditLog for admin actions | ✅ | All write operations logged |
| No command execution / shell calls | ✅ | No `exec`, `spawn`, `eval` found |

---

## 🔴 Critical Findings

### ISSUE-SEC1: Rotate Exposed Secrets Immediately — **CRITICAL**
- **Context:** `server/.env` was tracked in git and pushed to GitHub before it was detected and purged. The following values were exposed in the public repo history for a window of time:
  - `SMTP_PASS` (Gmail App Password)
  - `JWT_SECRET`
  - `GOOGLE_CLIENT_ID`
  - `ADMIN_EMAIL`
- **Action Required:**
  1. **Gmail SMTP App Password:** Go to [myaccount.google.com/security](https://myaccount.google.com/security) → App Passwords → revoke and regenerate.
  2. **JWT_SECRET:** Generate a new 32-character random string. All existing admin sessions will be invalidated (acceptable).
  3. **GOOGLE_CLIENT_ID:** The client ID itself is not secret (it's used in the frontend), but verify no associated credentials were exposed.

---

## ⚠️ Medium Findings

### ISSUE-SEC2: Trust Proxy Setting Breaks IP Rate Limiting — **HIGH (Operational Risk)**
- **See ISSUE-S1 in STABILITY_REPORT.md** — Incorrect `trust proxy` setting means rate limiters see Google's load balancer IP, effectively making them useless. This allows unlimited auth attempts from any client.

### ISSUE-SEC3: driveLink Not Validated for Google Drive Domain — **MEDIUM**
- **File:** `server/validations.js:64`
- **Code:** `driveLink: z.string().url('Must be a valid URL').max(500)`
- **Risk:** Any URL can be submitted. Should be restricted to `drive.google.com` to prevent SSRF-adjacent storage of arbitrary links.
- **Fix:** Add `.refine(url => url.startsWith('https://drive.google.com/'), { message: 'Must be a Google Drive URL' })`.

### ISSUE-SEC4: CORS Allows Null Origin — **MEDIUM**
- **File:** `server/index.js:31`
- **Code:** `if (!origin || allowed.includes(origin) || isAllowedTunnel)`
- **Risk:** `!origin` allows all same-origin requests and certain CLI clients. For a backend API, this may be intentional (health checks), but it's worth documenting and ensuring same-origin isn't possible from unexpected vectors.

### ISSUE-SEC5: `/api/health` Exposes Internal Configuration — **MEDIUM**
- **File:** `server/index.js:77-85`
- **Risk:** The health endpoint is public and returns `smtp_host`, `email_adapter`, and `rate_limits_disabled`. This shouldn't cause breach but reveals configuration details to anyone who fetches the URL.
- **Fix:** Make `/api/health` admin-protected and keep `/healthz` as a simple `{ status: 'ok' }` for Cloud Run.

### ISSUE-SEC6: Pagination Limit Not Clamped — **LOW**
- **See ISSUE-S2** — Allows data over-fetching but not a direct security risk.

---

## Authentication Boundary Summary

```
Public endpoints:
  GET  /api/reviews           → Public, paginated, PII stripped
  GET  /api/review-token/:t   → Token-gated, read-only
  POST /api/review-submit     → Token + rate-limited
  POST /api/bookings          → Rate-limited, Zod-validated
  GET  /api/settings          → Public, read-only
  GET  /api/work              → Public, read-only
  GET  /healthz               → Public (Cloud Run probe)
  GET  /api/csrf-token        → Public (SPA bootstrap)

Admin-only (verifyAdmin + requireCsrf or requireReAuth):
  POST   /api/admin/auth       → Google token → JWT (rate-limited)
  POST   /api/admin/logout     → Clears cookie
  All    /api/admin/*          → verifyAdmin required
  DELETE /api/admin/reviews/:id → + requireReAuth
  POST   /api/admin/settings/revert → + requireReAuth
```
