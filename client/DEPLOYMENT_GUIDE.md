# Complete Deployment Guide

This guide walks you through deploying the Studio Website (Frontend) to Firebase Hosting, and the Backend to Google Cloud Run. 

## 1. Local Development
*   **Install dependencies**: Run `npm install` in both the root directory and the `server` directory.
*   **Run frontend locally**: `npm run dev`
*   **Run backend locally**: `cd server && npm run dev`
*   Ensure your `server/.env` is configured correctly (refer to `.env.example`).

## 2. Deploying the Backend (Cloud Run)
1.  **Prerequisites**: Install the [gcloud CLI](https://cloud.google.com/sdk/docs/install) and authenticate: `gcloud auth login`.
2.  **Ensure Production Database**: SQLite does not work well on Cloud Run. You must migrate your Prisma schema safely to PostgreSQL (e.g., Neon or Supabase) before deployment.
3.  **Building and Deploying**:
    Navigate to the `server/` directory and deploy using the provided `Dockerfile`.
    ```bash
    cd server
    gcloud run deploy studio-backend --source . --region us-central1 --allow-unauthenticated
    ```
4.  **Limits & Guardrails**:
    When asked by the interactive prompt, or via GCP Console, enforce the following limits to prevent bill shock:
    *   **Maximum instances**: 1 to 3 (start with 1, it handles ~80 concurrent requests).
    *   **Minimum instances**: 0 (scales to zero to save cost).
5.  **Environment Variables**: Go to the Google Cloud Console -> Cloud Run -> `studio-backend` -> Edit & Deploy New Revision -> Variables & Secrets. Add all required secrets defined in `BACKEND_ENV.md`.

## 3. Deploying the Frontend (Firebase Hosting)
1.  **Firebase CLI**: Install it using `npm install -g firebase-tools`.
2.  **Authenticate**: `firebase login`
3.  **Link Project**: Edit the `.firebaserc` file and replace `"your-firebase-project-id"` with your actual Google Cloud/Firebase project ID.
4.  **Connect to Backend**: Create a `.env.production` file in the project root with the URL of your new Cloud Run backend:
    ```env
    VITE_API_URL=https://studio-backend-xxxxx-uc.a.run.app/api
    ```
5.  **Deploy**: 
    Use the newly added NPM script:
    ```bash
    npm run deploy:hosting
    ```

## 4. Verification steps 
*   Run `npm run lint` and `npm run test` (in server) to ensure the local code passes required checks.
*   Once deployed to Firebase, visit your production URL and test the Admin login and the public portfolio.
