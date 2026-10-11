"use client";

import type { Field, Worksheet } from "@/content";
import { kindStyle } from "./kindStyle";
import { filledCount, setWork, useBinder, useHydrated } from "@/lib/store";
import { worksheetFields } from "@/content";

function FieldBox({ worksheetId, field, accent }: { worksheetId: string; field: Field; accent: string }) {
  const { work } = useBinder();
  const hydrated = useHydrated();
  const value = hydrated ? (work[worksheetId]?.values[field.id] ?? "") : "";
  const id = `${worksheetId}--${field.id}`;
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-slate-800">
        {field.label}
      </label>
      <textarea
        id={id}
        rows={field.rows ?? 3}
        value={value}
        onChange={(e) => setWork(worksheetId, field.id, e.target.value)}
        placeholder={field.placeholder ?? "Type your response… it saves automatically."}
        className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 bg-white p-3 text-sm leading-relaxed text-slate-800 focus:outline-none focus:ring-2"
        style={{ ["--tw-ring-color" as string]: `${accent}55` }}
      />
    </div>
  );
}

function List({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-2 space-y-1">
      {items.map((a, i) => (
        <li key={i} className="flex gap-2 text-slate-700">
          <span aria-hidden="true" style={{ color }}>
            •
          </span>
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WorksheetCard({ worksheet: w }: { worksheet: Worksheet }) {
  const k = kindStyle[w.kind];
  const { work } = useBinder();
  const hydrated = useHydrated();
  const total = worksheetFields(w).length;
  const filled = hydrated ? filledCount(work[w.id]) : 0;
  const updated = hydrated ? work[w.id]?.updatedAt : undefined;

  return (
    <section
      id={w.id}
      aria-labelledby={`${w.id}-title`}
      className="scroll-mt-20 rounded-2xl border-2 p-5 sm:p-6"
      style={{ borderColor: k.border, backgroundColor: k.bg }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: k.accent }}>
            <span aria-hidden="true">{k.icon}</span>
            {w.eyebrow ?? k.label}
          </p>
          <h2 id={`${w.id}-title`} className="mt-1 text-xl font-semibold text-slate-900">
            {w.title}
          </h2>
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: k.chip, color: k.accent }}>
          {filled}/{total} answered
        </span>
      </div>

      {w.intro?.map((p, i) => (
        <p key={i} className="mt-3 leading-relaxed text-slate-700">
          {p}
        </p>
      ))}

      {w.kind === "live" && (
        <p className="mt-4 rounded-lg border border-[#e6d9b8] bg-white p-3 text-sm text-slate-700">
          <strong className="text-slate-900">Before you share:</strong> remove names and identifying details, leave out
          private or confidential information, focus on the situation rather than a person as the problem, and share only
          what you are comfortable and authorized to discuss.
        </p>
      )}

      {w.example && (
        <details className="mt-4 rounded-xl border border-slate-200 bg-white">
          <summary className="cursor-pointer p-4 font-semibold" style={{ color: k.accent }}>
            See a completed example: {w.example.title}
          </summary>
          <div className="border-t border-slate-100 p-4">
            {w.example.intro && <p className="mb-3 text-slate-700">{w.example.intro}</p>}
            <dl className="space-y-3">
              {w.example.rows.map(([t, d], i) => (
                <div key={i}>
                  <dt className="text-sm font-semibold text-slate-900">{t}</dt>
                  <dd className="text-slate-700">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </details>
      )}

      {w.situation && (
        <div className="mt-5">
          <FieldBox worksheetId={w.id} field={w.situation} accent={k.accent} />
        </div>
      )}

      <ol className="mt-5 space-y-4">
        {w.steps.map((s, i) => (
          <li key={i} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            {(s.label || s.title) && (
              <p className="flex flex-wrap items-baseline gap-x-2">
                {s.label && (
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: k.accent }}>
                    {s.label}
                  </span>
                )}
                {s.title && <span className="font-semibold text-slate-900">{s.title}</span>}
              </p>
            )}
            {s.text && <p className="mt-1 text-slate-700">{s.text}</p>}
            {s.ask && (
              <>
                <p className="mt-2 text-sm font-semibold text-slate-600">Ask:</p>
                <List items={s.ask} color={k.accent} />
              </>
            )}
            {s.list && (
              <>
                {s.listTitle && <p className="mt-2 text-sm font-semibold text-slate-600">{s.listTitle}</p>}
                <List items={s.list} color={k.accent} />
              </>
            )}
            {s.consider && (
              <p className="mt-2 text-slate-700">
                <span className="font-semibold text-slate-900">Consider: </span>
                {s.consider}
              </p>
            )}
            {s.example && <p className="mt-2 rounded-lg bg-slate-50 p-3 text-sm italic text-slate-700">{s.example}</p>}
            {s.fields && (
              <div className="mt-3 space-y-3">
                {s.fields.map((f) => (
                  <FieldBox key={f.id} worksheetId={w.id} field={f} accent={k.accent} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      {w.complete && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold" style={{ color: k.accent }}>
            {w.complete.title}
          </h3>
          {w.complete.intro && <p className="mt-1 text-slate-700">{w.complete.intro}</p>}
          <div className="mt-3 space-y-3">
            {w.complete.fields.map((f) => (
              <FieldBox key={f.id} worksheetId={w.id} field={{ rows: 2, ...f }} accent={k.accent} />
            ))}
          </div>
        </div>
      )}

      {w.commit && (
        <div className="mt-5 rounded-xl border-2 border-dashed bg-white p-4" style={{ borderColor: k.border }}>
          <h3 className="font-semibold" style={{ color: k.accent }}>
            {w.commit.title}
          </h3>
          {w.commit.intro && <p className="mt-1 text-slate-700">{w.commit.intro}</p>}
          <div className="mt-3 space-y-3">
            {w.commit.fields.map((f) => (
              <FieldBox key={f.id} worksheetId={w.id} field={{ rows: 2, ...f }} accent={k.accent} />
            ))}
          </div>
          {w.commit.after && <p className="mt-3 text-sm text-slate-600">{w.commit.after}</p>}
        </div>
      )}

      {w.useWhen && (
        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-700">Return to this tool when you are:</p>
          <List items={w.useWhen} color={k.accent} />
        </div>
      )}

      {w.closing && <p className="mt-4 font-medium text-slate-800">{w.closing}</p>}

      <p className="mt-4 text-right text-xs text-slate-500" aria-live="polite">
        {updated ? `Saved ${new Date(updated).toLocaleString()}` : "Your responses save automatically in this browser."}
      </p>
    </section>
  );
}
