# Leading with Care — Digital Binder

The participant companion site for the Leading with Care course (Elevate Adolescence Program). It is built with Next.js and deployed on Vercel.

## What's inside
- **9 lesson sections** (`src/content/lesson*.ts`), one per course lesson. Each has:
  - **Lesson Review**: condensed key ideas, frameworks, scenarios, and takeaways.
  - **Binder Activities**: fillable Build Your Toolkit tools, Pause & Check Reflections, practice activities, and Bring to Live Practice prep.
  - **Knowledge Check Practice**: the course's knowledge-check questions with explanations.
- **My Toolkit** (`/toolkit`), **Pause & Check Journal** (`/journal`), **Live Practice Prep** (`/live-practice`): every activity of that type in one place, with export to PDF.
- **Your Notes** (`/your-notes`): lesson notes, with export to PDF.
- **Export Your Whole Binder** (home page): one PDF of everything.

Responses are saved only in the participant's browser (localStorage), so there is no login or database. Participants should use the same device and browser and export PDFs regularly.

## Editing content
All text lives in `src/content/`. Edit a lesson file to change wording; no page code changes needed. Activity responses are stored by the `id` of each worksheet and field, so **don't rename ids after launch** or saved answers will stop appearing.

## Links for the Rise course ("Open your Digital Binder" buttons)
Replace `https://YOUR-SITE.vercel.app` with your Vercel URL.

| Lesson | Link |
|---|---|
| 1. Your Digital Binder / Your First Reflection | `/sections/introduction/binder#l1-starting-point` |
| 2. Build Your Toolkit: Emotional Safety Check | `/sections/mindset-emotional-safety/binder#l2-emotional-safety-check` |
| 2. Pause & Check: When My First Story Feels True | `/sections/mindset-emotional-safety/binder#l2-first-story` |
| 2. Bring to Next Class | `/sections/mindset-emotional-safety/binder#l2-live` |
| 3. Build Your Toolkit: Safety and Support Response Map | `/sections/trauma-informed-practice/binder#l3-safety-support-map` |
| 3. Pause & Check: Responding Without Needing the Story | `/sections/trauma-informed-practice/binder#l3-without-the-story` |
| 3. Bring to Next Class | `/sections/trauma-informed-practice/binder#l3-live` |
| 4. Build Your Toolkit: Bias and Unlearning Check | `/sections/bias-stereotypes/binder#l4-bias-unlearning-check` |
| 4. Pause & Check: When a Judgment Feels Obvious | `/sections/bias-stereotypes/binder#l4-judgment-obvious` |
| 4. Bring to Next Class | `/sections/bias-stereotypes/binder#l4-live` |
| 5. Build Your Toolkit: Cultural Responsiveness Check | `/sections/cultural-responsiveness/binder#l5-cultural-responsiveness-check` |
| 5. Pause & Check Reflection | `/sections/cultural-responsiveness/binder#l5-familiar-different` |
| 5. Bring to Next Class | `/sections/cultural-responsiveness/binder#l5-live` |
| 6. Build Your Toolkit: Equity and Access Decision Guide | `/sections/equity-access/binder#l6-equity-access-guide` |
| 6. Pause & Check: When "Same" Feels Fairest | `/sections/equity-access/binder#l6-same-feels-fairest` |
| 6. Bring to Next Class | `/sections/equity-access/binder#l6-live` |
| 7. Practice: Build an Inquiry Response | `/sections/inquiry-lived-truth/binder#l7-inquiry-practice` |
| 7. Build Your Toolkit: Lived Truth and Inquiry Framework | `/sections/inquiry-lived-truth/binder#l7-lived-truth-framework` |
| 7. Pause & Check: When Their Version Is Different From Mine | `/sections/inquiry-lived-truth/binder#l7-different-version` |
| 7. Bring to Next Class | `/sections/inquiry-lived-truth/binder#l7-live` |
| 8. Scenario 1: The Community Ideas Lab | `/sections/care-centered-lens/binder#l8-scenario-ideas-lab` |
| 8. Scenario 2: The Weekend Leadership Program | `/sections/care-centered-lens/binder#l8-scenario-weekend` |
| 8. Build Your Toolkit: Care-Centered Practice Review Lens | `/sections/care-centered-lens/binder#l8-review-lens` |
| 8. 30-Day Practice Commitment | `/sections/care-centered-lens/binder#l8-30-day` |
| 8. Pause & Check: Looking at My Practice Differently | `/sections/care-centered-lens/binder#l8-practice-differently` |
| 8. Bring to Next Class | `/sections/care-centered-lens/binder#l8-live` |
| My Toolkit (all tools) | `/toolkit` |

## Run locally
```
npm install
npm run dev
```

## Deploy to Vercel
This repo holds two sites, so in Vercel: **Add New → Project → import `Nicabby/leadingwithcare` → set Root Directory to `binder`** (framework preset: Next.js). Every push to `main` then redeploys automatically.
