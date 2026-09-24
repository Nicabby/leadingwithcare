import type { Metadata } from "next";
import Image from "next/image";
import { guide, handouts, sessions } from "@/content";
import AnswerKey from "@/components/AnswerKey";
import HandoutView from "@/components/HandoutView";
import QuickReference from "@/components/QuickReference";
import SessionView from "@/components/SessionView";
import StartHere from "@/components/StartHere";

export const metadata: Metadata = { title: "Print Edition" };

const stripes = ["#7f4f74", "#cdb483", "#467edd", "#dcc1e4", "#b1b4e5", "#24497b"];

function Part({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="print-page">
      <p className="text-sm font-semibold uppercase tracking-wider text-eap">{eyebrow}</p>
      <h1 className="mb-6 mt-1 border-b-4 border-periwinkle pb-3 text-3xl font-bold text-navy">{title}</h1>
      {children}
    </section>
  );
}

export default function PrintEdition() {
  const toc = [
    { id: "start-here", label: "Start Here: How to Use This Guide" },
    ...sessions.map((s) => ({ id: s.slug, label: `Session ${s.number}: ${s.title}` })),
    { id: "quick-reference", label: "Quick Reference" },
    { id: "handouts", label: "Handouts" },
    { id: "answer-key", label: "Answer Key" },
  ];
  return (
    <main className="mx-auto max-w-4xl bg-white px-6 text-slate-900 print:max-w-none print:px-0">
      {/* Cover */}
      <section className="flex min-h-[9.4in] flex-col justify-between py-10">
        <div className="flex h-3 w-full overflow-hidden rounded-full">
          {stripes.map((c) => (
            <span key={c} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div>
          <Image src="/eap-logo.png" alt="Elevate Adolescence Program" width={220} height={132} className="h-auto w-[220px]" />
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-eap">Facilitator Edition</p>
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-navy">
            Leading <span className="font-normal text-eap">with Care</span>
          </h1>
          <p className="mt-3 text-3xl font-semibold text-slate-800">Facilitator Guide</p>
          <p className="mt-6 max-w-xl text-lg text-slate-600">{guide.tagline}</p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            {sessions.map((s) => (
              <div key={s.slug} className="rounded-lg border-l-4 bg-slate-50 p-3" style={{ borderLeftColor: s.color }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Session {s.number}</p>
                <p className="font-semibold text-slate-900">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Learner binder: {guide.learnerBinderUrl.replace("https://", "")}
        </p>
      </section>

      {/* Contents */}
      <section className="print-page">
        <h1 className="mb-6 border-b-4 border-periwinkle pb-3 text-3xl font-bold text-navy">Contents</h1>
        <ol className="space-y-3 text-lg">
          {toc.map((t, i) => (
            <li key={t.id} className="flex gap-4 border-b border-dotted border-slate-300 pb-2">
              <span className="w-8 font-bold text-eap">{i + 1}</span>
              <a href={`#${t.id}`} className="text-slate-900">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-xl bg-[#eef3fc] p-5">
          <p className="font-semibold text-navy">Session handouts at a glance</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-700">
            {handouts.map((h) => (
              <li key={h.id}>
                {h.session ? `S${h.session}` : "All"} · {h.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Part id="start-here" eyebrow="Start Here" title="How to Use This Guide">
        <StartHere print />
      </Part>

      {sessions.map((s) => (
        <section key={s.slug} id={s.slug} className="print-page">
          <div className="mb-4 h-2 w-full rounded-full" style={{ backgroundColor: s.color }} />
          <SessionView session={s} print />
        </section>
      ))}

      <Part id="quick-reference" eyebrow="Quick Reference" title="Leading with Care at a Glance">
        <QuickReference />
      </Part>

      <Part id="handouts" eyebrow="Materials" title="Handouts">
        <p className="text-slate-600">
          Each handout begins on a new page so it can be printed or shared on its own. Role cards marked “for volunteers” should be shared privately.
        </p>
      </Part>
      {handouts.map((h) => (
        <div key={h.id} className="print-page">
          <HandoutView handout={h} anchorPrefix="handout-" />
        </div>
      ))}

      <Part id="answer-key" eyebrow="Facilitator Only" title="Answer Key">
        <AnswerKey print />
      </Part>
    </main>
  );
}
