import Link from "next/link";
import { debriefSequence, guide, principles, sessions, virtualDelivery } from "@/content";
import { Bullets, Callout, H2 } from "./ui";

export default function StartHere({ print = false }: { print?: boolean }) {
  const sessionHref = (slug: string) => (print ? `#${slug}` : `/sessions/${slug}`);
  return (
    <div>
      <p className="text-lg leading-relaxed text-slate-700">
        This guide is the live-session companion to the Leading with Care eLearning and{" "}
        <a href={guide.learnerBinderUrl} className="text-eap underline" target="_blank" rel="noopener noreferrer">
          learner binder
        </a>
        . It does not reproduce the online course. Instead, it gives facilitators the purpose, concepts, suggested language, timing, activity
        structures, and materials needed to help emerging leaders turn course ideas into observable leadership behaviors.
      </p>

      <Callout title="Program through-line">
        [Placeholder] The program through-line for Leading with Care.
      </Callout>

      <H2>Program at a Glance</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 font-semibold">Session</th>
              <th scope="col" className="p-3 font-semibold">eLearning before</th>
              <th scope="col" className="p-3 font-semibold">Key practice activities</th>
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
                    {s.elearning.before.map((b) => (
                      <li key={b}>{b.split(":")[0]}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3 text-slate-700">
                  {s.segments
                    .filter((seg) => /Activity|Fishbowl|Practice|Decision|role-play|Capstone/i.test(seg.title))
                    .map((seg) => seg.title.replace(/^(Activity|Practice|Breakout role-play|Capstone breakout): /, ""))
                    .join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        After the final session, learners complete the Summary and Capstone and export their Reflection Journal.
      </p>

      <H2>How Each Session Page Is Organized</H2>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {[
          ["Purpose, objectives & why it matters", "The intent of the session and what learners should be able to do."],
          ["Concept map", "A quick reminder of the course ideas the session builds on."],
          ["Before the session", "Prep checklist, eLearning pre-work, materials, and a ready-to-send learner message."],
          ["Run of show", "A 90-minute timeline with the participation mode for each segment."],
          ["Facilitation guide", "Suggested language, steps, chat text, polls, scenarios (youth + workplace), debriefs, and what to listen for."],
          ["Slides, handouts & troubleshooting", "A slide outline, printable handouts, “If this happens…” responses, and an after-session reflection."],
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
          "Point learners to Resource Packages for worksheets that match each module.",
          "Encourage learners to export their Reflection Journal as a PDF at the end of the program.",
        ]}
      />
    </div>
  );
}
