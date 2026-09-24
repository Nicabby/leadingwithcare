import type { Section } from "./types";

// PLACEHOLDER CONTENT — replace with the Leading with Care course content when it is ready.
export const module2: Section = {
  id: "module-2",
  title: "Module 2: [Title TBD]",
  shortTitle: "Module 2",
  eyebrow: "Module Two",
  description: "[Placeholder] One-sentence description of this section.",
  color: "#7f4f74",
  ink: "#ffffff",
  tint: "#f6eef4",
  overview: ["[Placeholder] Overview paragraph for this section."],
  keyConcept: "[Placeholder] Key concept.",
  objectives: ["[Placeholder] Learning objective 1.", "[Placeholder] Learning objective 2."],
  lessons: [
    {
      slug: "module-2-lesson-1",
      title: "Lesson 1: [Title TBD]",
      subtitle: "[Placeholder] Lesson subtitle",
      kind: "lesson",
      summary: "[Placeholder] One-sentence lesson summary.",
      overview: ["[Placeholder] Lesson overview paragraph."],
      keyIdeas: [{ title: "[Placeholder] Key idea", text: "[Placeholder] Explanation of the key idea." }],
      reflection: {
        intro: "[Placeholder] Why this reflection matters.",
        prompt: "[Placeholder] Reflection question?",
        digDeeper: "[Placeholder] Dig-deeper question?",
        finish: "[Placeholder] Sentence starter…",
      },
      takeaways: ["[Placeholder] Key takeaway."],
    },
    {
      slug: "module-2-practice-check",
      title: "Module 2 Practice Check",
      subtitle: "[Placeholder] Practice questions",
      kind: "practice",
      summary: "[Placeholder] Practice questions for Module 2.",
      overview: ["[Placeholder] Describe what this practice check covers."],
      questions: [
        {
          id: "m2-1",
          type: "single",
          prompt: "[Placeholder] Sample question — replace with course content.",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: [0],
          explanation: "[Placeholder] Explain why the correct answer is correct.",
        },
      ],
    },
  ],
};
