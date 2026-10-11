import type { Metadata } from "next";
import { Card, Divider } from "@/components/ui";
import BackupPanel from "@/components/BackupPanel";

export const metadata: Metadata = { title: "Back Up & Restore" };

export default function Page() {
  return (
    <Card>
      <h1 className="text-3xl font-bold text-slate-900">
        <span aria-hidden="true">💾</span> Back Up & Restore
      </h1>
      <p className="mt-2 text-lg text-slate-600">
        Your binder saves automatically as you type—privately, in this browser on this device. No one else can see it,
        and there’s no account to sign in to. A backup file lets you keep a safe copy and move your work to another
        device.
      </p>

      <div className="mt-6">
        <BackupPanel />
      </div>

      <Divider />

      <h2 className="text-xl font-semibold text-slate-900">Moving to another device or browser</h2>
      <ol className="mt-3 space-y-2 text-slate-700">
        {[
          "On the device you’ve been using, click Download my binder backup.",
          "Send the file to yourself (email, OneDrive, Google Drive, or a USB drive).",
          "On the new device, open the binder, come to this page, and click Choose backup file…",
          "Confirm the restore. Your reflections, toolkit, notes, and progress will appear.",
        ].map((t, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
              {i + 1}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Good habits</h2>
      <ul className="mt-3 space-y-2 text-slate-700">
        {[
          "Use the same device and browser each time you open the binder.",
          "Don’t use a private or incognito window—nothing is saved there after you close it.",
          "Download a backup at the end of each lesson or live session.",
          "Clearing your browser history or site data erases your binder. Back up first.",
          "Safari (iPhone, iPad, Mac) can clear website data if you don’t visit the site for about a week, so back up regularly.",
          "On a shared computer, use your own browser profile so others can’t see or overwrite your answers.",
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <span className="text-eap" aria-hidden="true">
              •
            </span>
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Backup files contain your private reflections. Store them somewhere only you can access. A backup is different
        from a PDF export: a PDF is for reading and printing, while a backup can be restored into the binder.
      </p>
    </Card>
  );
}
