# Backend Environment Variables (Cloud Run)

The backend (`server/`) requires the following environment variables to function correctly in production. Secrets must be managed via Google Cloud Secret Manager or Cloud Run environment variables. **Never commit them to git**.

| Variable | Requirement | Description | Default / Example |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | **Required** | Environment mode | `production` |
| `PORT` | Optional* | Port server binds to (*Provided automatically by Cloud Run*) | `8080` |
| `FRONTEND_URL` | **Required** | The URL of your Firebase Hosting frontend (for CORS and email links) | `https://your-firebase-app.web.app` |
| `DATABASE_URL` | **Required** | Connection string for PostgreSQL (e.g. Neon.tech) | `postgresql://user:pass@host/db` |
| `JWT_SECRET` | **Required** | Secret key for signing admin sessions | `your_secure_random_string` |
| `GOOGLE_CLIENT_ID`| **Required** | Client ID for Google OAuth login in Admin console | `...apps.googleusercontent.com` |
| `ADMIN_EMAIL` | **Required** | Email permitted to log into Admin console | `admin@example.com` |
| `EMAIL_MODE` | Optional | Set to `production` to send real emails | `development` (logs to DB) |
| `SMTP_HOST` | Optional | SMTP Host for outgoing emails | `smtp.gmail.com` |
| `SMTP_PORT` | Optional | SMTP Port | `587` |
| `SMTP_USER` | Optional | SMTP Username (Gmail address) | `admin@gmail.com` |
| `SMTP_PASS` | Optional | SMTP App Password | `app_password_here` |
| `SMTP_FROM` | Optional | Sender identity for outbound emails | `Studio <admin@gmail.com>` |
| `DISABLE_RATE_LIMIT`| Optional | Disable rate limits (useful for initial testing, but keep false later) | `false` |

## Guardrails & Cloud Run Limits
*   **Concurrency**: Set to 80 (default). Node.js handles concurrent requests well.
*   **Max Instances**: `1` to `3`. Set a low upper bound to prevent billing spikes in case of DDoS.
*   **Min Instances**: `0`. Scales to zero to save costs when inactive.
*   **Timeout**: `300` seconds (default).
*   **Abuse Protection**: Express rate limiting is already built-in to the application code. Make sure `DISABLE_RATE_LIMIT` is `false`.

