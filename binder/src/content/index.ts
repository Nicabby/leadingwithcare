import { lesson1 } from "./lesson1-introduction";
import { lesson2 } from "./lesson2-mindset";
import { lesson3 } from "./lesson3-trauma-informed";
import { lesson4 } from "./lesson4-bias";
import { lesson5 } from "./lesson5-cultural";
import { lesson6 } from "./lesson6-equity";
import { lesson7 } from "./lesson7-inquiry";
import { lesson8 } from "./lesson8-capstone";
import { lesson9 } from "./lesson9-final-check";
import type { Field, Lesson, Section, Worksheet } from "./types";

export * from "./types";

export const binder = {
  title: "Leading with Care",
  heading: "Leading with Care: Digital Binder",
  tagline: "A Trauma-Informed and Equity-Centered Inclusive Leadership Course",
  description: [
    "Imagine creating spaces where every individual feels safe, valued, and empowered to thrive. Leading with Care equips you with mindsets and practical tools grounded in trauma-informed, equity-centered, and culturally responsive practices.",
    "This binder is your companion to the course. Use it to review each lesson, capture your reflections, build practical tools, and prepare for the live learning sessions. As you move through the course, it gradually becomes your personal Care-Centered Practice Toolkit.",
  ],
};

export const sections: Section[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9];

export function getSection(id: string) {
  return sections.find((s) => s.id === id);
}

export function getLesson(sectionId: string, slug: string) {
  const section = getSection(sectionId);
  const lesson = section?.lessons.find((l) => l.slug === slug);
  return section && lesson ? { section, lesson } : undefined;
}

export type FlatLesson = { section: Section; lesson: Lesson; index: number };

export const allLessons: FlatLesson[] = sections
  .flatMap((section) => section.lessons.map((lesson) => ({ section, lesson, index: 0 })))
  .map((item, index) => ({ ...item, index }));

export function getNeighbours(sectionId: string, slug: string) {
  const i = allLessons.findIndex((l) => l.section.id === sectionId && l.lesson.slug === slug);
  return { prev: allLessons[i - 1], next: allLessons[i + 1] };
}

export function lessonHref(sectionId: string, slug: string) {
  return `/sections/${sectionId}/${slug}`;
}

export type WorksheetRef = { section: Section; lesson: Lesson; worksheet: Worksheet };

export const allWorksheets: WorksheetRef[] = sections.flatMap((section) =>
  section.lessons.flatMap((lesson) => (lesson.worksheets ?? []).map((worksheet) => ({ section, lesson, worksheet }))),
);

/** fields grouped by step, in display order (used for PDF export) */
export function worksheetSteps(w: Worksheet): { heading?: string; fields: Field[] }[] {
  const groups: { heading?: string; fields: Field[] }[] = [];
  if (w.situation) groups.push({ fields: [w.situation] });
  for (const s of w.steps) {
    if (s.fields?.length) groups.push({ heading: [s.label, s.title].filter(Boolean).join(": "), fields: s.fields });
  }
  if (w.complete) groups.push({ heading: w.complete.title, fields: w.complete.fields });
  if (w.commit) groups.push({ heading: w.commit.title, fields: w.commit.fields });
  return groups;
}

export function worksheetFields(w: Worksheet): Field[] {
  return worksheetSteps(w).flatMap((g) => g.fields);
}
