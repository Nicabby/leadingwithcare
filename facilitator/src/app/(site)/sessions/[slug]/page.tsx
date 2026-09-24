import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSession, sessions } from "@/content";
import SessionView from "@/components/SessionView";
import { ButtonLink, Card } from "@/components/ui";

export function generateStaticParams() {
  return sessions.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSession(slug);
  return { title: s ? `Session ${s.number}: ${s.title}` : "Session" };
}

export default async function SessionPage({ params }: Props) {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session) notFound();
  const prev = sessions[session.number - 2];
  const next = sessions[session.number];
  return (
    <Card>
      <nav aria-label="On this page" className="no-print mb-6 flex flex-wrap gap-2 text-sm">
        {[
          ["objectives", "Objectives"],
          ["prepare", "Before the session"],
          ["run-of-show", "Run of show"],
          ["facilitation", "Facilitation guide"],
          ["slides", "Slides & handouts"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-100">
            {label}
          </a>
        ))}
      </nav>
      <SessionView session={session} />
      <div className="no-print mt-10 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-6">
        <ButtonLink href={prev ? `/sessions/${prev.slug}` : "/"} variant="outline">
          ← {prev ? `Session ${prev.number}` : "Start Here"}
        </ButtonLink>
        <ButtonLink href={next ? `/sessions/${next.slug}` : "/handouts"}>
          {next ? `Session ${next.number}: ${next.title} →` : "Handouts →"}
        </ButtonLink>
      </div>
    </Card>
  );
}
