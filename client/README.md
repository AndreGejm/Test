# Lauridsen Production - Studio Website

A brutally efficient, monolithic React and Express.js web application for Lauridsen Production, an audio engineering facility specializing in extreme metal subgenres.

## Architecture Summary
This system is composed of two primary parts running concurrently:
1. **Frontend (Vite / React 18):** A single-page, statically-hostable application styling a custom vanilla CSS design system.
2. **Backend (Node.js / Express):** A resilient RESTful API utilizing Prisma ORM over a local SQLite database, fortified with `helmet`, `sanitize-html`, and rigorous CSRF/rate-limiting security measures.

## Folder Structure
```text
.
├── server/
│   ├── index.js         # Main Express API and Middleware pipeline
│   ├── api.test.js      # Integration tests covering validation & security 
│   ├── prisma/          # SQLite DB schema and migrations
│   └── .env             # Backend secrets
├── src/
│   ├── components/      # Modular React UI, structurally bound to sections
│   ├── App.jsx          # Root Layout & Hash Router for Admin/Public
│   └── config.js        # Centralized configurations (API URLs etc)
└── README.md            # You are here
```

## Component Responsibilities
- **App.jsx:** Acts as a lightweight hash-router (`#admin`). Resolves main layout versus the dashboard.
- **ReviewList & ReviewForm:** Handles the fetching, aggregation, client validation, and submission of user reviews. Uses a "Honeypot" and backend IP rate-limiting to minimize astroturfing.
- **Admin Layout Engine:** Secured via Google OAuth 2.0. Renders an interactive layout containing:
  - **Dashboard:** Server health metrics, audit logs, and data extraction/exports.
  - **SettingsEditor:** Dynamic, version-controlled global website configuration (toggles modules, updates headlines).
  - **WorkManager:** Embedded multimedia dynamic manager overriding hardcoded audio streams.
  - **ReviewModerator:** Re-Auth gated UI enabling soft/hard deletions, approvals, and embedded public replies.

## Authentication & Moderation Flow
1. A public user hits the "Leave Review" button, pushing a record to the database with `status: pending`.
2. The Studio Owner accesses the `/localhost:5173/#admin` hash route.
3. Upon authenticating via a configured Google Account, the backend validates the ID token, verifies the email against the `adminUser` table, and issues a stateless JWT inside an `HttpOnly`, `SameSite=lax` cookie.
4. The dashboard requests data passing `credentials: 'include'`.
5. The owner approves a review, changing the status to `published`. It instantly appears on the public list.

## Local Development & Setup
### Prerequisites
- Node.js (v18+)
- A Google Cloud Console project (for OAuth Credentials)

### Environment Variables

**Root `.env` (Frontend):**
```env
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
# Optional: set VITE_TEST_TOKEN to gate access during external testing
```

**`server/.env` (Backend — full reference):**
```env
PORT=3001
FRONTEND_URL=http://localhost:5173
JWT_SECRET=generate_a_strong_random_string
GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com

# ── Admin & site URLs ─────────────────────────────────────────
ADMIN_EMAIL=lauridsen.production@gmail.com   # Receives new booking notifications
BASE_URL=http://localhost:5173               # Used in review invite links

# ── Rate limiting ─────────────────────────────────────────────
DISABLE_RATE_LIMIT=true   # Set during local testing only; remove for production

# ── Gmail SMTP (App Password) ─────────────────────────────────
# Leave SMTP_PASS blank → dev adapter (emails stored in Admin Mailbox tab)
# Set SMTP_PASS → real Gmail delivery
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=lauridsen.production@gmail.com
SMTP_PASS=                  # ← 16-char App Password (see below)
SMTP_FROM=Lauridsen Production <lauridsen.production@gmail.com>
```

### Running the App
```bash
# Install dependencies
npm install
cd server && npm install

# Initialise / migrate the database
cd server
npx prisma db push
npx prisma generate

# Terminal 1 – Frontend
npm run dev

# Terminal 2 – Backend
cd server && node index.js
```

---

## Booking & Order Workflow (v1.2.0)

### Architecture
```
Customer → BookingModal → POST /api/bookings → Order (DB) → 2 emails
Admin    → Orders tab   → status/drive/msg   → OrderStatusHistory + emails
Customer → review link  → ReviewPage         → ReviewToken (DB) → Review
```

### Hash Routes
| URL | Renders |
|---|---|
| `/` | Public site |
| `/#admin` | Admin console (Google auth required) |
| `/#review?token=<tok>` | Token-gated review form |

### Order Status Flow
```
PENDING → ACCEPTED → IN_PROGRESS → READY_FOR_REVIEW ─┐
                   ↘ REJECTED       ↕ UPDATING        ├→ COMPLETED
                                                       ┘
```
Admin can force any transition by ticking **Force override**.

---

## Email Configuration

### Option A — Dev Mailbox (default, no config needed)
When `SMTP_PASS` is blank, all outgoing emails are stored in the `DevEmail` table.
View them at: **Admin Console → Dev Mailbox tab**.

On server startup you will see:
```
[email] Dev adapter active (SMTP_PASS not set) — emails stored in DevEmail table
```

### Option B — Gmail SMTP (App Password)
1. Go to **[myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
2. Create a password named `Studio Site`
3. Copy the 16-char password (remove spaces)
4. Set in `server/.env`:
   ```env
   SMTP_PASS=abcdefghijklmnop
   ```
5. Restart the server. You will see:
   ```
   [email] SMTP adapter active — emails will be sent via smtp.gmail.com
   ```
   If credentials are wrong it prints an error and **automatically falls back to dev adapter** — emails are never lost.

### Emails Triggered
| Event | Recipient | Subject |
|---|---|---|
| New booking submitted | Customer | `Request received – Pending review (ORD-...)` |
| New booking submitted | Admin | `New booking request – Pending (ORD-...)` |
| Status changed | Customer | `Order update: <status> (ORD-...)` |
| Drive link saved | Customer | `File upload link for Order ORD-...` |
| Order completed | Customer | `Order completed – Leave a review (ORD-...)` |
| Review submitted | Admin | `New review pending moderation (ORD-...)` |

---

## Verifying the Stack

### 1. Health Check
```bash
curl http://localhost:3001/api/health
# Or via Vite proxy (server must be running):
curl http://localhost:5173/api/health
```
Expected response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-22T21:00:00.000Z",
  "uptime_seconds": 42,
  "database": "connected",
  "email_adapter": "smtp",
  "smtp_host": "smtp.gmail.com",
  "rate_limits_disabled": true
}
```
`email_adapter` will be `"dev_mailbox"` when `SMTP_PASS` is not set.

### 2. End-to-End Manual QA
1. Open `http://localhost:5173` → click **Book Session** → fill form → submit
2. Note the `ORD-YYYYMMDD-XXXX` in the confirmation
3. Check inbox of customer email — booking confirmation arrives
4. Check admin email — new booking notification arrives
5. Go to `/#admin` → **Orders** tab → click the order
6. Change status to **Accepted** → customer email arrives with status update
7. Paste a Google Drive folder URL → **Save & Email Customer** → Drive link email arrives
8. Change status to **Completed** → review invite email arrives with `/#review?token=...` link
9. Open the review link → submit a review
10. Admin → **Review Moderation** tab → approve → appears on public site

---

## Testing

### API Integration Tests
The backend features an isolated testing environment that bypasses live dependencies (like rate limiting and Google OAuth) to verify controller logic and email lifecycles.

```bash
cd server
node --test api.test.js              # Core REST endpoints & Security guardrails
node --test email-lifecycle.test.js  # Dedicated E2E email adapter pipeline tests
```

### Playwright E2E UI Tests
Frontend regression testing is handled via Playwright, covering critical user paths by intercepting API responses to ensure the UI behaves predictably without polluting the database.

```bash
# Run all E2E tests
npx playwright test

# Or target specific flows:
npx playwright test tests/order-lifecycle.spec.js
```

### What is Covered
- **Backend API:** Required field validation, XSS sanitization, DB order creation + `ORD-*` ID format, proper route guarding, and email adapter logging.
- **Frontend UI:** Booking modal submissions, Review link validation and submissions, XSS escaping on text renders, and keyboard accessibility.

---

## Security Notes
- Admin JWTs live 24 h. Logout flushes the cookie; to force-expire a session change `JWT_SECRET`.
- Review tokens are SHA-256 hashed in DB. The plaintext appears only in the email and is never logged.
- `SMTP_PASS` must never be committed — `server/.env` is in `.gitignore`.
- Set `DISABLE_RATE_LIMIT=false` (or remove it) before going to production.
