"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sections } from "@/content";
import { lessonKey, useBinder } from "@/lib/store";

const tools = [
  { href: "/toolkit", title: "My Toolkit", sub: "Care-Centered Practice Toolkit", color: "#24497b", icon: "🧰" },
  { href: "/journal", title: "Pause & Check Journal", sub: "Reflections · Export to PDF", color: "#7f4f74", icon: "⏸" },
  { href: "/live-practice", title: "Live Practice Prep", sub: "Bring to class", color: "#cdb483", icon: "💬" },
  { href: "/your-notes", title: "Your Notes", sub: "All your learning notes", color: "#6b7280", icon: "📝" },
];

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { completed } = useBinder();
  const total = sections.reduce((n, s) => n + s.lessons.length, 0);
  const pct = Math.round((completed.length / total) * 100);

  return (
    <div className="px-6 py-6">
      <Link href="/" onClick={onNavigate} className="block text-center" aria-label="Leading with Care binder home">
        <Image src="/eap-logo.png" alt="Elevate Adolescence Program" width={120} height={72} className="mx-auto h-auto w-[120px]" priority />
        <span className="mt-3 block text-xl font-bold tracking-tight text-navy">
          Leading <span className="font-normal text-eap">with Care</span>
        </span>
      </Link>

      <div className="mt-4 rounded-lg bg-slate-50 p-3" aria-live="polite">
        <div className="flex items-center justify-between text-xs font-medium text-slate-600">
          <span>Your progress</span>
          <span>
            {completed.length}/{total} pages
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-eap transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <h2 className="mt-6 mb-4 text-center text-lg font-bold text-gray-800">Course Lessons</h2>
      <nav aria-label="Course lessons" className="space-y-2">
        {sections.map((s) => {
          const active = pathname === `/sections/${s.id}` || pathname.startsWith(`/sections/${s.id}/`);
          const done = s.lessons.filter((l) => completed.includes(lessonKey(s.id, l.slug))).length;
          return (
            <Link
              key={s.id}
              href={`/sections/${s.id}`}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`relative block border-l-4 p-3 transition-all duration-200 ${
                active ? "rounded-xl font-semibold shadow-md" : "rounded-r-xl font-medium text-gray-700 hover:bg-slate-50 hover:shadow-sm"
              }`}
              style={{
                borderLeftColor: s.color,
                backgroundColor: active ? s.color : undefined,
                color: active ? s.ink : undefined,
              }}
            >
              <div className="text-sm leading-tight">{s.shortTitle}</div>
              <div className="mt-1 flex justify-between text-xs opacity-80">
                <span>{s.eyebrow}</span>
                {done > 0 && <span>{done === s.lessons.length ? "✓ Complete" : `${done} done`}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="my-6 border-t border-slate-200" />

      <nav aria-label="Binder tools" className="space-y-2">
        {tools.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`block rounded-r-xl border-l-4 p-3 transition-all duration-200 ${
                active ? "bg-slate-100 font-semibold text-gray-900 shadow-sm" : "font-medium text-gray-700 hover:bg-slate-50 hover:shadow-sm"
              }`}
              style={{ borderLeftColor: t.color }}
            >
              <div className="text-sm leading-tight">
                <span aria-hidden="true">{t.icon}</span> {t.title}
              </div>
              <div className="mt-1 text-xs opacity-75">{t.sub}</div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/eap-logo.png" alt="" width={44} height={26} className="h-auto w-11" />
          <span className="text-lg font-bold text-navy">
            Leading <span className="font-normal text-eap">with Care</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          ☰ Lessons
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="no-print fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" id="mobile-nav">
          <button className="absolute inset-0 bg-black/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs overflow-y-auto border-r-4 border-periwinkle bg-white">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-100"
              aria-label="Close menu"
            >
              ✕
            </button>
            <NavContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="no-print relative hidden w-72 shrink-0 border-r-4 border-periwinkle bg-white lg:block">
        <div className="binder-spine absolute inset-y-0 left-0 w-3.5 border-l-2 border-slate-500" aria-hidden="true" />
        <div className="sticky top-0 max-h-screen overflow-y-auto pl-2">
          <NavContent />
        </div>
      </aside>
    </>
  );
}
