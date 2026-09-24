import type { Metadata } from "next";
import QuickReference from "@/components/QuickReference";
import { Card, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Quick Reference" };

export default function QuickReferencePage() {
  return (
    <Card>
      <Eyebrow>Quick Reference</Eyebrow>
      <h1 className="mt-1 mb-6 text-3xl font-bold text-slate-900">Leading with Care at a Glance</h1>
      <QuickReference />
    </Card>
  );
}
