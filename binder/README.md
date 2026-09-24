# Leading with Care — Learner Binder

A standalone Next.js site that accompanies the Leading with Care course (Elevate Adolescence Program).

## What's inside
- **Sections & lessons** (`src/content/*.ts`): orientation, modules 1–3, and summary & capstone. **Currently placeholder content** marked `[Placeholder]` — replace with course content. Add or rename module files and update the `sections` list in `src/content/index.ts`. Edit content here — no page code changes needed.
- **Practice knowledge checks** (a `kind: "practice"` lesson in each module) and the **Capstone** practice.
- **Reflection Journal** (`/journal`): every reflection in one place, exportable to PDF (optionally with blank writing lines).
- **Your Notes** (`/your-notes`): lesson notes, exportable to PDF.
- **Resource Packages** (`/resource-packages`): encrypted PDFs in `public/resources/` (none yet — set `RESOURCE_PASSWORD` in `src/content/index.ts`).

Notes, reflections, and progress are stored in the learner's browser (localStorage) only.

## Resource password
The PDFs are AES-256 encrypted with qpdf. To add or replace a resource:
```
qpdf --encrypt <open-password> <owner-password> 256 --print=full --modify=form --extract=n --accessibility=y -- input.pdf public/resources/output.pdf
```
Then add/update its entry in `src/content/index.ts`. To show the password on the Resource Packages page, set `SHOW_RESOURCE_PASSWORD = true`.

## Run locally
```
npm install
npm run dev
```

## Deploy
Push to a new GitHub repo and import it in Vercel (framework preset: Next.js), or run `vercel --prod` from this folder.
