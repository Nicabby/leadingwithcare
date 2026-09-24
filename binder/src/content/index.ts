import { orientation } from "./orientation";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { summary } from "./summary";
import type { Lesson, Resource, Section } from "./types";

export * from "./types";

export const binder = {
  title: "Leading with Care",
  heading: "Leading with Care: Learner Binder",
  tagline: "Supporting materials for the Leading with Care course",
  description: "[Placeholder] Course description for Leading with Care.",
  audience: "[Placeholder] Who this course is for.",
};

/**
 * Resource documents are password protected (the PDFs themselves are encrypted).
 * Set SHOW_RESOURCE_PASSWORD to false to hide the password on the Resource Packages page.
 */
export const RESOURCE_PASSWORD = "CHANGE-ME";
export const SHOW_RESOURCE_PASSWORD = false;

export const sections: Section[] = [orientation, module1, module2, module3, summary];

// Add resource PDFs to public/resources and list them here.
export const resources: Resource[] = [];

export function getSection(id: string) {
  return sections.find((s) => s.id === id);
}

export function getLesson(sectionId: string, slug: string) {
  const section = getSection(sectionId);
  const lesson = section?.lessons.find((l) => l.slug === slug);
  return section && lesson ? { section, lesson } : undefined;
}

export type FlatLesson = { section: Section; lesson: Lesson; index: number };

export const allLessons: FlatLesson[] = sections.flatMap((section) =>
  section.lessons.map((lesson) => ({ section, lesson, index: 0 })),
).map((item, index) => ({ ...item, index }));

export function getNeighbours(sectionId: string, slug: string) {
  const i = allLessons.findIndex((l) => l.section.id === sectionId && l.lesson.slug === slug);
  return { prev: allLessons[i - 1], next: allLessons[i + 1] };
}

export function lessonHref(sectionId: string, slug: string) {
  return `/sections/${sectionId}/${slug}`;
}

export function getResource(id: string) {
  return resources.find((r) => r.id === id);
}

export const reflections = allLessons.filter((l) => l.lesson.reflection);
