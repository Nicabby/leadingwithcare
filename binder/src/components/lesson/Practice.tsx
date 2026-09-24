"use client";

import { useState } from "react";
import type { Question } from "@/content";
import { setPractice, toggleComplete } from "@/lib/store";

type Answer = number[] | Record<number, string>;

function isCorrect(q: Question, a: Answer | undefined) {
  if (!a) return false;
  if (q.type === "match") {
    const m = a as Record<number, string>;
    return q.pairs.every((p, i) => m[i] === p.answer);
  }
  const sel = [...(a as number[])].sort();
  const cor = [...q.correct].sort();
  return sel.length === cor.length && sel.every((v, i) => v === cor[i]);
}

function hasAnswer(q: Question, a: Answer | undefined) {
  if (!a) return false;
  if (q.type === "match") return q.pairs.every((_, i) => (a as Record<number, string>)[i]);
  return (a as number[]).length > 0;
}

export default function Practice({ questions, storageKey }: { questions: Question[]; storageKey: string }) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [round, setRound] = useState(0);

  const checkedCount = questions.filter((q) => checked[q.id]).length;
  const score = questions.filter((q) => checked[q.id] && isCorrect(q, answers[q.id])).length;
  const finished = checkedCount === questions.length;

  function check(q: Question) {
    const next = { ...checked, [q.id]: true };
    setChecked(next);
    if (questions.every((qq) => next[qq.id])) {
      const finalScore = questions.filter((qq) => isCorrect(qq, answers[qq.id])).length;
      setPractice(storageKey, { score: finalScore, total: questions.length, at: new Date().toISOString() });
      if (finalScore / questions.length >= 0.8) toggleComplete(storageKey, true);
    }
  }

  function reset() {
    setAnswers({});
    setChecked({});
    setRound((r) => r + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div key={round} className="space-y-6">
      {questions.map((q, qi) => {
        const a = answers[q.id];
        const done = checked[q.id];
        const correct = done && isCorrect(q, a);
        const multi = q.type === "multi";
        return (
          <fieldset
            key={q.id}
            className={`rounded-xl border bg-white p-5 shadow-sm ${
              done ? (correct ? "border-emerald-300" : "border-amber-300") : "border-slate-200"
            }`}
          >
            <legend className="sr-only">Question {qi + 1}</legend>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Question {String(qi + 1).padStart(2, "0")}/{String(questions.length).padStart(2, "0")}
              {multi && " · Select all that apply"}
              {q.type === "match" && " · Matching"}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{q.prompt}</p>

            {q.type !== "match" ? (
              <div className="mt-4 space-y-2">
                {q.options.map((opt, oi) => {
                  const selected = ((a as number[]) ?? []).includes(oi);
                  const isRight = q.correct.includes(oi);
                  let tone = "border-slate-200 hover:bg-slate-50";
                  if (done && isRight) tone = "border-emerald-400 bg-emerald-50";
                  else if (done && selected && !isRight) tone = "border-amber-400 bg-amber-50";
                  else if (selected) tone = "border-eap bg-eap/5";
                  return (
                    <label key={oi} className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${tone}`}>
                      <input
                        type={multi ? "checkbox" : "radio"}
                        name={q.id}
                        disabled={done}
                        checked={selected}
                        onChange={(e) => {
                          const prev = (a as number[]) ?? [];
                          const next = multi
                            ? e.target.checked
                              ? [...prev, oi]
                              : prev.filter((x) => x !== oi)
                            : [oi];
                          setAnswers({ ...answers, [q.id]: next });
                        }}
                        className="mt-1 h-4 w-4 accent-eap"
                      />
                      <span className="text-slate-800">{opt}</span>
                      {done && isRight && <span className="ml-auto text-sm font-semibold text-emerald-700">Correct</span>}
                    </label>
                  );
                })}
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {q.pairs.map((p, pi) => {
                  const val = (a as Record<number, string>)?.[pi] ?? "";
                  const right = done && val === p.answer;
                  const id = `${q.id}-${pi}`;
                  return (
                    <div
                      key={pi}
                      className={`grid gap-2 rounded-lg border p-3 sm:grid-cols-2 sm:items-center ${
                        done ? (right ? "border-emerald-400 bg-emerald-50" : "border-amber-400 bg-amber-50") : "border-slate-200"
                      }`}
                    >
                      <label htmlFor={id} className="font-medium text-slate-800">
                        {p.item}
                      </label>
                      <div>
                        <select
                          id={id}
                          disabled={done}
                          value={val}
                          onChange={(e) =>
                            setAnswers({ ...answers, [q.id]: { ...((a as Record<number, string>) ?? {}), [pi]: e.target.value } })
                          }
                          className="w-full rounded-md border border-slate-300 bg-white p-2 text-sm text-slate-800"
                        >
                          <option value="">Choose a match…</option>
                          {q.choices.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {done && !right && <p className="mt-1 text-sm text-amber-800">Answer: {p.answer}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {done ? (
              <div
                className={`mt-4 rounded-lg p-3 text-sm ${correct ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}
                role="status"
              >
                <strong>{correct ? "Correct. " : "Not quite. "}</strong>
                {q.explanation}
              </div>
            ) : (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!hasAnswer(q, a)}
                  onClick={() => check(q)}
                  className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check answer
                </button>
              </div>
            )}
          </fieldset>
        );
      })}

      <div className="sticky bottom-4 z-10 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur" aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-slate-900">
              {finished ? `Your score: ${score}/${questions.length} (${Math.round((score / questions.length) * 100)}%)` : `${checkedCount} of ${questions.length} answered`}
            </p>
            <p className="text-sm text-slate-600">
              {finished
                ? score / questions.length >= 0.8
                  ? "Great work—you’re ready for the graded knowledge check in the course."
                  : "The course requires 80%. Review the lessons and try again."
                : "Correct so far: " + score}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            ↺ Start over
          </button>
        </div>
      </div>
    </div>
  );
}
