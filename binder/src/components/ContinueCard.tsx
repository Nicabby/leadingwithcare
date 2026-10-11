"use client";

import Link from "next/link";
import { allLessons, lessonHref } from "@/content";
import { lessonKey, useBinder, useHydrated } from "@/lib/store";

export default function ContinueCard() {
  const { completed } = useBinder();
  const hydrated = useHydrated();
  if (!hydrated || completed.length === 0) return null;

  const next = allLessons.find((l) => !completed.includes(lessonKey(l.section.id, l.lesson.slug)));
  if (!next) {
    return (
      <div className="mt-6 rounded-xl border border-lilac bg-[#f8f1fa] p-4 text-navy">
        <p className="font-semibold">🎉 You’ve completed every page in this binder.</p>
        <p className="mt-1 text-sm">
          Revisit <Link className="underline" href="/toolkit">My Toolkit</Link> and export it as a PDF to keep.
        </p>
      </div>
    );
  }
  return (
    <Link
      href={lessonHref(next.section.id, next.lesson.slug)}
      className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
    >
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Continue where you left off</span>
        <span className="mt-1 block font-semibold text-slate-900">{next.lesson.title}</span>
        <span className="text-sm text-slate-600">{next.section.shortTitle}</span>
      </span>
      <span className="text-eap" aria-hidden="true">→</span>
    </Link>
  );
}
