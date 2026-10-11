"use client";

import { toggleComplete, useBinder } from "@/lib/store";

export default function CompleteToggle({ storageKey }: { storageKey: string }) {
  const { completed } = useBinder();
  const done = completed.includes(storageKey);
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => toggleComplete(storageKey, e.target.checked)}
        className="h-5 w-5 accent-navy"
      />
      <span className="font-medium text-slate-800">{done ? "Page complete ✓" : "Mark this page as complete"}</span>
    </label>
  );
}
