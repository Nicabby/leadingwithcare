import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allLessons, getLesson, getNeighbours, getResource, lessonHref } from "@/content";
import type { Scenario, Section } from "@/content";
import { ButtonLink, Card, Divider, Quote } from "@/components/ui";
import ReflectionBox from "@/components/lesson/ReflectionBox";
import NotesBox from "@/components/lesson/NotesBox";
import CompleteToggle from "@/components/lesson/CompleteToggle";
import Practice from "@/components/lesson/Practice";

export function generateStaticParams() {
  return allLessons.map(({ section, lesson }) => ({ sectionId: section.id, lessonSlug: lesson.slug }));
}

type Props = { params: Promise<{ sectionId: string; lessonSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sectionId, lessonSlug } = await params;
  const found = getLesson(sectionId, lessonSlug);
  return { title: found?.lesson.title ?? "Lesson" };
}

function accent(section: Section) {
  // darker brand color for text/borders when the section color is light
  return section.ink === "#ffffff" ? section.color : "#24497b";
}

function ScenarioBlock({ scenario, section }: { scenario: Scenario; section: Section }) {
  const cols = scenario.options.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scenario Example</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{scenario.title}</h3>
      <p className="mt-2 text-slate-700">{scenario.description}</p>
      <div className={`mt-5 grid gap-4 ${cols}`}>
        {scenario.options.map((o, i) => {
          const strong = o.tone === "strong";
          return (
            <div
              key={i}
              className={`rounded-xl border-t-4 bg-white p-4 shadow-sm ${strong ? "border-t-navy" : "border-t-gold"}`}
            >
              <p className={`text-sm font-bold uppercase tracking-wide ${strong ? "text-navy" : "text-[#7a6534]"}`}>
                {strong ? "✓ " : "✗ "}
                {o.label}
              </p>
              {o.quote && <p className="mt-3 italic text-slate-800">“{o.quote}”</p>}
              {o.text && <p className="mt-3 text-slate-700">{o.text}</p>}
              {o.points && (
                <>
                  {o.pointsTitle && <p className="mt-3 text-sm font-semibold text-slate-900">{o.pointsTitle}:</p>}
                  <ul className="mt-2 space-y-1.5">
                    {o.points.map((p, pi) => (
                      <li key={pi} className="flex gap-2 text-sm text-slate-700">
                        <span aria-hidden="true" className={strong ? "text-navy" : "text-[#7a6534]"}>
                          •
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </div>
      {scenario.closing && (
        <p className="mt-5 rounded-lg bg-white p-4 font-medium text-slate-800" style={{ borderLeft: `4px solid ${accent(section)}` }}>
          {scenario.closing}
        </p>
      )}
    </div>
  );
}

export default async function LessonPage({ params }: Props) {
  const { sectionId, lessonSlug } = await params;
  const found = getLesson(sectionId, lessonSlug);
  if (!found) notFound();
  const { section, lesson } = found;
  const { prev, next } = getNeighbours(section.id, lesson.slug);
  const key = `${section.id}/${lesson.slug}`;
  const color = accent(section);
  const lessonResources = (lesson.resources ?? []).map(getResource).filter(Boolean);

  return (
    <Card>
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href={`/sections/${section.id}`} className="hover:underline">
          {section.shortTitle}
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-slate-700">{lesson.title}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold text-slate-900">{lesson.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{lesson.subtitle}</p>

      {/* Introduction */}
      <div className="mt-8 rounded-xl border border-slate-200 p-5 sm:p-6" style={{ backgroundColor: section.tint }}>
        <h2 className="font-semibold text-slate-900">{lesson.kind === "practice" ? "About This Practice" : "Lesson Introduction"}</h2>
        {lesson.overview.map((p, i) => (
          <p key={i} className="mt-3 leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
        {lesson.objectives && (
          <>
            <h3 className="mt-5 font-semibold text-slate-900">By the end of this lesson, you will be able to:</h3>
            <ol className="mt-3 space-y-2">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="font-semibold" style={{ color }}>
                    {i + 1}.
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>

      {lesson.quote && <Quote color={color}>{lesson.quote}</Quote>}

      {lesson.kind === "practice" && lesson.questions && (
        <>
          {lesson.scenarioIntro && (
            <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scenario</p>
              <p className="mt-2 text-slate-800">{lesson.scenarioIntro}</p>
            </div>
          )}
          <Divider />
          <Practice questions={lesson.questions} storageKey={key} />
        </>
      )}

      {lesson.checklists?.map((c, i) => (
        <div key={i}>
          <Divider />
          <h2 className="mb-2 text-xl font-semibold text-slate-900">{c.title}</h2>
          {c.intro && <p className="mb-3 text-slate-600">{c.intro}</p>}
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.items.map((item, ii) => (
              <li key={ii} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-slate-800">
                <span aria-hidden="true" style={{ color }}>
                  ✔
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {lesson.keyIdeas && (
        <>
          <Divider />
          <h2 className="mb-4 text-xl font-semibold text-slate-900">{lesson.keyIdeasTitle ?? "Key Ideas"}</h2>
          <div className="space-y-3">
            {lesson.keyIdeas.map((k, i) => (
              <div key={i} className="rounded-r-lg border-l-4 bg-white py-3 pl-4 pr-4 shadow-sm ring-1 ring-slate-100" style={{ borderLeftColor: "#467edd" }}>
                <h3 className="font-semibold text-slate-900">{k.title}</h3>
                <p className="mt-1 text-slate-700">{k.text}</p>
                {k.tip && (
                  <p className="mt-2 text-sm text-slate-600">
                    <span className="font-semibold text-navy">Tip: </span>
                    {k.tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {lesson.tools?.map((t, i) => (
        <div key={i}>
          <Divider />
          <div className="rounded-2xl border-2 p-5 sm:p-6" style={{ borderColor: section.color }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Leadership Tool</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">{t.title}</h2>
            {t.intro && <p className="mt-2 text-slate-700">{t.intro}</p>}
            <ol className="mt-4 space-y-3">
              {t.steps.map((s, si) => (
                <li key={si} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ backgroundColor: section.color, color: section.ink }}
                  >
                    {si + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">{s.label}</span>
                    <span className="text-slate-700">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}

      {lesson.comparison && (
        <>
          <Divider />
          <h2 className="mb-4 text-xl font-semibold text-slate-900">{lesson.comparison.title}</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr>
                  <th scope="col" className="w-1/2 bg-navy p-3 font-semibold text-white">
                    {lesson.comparison.left}
                  </th>
                  <th scope="col" className="w-1/2 bg-gold p-3 font-semibold text-navy">
                    {lesson.comparison.right}
                  </th>
                </tr>
              </thead>
              <tbody>
                {lesson.comparison.rows.map(([l, r], i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="p-3 text-slate-800">{l}</td>
                    <td className="p-3 text-slate-800">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {lesson.scenarios?.map((s, i) => (
        <div key={i}>
          <Divider />
          <ScenarioBlock scenario={s} section={section} />
        </div>
      ))}

      {lesson.reflection && (
        <>
          <Divider />
          <ReflectionBox reflection={lesson.reflection} storageKey={key} />
        </>
      )}

      {lesson.takeaways && (
        <>
          <Divider />
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Key Takeaways</h2>
          <ul className="space-y-2">
            {lesson.takeaways.map((t, i) => (
              <li key={i} className="flex gap-3 text-slate-800">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {lesson.closing && <p className="mt-6 rounded-lg bg-slate-50 p-4 text-slate-700">{lesson.closing}</p>}

      {lessonResources.length > 0 && (
        <>
          <Divider />
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Resources for This Lesson</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lessonResources.map((r) => (
              <Link
                key={r!.id}
                href={`/resource-packages#${r!.id}`}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{r!.type}</span>
                <span className="mt-1 block font-semibold text-slate-900">📄 {r!.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{r!.description}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {lesson.kind === "lesson" && (
        <>
          <Divider />
          <NotesBox storageKey={key} />
        </>
      )}

      <div className="mt-6">
        <CompleteToggle storageKey={key} />
      </div>

      <Divider />

      <div className="no-print flex flex-wrap justify-between gap-3">
        <ButtonLink href={prev ? lessonHref(prev.section.id, prev.lesson.slug) : `/sections/${section.id}`} variant="outline">
          ← {prev ? "Previous Lesson" : `Back to ${section.shortTitle}`}
        </ButtonLink>
        {next ? (
          <ButtonLink href={lessonHref(next.section.id, next.lesson.slug)}>
            {next.section.id === section.id ? "Next Lesson →" : `Next: ${next.section.shortTitle} →`}
          </ButtonLink>
        ) : (
          <ButtonLink href="/journal">Go to Reflection Journal →</ButtonLink>
        )}
      </div>
    </Card>
  );
}
