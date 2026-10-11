"use client";

import Link from "next/link";
import { useStorageStatus } from "@/lib/store";

/** Site-wide warning when the browser refuses to save (private windows, blocked site data, full storage). */
export default function StorageBanner() {
  const status = useStorageStatus();
  if (status !== "blocked") return null;
  return (
    <div role="alert" className="no-print mb-6 rounded-xl border-2 border-red-300 bg-red-50 p-4 text-red-900">
      <p className="font-semibold">⚠ Your browser isn’t saving your binder</p>
      <p className="mt-1 text-sm">
        This usually happens in a private or incognito window, or when site data is blocked in your browser settings.
        You can keep typing, but your answers will be lost when you close this tab. Open the binder in a regular window,
        or export a PDF / <Link href="/backup" className="font-semibold underline">download a backup</Link> before you leave.
      </p>
    </div>
  );
}
