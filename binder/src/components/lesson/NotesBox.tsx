"use client";

import { setNote, useBinder, wordCount } from "@/lib/store";

export default function NotesBox({ storageKey }: { storageKey: string }) {
  const { notes } = useBinder();
  const value = notes[storageKey] ?? "";
  return (
    <section aria-labelledby="notes-heading" className="no-print-empty">
      <h2 id="notes-heading" className="mb-3 text-lg font-semibold text-slate-900">
        Your Notes
      </h2>
      <textarea
        aria-labelledby="notes-heading"
        rows={6}
        value={value}
        onChange={(e) => setNote(storageKey, e.target.value)}
        placeholder="Capture key insights, questions, or ideas you want to try with your team…"
        className="w-full resize-y rounded-lg border border-slate-300 bg-white p-3 text-slate-800 focus:border-eap focus:outline-none focus:ring-2 focus:ring-eap/30"
      />
      <p className="mt-1 text-right text-xs text-slate-500">{wordCount(value)} words · saved automatically</p>
    </section>
  );
}
