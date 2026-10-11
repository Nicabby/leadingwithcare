import Link from "next/link";
import { binder, sections } from "@/content";
import { ButtonLink, Card, Divider, SectionHeading } from "@/components/ui";
import ContinueCard from "@/components/ContinueCard";
import ExportBinder from "@/components/ExportBinder";

const ways = [
  {
    icon: "⏸",
    title: "Pause & Check Reflections",
    text: "Questions for your own thinking. They help you slow down, notice your reactions, question assumptions, and connect each concept to your own experience. Some may remain completely private.",
    href: "/journal",
    color: "#7f4f74",
  },
  {
    icon: "🧰",
    title: "Build Your Toolkit",
    text: "Complete the practical tools introduced in the course. By the end, they form your personal Care-Centered Practice Toolkit—resources you can return to whenever you need them.",
    href: "/toolkit",
    color: "#24497b",
  },
  {
    icon: "💬",
    title: "Bring to Live Practice",
    text: "Prepare a de-identified example, question, response, or draft tool to bring to your instructor-led session for scenarios, role-play, discussion, and peer feedback.",
    href: "/live-practice",
    color: "#a08453",
  },
];

const tools = [
  "Emotional Safety Check",
  "Safety and Support Response Map",
  "Bias and Unlearning Check",
  "Cultural Responsiveness Check",
  "Equity and Access Decision Guide",
  "Lived Truth and Inquiry Framework",
  "Care-Centered Practice Review Lens",
];

export default function Home() {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-wider text-eap">Welcome</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">Your Leading with Care Digital Binder</h1>
      {binder.description.map((p, i) => (
        <p key={i} className={i === 0 ? "mt-3 text-lg text-slate-600" : "mt-3 text-slate-600"}>
          {p}
        </p>
      ))}

      <ContinueCard />

      <Divider />

      <SectionHeading>Three Ways You Will Use Your Binder</SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {ways.map((w) => (
          <Link
            key={w.href}
            href={w.href}
            className="group rounded-xl border border-slate-200 border-t-4 bg-white p-5 shadow-sm transition hover:shadow-md"
            style={{ borderTopColor: w.color }}
          >
            <p className="text-2xl" aria-hidden="true">
              {w.icon}
            </p>
            <p className="mt-2 font-bold text-slate-900 group-hover:underline">{w.title}</p>
            <p className="mt-2 text-sm text-slate-600">{w.text}</p>
          </Link>
        ))}
      </div>

      <Divider />

      <SectionHeading>Course Lessons</SectionHeading>
      <ol className="grid gap-3 sm:grid-cols-2">
        {sections.map((s) => (
          <li key={s.id}>
            <Link
              href={`/sections/${s.id}`}
              className="group block h-full rounded-xl border border-slate-200 border-l-8 bg-white p-4 shadow-sm transition hover:shadow-md"
              style={{ borderLeftColor: s.color }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{s.eyebrow}</p>
              <p className="mt-1 font-bold text-slate-900 group-hover:underline">{s.shortTitle}</p>
              <p className="mt-1 text-sm text-slate-600">{s.description}</p>
            </Link>
          </li>
        ))}
      </ol>

      <Divider />

      <SectionHeading>Your Care-Centered Practice Toolkit</SectionHeading>
      <p className="text-slate-600">As you move through the course, your binder gradually becomes your personal toolkit:</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-slate-800">
            <span aria-hidden="true">🧰</span>
            {t}
          </li>
        ))}
      </ul>

      <Divider />

      <SectionHeading>Your Reflections, Your Choice</SectionHeading>
      <p className="text-slate-700">
        Some questions invite you to reflect on your own experiences, assumptions, reactions, or areas for growth. These
        reflections support learning—they do not require personal disclosure. You decide what you record and what you
        choose to share. You do not need to share your private reflections unless you choose to.
      </p>
      <p className="mt-3 text-slate-700">When you bring an example into a live session:</p>
      <ul className="mt-2 space-y-1.5 text-slate-700">
        {[
          "remove names and identifying details;",
          "avoid including private or confidential information;",
          "focus on the situation, decision, practice, or response, rather than identifying another person as the problem; and",
          "share only what you are comfortable and authorized to discuss.",
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <span className="text-eap" aria-hidden="true">
              •
            </span>
            {t}
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Everything you write is saved privately in this browser on this device—no account needed. Use the same device
        and browser throughout the course, and{" "}
        <Link href="/backup" className="font-medium text-eap hover:underline">
          download a backup
        </Link>{" "}
        regularly so you can restore your work or move it to another device.
      </p>

      <ExportBinder />

      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <ButtonLink href="/toolkit" variant="outline">
          My Toolkit
        </ButtonLink>
        <ButtonLink href={`/sections/${sections[0].id}`}>Start Lesson 1 →</ButtonLink>
      </div>
    </Card>
  );
}
