"use client";

import Link from "next/link";
import type { Reflection } from "@/content";
import { setJournal, useBinder, wordCount, type JournalEntry } from "@/lib/store";

const fields: { key: keyof Omit<JournalEntry, "updatedAt">; label: string; num: number }[] = [
  { key: "prompt", label: "Prompt", num: 1 },
  { key: "digDeeper", label: "Dig Deeper", num: 2 },
  { key: "finish", label: "Finish This Sentence", num: 3 },
];

export default function ReflectionBox({ reflection, storageKey }: { reflection: Reflection; storageKey: string }) {
  const { journal } = useBinder();
  const entry = journal[storageKey];
  const total = fields.reduce((n, f) => n + wordCount(entry?.[f.key]), 0);

  return (
    <section aria-labelledby="reflection-heading" className="rounded-2xl border border-lilac bg-[#fbf6fc] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum text-white" aria-hidden="true">
          📓
        </span>
        <h2 id="reflection-heading" className="text-xl font-semibold text-plum">
          Reflection
        </h2>
      </div>
      <p className="mt-3 text-plum/90">{reflection.intro}</p>
      <p className="mt-2 text-sm font-medium text-plum">Take a pause…</p>

      <div className="mt-5 space-y-5">
        {fields.map((f) => {
          const question = reflection[f.key];
          const id = `${storageKey}-${f.key}`;
          return (
            <div key={f.key}>
              <label htmlFor={id} className="block">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-plum">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-plum text-[10px]">{f.num}</span>
                  {f.label}
                </span>
                <span className="mt-1 block font-medium text-slate-800">{question}</span>
              </label>
              <textarea
                id={id}
                rows={f.key === "finish" ? 2 : 4}
                value={entry?.[f.key] ?? (f.key === "finish" ? "" : "")}
                onChange={(e) => setJournal(storageKey, f.key, e.target.value)}
                placeholder={
                  f.key === "finish"
                    ? question
                    : "Take a moment to step back and reflect. Your thoughts are saved automatically as you type…"
                }
                className="mt-2 w-full resize-y rounded-lg border border-lilac bg-white p-3 font-mono text-sm leading-relaxed text-slate-800 focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/30"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-plum">
          {total} words · saved to your Reflection Journal
        </span>
        <Link
          href="/journal"
          className="rounded-md border border-lilac bg-white px-3 py-1.5 text-sm font-medium text-plum hover:bg-lilac/30"
        >
          📋 View Reflection Journal
        </Link>
      </div>
    </section>
  );
}
