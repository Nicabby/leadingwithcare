import { sections } from "@/content/course";
import type { Lesson, Question } from "@/content/course/types";

const checks = sections.flatMap((section) =>
  section.lessons.filter((l): l is Lesson & { questions: Question[] } => l.kind === "practice" && !!l.questions).map((lesson) => ({ section, lesson })),
);

const letters = "ABCDEFGH";

function Answer({ q }: { q: Question }) {
  if (q.type === "match") {
    return (
      <table className="mt-2 w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            <th scope="col" className="border border-slate-200 bg-slate-100 p-2">Item</th>
            <th scope="col" className="border border-slate-200 bg-slate-100 p-2">Correct match</th>
          </tr>
        </thead>
        <tbody>
          {q.pairs.map((p) => (
            <tr key={p.item}>
              <td className="border border-slate-200 p-2 text-slate-800">{p.item}</td>
              <td className="border border-slate-200 p-2 font-semibold text-emerald-800">{p.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <ul className="mt-2 space-y-1">
      {q.options.map((o, i) => {
        const ok = q.correct.includes(i);
        return (
          <li key={i} className={`flex gap-2 rounded px-2 py-1 text-sm ${ok ? "bg-emerald-50 font-semibold text-emerald-900" : "text-slate-600"}`}>
            <span className="w-5 shrink-0">{q.type === "truefalse" ? "" : `${letters[i]}.`}</span>
            <span>{o}</span>
            {ok && <span className="ml-auto shrink-0">✓</span>}
          </li>
        );
      })}
    </ul>
  );
}

export default function AnswerKey({ print = false }: { print?: boolean }) {
  return (
    <div>
      <p className="text-slate-600">
        Answers and rationales for the lesson knowledge checks and the Final Knowledge Check, matching the practice versions in the learner
        binder. Use this key to prepare, to address common misconceptions in live sessions, and to support learners who are stuck—not to share
        answers directly. [TBD: confirm passing score and attempts in TalentLMS]
      </p>
      {!print && (
        <nav aria-label="Answer key contents" className="mt-4 flex flex-wrap gap-2">
          {checks.map(({ section, lesson }) => (
            <a key={section.id} href={`#${section.id}-${lesson.slug}`} className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100">
              {section.shortTitle}
            </a>
          ))}
        </nav>
      )}
      {checks.map(({ section, lesson }) => (
        <section key={section.id} id={`${section.id}-${lesson.slug}`} className="mt-10 scroll-mt-20">
          <div className="avoid-break-after border-l-4 pl-4" style={{ borderLeftColor: section.color }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{section.title}</p>
            <h2 className="text-xl font-bold text-slate-900">{lesson.title}</h2>
          </div>
          {lesson.scenarioIntro && <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">Scenario: {lesson.scenarioIntro}</p>}
          <ol className="mt-4 space-y-4">
            {lesson.questions.map((q, qi) => (
              <li key={q.id} className="avoid-break rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Question {qi + 1}
                  {q.type === "multi" && " · Select all that apply"}
                  {q.type === "match" && " · Matching"}
                </p>
                <p className="font-semibold text-slate-900">{q.prompt}</p>
                <Answer q={q} />
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold text-navy">Rationale: </span>
                  {q.explanation}
                </p>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
