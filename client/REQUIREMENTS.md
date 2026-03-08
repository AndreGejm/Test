# Product Requirements Document (PRD) 
**Project:** Lauridsen Production - Studio Website
**Status:** Active / Production-ready

This document serves as the source of truth for what the studio website must do. Whenever new features are planned or bugs are discovered, they should be evaluated against these core requirements first.

---

## 1. Core Objectives
1. Provide a public-facing portfolio and service overview for extreme metal audio engineering.
2. Enable potential clients to submit booking requests securely.
3. Allow the studio admin to manage orders, update public site content, and moderate reviews via a secure authenticated dashboard.
4. Provide an invite-only review system tied strictly to completed orders.

## 2. Technical Stack (Non-Functional Requirements)
- **Frontend:** React 18 (Vite), Single Page Application (SPA).
- **Styling:** Vanilla CSS (custom design system, no external UI frameworks).
- **Backend:** Node.js with Express.
- **Database:** SQLite managed via Prisma ORM.
- **Security:** Helmet, strict sanitization (`sanitize-html`), CSRF tokens (Double-Submit Cookie), rate-limiting.
- **Authentication:** Google OAuth 2.0 (Admin gate).
- **Communication:** SMTP or Dev-Fallback email adapter.

---

## 3. Functional Requirements

### 3.1 Public Site (Unauthenticated)
- **FR_PUB_01 (Navigation):** The user can view the Hero, Work Portfolio, Services, Gear List, About, and Contact sections on a single scrolling page.
- **FR_PUB_02 (Dynamic Content):** The website must fetch its structural configuration (headlines, toggles for sections) from the backend `/api/settings` endpoint.
- **FR_PUB_03 (Booking):** A user can submit a booking request via a modal containing: Name, Email, Service Type, Genre, Message, Song Quantity/Length.
- **FR_PUB_04 (Reviews Display):** A user can read published reviews with aggregate rating statistics (average rating, histogram).

### 3.2 Private / Admin Site (Authenticated)
- **FR_ADM_01 (Authentication):** The `/admin` route is guarded by Google OAuth. Only the configured `ADMIN_EMAIL` can generate a valid session token.
- **FR_ADM_02 (Settings Management):** The admin can toggle visibility of public sections and edit text (e.g., hero headlines, social links).
- **FR_ADM_03 (Portfolio Management):** The admin can add, edit, or remove embedded multimedia links (YouTube, Spotify, Bandcamp, etc.) displayed in the "Work" section.
- **FR_ADM_04 (Order Management):** The admin can view all submitted orders and progress them through a strict status lifecycle: `PENDING → ACCEPTED → IN_PROGRESS → READY_FOR_REVIEW → UPDATING → COMPLETED`.
- **FR_ADM_05 (Order Comms):** The admin can attach a Google Drive link to an order and dispatch an email to the client directly from the dashboard.
- **FR_ADM_06 (Review Moderation):** The admin can read pending reviews, publish them, delete them, or write public replies.

### 3.3 Email Lifecycle & Review Invites
- **FR_EML_01 (Booking Confirmations):** When an order is created, an email is sent to both the Customer and the Admin.
- **FR_EML_02 (Status Updates):** When an order status changes via the Admin dashboard, the Customer receives a notification email.
- **FR_EML_03 (Review Invites):** When an order reaches `COMPLETED` status, the Customer receives a unique, single-use, time-bound link to leave a review.
- **FR_EML_04 (Review Submission):** Submitting a review via the invite link marks the token as used, creates the review in `PENDING` state, and emails the Admin.

---

## 4. Security & Reliability Requirements
- **SR_01 (CSRF Protection):** All state-mutating requests (POST, PUT, PATCH, DELETE) must require a valid CSRF token.
- **SR_02 (Rate Limiting):** Public endpoints (Bookings, Reviews) and Auth inputs must be heavily rate-limited to prevent abuse.
- **SR_03 (Data Validation):** All incoming data must be validated strictly against a schema (Zod) before interacting with the database.
- **SR_04 (HTML Escape):** All user text inputs (like reviews or booking messages) must be stripped of executable HTML/scripts prior to DB storage.
- **SR_05 (Safe Failures):** The backend must not crash under invalid input or external service failure (e.g., SMTP downtime). The UI must handle 4xx and 5xx errors gracefully.
