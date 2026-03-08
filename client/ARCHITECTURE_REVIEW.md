# Architecture Review
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## 1. File Tree Summary

```
studio-website/
├── index.html                     ← Vite entry point
├── vite.config.js                 ← Vite config (proxy /api → :3001, host 0.0.0.0)
├── package.json                   ← Frontend deps: react, @react-oauth/google
├── firebase.json                  ← Firebase Hosting (public: dist, SPA rewrites)
├── .firebaserc                    ← Project alias placeholder
├── .gitignore                     ← Covers .env*, SQLite DB, WAL files
│
├── src/
│   ├── main.jsx                   ← React entry (ErrorBoundary wrapping)
│   ├── App.jsx                    ← Hash-based router (#admin, #review, public)
│   ├── config.js                  ← VITE_API_URL env variable config
│   ├── components/
│   │   ├── Navbar.jsx             ← Navigation
│   │   ├── LayoutDebug.jsx        ← DEV-only debug overlay
│   │   ├── ErrorBoundary.jsx      ← Global React error boundary
│   │   └── common/               ← ConfirmModal, Toast
│   └── features/
│       ├── home/                  ← Hero, Services, Work, Gear, Philosophy, PortfolioRow, Contact
│       ├── admin/                 ← AdminDashboard + components (Orders, Settings, Reviews, Work, Mailbox)
│       ├── bookings/              ← BookingModal
│       └── reviews/               ← ReviewsSection, ReviewList, ReviewPage
│
└── server/
    ├── index.js                   ← Express app entrypoint, binds PORT/0.0.0.0
    ├── prisma.js                  ← Singleton Prisma client
    ├── validate-env.js            ← Zod-based env validation at startup
    ├── validations.js             ← Zod schemas (booking, review, settings, work, status, driveLink)
    ├── prisma/schema.prisma       ← PostgreSQL (production), 9 models
    ├── Dockerfile                 ← Multi-step Cloud Run container
    ├── routes/
    │   ├── auth.js                ← POST /api/admin/auth, /logout
    │   ├── bookings.js            ← POST /api/bookings (rate-limited)
    │   ├── reviews.js             ← GET/POST /api/reviews, token/submit
    │   └── admin.js               ← Full CRUD admin (verifyAdmin + requireCsrf guards)
    ├── controllers/
    │   ├── auth.js                ← Google ID token verify → JWT → __Host cookie
    │   ├── bookings.js            ← Booking creation + email notification
    │   ├── reviews.js             ← Public reviews, token validation, atomic submit
    │   └── admin.js               ← Admin CRUD: reviews, settings, work, orders, mailbox
    ├── middlewares/
    │   ├── auth.js                ← JWT verify + DB revocation check + requireReAuth
    │   ├── csrf.js                ← Double-submit cookie CSRF
    │   ├── rateLimiters.js        ← express-rate-limit (auth/booking/review)
    │   └── errorHandler.js        ← Global error handler (no stack trace in prod)
    ├── services/email.js          ← SMTP (nodemailer) + dev mailbox fallback
    └── utils/logger.js            ← Structured JSON logger with secret redaction
```

---

## 2. Major Components

| Component | Technology | Notes |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (Vite 7) | SPA, hash-based routing |
| **Backend Runtime** | Node.js (Express 5) | CommonJS modules |
| **API Layer** | REST (Express Router) | 4 route groups |
| **Database** | PostgreSQL via Prisma ORM | SQLite for local dev |
| **Auth** | Google OAuth 2.0 + JWT | `__Host-` prefixed cookies |
| **Email** | Nodemailer (SMTP) | Dev mailbox fallback |
| **CSRF** | Double-submit cookie | `__Host-csrf_token` |
| **Rate Limiting** | express-rate-limit | Per-route limiters |
| **Security** | Helmet, sanitize-html, Zod | Input validation + headers |
| **Logging** | Custom structured logger | AsyncLocalStorage, secret redaction |
| **Hosting (frontend)** | Firebase Hosting | SPA rewrites configured |
| **Hosting (backend)** | Google Cloud Run | Dockerfile present |

---

## 3. Entrypoints

| Entrypoint | Path | Description |
| :--- | :--- | :--- |
| Frontend build | `index.html` / `src/main.jsx` | Vite entry; tree-shaking from main.jsx |
| Backend start | `server/index.js` | `node index.js` or via Dockerfile `CMD` |
| Auth routes | `POST /api/admin/auth` | Google ID token login |
| Review routes | `GET/POST /api/reviews`, `/api/review-submit` | Public review endpoints |
| Booking routes | `POST /api/bookings` | Public booking creation |
| Admin routes | `GET/PUT/POST/DELETE /api/admin/*` | Protected by verifyAdmin + CSRF |
| Health | `GET /healthz`, `GET /api/health` | Cloud Run health check |
| CSRF token | `GET /api/csrf-token` | Issued on page load |
| Background workers | None | No cron jobs or workers |

---

## 4. Architectural Smells

| Finding | Severity | Details |
| :--- | :--- | :--- |
| **Hash-based routing** | Low | App uses `window.location.hash` for routing instead of React Router. Works, but limits deep-linking, SEO, and future code-splitting. |
| **Inline route handlers in index.js** | Low | `/api/settings` and `/api/work` inline handlers in `index.js` rather than in controllers — inconsistent with the rest. Minor. |
| **Trust proxy set to 'loopback'** | Medium | `app.set('trust proxy', 'loopback')` is correct for local, but Cloud Run sits behind a **Google L7 load balancer**, which is NOT `loopback`. Must be changed to `1` for Cloud Run to get the correct `X-Forwarded-For` header. If not fixed, rate limiter will see Google's internal IP and not the client IP. |
| **`require()` inside async route body** | Low | `require('./services/email')` is called inside `/api/health` handler on every request — harmless due to Node module caching, but should be hoisted. |
| **No pagination validation on `/api/reviews`** | Low | `page` and `limit` query params are parsed with `parseInt()` but not clamped — a client can request `limit=999999`. |
| **LayoutDebug.jsx loaded in all builds** | Low | `LayoutDebug` is imported and conditionally rendered with `import.meta.env.DEV`. It is tree-shaken in prod builds but is visible in the source. Acceptable. |
| **No background jobs / queue** | Note | Emails are sent synchronously in the request path after DB commit. A network issue with SMTP would not affect the booking response, as email failures are caught and logged. Acceptable for current traffic. |
