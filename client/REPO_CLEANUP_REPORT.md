# Repository Cleanup Report

## Suspected Unused Files

### R4: Duplicate/Legacy Artifact
These files appear to be legacy backups, test outputs, or one-off tools used during previous development phases.

1. **Root artifact folders:**
   - `Review comments/`
   - `Revisions/`
   - `_odt_extracted/`
   - `_review_bundle/`
   - `_review_bundle1.zip`
   - `full_code_base.txt`
   - `lint-results.json`
   - `temp_admin.js`
   - **Evidence**: `list_dir` output shows these at the project root. None are referenced by Vite, Node tests, or package.json scripts.

2. **Root `.cjs` Scripts:**
   - `extract_odt.cjs`
   - `fix-imports.cjs`
   - `generate_bundle.cjs`
   - `restructure-frontend.cjs`
   - `rewrite-index.cjs`
   - **Evidence**: These appear to be previously executed one-off refactoring scripts. They are not mentioned in `package.json` scripts.

3. **Backend loose files / logs:**
   - `server/extracted.txt`
   - `server/test-output.txt`
   - `server/test-results/`
   - **Evidence**: Text outputs from test runs.

### R1: Not imported anywhere
These files exist in the source directory but never seem to be imported by the application entrypoints.

1. **Frontend:**
   - `src/components/LayoutDebug.jsx` - imported only conditionally/debug code in App.jsx. (Needs review/quarantine)
     - **Evidence**: `grep_search` found it in `App.jsx`, but it's likely dev-only.
   - `PortfolioCard` in `src/features/home/PortfolioRow.jsx`
     - **Evidence**: `knip` reported it as an unused export.
   
2. **Backend scripts:**
   - `server/fix.js`
   - `server/refactor.js`
   - `server/get-token.js`
   - `server/find-token-in-emails.js`
   - `server/test-smtp.cjs`
   - **Evidence**: Not referenced in `server/index.js` or standard execution flows, they are standalone utilities.

## Refactoring Opportunities
- Consolidate backend validation/utilities.
- Remove debug overlay `LayoutDebug.jsx`.
- Clean up tests that rely on `.txt` output artifacts.
- Un-export `PortfolioCard` from `PortfolioRow.jsx`.

---

# Cleanup Plan

## Phase 1: Low-Risk Deletions
- Delete root legacy folders (`Revisions`, `Review comments`, `_odt_extracted`, `_review_bundle`).
- Delete root artifacts (`full_code_base.txt`, `lint-results.json`, `.zip`).
- Delete root refactor scripts (`*.cjs`, `temp_admin.js`).
- Delete backend artifacts (`extracted.txt`, `test-output.txt`, `test-results`).
- Delete backend loose diagnostic scripts (`fix.js`, `refactor.js`, `get-token.js`, `find-token-in-emails.js`, `test-smtp.cjs`).
**Verification:** Run `pnpm install`, `pnpm build`, `npm run test` (in server).

## Phase 2: Refactor & Merge
- Remove unused export `PortfolioCard` in `PortfolioRow.jsx`.
- Remove or quarantine `LayoutDebug.jsx` from `App.jsx`.
**Verification:** Run `pnpm lint`, `pnpm build`.

## Phase 3: Prepare for Firebase Hosting (Frontend)
- Update `firebase.json` (already present, verify).
- Add `.firebaserc`.
- Update `package.json` with deploy script.

## Phase 4: Prepare Backend for Cloud Run
- Add `/healthz` endpoint to `server/index.js`.
- Make sure Graceful shutdown is handled for SIGTERM/SIGINT.
- Add `BACKEND_ENV.md`.
- Ensure connection frontend to backend is env-based and not baked with secrets.
