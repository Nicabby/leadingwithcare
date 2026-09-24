import { ButtonLink, Card } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl p-8"><Card>
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">That page isn’t in this guide.</p>
      <div className="mt-6"><ButtonLink href="/">← Start Here</ButtonLink></div>
    </Card></div>
  );
}
