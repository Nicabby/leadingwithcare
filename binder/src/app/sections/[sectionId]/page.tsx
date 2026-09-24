import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSection, lessonHref, sections } from "@/content";
import { ButtonLink, Card, Divider, Quote } from "@/components/ui";
import LessonList from "@/components/LessonList";

export function generateStaticParams() {
  return sections.map((s) => ({ sectionId: s.id }));
}

type Props = { params: Promise<{ sectionId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sectionId } = await params;
  const section = getSection(sectionId);
  return { title: section?.title ?? "Section" };
}

export default async function SectionPage({ params }: Props) {
  const { sectionId } = await params;
  const section = getSection(sectionId);
  if (!section) notFound();

  const first = section.lessons[0];

  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: section.ink === "#ffffff" ? section.color : "#24497b" }}>
        {section.eyebrow}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{section.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{section.description}</p>

      <div className="mt-8 rounded-xl border border-slate-200 p-5 sm:p-6" style={{ backgroundColor: section.tint }}>
        <h2 className="text-lg font-semibold text-slate-900">Module Overview</h2>
        {section.overview.map((p, i) => (
          <p key={i} className="mt-3 leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
        {section.keyConcept && <Quote color={section.color}>{section.keyConcept}</Quote>}

        <h3 className="mt-6 font-semibold text-slate-900">Learning Objectives</h3>
        <p className="mt-1 text-sm text-slate-600">By the end of this module, you will be able to:</p>
        <ul className="mt-3 space-y-2">
          {section.objectives.map((o, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-eap" aria-hidden="true" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      <h2 className="mb-4 text-xl font-semibold">Lessons</h2>
      <LessonList section={section} />

      <Divider />

      <div className="flex flex-wrap justify-between gap-3">
        <ButtonLink href="/" variant="outline">
          ← Back to Home
        </ButtonLink>
        {first && <ButtonLink href={lessonHref(section.id, first.slug)}>Start First Lesson →</ButtonLink>}
      </div>
    </Card>
  );
}
