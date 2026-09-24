import type { Metadata } from "next";
import AnswerKey from "@/components/AnswerKey";
import { Card, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Answer Key" };

export default function AnswerKeyPage() {
  return (
    <Card>
      <Eyebrow color="#24497b">Facilitator Only</Eyebrow>
      <h1 className="mt-1 mb-3 text-3xl font-bold text-slate-900">Answer Key</h1>
      <AnswerKey />
    </Card>
  );
}
