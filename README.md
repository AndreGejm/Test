# Music Studio Web Project

A modern, full-stack Monorepo for the Music Studio website and backend. Built for scalability, organized by separation of concerns, and configured for Firebase + Google Cloud Run deployment.

## Repository Structure

```
.
├── client/                 # Frontend application (React / Vite)
├── server/                 # Backend application (Express / Prisma)
├── .github/workflows/      # CI/CD pipelines
├── .env.example            # Example configuration
└── firebase.json           # Firebase Hosting configuration & rewrites
```

## Quick Start
1. **Environment Setup:**
   Copy `.env.example` to `.env` in the root (and specifically needed ones to `server/.env` and `client/.env`).
   *Note: Never commit your `.env` files. They are excluded via root `.gitignore`.*

2. **Frontend (Client):**
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Backend (Server):**
   ```bash
   cd server
   npm install
   # Run Prisma migrations if needed
   npx prisma generate
   npm start
   ```

## Git & Branching Strategy

To maintain deterministic deployments and code safety, follow this branching strategy:

- **`main` (Production Branch):** 
  The stable source of truth. All production deployments source from `main`.
- **`experimental` (Feature/Testing Branch):** 
  Used for active development and integration testing. Merged into `main` only when stable.

*Migration Plan:* Merge the legacy `live` branch back into `main` after verifying this monorepo restructure. The `live` branch should eventually be deprecated in favor of using environment variables to control deployment from `main`.

## Deployment Plan

This project utilizes Firebase Hosting for the frontend and Google Cloud Run for the backend. `firebase.json` automatically routes `/api/**` traffic to the Cloud Run service in `europe-north1`.

### 1. Backend (Cloud Run)
Deploy the backend first so the API is available for the frontend:
```bash
cd server
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/studio-backend
gcloud run deploy studio-backend \
  --image gcr.io/YOUR_PROJECT_ID/studio-backend \
  --region europe-north1 \
  --platform managed \
  --allow-unauthenticated
```
*(Ensure you map your environment variables (like `DATABASE_URL` and `JWT_SECRET`) securely in the GCP console or via Secret Manager).*

### 2. Frontend (Firebase Hosting)
Build and deploy the React application:
```bash
cd client
npm run build
cd ..
firebase deploy --only hosting
```
