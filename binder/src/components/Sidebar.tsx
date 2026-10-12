"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { lessonHref, sections, type Section } from "@/content";
import { kindStyle } from "@/components/lesson/kindStyle";
import { lessonKey, useBinder } from "@/lib/store";

const tools = [
  { href: "/toolkit", title: "My Toolkit", sub: "Care-Centered Practice Toolkit", color: "#24497b", icon: "🧰" },
  { href: "/journal", title: "Pause & Check Journal", sub: "Reflections · Export to PDF", color: "#7f4f74", icon: "⏸" },
  { href: "/live-practice", title: "Live Practice Prep", sub: "Bring to class", color: "#cdb483", icon: "💬" },
  { href: "/your-notes", title: "Your Notes", sub: "All your learning notes", color: "#6b7280", icon: "📝" },
  { href: "/backup", title: "Back Up & Restore", sub: "Keep or move your work", color: "#467edd", icon: "💾" },
];

const pageIcon: Record<string, string> = { lesson: "📖", binder: "✏️", practice: "✅" };

function SectionGroup({
  section: s,
  pathname,
  completed,
  onNavigate,
}: {
  section: Section;
  pathname: string;
  completed: string[];
  onNavigate?: () => void;
}) {
  const inSection = pathname === `/sections/${s.id}` || pathname.startsWith(`/sections/${s.id}/`);
  const [open, setOpen] = useState(inSection);
  useEffect(() => {
    if (inSection) setOpen(true);
  }, [inSection]);
  const done = s.lessons.filter((l) => completed.includes(lessonKey(s.id, l.slug))).length;
  const listId = `nav-${s.id}`;

  return (
    <div className="rounded-r-xl border-l-4" style={{ borderLeftColor: s.color }}>
      <div
        className={`flex items-stretch rounded-r-xl ${inSection ? "shadow-md" : "hover:bg-slate-50"}`}
        style={{ backgroundColor: inSection ? s.color : undefined, color: inSection ? s.ink : undefined }}
      >
        <Link
          href={`/sections/${s.id}`}
          onClick={onNavigate}
          aria-current={pathname === `/sections/${s.id}` ? "page" : undefined}
          className={`min-w-0 flex-1 p-3 ${inSection ? "font-semibold" : "font-medium text-gray-700"}`}
        >
          <div className="text-sm leading-tight">{s.shortTitle}</div>
          <div className="mt-1 flex justify-between gap-2 text-xs opacity-80">
            <span>{s.eyebrow}</span>
            {done > 0 && <span>{done === s.lessons.length ? "✓ Complete" : `${done}/${s.lessons.length} done`}</span>}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`${open ? "Collapse" : "Expand"} ${s.shortTitle}`}
          className="shrink-0 px-2.5 text-lg opacity-70 hover:opacity-100"
        >
          <span aria-hidden="true" className={`inline-block transition-transform ${open ? "rotate-90" : ""}`}>
            ›
          </span>
        </button>
      </div>

      {open && (
        <ul id={listId} className="ml-2 mt-1 space-y-0.5 border-l border-slate-200 py-1 pl-2">
          {s.lessons.map((l) => {
            const href = lessonHref(s.id, l.slug);
            const active = pathname === href;
            const isDone = completed.includes(lessonKey(s.id, l.slug));
            return (
              <li key={l.slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-sm ${
                    active ? "bg-slate-100 font-semibold text-gray-900" : "text-gray-700 hover:bg-slate-50"
                  }`}
                >
                  <span aria-hidden="true" className="w-4 shrink-0 text-center text-xs leading-5">
                    {pageIcon[l.kind] ?? "•"}
                  </span>
                  <span className="flex-1 leading-snug">{l.title}</span>
                  {isDone && (
                    <span className="text-xs leading-5 text-emerald-700" aria-label="completed">
                      ✓
                    </span>
                  )}
                </Link>
                {l.worksheets && l.worksheets.length > 0 && (
                  <ul className="mb-1 ml-6 space-y-0.5">
                    {l.worksheets.map((w) => (
                      <li key={w.id}>
                        <Link
                          href={`${href}#${w.id}`}
                          onClick={onNavigate}
                          className="flex gap-1.5 rounded px-1.5 py-1 text-xs leading-snug text-gray-600 hover:bg-slate-50 hover:text-gray-900"
                        >
                          <span aria-hidden="true">{kindStyle[w.kind].icon}</span>
                          <span>{w.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

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
        {sections.map((s) => (
          <SectionGroup key={s.id} section={s} pathname={pathname} completed={completed} onNavigate={onNavigate} />
        ))}
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
