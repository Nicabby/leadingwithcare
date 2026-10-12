# Leading with Care — Facilitator Guide

Standalone Next.js site for facilitators of the Leading with Care live virtual sessions, plus a matching PDF edition.

## Pages
- `/` Start Here — program at a glance, principles, debrief sequence, virtual delivery
- `/sessions/session-1` … `session-6` — every session uses the same layout: Session Overview · Before the Session · 90-Minute Run of Show · Facilitation Guide (per major activity: purpose, set-up, facilitator language, instructions, debrief, listen for, watch for, Digital Binder connection) · Close
- `/handouts` — printable role cards, scenario cards, observer sheets, worksheets
- `/answer-key` — all lesson knowledge checks + the Final Knowledge Check (reads the learner binder's question data in `src/content/course`)
- `/quick-reference` — lesson focus, Pause & Check, and the Care-Centered Practice Toolkit at a glance
- `/print` — the combined print edition used to generate the PDF

## Editing content
Sessions are currently an **outline**: structure and draft content drawn from the course, with open items written as `[TBD …]` (highlighted in the guide). Session content lives in `src/content/session1.ts` … `session6.ts`; handouts in `src/content/handouts.ts`. Change a session's `status` to `"Draft"` or `"Final"` as it is completed.

`src/content/course/` is a copy of the binder's `src/content` course files (used for the answer key) — copy them across again whenever the binder content changes.

## Regenerating the PDF
After editing content:
```
npm install
npm run build
npm start            # in one terminal
npm i -D playwright && npx playwright install chromium   # first time only
node scripts/make-pdf.mjs http://localhost:3000
npm run build        # rebuild so the new PDF is served
```
The PDF is saved to `public/Leading-with-Care-Facilitator-Guide.pdf`.

## Deploy
Live site: https://leadingwithcare-4v1e.vercel.app (Vercel project root directory: `facilitator`). Pushes to `main` redeploy automatically.
The site is set to `noindex` so it won't appear in search results; it is not password protected.
