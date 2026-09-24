import { getHandout } from "@/content";
import { H2 } from "./ui";

// PLACEHOLDER — replace with the Leading with Care model.
const elements = [
  { letter: "1", name: "Module 1", color: "#24497b", ink: "#fff", idea: "[Placeholder] Big idea.", lessons: "[Placeholder] Lesson titles" },
  { letter: "2", name: "Module 2", color: "#7f4f74", ink: "#fff", idea: "[Placeholder] Big idea.", lessons: "[Placeholder] Lesson titles" },
  { letter: "3", name: "Module 3", color: "#cdb483", ink: "#24497b", idea: "[Placeholder] Big idea.", lessons: "[Placeholder] Lesson titles" },
];

// PLACEHOLDER — replace with the Leading with Care course tools.
const tools = [{ name: "[Tool name]", use: "[Placeholder] Use it for", steps: "[Placeholder] Steps" }];

export default function QuickReference() {
  const lenses = getHandout("lwc-reference");
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {elements.map((e) => (
          <div key={e.letter} className="avoid-break overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-3 px-4 py-2" style={{ backgroundColor: e.color, color: e.ink }}>
              <span className="text-2xl font-black">{e.letter}</span>
              <span className="font-bold">{e.name}</span>
            </div>
            <div className="p-4">
              <p className="font-semibold italic text-slate-900">“{e.idea}”</p>
              <p className="mt-2 text-sm text-slate-600">{e.lessons}</p>
            </div>
          </div>
        ))}
      </div>

      <H2>Reference Card</H2>
      <div className="space-y-2">
        {lenses?.blocks.flatMap((b) =>
          b.kind === "cards"
            ? b.cards.map((c) => (
                <div key={c.title} className="avoid-break rounded-r-xl border-l-4 border-eap bg-[#eef3fc] p-3">
                  <p className="font-semibold text-slate-900">{c.title}</p>
                  <p className="text-slate-700">{c.text}</p>
                </div>
              ))
            : [],
        )}
      </div>

      <H2>Course Tools at a Glance</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 font-semibold">Tool</th>
              <th scope="col" className="p-3 font-semibold">Use it for</th>
              <th scope="col" className="p-3 font-semibold">Steps</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.name} className="border-t border-slate-200 align-top">
                <td className="p-3 font-semibold text-slate-900">{t.name}</td>
                <td className="p-3 text-slate-700">{t.use}</td>
                <td className="p-3 text-slate-700">{t.steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
