import type { Section } from "./types";

// PLACEHOLDER CONTENT — replace with the Leading with Care course content when it is ready.
export const orientation: Section = {
  id: "orientation",
  title: "Program Orientation",
  shortTitle: "Orientation",
  eyebrow: "Start Here",
  description: "[Placeholder] One-sentence description of this section.",
  color: "#467edd",
  ink: "#ffffff",
  tint: "#eef3fc",
  overview: ["[Placeholder] Overview paragraph for this section."],
  keyConcept: "[Placeholder] Key concept.",
  objectives: ["[Placeholder] Learning objective 1.", "[Placeholder] Learning objective 2."],
  lessons: [
    {
      slug: "orientation-lesson-1",
      title: "What to Expect",
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
  ],
};
