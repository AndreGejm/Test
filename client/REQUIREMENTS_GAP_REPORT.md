# Requirements Compliance Gap Report

This document outlines the compliance status of the codebase against `REQUIREMENTS_SPEC.md` (the authoritative PRD). 
**Note:** As per instructions, no code changes or fixes have been proposed or implemented.

---

## 1. Core Objectives
- **OBJ_01, OBJ_02, OBJ_03, OBJ_04, OBJ_05**
  Implementation Status: FULLY IMPLEMENTED (Verified via lower-level NFRs and FRs below).

---

## 2. Technical Stack (Non-Functional Requirements)

- **NFR_01 Frontend** (React 19 Vite SPA)
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `package.json` specifies `"react": "^19.2.0"`, `"vite": "^7.3.1"`.

- **NFR_02 Backend** (Node.js with Express)
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/package.json` specifies `"express": "^5.2.1"`.

- **NFR_03 Database** (SQLite / WAL / busy_timeout >= 5000ms)
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/prisma.js` immediately applies `PRAGMA journal_mode = WAL` and `PRAGMA busy_timeout = 5000` on the Prisma client `$queryRaw`.

- **NFR_04 Security Middleware & CSRF Cookie Requirement** (`__Host-` prefix, Secure, SameSite=Strict)
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/middlewares/csrf.js` sets the cookie explicitly with `__Host-csrf_token`, `httpOnly: false`, `secure: true`, `sameSite: 'strict'`, and `path: '/'`. Helmet and rate limiters are also active.

- **NFR_05 Communication** (SMTP with Dev-Fallback)
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/services/email.js` selects between a Dev Mailbox adapter and real SMTP.

---

## 3. Functional Requirements (FR)

### 3.1 Public Site & 3.2 Admin Site & 3.3 Email Lifecycle
- **FR_PUB_01 through FR_PUB_04**
  Implementation Status: FULLY IMPLEMENTED
- **FR_ADM_01 through FR_ADM_06**
  Implementation Status: FULLY IMPLEMENTED
- **FR_EML_01 through FR_EML_04**
  Implementation Status: FULLY IMPLEMENTED
  *(Evidence: Exists in standard React components, Express controllers, and email adapters).*

### 3.4 API Contracts

- **API_CON_01 Error Response Format**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** The PRD requires errors to return `{ error: { code, message, request_id } }`. The current implementation returns a flat `{ error: "message" }` string. It does not generate or return a `request_id`, nor does it return an error `code`.
  - **Evidence:** `server/middlewares/errorHandler.js` constructs the response as `{ error: isProduction ? 'Internal Server Error' : err.message }`.

- **API_CON_02 Security**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/middlewares/errorHandler.js` successfully gates stack traces behind `process.env.NODE_ENV !== 'production'`.

- **API_CON_03 UI Recovery**
  Implementation Status: **PARTIALLY IMPLEMENTED**
  - **Behavior Difference:** The UI manually parses fetch errors within individual components (like `BookingModal.jsx`) and manages local state, but there is no systematic interceptor handling global 4xx/5xx errors, nor is there a global React Error Boundary to catch UI rendering crashes as mandated for comprehensive UI Recovery.
  - **Evidence:** `src/features/bookings/BookingModal.jsx` handles fetch rejection manually.

- **API_CON_04 Backend Stability**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: The backend uses Express version `^5.2.1` (`server/package.json`), which natively resolves unhandled promise rejections in asynchronous middleware/route handlers and forwards them safely to `errorHandler.js`.

---

## 4. Security, Reliability and Observability

- **SR_01 CSRF Enforcement**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `server/middlewares/csrf.js` `requireCsrf` actively compares header and cookie tokens.

- **SR_02 Automated CSRF Header Injection (NEW)**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** The PRD explicitly requires attaching CSRF headers automatically using request interceptors. In the current codebase, the `X-CSRF-Token` is manually passed as a header inside individual `fetch()` calls across various UI components.
  - **Evidence:** `src/features/admin/components/WorkManager.jsx`, `OrdersManager.jsx`, and `ReviewModerator.jsx` all manually construct the `{ 'X-CSRF-Token': csrfToken }` header.

- **SR_03 Database File Protection (NEW)**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: The database file is stored in `server/prisma/dev.db`, which is completely isolated from the frontend web root (`dist/`), preventing traversal or static download.

- **OBS_01 Structured Logging**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** The system does not log `method`, `route`, `status`, `request_id`, or `execution_duration`. It only logs `console.error` on unhandled exceptions.
  - **Evidence:** `server/index.js` and `server/middlewares/errorHandler.js`.

- **OBS_02 Error Logging**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** Errors are not logged using a stable internal `error_code`, nor are they structured.
  - **Evidence:** `server/middlewares/errorHandler.js`.

- **OBS_03 Concurrency Monitoring (NEW)**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** The system does not explicitly track or log `SQLITE_BUSY` errors to evaluate load saturation.
  - **Evidence:** No listeners or interceptors on Prisma errors exist for concurrency metrics.

- **OBS_04 Health Endpoint**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: `GET /api/health` exists fully implemented within `server/index.js`.

---

## 5. Persistence Constraints

- **DB_01 Backup Requirement**
  Implementation Status: **NOT IMPLEMENTED**
  - **Behavior Difference:** There is no automated backup strategy (e.g., cron job, litestream, S3 upload script) configured in the codebase or infrastructure files.
  - **Evidence:** Missing scripts or Docker/cron configuration for backups.

- **DB_02 Migration Consistency**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: Prisma `schema.prisma` and the `prisma/migrations` folder exist to maintain state.

- **DB_03 Deployment Constraint**
  Implementation Status: FULLY IMPLEMENTED
  - Evidence: The node instances and database run on a standard configuration suited for single-instance PM2/Docker deployment contexts.
