import Link from "next/link";
import { getHandout, guide, type Segment, type Session } from "@/content";
import { Bullets, Callout, Checklist, Eyebrow, H2, ModeBadge } from "./ui";
import CopyButton from "./CopyButton";

function accent(session: Session) {
  return session.ink === "#ffffff" ? session.color : "#24497b";
}

function Scenarios({ segment }: { segment: Segment }) {
  if (!segment.scenarios?.length) return null;
  return (
    <div className="mt-4 space-y-3">
      {segment.scenarios.map((sc) => (
        <div key={sc.title} className="avoid-break rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scenario</p>
          <p className="font-semibold text-slate-900">{sc.title}</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2 print:grid-cols-2">
            <div className="rounded-lg border-t-4 border-t-periwinkle bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-[#3f4595]">Youth version</p>
              <p className="mt-1 text-sm text-slate-700">{sc.youth}</p>
            </div>
            <div className="rounded-lg border-t-4 border-t-navy bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">Workplace version</p>
              <p className="mt-1 text-sm text-slate-700">{sc.workplace}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SegmentCard({ segment, session, handoutHref }: { segment: Segment; session: Session; handoutHref: (id: string) => string }) {
  const color = accent(session);
  return (
    <article id={segment.id} className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <header className="avoid-break flex flex-wrap items-center gap-3 rounded-t-2xl border-b border-slate-200 px-4 py-3 sm:px-5" style={{ backgroundColor: session.tint }}>
        <span className="rounded-md px-2.5 py-1 text-sm font-bold" style={{ backgroundColor: session.color, color: session.ink }}>
          {segment.start}–{segment.end} min
        </span>
        <h3 className="text-lg font-bold text-slate-900">{segment.title}</h3>
        <span className="flex flex-wrap gap-1.5 sm:ml-auto">
          {segment.modes.map((m) => (
            <ModeBadge key={m} mode={m} />
          ))}
        </span>
      </header>

      <div className="space-y-5 p-4 sm:p-5">
        <p className="text-slate-700">
          <span className="font-semibold text-slate-900">Goal: </span>
          {segment.goal}
        </p>

        {segment.say && (
          <div className="avoid-break">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color }}>
              🎙️ Suggested language
            </p>
            <div className="space-y-2 rounded-r-lg border-l-4 bg-slate-50 py-3 pl-4 pr-3" style={{ borderLeftColor: color }}>
              {segment.say.map((line, i) => (
                <p key={i} className="italic text-slate-800">
                  “{line}”
                </p>
              ))}
            </div>
          </div>
        )}

        {segment.steps && (
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color }}>
              ▶ Facilitator steps
            </p>
            <ol className="space-y-2">
              {segment.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: session.color, color: session.ink }}
                  >
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {segment.chat && (
          <div className="avoid-break rounded-xl border border-dashed border-slate-300 bg-white p-4">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">💬 Paste into chat / broadcast</p>
              <CopyButton text={segment.chat} />
            </div>
            <p className="whitespace-pre-line font-mono text-sm text-slate-800">{segment.chat}</p>
          </div>
        )}

        {segment.poll && (
          <div className="avoid-break rounded-xl border border-slate-200 bg-[#eef3fc] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-navy">📊 Zoom poll</p>
            <p className="mt-1 font-semibold text-slate-900">{segment.poll.question}</p>
            <ul className="mt-2 space-y-1">
              {segment.poll.options.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-slate-700">
                  <span aria-hidden="true">○</span>
                  {o}
                </li>
              ))}
            </ul>
            {segment.poll.note && <p className="mt-2 text-sm text-slate-600">Facilitator note: {segment.poll.note}</p>}
          </div>
        )}

        <Scenarios segment={segment} />

        {segment.debrief && (
          <div className="avoid-break">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color }}>
              ❓ Debrief questions
            </p>
            <Bullets items={segment.debrief} color={session.color} />
          </div>
        )}

        {segment.listenFor && (
          <div className="avoid-break rounded-lg bg-[#f1f2fb] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#3f4595]">👂 Listen for</p>
            <div className="mt-2">
              <Bullets items={segment.listenFor} color="#b1b4e5" />
            </div>
          </div>
        )}

        {(segment.tip || segment.ifShort) && (
          <div className="grid gap-3 md:grid-cols-2 print:grid-cols-2">
            {segment.tip && (
              <div className="avoid-break rounded-lg border border-gold bg-[#f9f5ec] p-3 text-sm text-slate-700">
                <span className="font-semibold text-navy">💡 Facilitator tip: </span>
                {segment.tip}
              </div>
            )}
            {segment.ifShort && (
              <div className="avoid-break rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">⏩ If time is short: </span>
                {segment.ifShort}
              </div>
            )}
          </div>
        )}

        {segment.handouts && (
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Handouts: </span>
            {segment.handouts.map((id, i) => {
              const h = getHandout(id);
              return (
                <span key={id}>
                  {i > 0 && " · "}
                  <Link href={handoutHref(id)} className="text-eap underline">
                    {h?.title ?? id}
                  </Link>
                </span>
              );
            })}
          </p>
        )}
      </div>
    </article>
  );
}

export default function SessionView({ session, print = false }: { session: Session; print?: boolean }) {
  const color = accent(session);
  const handoutHref = (id: string) => (print ? `#handout-${id}` : `/handouts#${id}`);
  const anchor = (id: string) => (print ? `${session.slug}-${id}` : id);

  return (
    <div>
      <Eyebrow color={color}>{session.eyebrow} · 90 minutes · Virtual</Eyebrow>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{session.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{session.subtitle}</p>

      <Callout title="Purpose" color={session.color} tint={session.tint}>
        {session.purpose}
      </Callout>

      <H2 id={anchor("objectives")}>Learning Objectives</H2>
      <p className="mb-3 text-slate-600">By the end of this session, learners will be able to:</p>
      <ol className="space-y-2">
        {session.objectives.map((o, i) => (
          <li key={i} className="flex gap-3 text-slate-700">
            <span className="font-bold" style={{ color }}>
              {i + 1}.
            </span>
            <span>{o}</span>
          </li>
        ))}
      </ol>

      <H2>Why This Matters</H2>
      <p className="leading-relaxed text-slate-700">{session.why}</p>

      <H2>Concept Map</H2>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {session.concepts.map((c) => (
          <div key={c.title} className="avoid-break rounded-xl border border-slate-200 border-t-4 bg-white p-4" style={{ borderTopColor: session.color }}>
            <h3 className="font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-700">{c.text}</p>
          </div>
        ))}
      </div>

      <H2 id={anchor("prepare")}>Before the Session</H2>
      <div className="grid gap-4 lg:grid-cols-2 print:grid-cols-2">
        <div className="avoid-break rounded-xl border border-slate-200 p-4">
          <h3 className="mb-3 font-semibold text-slate-900">🧰 Facilitator prep checklist</h3>
          <Checklist items={session.prep} />
        </div>
        <div className="space-y-4">
          <div className="avoid-break rounded-xl border border-slate-200 p-4">
            <h3 className="mb-2 font-semibold text-slate-900">📚 eLearning to complete before this session</h3>
            <Bullets items={session.elearning.before} color={session.color} />
            <h3 className="mb-2 mt-4 font-semibold text-slate-900">➡ Assign after this session</h3>
            <Bullets items={session.elearning.after} color={session.color} />
          </div>
          <div className="avoid-break rounded-xl border border-slate-200 p-4">
            <h3 className="mb-2 font-semibold text-slate-900">📦 Materials</h3>
            <Bullets items={session.materials} color={session.color} />
          </div>
        </div>
      </div>
      <div className="avoid-break mt-4 rounded-xl border border-dashed border-slate-300 p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="font-semibold text-slate-900">✉️ Pre-session message to learners</p>
          <CopyButton text={session.learnerMessage} />
        </div>
        <p className="text-slate-700">{session.learnerMessage}</p>
      </div>

      <H2 id={anchor("run-of-show")}>90-Minute Run of Show</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: session.color, color: session.ink }}>
              <th scope="col" className="p-3 font-semibold">Time</th>
              <th scope="col" className="p-3 font-semibold">Segment</th>
              <th scope="col" className="p-3 font-semibold">Mode</th>
            </tr>
          </thead>
          <tbody>
            {session.segments.map((s) => (
              <tr key={s.id} className="border-t border-slate-200 align-top">
                <td className="whitespace-nowrap p-3 font-semibold text-slate-900">
                  {s.start}–{s.end}
                </td>
                <td className="p-3">
                  <a href={`#${s.id}`} className="font-semibold text-slate-900 hover:underline">
                    {s.title}
                  </a>
                  <p className="text-slate-600">{s.goal}</p>
                </td>
                <td className="p-3 text-slate-600">{s.modes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id={anchor("facilitation")}>Facilitation Guide</H2>
      <p className="mb-4 text-slate-600">
        Suggested language is a starting point—adapt it to your voice and your group. Each scenario offers a youth and a workplace version.
      </p>
      <div className="space-y-6">
        {session.segments.map((s) => (
          <SegmentCard key={s.id} segment={s} session={session} handoutHref={handoutHref} />
        ))}
      </div>

      <H2>Discussion Question Bank</H2>
      <p className="mb-3 text-slate-600">Use these to extend a debrief, fill extra time, or spark conversation in breakouts.</p>
      <Bullets items={session.discussion} color={session.color} />

      <H2 id={anchor("slides")}>Slide Outline</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-900">
              <th scope="col" className="w-12 p-3 font-semibold">#</th>
              <th scope="col" className="p-3 font-semibold">Slide</th>
              <th scope="col" className="p-3 font-semibold">On-screen content</th>
            </tr>
          </thead>
          <tbody>
            {session.slides.map((sl, i) => (
              <tr key={i} className="border-t border-slate-200 align-top">
                <td className="p-3 font-semibold text-slate-500">{i + 1}</td>
                <td className="p-3 font-semibold text-slate-900">{sl.title}</td>
                <td className="p-3 text-slate-700">
                  <ul className="list-disc space-y-0.5 pl-4">
                    {sl.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {sl.notes && <p className="mt-1 text-xs italic text-slate-500">Note: {sl.notes}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Handouts for This Session</H2>
      <ul className="grid gap-2 sm:grid-cols-2 print:grid-cols-2">
        {session.handouts.map((id) => {
          const h = getHandout(id);
          if (!h) return null;
          return (
            <li key={id}>
              <Link href={handoutHref(id)} className="block rounded-lg border border-slate-200 bg-white p-3 hover:shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {h.type} · For {h.audience.toLowerCase()}
                </span>
                <span className="block font-semibold text-slate-900">📄 {h.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <H2>If This Happens…</H2>
      <div className="space-y-3">
        {session.challenges.map((c) => (
          <div key={c.challenge} className="avoid-break rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{c.challenge}</p>
            <p className="mt-1 text-slate-700">{c.response}</p>
          </div>
        ))}
      </div>

      <H2>After-Session Reflection</H2>
      <div className="avoid-break rounded-xl p-4 sm:p-5" style={{ backgroundColor: session.tint }}>
        <Checklist items={session.afterReflection} />
      </div>

      {!print && (
        <p className="mt-8 text-sm text-slate-500">
          Learner binder:{" "}
          <a href={guide.learnerBinderUrl} className="text-eap underline" target="_blank" rel="noopener noreferrer">
            {guide.learnerBinderUrl.replace("https://", "")}
          </a>
        </p>
      )}
    </div>
  );
}
