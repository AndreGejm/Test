# Dependency and Build Review
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## 1. Frontend Dependencies

**Source:** `package.json` (root)

### Runtime Dependencies
| Package | Version | Purpose | Status |
| :--- | :--- | :--- | :--- |
| `react` | ^19.2.0 | UI framework | ✅ Current |
| `react-dom` | ^19.2.0 | DOM renderer | ✅ Current |
| `@react-oauth/google` | ^0.13.4 | Google Sign-In | ✅ Current |

### Dev Dependencies (build-only)
| Package | Version | Purpose | Status |
| :--- | :--- | :--- | :--- |
| `vite` | ^7.3.1 | Build tool | ✅ Current |
| `@vitejs/plugin-react` | ^5.1.1 | JSX transform | ✅ Current |
| `eslint` | ^9.39.1 | Linting | ✅ Current |
| `concurrently` | ^9.2.1 | Dev script runner | ✅ Dev only |

### Frontend Vulnerabilities
```
rollup 4.0.0 - 4.58.0
Severity: high
Rollup 4 has Arbitrary File Write via Path Traversal
Fix: npm audit fix
```
> **ISSUE-D1 (High, Build-time only):** `rollup` is a build-time dependency of Vite. The vulnerability relates to file write during build, not the production bundle. Run `npm audit fix` before deploying.

---

## 2. Backend Dependencies

**Source:** `server/package.json`

### Runtime Dependencies
| Package | Purpose | Production | Status |
| :--- | :--- | :--- | :--- |
| `express` | HTTP framework | ✅ | ✅ |
| `@prisma/client` | ORM | ✅ | ✅ |
| `helmet` | Security headers | ✅ | ✅ |
| `cors` | CORS middleware | ✅ | ✅ |
| `cookie-parser` | Cookie parsing | ✅ | ✅ |
| `jsonwebtoken` | JWT signing | ✅ | ✅ |
| `google-auth-library` | Google OAuth verify | ✅ | ✅ |
| `zod` | Validation | ✅ | ✅ |
| `nodemailer` | Email sending | ✅ | ✅ |
| `sanitize-html` | HTML sanitization | ✅ | ✅ |
| `express-rate-limit` | Rate limiting | ✅ | ✅ |
| `dotenv` | Env loading | ✅ | ✅ |

### Dev Dependencies
| Package | Purpose | Leaks to Prod? |
| :--- | :--- | :--- |
| `prisma` | Migrations CLI | ❌ Listed in devDependencies |
| `nodemon` | Dev server reload | ❌ Listed in devDependencies |
| `node-fetch` | Test HTTP calls | ❌ Listed in devDependencies |

> ✅ No dev dependencies leak to production. `npm ci --only=production` in the Dockerfile is correct.

### Backend Vulnerabilities
```
8 vulnerabilities (2 low, 6 high)

minimatch <=3.1.3 (high) - ReDoS via wildcards
@tootallnate/once (high) - Incorrect Control Flow Scoping
```
> **ISSUE-D2 (High):** The `minimatch` and `@tootallnate/once` vulnerabilities are in transitive dependencies. Run `npm audit fix` to resolve if a fix is available. If not, these are in test/build tooling and not in the production runtime path.

---

## 3. Build Reproducibility

| Check | Result |
| :--- | :--- |
| `package-lock.json` committed | ✅ |
| Fixed version ranges (`^` prefix) | ✅ (semver-compatible) |
| Vite build is deterministic | ✅ (asset hashing) |
| `npm ci` used in Dockerfile | ✅ |

---

## 4. Unused / Redundant Dependencies

| Finding | Action |
| :--- | :--- |
| No obviously unused runtime deps found | — |
| `concurrently` is frontend dev-only | ✅ Correct |
| `node-fetch` is backend dev/test-only | ✅ Dev dependency |

---

## 5. Remediation Commands

```bash
# Frontend
cd studio-website/
npm audit fix

# Backend
cd server/
npm audit fix
```

> If `npm audit fix` updates packages with breaking changes, run tests after.
