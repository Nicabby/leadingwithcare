"use client";

import Link from "next/link";
import { useState } from "react";
import { lessonHref, sections } from "@/content";
import { Card } from "@/components/ui";
import { exportNotesPdf } from "@/lib/pdf";
import { lessonKey, setNote, useBinder, useHydrated } from "@/lib/store";

export default function NotesView() {
  const state = useBinder();
  const hydrated = useHydrated();
  const [busy, setBusy] = useState(false);

  const groups = sections
    .map((section) => ({
      section,
      lessons: section.lessons.filter((l) => (state.notes[lessonKey(section.id, l.slug)] ?? "").trim()),
    }))
    .filter((g) => g.lessons.length);

  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            <span aria-hidden="true">📝</span> Your Notes
          </h1>
          <p className="mt-2 text-lg text-slate-600">All your learning notes from across the Leading with Care lessons.</p>
        </div>
        {hydrated && groups.length > 0 && (
          <button
            type="button"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                await exportNotesPdf(state);
              } finally {
                setBusy(false);
              }
            }}
            className="rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 disabled:opacity-60"
          >
            {busy ? "Creating PDF…" : "⬇ Export notes to PDF"}
          </button>
        )}
      </div>

      {!hydrated ? null : groups.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-4xl" aria-hidden="true">
            📝
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">No notes yet</p>
          <p className="mt-1 text-slate-600">Start taking notes in your lessons and they’ll appear here.</p>
          <Link href="/sections/introduction" className="mt-4 inline-block font-medium text-eap hover:underline">
            Go to Lesson 1 →
          </Link>
        </div>
      ) : (
        groups.map(({ section, lessons }) => (
          <section key={section.id} className="mt-10">
            <h2 className="flex items-center gap-3 text-xl font-bold text-navy">
              <span className="h-6 w-1.5 rounded-full" style={{ backgroundColor: section.color }} aria-hidden="true" />
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {lessons.map((lesson) => {
                const key = lessonKey(section.id, lesson.slug);
                return (
                  <div key={key} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label htmlFor={`note-${key}`} className="font-semibold text-slate-900">
                        {lesson.title}
                      </label>
                      <Link href={lessonHref(section.id, lesson.slug)} className="text-sm font-medium text-eap hover:underline">
                        Go to lesson →
                      </Link>
                    </div>
                    <textarea
                      id={`note-${key}`}
                      rows={4}
                      value={state.notes[key]}
                      onChange={(e) => setNote(key, e.target.value)}
                      className="mt-2 w-full resize-y rounded-lg border border-slate-300 p-3 text-slate-800 focus:border-eap focus:outline-none focus:ring-2 focus:ring-eap/30"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}
    </Card>
  );
}
