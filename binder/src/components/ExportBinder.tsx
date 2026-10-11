"use client";

import { NameAndExport } from "@/components/WorksheetCollection";

export default function ExportBinder() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-900">Export Your Whole Binder</h2>
      <p className="mt-1 text-slate-600">
        One PDF with every Pause & Check reflection, toolkit, practice activity, and live-practice note you’ve completed.
      </p>
      <NameAndExport
        kinds={["pause", "toolkit", "activity", "live"]}
        pdf={{
          title: "My Digital Binder",
          subtitle: "Complete binder  |  Leading with Care",
          intro:
            "Your Leading with Care Digital Binder: Pause & Check reflections, your Care-Centered Practice Toolkit, practice activities, and live-session preparation.",
          file: "Digital-Binder",
        }}
        accent="#24497b"
        tint="#f4f7fb"
        border="#b1b4e5"
        countLabel="binder activities"
      />
    </div>
  );
}
