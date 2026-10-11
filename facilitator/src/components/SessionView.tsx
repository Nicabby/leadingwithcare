import Link from "next/link";
import type { ReactNode } from "react";
import { getHandout, guide, type ActivityGuide, type RunItem, type Session } from "@/content";
import { Callout, Checklist, Eyebrow, H2, ModeBadge } from "./ui";
import CopyButton from "./CopyButton";

function accent(session: Session) {
  return session.ink === "#ffffff" ? session.color : "#24497b";
}

/** Highlights open items written as "[TBD …]". */
export function T({ children }: { children: string }) {
  if (!children.includes("[TBD")) return <>{children}</>;
  const parts = children.split(/(\[TBD[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[TBD") ? (
          <mark key={i} className="rounded bg-amber-100 px-1 text-amber-900 print:bg-amber-50">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function List({ items, color, numbered = false }: { items: string[]; color: string; numbered?: boolean }) {
  if (!items.length) return <p className="text-sm italic text-slate-500">None for this session.</p>;
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-slate-700">
          {numbered ? (
            <span className="w-5 shrink-0 font-bold" style={{ color }}>
              {i + 1}.
            </span>
          ) : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
          )}
          <span>
            <T>{item}</T>
          </span>
        </li>
      ))}
    </ul>
  );
}

function Box({ title, icon, children }: { title: string; icon: string; children: ReactNode }) {
  return (
    <div className="avoid-break rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 font-semibold text-slate-900">
        <span aria-hidden="true">{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}

function Part({ label, icon, color, children }: { label: string; icon: string; color: string; children: ReactNode }) {
  return (
    <div className="avoid-break">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color }}>
        <span aria-hidden="true">{icon}</span> {label}
      </p>
      {children}
    </div>
  );
}

function GuideCard({ item, g, session, handoutHref }: { item: RunItem; g: ActivityGuide; session: Session; handoutHref: (id: string) => string }) {
  const color = accent(session);
  return (
    <article id={item.id} className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <header
        className="avoid-break flex flex-wrap items-center gap-3 rounded-t-2xl border-b border-slate-200 px-4 py-3 sm:px-5"
        style={{ backgroundColor: session.tint }}
      >
        <span className="rounded-md px-2.5 py-1 text-sm font-bold" style={{ backgroundColor: session.color, color: session.ink }}>
          {item.start}–{item.end} min
        </span>
        <h3 className="text-lg font-bold text-slate-900">{item.activity}</h3>
        <span className="flex flex-wrap gap-1.5 sm:ml-auto">
          {item.modes.map((m) => (
            <ModeBadge key={m} mode={m} />
          ))}
        </span>
      </header>

      <div className="space-y-5 p-4 sm:p-5">
        <Part label="Purpose" icon="🎯" color={color}>
          <p className="text-slate-700">
            <T>{g.purpose}</T>
          </p>
        </Part>

        <Part label="Set-up" icon="🧰" color={color}>
          <List items={g.setup} color={session.color} />
        </Part>

        <Part label="Facilitator language" icon="🎙️" color={color}>
          <div className="space-y-2 rounded-r-lg border-l-4 bg-slate-50 py-3 pl-4 pr-3" style={{ borderLeftColor: color }}>
            {g.say.map((line, i) => (
              <p key={i} className="italic text-slate-800">
                {line.startsWith("[TBD") ? <T>{line}</T> : <>“<T>{line}</T>”</>}
              </p>
            ))}
          </div>
        </Part>

        <Part label="Instructions" icon="▶" color={color}>
          <List items={g.instructions} color={session.color} numbered />
          {g.chat && (
            <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-white p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">💬 Paste into chat / broadcast to rooms</p>
                <CopyButton text={g.chat} />
              </div>
              <p className="whitespace-pre-line font-mono text-sm text-slate-800">
                <T>{g.chat}</T>
              </p>
            </div>
          )}
        </Part>

        {g.scenarios && (
          <div className="space-y-3">
            {g.scenarios.map((sc) => (
              <div key={sc.title} className="avoid-break rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scenario</p>
                <p className="font-semibold text-slate-900">{sc.title}</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2 print:grid-cols-2">
                  <div className="rounded-lg border-t-4 border-t-periwinkle bg-white p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#3f4595]">Youth version</p>
                    <p className="mt-1 text-sm text-slate-700">
                      <T>{sc.youth}</T>
                    </p>
                  </div>
                  <div className="rounded-lg border-t-4 border-t-navy bg-white p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-navy">Workplace version</p>
                    <p className="mt-1 text-sm text-slate-700">
                      <T>{sc.workplace}</T>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Part label="Debrief questions" icon="❓" color={color}>
          <List items={g.debrief} color={session.color} />
        </Part>

        <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2">
          <div className="avoid-break rounded-lg bg-[#f1f2fb] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#3f4595]">👂 Listen for</p>
            <div className="mt-2">
              <List items={g.listenFor} color="#b1b4e5" />
            </div>
          </div>
          <div className="avoid-break rounded-lg bg-[#f9f5ec] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#7a6534]">👀 Watch for</p>
            <div className="mt-2">
              <List items={g.watchFor} color="#cdb483" />
            </div>
          </div>
        </div>

        <div className="avoid-break rounded-lg border border-lilac bg-[#fbf6fc] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-plum">📓 Digital Binder connection</p>
          <div className="mt-2">
            <List items={g.binder} color="#7f4f74" />
          </div>
        </div>

        {g.handouts && g.handouts.length > 0 && (
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Handouts: </span>
            {g.handouts.map((id, i) => {
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
  const total = session.runOfShow.reduce((n, r) => n + (r.end - r.start), 0);
  const guided = session.runOfShow.filter((r) => r.guide);
  const o = session.overview;
  const b = session.before;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow color={color}>{session.eyebrow} · 90 minutes · Virtual</Eyebrow>
        {session.status !== "Final" && (
          <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-900">
            {session.status} · open items highlighted
          </span>
        )}
      </div>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{session.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{session.subtitle}</p>

      {!print && (
        <nav aria-label="On this page" className="no-print mt-5 flex flex-wrap gap-2 text-sm">
          {[
            ["overview", "Session Overview"],
            ["before", "Before the Session"],
            ["run-of-show", "Run of Show"],
            ["facilitation", "Facilitation Guide"],
            ["close", "Close"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-100">
              {label}
            </a>
          ))}
        </nav>
      )}

      {/* 1. SESSION OVERVIEW */}
      <H2 id={anchor("overview")}>Session Overview</H2>
      <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2">
        <Box title="Module(s) covered" icon="📚">
          <List items={o.modules} color={session.color} />
        </Box>
        <Box title="Toolkit resources used" icon="🧰">
          <List items={o.toolkit} color={session.color} />
        </Box>
      </div>
      <Callout title="Session purpose" color={session.color} tint={session.tint}>
        <T>{o.purpose}</T>
      </Callout>
      <h3 className="mb-2 font-semibold text-slate-900">Learning objectives</h3>
      <p className="mb-3 text-slate-600">By the end of this session, participants will be able to:</p>
      <List items={o.objectives} color={color} numbered />
      <h3 className="mb-3 mt-6 font-semibold text-slate-900">Key course concepts</h3>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {o.concepts.map((c) => (
          <div key={c.title} className="avoid-break rounded-xl border border-slate-200 border-t-4 bg-white p-4" style={{ borderTopColor: session.color }}>
            <h4 className="font-semibold text-slate-900">{c.title}</h4>
            <p className="mt-1 text-sm text-slate-700">
              <T>{c.text}</T>
            </p>
          </div>
        ))}
      </div>

      {/* 2. BEFORE THE SESSION */}
      <H2 id={anchor("before")}>Before the Session</H2>
      <div className="grid gap-4 lg:grid-cols-2 print:grid-cols-2">
        <Box title="Learner pre-work" icon="💻">
          <List items={b.prework} color={session.color} />
        </Box>
        <Box title="What learners were asked to bring" icon="💬">
          <List items={b.bring} color={session.color} />
        </Box>
        <Box title="Facilitator preparation" icon="✅">
          <Checklist items={b.prep} />
        </Box>
        <Box title="Materials / technology" icon="📦">
          <List items={b.materials} color={session.color} />
        </Box>
      </div>
      <div className="mt-4">
        <Box title="Breakout room setup (virtual)" icon="🚪">
          <List items={b.breakouts} color={session.color} />
        </Box>
      </div>

      {/* 3. RUN OF SHOW */}
      <H2 id={anchor("run-of-show")}>90-Minute Run of Show</H2>
      {total !== 90 && (
        <p className="mb-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">Timing currently totals {total} minutes.</p>
      )}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: session.color, color: session.ink }}>
              <th scope="col" className="p-3 font-semibold">Time</th>
              <th scope="col" className="p-3 font-semibold">Activity</th>
              <th scope="col" className="p-3 font-semibold">Purpose</th>
              <th scope="col" className="p-3 font-semibold">Method</th>
              <th scope="col" className="p-3 font-semibold">Facilitator notes</th>
            </tr>
          </thead>
          <tbody>
            {session.runOfShow.map((r) => (
              <tr key={r.id} className="border-t border-slate-200 align-top">
                <td className="whitespace-nowrap p-3 font-semibold text-slate-900">
                  {r.start}–{r.end}
                  <span className="block text-xs font-normal text-slate-500">{r.end - r.start} min</span>
                </td>
                <td className="p-3 font-semibold text-slate-900">
                  {r.guide ? (
                    <a href={`#${r.id}`} className="hover:underline">
                      {r.activity} <span className="text-eap">↓</span>
                    </a>
                  ) : (
                    r.activity
                  )}
                </td>
                <td className="p-3 text-slate-700">
                  <T>{r.purpose}</T>
                </td>
                <td className="p-3 text-slate-700">
                  <T>{r.method}</T>
                </td>
                <td className="p-3 text-slate-600">
                  <T>{r.notes}</T>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. FACILITATION GUIDE */}
      <H2 id={anchor("facilitation")}>Facilitation Guide</H2>
      <p className="mb-4 text-slate-600">
        A guide for each major activity. Suggested language is a starting point—adapt it to your voice and your group.
      </p>
      <div className="space-y-6">
        {guided.map((r) => (
          <GuideCard key={r.id} item={r} g={r.guide!} session={session} handoutHref={handoutHref} />
        ))}
      </div>

      {/* 5. CLOSE */}
      <H2 id={anchor("close")}>Close</H2>
      <div className="grid gap-4 lg:grid-cols-3 print:grid-cols-3">
        <Box title="Reflection" icon="⏸">
          <List items={session.close.reflection} color={session.color} />
        </Box>
        <Box title="What to carry forward" icon="➡">
          <List items={session.close.carryForward} color={session.color} />
        </Box>
        <Box title="Next module / pre-work" icon="📅">
          <List items={session.close.next} color={session.color} />
        </Box>
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
