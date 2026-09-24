"use client";

import Link from "next/link";
import { useState } from "react";
import { lessonHref, reflections, sections } from "@/content";
import { Card } from "@/components/ui";
import { exportJournalPdf } from "@/lib/pdf";
import { lessonKey, setJournal, setName, useBinder, useHydrated, type JournalEntry } from "@/lib/store";

const parts: { key: keyof Omit<JournalEntry, "updatedAt">; label: string }[] = [
  { key: "prompt", label: "Prompt" },
  { key: "digDeeper", label: "Dig Deeper" },
  { key: "finish", label: "Finish This Sentence" },
];

export default function JournalView() {
  const state = useBinder();
  const hydrated = useHydrated();
  const [includeBlank, setIncludeBlank] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const answered = reflections.filter(({ section, lesson }) => {
    const e = state.journal[lessonKey(section.id, lesson.slug)];
    return e && (e.prompt || e.digDeeper || e.finish);
  }).length;

  async function onExport() {
    setBusy(true);
    setError("");
    try {
      await exportJournalPdf(state, includeBlank);
    } catch {
      setError("Something went wrong creating the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card>
      <h1 className="text-3xl font-bold text-slate-900">
        <span aria-hidden="true">📓</span> Reflection Journal
      </h1>
      <p className="mt-2 text-lg text-slate-600">
        All of your reflections from across the course. Each reflection invites you to pause, look inward,
        and consider how your values, habits, and internal responses shape the way you lead.
      </p>

      <div className="mt-6 rounded-2xl border border-lilac bg-[#fbf6fc] p-5">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <label htmlFor="learner-name" className="block text-sm font-semibold text-plum">
              Your name (appears on your PDF)
            </label>
            <input
              id="learner-name"
              value={hydrated ? state.name : ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              className="mt-1 w-full rounded-md border border-lilac bg-white p-2.5 text-slate-800 focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/30"
            />
          </div>
          <button
            type="button"
            onClick={onExport}
            disabled={busy}
            className="rounded-md bg-plum px-5 py-3 font-semibold text-white hover:bg-plum/90 disabled:opacity-60"
          >
            {busy ? "Creating PDF…" : "⬇ Export to PDF"}
          </button>
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={includeBlank}
            onChange={(e) => setIncludeBlank(e.target.checked)}
            className="h-4 w-4 accent-plum"
          />
          Include unanswered prompts with writing lines (great for a printable journal)
        </label>
        <p className="mt-3 text-sm text-plum" aria-live="polite">
          {hydrated ? `${answered} of ${reflections.length} reflections started` : `${reflections.length} reflections`}
        </p>
        {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Your journal is private and saved only in this browser. You can write here or in each lesson—both stay in sync.
      </p>

      {sections.map((section) => {
        const items = reflections.filter((r) => r.section.id === section.id);
        if (!items.length) return null;
        return (
          <section key={section.id} className="mt-10" aria-labelledby={`j-${section.id}`}>
            <h2 id={`j-${section.id}`} className="flex items-center gap-3 text-xl font-bold text-navy">
              <span className="h-6 w-1.5 rounded-full" style={{ backgroundColor: section.color }} aria-hidden="true" />
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {items.map(({ lesson }) => {
                const key = lessonKey(section.id, lesson.slug);
                const entry = hydrated ? state.journal[key] : undefined;
                const r = lesson.reflection!;
                return (
                  <details
                    key={key}
                    className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
                    open={Boolean(entry && (entry.prompt || entry.digDeeper || entry.finish))}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                      <span>
                        <span className="block font-semibold text-slate-900">{lesson.title}</span>
                        <span className="text-sm text-slate-500">
                          {entry && (entry.prompt || entry.digDeeper || entry.finish)
                            ? `Last updated ${entry.updatedAt ? new Date(entry.updatedAt).toLocaleDateString() : ""}`
                            : "Not started"}
                        </span>
                      </span>
                      <span className="text-slate-400 transition group-open:rotate-90" aria-hidden="true">
                        ›
                      </span>
                    </summary>
                    <div className="space-y-4 border-t border-slate-100 p-4">
                      {parts.map((p) => {
                        const id = `${key}-${p.key}-journal`;
                        return (
                          <div key={p.key}>
                            <label htmlFor={id} className="block">
                              <span className="text-xs font-bold uppercase tracking-wider text-plum">{p.label}</span>
                              <span className="mt-0.5 block font-medium text-slate-800">{r[p.key]}</span>
                            </label>
                            <textarea
                              id={id}
                              rows={p.key === "finish" ? 2 : 3}
                              value={entry?.[p.key] ?? ""}
                              onChange={(e) => setJournal(key, p.key, e.target.value)}
                              className="mt-2 w-full resize-y rounded-lg border border-slate-300 p-3 text-sm text-slate-800 focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/30"
                            />
                          </div>
                        );
                      })}
                      <Link href={lessonHref(section.id, lesson.slug)} className="inline-block text-sm font-medium text-eap hover:underline">
                        Go to lesson →
                      </Link>
                    </div>
                  </details>
                );
              })}
            </div>
          </section>
        );
      })}
    </Card>
  );
}
