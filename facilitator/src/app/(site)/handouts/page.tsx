import type { Metadata } from "next";
import { handouts, sessions } from "@/content";
import HandoutView from "@/components/HandoutView";
import PrintButton from "@/components/PrintButton";
import { Card, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Handouts" };

const groups = [
  { key: null as number | null, title: "All Sessions" },
  ...sessions.map((s) => ({ key: s.number as number | null, title: `Session ${s.number}: ${s.title}` })),
];

export default function HandoutsPage() {
  return (
    <Card>
      <Eyebrow>Materials</Eyebrow>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">Handouts</h1>
      <p className="mt-2 text-slate-600">
        Printable role cards, scenario cards, observer sheets, worksheets, and reference cards. Share them as a screen, paste them into
        breakout rooms, or print them. Role cards marked “for volunteers” should be shared privately.
      </p>
      <div className="no-print mt-4 flex flex-wrap items-center gap-3">
        <PrintButton label="🖨 Print all handouts" />
        <span className="text-sm text-slate-500">Each handout starts on a new page when printed.</span>
      </div>
      <nav aria-label="Handout list" className="no-print mt-6 grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={String(g.key)}>
            <p className="text-sm font-semibold text-slate-900">{g.title}</p>
            <ul className="mt-1 space-y-0.5">
              {handouts
                .filter((h) => h.session === g.key)
                .map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-sm text-eap hover:underline">
                      {h.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-8 space-y-8">
        {handouts.map((h) => (
          <div key={h.id} className="print-page">
            <HandoutView handout={h} />
          </div>
        ))}
      </div>
    </Card>
  );
}
