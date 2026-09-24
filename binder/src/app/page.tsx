import Link from "next/link";
import { binder, sections } from "@/content";
import { ButtonLink, Card, Divider, SectionHeading } from "@/components/ui";
import ContinueCard from "@/components/ContinueCard";

const modules = sections.filter((s) => s.id !== "orientation" && s.id !== "summary");

export default function Home() {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-wider text-eap">Welcome</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">Your Leading with Care Binder</h1>
      <p className="mt-3 text-lg text-slate-600">{binder.description}</p>
      <p className="mt-3 text-slate-600">{binder.audience}</p>

      <ContinueCard />

      <Divider />

      <SectionHeading>Course Modules</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((s) => (
          <Link
            key={s.id}
            href={`/sections/${s.id}`}
            className="group rounded-xl border border-slate-200 border-l-8 bg-white p-5 shadow-sm transition hover:shadow-md"
            style={{ borderLeftColor: s.color }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{s.eyebrow}</p>
            <p className="mt-1 text-lg font-bold text-slate-900 group-hover:underline">{s.shortTitle}</p>
            <p className="mt-2 text-sm text-slate-600">{s.description}</p>
          </Link>
        ))}
      </div>

      <Divider />

      <SectionHeading>How to Use This Binder</SectionHeading>
      <ol className="grid gap-3 sm:grid-cols-2">
        {[
          ["Review", "Each lesson condenses the course into key ideas, tools, and scenarios you can revisit anytime."],
          ["Reflect", "Answer the Reflection in each lesson. Every response is collected in your Reflection Journal."],
          ["Record", "Use Your Notes at the bottom of each lesson to capture your own insights."],
          ["Practice", "Try the practice knowledge checks before completing the graded versions in the course."],
          ["Download", "Open the password-protected Resource Packages for worksheets and reference tools."],
          ["Export", "Download your Reflection Journal as a PDF to keep, print, or bring to a coaching conversation."],
        ].map(([title, text], i) => (
          <li key={title} className="flex gap-3 rounded-lg bg-slate-50 p-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
              {i + 1}
            </span>
            <span>
              <span className="block font-semibold text-slate-900">{title}</span>
              <span className="text-sm text-slate-600">{text}</span>
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Your notes, reflections, and progress are saved privately in this browser on this device. Export your
        Reflection Journal regularly to keep a copy.
      </p>

      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <ButtonLink href="/resource-packages" variant="outline">
          Resource Packages
        </ButtonLink>
        <ButtonLink href="/sections/orientation">Start Orientation →</ButtonLink>
      </div>
    </Card>
  );
}
