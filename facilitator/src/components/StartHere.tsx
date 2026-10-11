import Link from "next/link";
import { debriefSequence, guide, principles, sessions, virtualDelivery } from "@/content";
import { Bullets, Callout, H2 } from "./ui";

export default function StartHere({ print = false }: { print?: boolean }) {
  const sessionHref = (slug: string) => (print ? `#${slug}` : `/sessions/${slug}`);
  return (
    <div>
      <p className="text-lg leading-relaxed text-slate-700">
        This guide is the live-session companion to the Leading with Care course and{" "}
        <a href={guide.learnerBinderUrl} className="text-eap underline" target="_blank" rel="noopener noreferrer">
          learner binder
        </a>
        . It does not reproduce the online course. Instead, it gives facilitators the purpose, concepts, suggested language, timing, activity
        structures, and materials needed to help participants turn course ideas into everyday care-centered leadership practice.
      </p>

      <Callout title="Program through-line">
        Leaders shape participation through the conditions they create. Every session practices the same move—slowing the space between
        what we observe and how we respond—and builds the Care-Centered Practice Toolkit participants keep after the course.
      </Callout>

      <H2>Program at a Glance</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 font-semibold">Session</th>
              <th scope="col" className="p-3 font-semibold">Module(s) covered</th>
              <th scope="col" className="p-3 font-semibold">Major activities</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.slug} className="border-t border-slate-200 align-top">
                <td className="p-3">
                  <Link href={sessionHref(s.slug)} className="font-semibold text-slate-900 hover:underline">
                    {s.number}. {s.title}
                  </Link>
                  <p className="text-slate-600">{s.subtitle}</p>
                </td>
                <td className="p-3 text-slate-700">
                  <ul className="list-disc space-y-1 pl-4">
                    {s.overview.modules.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3 text-slate-700">
                  {s.runOfShow
                    .filter((r) => r.guide)
                    .map((r) => r.activity)
                    .join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Each session is 90 minutes and virtual. Participants complete the matching lessons and Digital Binder activities before each session.
      </p>

      <H2>How Each Session Page Is Organized</H2>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {[
          ["1. Session Overview", "Module(s) covered, session purpose, learning objectives, key course concepts, and toolkit resources used."],
          ["2. Before the Session", "Learner pre-work, what learners were asked to bring, facilitator preparation, materials/technology, and breakout room setup."],
          ["3. 90-Minute Run of Show", "A timed agenda with the activity, purpose, method, and facilitator notes for each segment."],
          ["4. Facilitation Guide", "For every major activity: purpose, set-up, facilitator language, instructions, debrief questions, listen for, watch for, and the Digital Binder connection."],
          ["5. Close", "Reflection, what to carry forward, and the next module/pre-work."],
          ["Open items", "Anything still to be confirmed is highlighted like this: [TBD]."],
        ].map(([t, d]) => (
          <div key={t} className="avoid-break rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{t}</p>
            <p className="mt-1 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <H2>Facilitation Principles</H2>
      <div className="space-y-3">
        {principles.map((p) => (
          <div key={p.title} className="avoid-break rounded-r-xl border-l-4 border-eap bg-white py-3 pl-4 pr-3 shadow-sm ring-1 ring-slate-100">
            <p className="font-semibold text-slate-900">{p.title}</p>
            <p className="mt-1 text-slate-700">{p.text}</p>
          </div>
        ))}
      </div>

      <H2>The Debrief Sequence</H2>
      <ol className="grid gap-3 sm:grid-cols-5 print:grid-cols-5">
        {debriefSequence.map((d, i) => (
          <li key={d.step} className="avoid-break rounded-xl bg-[#f6eef4] p-3 text-center">
            <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-plum text-sm font-bold text-white">{i + 1}</span>
            <p className="mt-2 font-semibold text-slate-900">{d.step}</p>
            <p className="text-xs text-slate-600">{d.text}</p>
          </li>
        ))}
      </ol>

      <H2>Virtual Delivery Notes</H2>
      <Bullets items={virtualDelivery} />

      <H2>Using the Learner Binder in Sessions</H2>
      <Bullets
        items={[
          "Share the binder link in chat at the start of every session.",
          "Learners’ Reflections are private and saved in their own browser. Invite sharing, never require it.",
          "Each lesson’s ‘Bring to Live Practice’ activity tells learners what to prepare for the next session; the Live Practice Prep page collects them.",
          "Remind learners to download a backup from Back Up & Restore after each session, and to export My Toolkit or the whole binder as a PDF at the end.",
        ]}
      />
    </div>
  );
}
