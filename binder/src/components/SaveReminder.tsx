"use client";

import Link from "next/link";
import { hasAnyWork, useBinder, useHydrated, useStorageStatus } from "@/lib/store";

const WEEK = 7 * 24 * 60 * 60 * 1000;

/** Reminder on activity pages: where answers live, and a nudge when no recent backup exists. */
export default function SaveReminder() {
  const state = useBinder();
  const hydrated = useHydrated();
  const status = useStorageStatus();
  if (!hydrated || status === "blocked") return null;

  const worked = hasAnyWork(state);
  const stale = !state.lastBackup || Date.now() - new Date(state.lastBackup).getTime() > WEEK;

  if (worked && stale) {
    return (
      <div className="no-print mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gold bg-[#fbf8f1] p-4">
        <p className="text-sm text-slate-800">
          <strong>Protect your work.</strong> Your answers are saved only in this browser on this device.{" "}
          {state.lastBackup ? "Your last backup was over a week ago." : "You haven’t downloaded a backup yet."}
        </p>
        <Link href="/backup" className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy/90">
          Back up now
        </Link>
      </div>
    );
  }
  return (
    <p className="no-print mt-6 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
      💾 Your answers save automatically in this browser on this device. Use the same device and browser each time, and{" "}
      <Link href="/backup" className="font-medium text-eap hover:underline">
        download a backup
      </Link>{" "}
      to move your work or keep it safe.
    </p>
  );
}
