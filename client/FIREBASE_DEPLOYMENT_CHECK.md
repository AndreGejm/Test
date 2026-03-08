# Firebase Hosting Deployment Check
**Date:** 2026-03-04 | **Status:** Pre-Publication

---

## Summary

Firebase Hosting is properly configured. The SPA rewrite is in place and the build directory is correct. The main gap is the missing **`VITE_API_URL` production environment file**, which means the frontend will call `/api` relative to the Firebase hostname, which will not reach the Cloud Run backend.

---

## 1. firebase.json Configuration

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
```

| Check | Result | Note |
| :--- | :--- | :--- |
| Public directory = `dist` | ✅ | Matches `vite build` output |
| SPA rewrite rule present | ✅ | `"**" → "/index.html"` |
| Node modules excluded | ✅ | In ignore list |
| Dotfiles excluded | ✅ | `**/.*` in ignore |

---

## 2. Build Determinism

| Check | Result |
| :--- | :--- |
| `npm run build` passes | ✅ |
| Build output is in `dist/` | ✅ |
| No `console.error` or debug artifacts expected in prod bundle | ✅ (Vite strips in production mode) |
| LayoutDebug tree-shaken in production | ✅ (`import.meta.env.DEV` check) |
| No server-only code in frontend bundle | ✅ (backend is fully separate) |

---

## 3. Environment Variables

| Check | Result | Action Required |
| :--- | :--- | :--- |
| `VITE_API_URL` in `src/config.js` | ✅ | `import.meta.env.VITE_API_URL \|\| '/api'` |
| `.env.production` file present | ❌ | **Must create before deploy** |
| Production API URL documented | ✅ | In `DEPLOYMENT_GUIDE.md` |

> **⚠️ ISSUE-F1 (Blocker):** Without a `.env.production` file (or CI variable `VITE_API_URL`), the frontend will make calls to `https://your-firebase-app.web.app/api`, which does not exist. All API calls will 404.
>
> **Fix:** Create `.env.production` in the project root:
> ```env
> VITE_API_URL=https://studio-backend-xxxxx-uc.a.run.app/api
> ```
> This file should NOT be committed (it is already covered by `.gitignore`). Pass it in your CI/CD pipeline or build step.

---

## 4. Static Asset Caching

| Check | Result |
| :--- | :--- |
| Custom `headers` in firebase.json | ❌ Missing |
| Default Firebase cache behavior | Applied by Firebase (1hr for HTML, 365d for hashed assets) |

> **ISSUE-F2 (Minor):** For optimal performance, add explicit `Cache-Control` headers in `firebase.json`. Vite hashes JS/CSS filenames, so they can be cached indefinitely. `index.html` should be `no-cache`.
>
> **Fix (low priority):**
> ```json
> "headers": [
>   { "source": "/**/*.@(js|css|woff2)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}] },
>   { "source": "/index.html", "headers": [{"key": "Cache-Control", "value": "no-cache"}] }
> ]
> ```

---

## 5. Firebase Project ID

| Check | Result |
| :--- | :--- |
| `.firebaserc` present | ✅ |
| Project ID placeholder filled in | ❗ Placeholder `your-firebase-project-id` still set |

> **ISSUE-F3 (Blocker):** The `.firebaserc` still contains the placeholder `"your-firebase-project-id"`. Must be replaced with the actual Firebase project ID before running `firebase deploy`.
