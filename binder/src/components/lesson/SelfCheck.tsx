"use client";

import { useEffect, useState } from "react";
import type { SelfCheckQuestion } from "@/content";
import { toggleComplete } from "@/lib/store";

function shuffle<T>(items: T[]) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Unscored practice: questions in random order, no answer key, no feedback. */
export default function SelfCheck({ questions, storageKey }: { questions: SelfCheckQuestion[]; storageKey: string }) {
  const [order, setOrder] = useState<SelfCheckQuestion[] | null>(null);
  const [chosen, setChosen] = useState<Record<string, number>>({});

  // Shuffle only in the browser so the server-rendered page and the client agree.
  useEffect(() => {
    setOrder(shuffle(questions));
  }, [questions]);

  const answered = Object.keys(chosen).length;

  function choose(id: string, i: number) {
    const next = { ...chosen, [id]: i };
    setChosen(next);
    if (Object.keys(next).length === questions.length) toggleComplete(storageKey, true);
  }

  function restart() {
    setChosen({});
    setOrder(shuffle(questions));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!order) return <p className="text-slate-500">Loading questions…</p>;

  return (
    <div className="space-y-6">
      {order.map((q, qi) => (
        <fieldset key={q.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <legend className="sr-only">Question {qi + 1}</legend>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Question {String(qi + 1).padStart(2, "0")}/{String(order.length).padStart(2, "0")}
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{q.prompt}</p>
          <div className="mt-4 space-y-2">
            {q.options.map((opt, oi) => {
              const selected = chosen[q.id] === oi;
              return (
                <label
                  key={oi}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                    selected ? "border-eap bg-eap/5" : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={selected}
                    onChange={() => choose(q.id, oi)}
                    className="mt-1 h-4 w-4 accent-eap"
                  />
                  <span className="text-slate-800">{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className="sticky bottom-4 z-10 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur" aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-slate-900">
              {answered} of {questions.length} answered
            </p>
            <p className="text-sm text-slate-600">
              {answered === questions.length
                ? "You’ve worked through every scenario. Bring your reasoning to the marked Final Knowledge Check in TalentLMS."
                : "Not scored. Choose the response that best reflects care-centered practice."}
            </p>
          </div>
          <button
            type="button"
            onClick={restart}
            className="rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            ↺ Shuffle and start over
          </button>
        </div>
      </div>
    </div>
  );
}
