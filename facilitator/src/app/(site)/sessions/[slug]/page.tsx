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
