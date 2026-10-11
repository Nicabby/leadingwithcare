"use client";

import Link from "next/link";
import { useState } from "react";
import { allWorksheets, lessonHref, sections, worksheetFields, type WorksheetKind } from "@/content";
import { Card } from "@/components/ui";
import WorksheetCard from "@/components/lesson/WorksheetCard";
import { kindStyle } from "@/components/lesson/kindStyle";
import { exportWorksheetsPdf } from "@/lib/pdf";
import { filledCount, setName, useBinder, useHydrated } from "@/lib/store";

type Props = {
  kinds: WorksheetKind[];
  icon: string;
  title: string;
  description: string[];
  pdf: { title: string; subtitle: string; intro: string; file: string };
};

export function NameAndExport({
  kinds,
  pdf,
  accent,
  tint,
  border,
  countLabel,
}: {
  kinds: WorksheetKind[];
  pdf: Props["pdf"];
  accent: string;
  tint: string;
  border: string;
  countLabel: string;
}) {
  const state = useBinder();
  const hydrated = useHydrated();
  const [includeBlank, setIncludeBlank] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const items = allWorksheets.filter((r) => kinds.includes(r.worksheet.kind));
  const started = items.filter((r) => filledCount(state.work[r.worksheet.id]) > 0).length;

  async function onExport() {
    setBusy(true);
    setError("");
    try {
      await exportWorksheetsPdf(state, { ...pdf, items, includeBlank });
    } catch {
      setError("Something went wrong creating the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 rounded-2xl border p-5" style={{ borderColor: border, backgroundColor: tint }}>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <label htmlFor="learner-name" className="block text-sm font-semibold" style={{ color: accent }}>
            Your name (appears on your PDF)
          </label>
          <input
            id="learner-name"
            value={hydrated ? state.name : ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-eap/30"
          />
        </div>
        <button
          type="button"
          onClick={onExport}
          disabled={busy}
          className="rounded-md px-5 py-3 font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: accent }}
        >
          {busy ? "Creating PDF…" : "⬇ Export to PDF"}
        </button>
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={includeBlank}
          onChange={(e) => setIncludeBlank(e.target.checked)}
          className="h-4 w-4 accent-navy"
        />
        Include unanswered prompts with writing lines (useful as a printable worksheet)
      </label>
      <p className="mt-3 text-sm" style={{ color: accent }} aria-live="polite">
        {hydrated ? `${started} of ${items.length} ${countLabel} started` : `${items.length} ${countLabel}`}
      </p>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export default function WorksheetCollection({ kinds, icon, title, description, pdf }: Props) {
  const state = useBinder();
  const hydrated = useHydrated();
  const k = kindStyle[kinds[0]];

  return (
    <Card>
      <h1 className="text-3xl font-bold text-slate-900">
        <span aria-hidden="true">{icon}</span> {title}
      </h1>
      {description.map((p, i) => (
        <p key={i} className={i === 0 ? "mt-2 text-lg text-slate-600" : "mt-2 text-slate-600"}>
          {p}
        </p>
      ))}

      <NameAndExport kinds={kinds} pdf={pdf} accent={k.accent} tint={k.bg} border={k.border} countLabel="activities" />

      <p className="mt-4 text-sm text-slate-500">
        Everything you write is private and saved only in this browser on this device. You can work here or on each
        lesson’s Binder Activities page—both stay in sync.
      </p>

      {sections.map((section) => {
        const items = allWorksheets.filter((r) => r.section.id === section.id && kinds.includes(r.worksheet.kind));
        if (!items.length) return null;
        return (
          <section key={section.id} className="mt-10" aria-labelledby={`c-${section.id}`}>
            <h2 id={`c-${section.id}`} className="flex items-center gap-3 text-xl font-bold text-navy">
              <span className="h-6 w-1.5 rounded-full" style={{ backgroundColor: section.color }} aria-hidden="true" />
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {items.map(({ lesson, worksheet }) => {
                const entry = hydrated ? state.work[worksheet.id] : undefined;
                const filled = filledCount(entry);
                const total = worksheetFields(worksheet).length;
                return (
                  <details
                    key={worksheet.id}
                    className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider" style={{ color: kindStyle[worksheet.kind].accent }}>
                          {worksheet.eyebrow ?? kindStyle[worksheet.kind].label}
                        </span>
                        <span className="block font-semibold text-slate-900">{worksheet.title}</span>
                        <span className="text-sm text-slate-500">
                          {filled
                            ? `${filled}/${total} answered · last updated ${entry?.updatedAt ? new Date(entry.updatedAt).toLocaleDateString() : ""}`
                            : "Not started"}
                        </span>
                      </span>
                      <span className="text-slate-400 transition group-open:rotate-90" aria-hidden="true">
                        ›
                      </span>
                    </summary>
                    <div className="border-t border-slate-100 p-3 sm:p-4">
                      <WorksheetCard worksheet={worksheet} />
                      <Link
                        href={`${lessonHref(section.id, lesson.slug)}#${worksheet.id}`}
                        className="mt-3 inline-block text-sm font-medium text-eap hover:underline"
                      >
                        Open in the lesson →
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
