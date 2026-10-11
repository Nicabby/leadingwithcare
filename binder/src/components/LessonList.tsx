"use client";

import Link from "next/link";
import { lessonHref, type Section } from "@/content";
import { lessonKey, useBinder } from "@/lib/store";

export default function LessonList({ section }: { section: Section }) {
  const { completed, practice } = useBinder();
  return (
    <ol className="space-y-3">
      {section.lessons.map((lesson) => {
        const key = lessonKey(section.id, lesson.slug);
        const done = completed.includes(key);
        const result = practice[key];
        const meta =
          lesson.kind === "practice"
            ? `Practice · ${lesson.questions?.length ?? 0} questions${result ? ` · Last score ${result.score}/${result.total}` : ""}`
            : lesson.worksheets?.length
              ? lesson.worksheets.map((w) => w.title).join(" · ")
              : "";
        return (
          <li key={lesson.slug}>
            <Link
              href={lessonHref(section.id, lesson.slug)}
              className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-5"
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                  done ? "border-transparent text-white" : "border-slate-400 text-transparent"
                }`}
                style={done ? { backgroundColor: "#24497b" } : undefined}
                aria-label={done ? "Completed" : "Not completed"}
              >
                ✓
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900 group-hover:underline">{lesson.title}</span>
                  {lesson.kind === "practice" && (
                    <span className="rounded-full bg-gold/30 px-2 py-0.5 text-xs font-semibold text-navy">Practice</span>
                  )}
                  {lesson.kind === "binder" && (
                    <span className="rounded-full bg-lilac/50 px-2 py-0.5 text-xs font-semibold text-plum">Fill in</span>
                  )}
                </span>
                <span className="mt-1 block text-slate-600">{lesson.summary}</span>
                {meta && <span className="mt-2 block text-sm text-slate-500">{meta}</span>}
              </span>
              <span className="self-center text-slate-400" aria-hidden="true">
                ›
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
