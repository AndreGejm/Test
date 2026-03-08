# Revised Product Requirements Document (PRD)

Project: Lauridsen Production - Studio Website Status: Production
Go-Live Hardening Revision

Purpose This appendix refines the original PRD to align with
operational, security, and reliability requirements identified during
architectural review. These changes clarify system contracts and runtime
guarantees for a Node.js / Express / SQLite deployment model.

---

## 1. Core Objectives

- **OBJ_01 Portfolio and Services**
  The system shall provide a public-facing portfolio and service overview for extreme metal audio engineering.

- **OBJ_02 Booking System**
  The system shall allow potential clients to submit booking requests securely.

- **OBJ_03 Admin Dashboard**
  The system shall provide an authenticated dashboard for studio administrators to manage orders, update public content, and moderate reviews.

- **OBJ_04 Authentic Review System**
  The system shall provide an invite-only review mechanism strictly tied to completed orders.

- **OBJ_05 Reliability Requirement (NEW)**
  The system must fail safely under:
  - invalid user input
  - database contention
  - SMTP or OAuth downtime
  without hanging the UI or crashing the backend process.

---

## 2. Technical Stack (Non-Functional Requirements)

- **NFR_01 Frontend**
  React 19 (Vite) SPA with Vanilla CSS.

- **NFR_02 Backend**
  Node.js with Express.

- **NFR_03 Database**
  SQLite managed via Prisma ORM.

  *Operational Constraint (NEW)*
  SQLite runtime must:
  - enable `PRAGMA journal_mode=WAL`
  - configure `busy_timeout >= 5000ms`
  This mitigates single-writer contention under concurrent booking submissions.

- **NFR_04 Security Middleware**
  Helmet, sanitize-html, CSRF (Double Submit Cookie), and rate limiting.

  *CSRF Cookie Requirement (NEW)*
  CSRF cookies must use:
  - `__Host-` prefix
  - `Secure` flag
  - `SameSite=Strict`
  to prevent cross-subdomain injection.

- **NFR_05 Communication**
  SMTP for production with Dev-Fallback adapter for test environments.

---

## 3. Functional Requirements (FR)

### 3.1 Public Site

- **FR_PUB_01 Navigation**
  All portfolio and service sections must render on a single scrollable page.

- **FR_PUB_02 Dynamic Content**
  Frontend configuration must be retrieved via `/api/settings`.

- **FR_PUB_03 Booking**
  Booking modal must collect: Name, Email, Service Type, Genre, Message, Song Quantity or Length.

- **FR_PUB_04 Reviews Display**
  Only published reviews and rating aggregates shall be displayed.

### 3.2 Admin Site (Flows)
*(Implied by OBJ_03 and standard flows)*

### 3.3 Email Lifecycle

- **FR_EML_01 Booking Confirmation**
  Booking confirmation emails must be sent to client and admin.

- **FR_EML_02 Status Updates**
  Clients must be notified on order status changes.

- **FR_EML_03 Review Tokens**
  Review tokens must be:
  - single-use
  - time-bound
  - rejected if reused or expired

- **FR_EML_04 Moderation Flow**
  Submitted reviews must enter a PENDING moderation state.

### 3.4 API Contracts

- **API_CON_01 Error Response Format**
  All API errors must return:
  `{ error: { code, message, request_id } }`

- **API_CON_02 Security**
  Production responses must never expose stack traces.

- **API_CON_03 UI Recovery**
  Frontend must recover gracefully from all 4xx and 5xx responses.

- **API_CON_04 Backend Stability (NEW)**
  All asynchronous Express route handlers must use centralized error middleware to prevent unhandled promise rejections from terminating the Node.js process.

---

## 4. Security, Reliability and Observability

- **SR_01 CSRF Enforcement**
  All state-mutating endpoints must require valid CSRF tokens.

- **SR_02 Automated CSRF Header Injection (NEW)**
  Frontend must attach CSRF headers automatically using request interceptors.

- **SR_03 Database File Protection (NEW)**
  SQLite database file must reside outside the web root directory to prevent download via traversal attacks.

- **OBS_01 Structured Logging**
  All requests must log:
  - method
  - route
  - status
  - request_id
  - execution duration

- **OBS_02 Error Logging**
  Errors must be logged once using a stable internal `error_code`.

- **OBS_03 Concurrency Monitoring (NEW)**
  System must track `SQLITE_BUSY` errors to detect booking load saturation.

- **OBS_04 Health Endpoint**
  Provide `/api/health` for liveness monitoring.

---

## 5. Persistence Constraints

- **DB_01 Backup Requirement**
  Automated periodic backups of SQLite DB must be configured.

- **DB_02 Migration Consistency**
  Prisma migrations must be applied consistently across environments.

- **DB_03 Deployment Constraint**
  Backend must run in a single-instance write-safe configuration when using SQLite.
