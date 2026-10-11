import { sections } from "@/content/course";
import { H2 } from "./ui";

const focus: Record<string, string> = {
  introduction: "Leaders shape participation through the conditions they create.",
  "mindset-emotional-safety": "Notice the story you’re telling yourself; examine the conditions you create.",
  "trauma-informed-practice": "Respond supportively without needing someone’s history.",
  "bias-stereotypes": "Test the evidence behind a judgment.",
  "cultural-responsiveness": "Look for hidden defaults in the design.",
  "equity-access": "Keep the standard; question the method.",
  "inquiry-lived-truth": "Understand experience while staying honest about what is known and unknown.",
  "care-centered-lens": "Choose and combine tools to review a practice.",
  "final-knowledge-check": "Apply the principles across the course.",
};

const tools = [
  { name: "Emotional Safety Check", lesson: "2", use: "Planning or reviewing an activity, meeting, or difficult conversation", steps: "Predictability · Clarity · Warmth · Boundaries · Repair" },
  { name: "Safety and Support Response Map", lesson: "3", use: "Someone appears distressed, withdrawn, defensive, or overwhelmed", steps: "What happened · Immediate safety · Meaningful choice · Boundary · Supportive language · More support?" },
  { name: "Bias and Unlearning Check", lesson: "4", use: "A judgment feels quick, certain, or familiar; consequential decisions", steps: "Reaction · Story · Evidence · Learned patterns · Another perspective · Fairer response" },
  { name: "Cultural Responsiveness Check", lesson: "5", use: "Designing or revising prompts, norms, activities", steps: "Default · Pressure points · Open the door · Choice · Perspective · Say what you mean · Watch what happens" },
  { name: "Equity and Access Decision Guide", lesson: "6", use: "A requirement is equally available but not equally usable", steps: "What must stay · Access gap · What can change · Match support · Make it count · Review outcome" },
  { name: "Lived Truth and Inquiry Framework", lesson: "7", use: "Accounts differ, or experience and interpretation are mixed", steps: "Hear · Separate · Explore · Move" },
  { name: "Care-Centered Practice Review Lens", lesson: "8", use: "Reviewing a whole practice where several issues overlap", steps: "Practice · Purpose · Noticed · Tools · Still need to understand · Change · Stay · Impact" },
];

export default function QuickReference() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2">
        {sections.map((s) => (
          <div key={s.id} className="avoid-break overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="px-4 py-2" style={{ backgroundColor: s.color, color: s.ink }}>
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{s.eyebrow}</span>
              <span className="block font-bold">{s.title}</span>
            </div>
            <p className="p-4 font-medium italic text-slate-800">“{focus[s.id]}”</p>
          </div>
        ))}
      </div>

      <H2>Pause & Check</H2>
      <div className="grid gap-2 sm:grid-cols-4 print:grid-cols-4">
        {[
          ["Notice", "What did I see or hear? What happened in me?"],
          ["Name", "What story or assumption am I adding?"],
          ["Check", "What else could be true? What’s missing?"],
          ["Choose", "What response protects dignity and keeps the expectation clear?"],
        ].map(([t, d]) => (
          <div key={t} className="avoid-break rounded-r-xl border-l-4 border-plum bg-[#fbf6fc] p-3">
            <p className="font-semibold text-slate-900">{t}</p>
            <p className="text-sm text-slate-700">{d}</p>
          </div>
        ))}
      </div>

      <H2>Care-Centered Practice Toolkit at a Glance</H2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 font-semibold">Tool</th>
              <th scope="col" className="p-3 font-semibold">Use it when</th>
              <th scope="col" className="p-3 font-semibold">Steps</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.name} className="border-t border-slate-200 align-top">
                <td className="p-3 font-semibold text-slate-900">
                  {t.name}
                  <span className="block text-xs font-normal text-slate-500">Lesson {t.lesson}</span>
                </td>
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
