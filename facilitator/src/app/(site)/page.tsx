import { ButtonLink, Card, Eyebrow } from "@/components/ui";
import StartHere from "@/components/StartHere";

export default function Home() {
  return (
    <Card>
      <Eyebrow>Start Here</Eyebrow>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">How to Use This Guide</h1>
      <div className="mt-4">
        <StartHere />
      </div>
      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <ButtonLink href="/quick-reference" variant="outline">Quick Reference</ButtonLink>
        <ButtonLink href="/sessions/session-1">Go to Session 1 →</ButtonLink>
      </div>
    </Card>
  );
}
