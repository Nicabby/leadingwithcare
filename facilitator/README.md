# Leading with Care — Facilitator Guide

Standalone Next.js site for facilitators of the Leading with Care live virtual sessions, plus a matching PDF edition.

## Pages
- `/` Start Here — program at a glance, principles, debrief sequence, virtual delivery
- `/sessions/session-1` … `session-4` — purpose, objectives, prep checklist, learner message, run of show, fully scripted facilitation guide, discussion bank, slide outline, handouts, troubleshooting, after-session reflection
- `/handouts` — printable role cards, scenario cards, observer sheets, worksheets
- `/answer-key` — knowledge checks + capstone (reads the learner binder's question data in `src/content/course`)
- `/quick-reference` — module summary, reference card, and course tools
- `/print` — the combined print edition used to generate the PDF

## Editing content
**Currently placeholder content** marked `[Placeholder]`. Session content lives in `src/content/session1.ts` … `session4.ts` and `src/content/handouts.ts`; the module summary and course tools are in `src/components/QuickReference.tsx`.

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
`vercel --prod` from this folder, or push to GitHub and import in Vercel.
The site is set to `noindex` so it won't appear in search results; it is not password protected.
