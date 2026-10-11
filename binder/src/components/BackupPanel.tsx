"use client";

import { useRef, useState } from "react";
import {
  createBackup,
  hasAnyWork,
  readBackup,
  restoreBackup,
  useBinder,
  useHydrated,
  type BinderState,
  type RestoreSummary,
} from "@/lib/store";

function fileSafe(name: string) {
  return name.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
}

function fmt(iso?: string) {
  return iso ? new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "";
}

export default function BackupPanel() {
  const state = useBinder();
  const hydrated = useHydrated();
  const input = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<{ data: BinderState; summary: RestoreSummary } | null>(null);
  const [message, setMessage] = useState<{ tone: "ok" | "error"; text: string } | null>(null);

  function download() {
    const text = createBackup();
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `Leading-with-Care-Binder-Backup${state.name ? `-${fileSafe(state.name)}` : ""}-${date}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage({ tone: "ok", text: "Backup downloaded. Keep the file somewhere safe, such as your Documents folder or email it to yourself." });
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    setMessage(null);
    setPending(null);
    if (!file) return;
    const result = readBackup(await file.text());
    if (!result.ok) {
      setMessage({ tone: "error", text: result.error });
      return;
    }
    setPending({ data: result.data, summary: result.summary });
  }

  function confirmRestore() {
    if (!pending) return;
    restoreBackup(pending.data);
    setPending(null);
    setMessage({ tone: "ok", text: "Your binder has been restored on this device." });
  }

  const current = hydrated && hasAnyWork(state);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-periwinkle bg-[#f4f7fb] p-5 sm:p-6" aria-labelledby="backup-h">
        <h2 id="backup-h" className="text-xl font-semibold text-navy">
          <span aria-hidden="true">⬇</span> Download a backup
        </h2>
        <p className="mt-2 text-slate-700">
          Saves everything in your binder—reflections, toolkit, activities, notes, and progress—to one small file you
          can keep or move to another device.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={download}
            className="rounded-md bg-navy px-5 py-3 font-semibold text-white hover:bg-navy/90"
          >
            Download my binder backup
          </button>
          <span className="text-sm text-slate-600" aria-live="polite">
            {hydrated && state.lastBackup ? `Last backup: ${fmt(state.lastBackup)}` : "No backup downloaded yet"}
          </span>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-labelledby="restore-h">
        <h2 id="restore-h" className="text-xl font-semibold text-navy">
          <span aria-hidden="true">⬆</span> Restore from a backup
        </h2>
        <p className="mt-2 text-slate-700">
          Use this on a new device or browser, or if your answers have disappeared. Choose the backup file you
          downloaded earlier.
        </p>
        <input ref={input} type="file" accept=".json,application/json" onChange={onFile} className="sr-only" id="restore-file" />
        <label
          htmlFor="restore-file"
          className="mt-4 inline-block cursor-pointer rounded-md border border-slate-800 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
        >
          Choose backup file…
        </label>

        {pending && (
          <div className="mt-5 rounded-xl border-2 border-gold bg-[#fbf8f1] p-4" role="alertdialog" aria-labelledby="confirm-h">
            <p id="confirm-h" className="font-semibold text-slate-900">Replace the binder on this device with this backup?</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {pending.summary.name && <li>Name: {pending.summary.name}</li>}
              {pending.summary.exportedAt && <li>Backed up: {fmt(pending.summary.exportedAt)}</li>}
              <li>
                {pending.summary.activities} activit{pending.summary.activities === 1 ? "y" : "ies"} with answers ·{" "}
                {pending.summary.notes} lesson note{pending.summary.notes === 1 ? "" : "s"}
              </li>
            </ul>
            {current && (
              <p className="mt-3 text-sm font-medium text-[#7a4a12]">
                This device already has binder answers. Restoring will replace them. If you want to keep them, download a
                backup first.
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={confirmRestore}
                className="rounded-md bg-navy px-4 py-2 font-semibold text-white hover:bg-navy/90"
              >
                Yes, restore this backup
              </button>
              <button
                type="button"
                onClick={() => setPending(null)}
                className="rounded-md border border-slate-800 bg-white px-4 py-2 font-medium text-slate-900 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      {message && (
        <p
          role="status"
          className={`rounded-lg p-3 text-sm ${message.tone === "ok" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-800"}`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
