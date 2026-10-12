"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { guide, sessions, type Session } from "@/content";

const tools = [
  { href: "/handouts", title: "Handouts", sub: "Printable cards & worksheets", color: "#7f4f74", icon: "📄" },
  { href: "/answer-key", title: "Answer Key", sub: "All knowledge checks", color: "#24497b", icon: "🔑" },
  { href: "/quick-reference", title: "Quick Reference", sub: "Lessons & toolkit", color: "#cdb483", icon: "🧭" },
];

function SessionGroup({ session: s, pathname, onNavigate }: { session: Session; pathname: string; onNavigate?: () => void }) {
  const href = `/sessions/${s.slug}`;
  const active = pathname === href;
  const [open, setOpen] = useState(active);
  useEffect(() => {
    if (active) setOpen(true);
  }, [active]);
  const listId = `nav-${s.slug}`;
  const items: { id: string; label: string; time?: string; icon: string }[] = [
    { id: "overview", label: "Session Overview", icon: "🎯" },
    { id: "before", label: "Before the Session", icon: "✅" },
    { id: "run-of-show", label: "90-Minute Run of Show", icon: "⏱" },
    ...s.runOfShow
      .filter((r) => r.guide)
      .map((r) => ({ id: r.id, label: r.activity, time: `${r.start}–${r.end}`, icon: "▸" })),
    { id: "close", label: "Close", icon: "⏸" },
  ];

  return (
    <div className="rounded-r-xl border-l-4" style={{ borderLeftColor: s.color }}>
      <div
        className={`flex items-stretch rounded-r-xl ${active ? "shadow-md" : "hover:bg-slate-50"}`}
        style={{ backgroundColor: active ? s.color : undefined, color: active ? s.ink : undefined }}
      >
        <Link
          href={href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={`min-w-0 flex-1 p-3 ${active ? "font-semibold" : "font-medium text-gray-700"}`}
        >
          <div className="text-sm leading-tight">
            {s.number}. {s.title}
          </div>
          <div className="mt-1 text-xs opacity-80">90 min · {s.status}</div>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`${open ? "Collapse" : "Expand"} Session ${s.number}`}
          className="shrink-0 px-2.5 text-lg opacity-70 hover:opacity-100"
        >
          <span aria-hidden="true" className={`inline-block transition-transform ${open ? "rotate-90" : ""}`}>
            ›
          </span>
        </button>
      </div>

      {open && (
        <ul id={listId} className="ml-2 mt-1 space-y-0.5 border-l border-slate-200 py-1 pl-2">
          {s.overview.modules.length > 0 && (
            <li className="px-2 pb-1 text-xs italic leading-snug text-slate-500">{s.overview.modules.filter((m) => /Lesson \d/.test(m)).join(" · ")}</li>
          )}
          {items.map((it) => (
            <li key={it.id}>
              <Link
                href={`${href}#${it.id}`}
                onClick={onNavigate}
                className={`flex items-start gap-2 rounded-md px-2 py-1 leading-snug hover:bg-slate-50 ${
                  it.time ? "text-xs text-gray-600 hover:text-gray-900" : "text-sm text-gray-700"
                }`}
              >
                <span aria-hidden="true" className="w-4 shrink-0 text-center text-xs leading-5">
                  {it.icon}
                </span>
                <span className="flex-1">{it.label}</span>
                {it.time && <span className="shrink-0 tabular-nums text-[11px] leading-5 text-slate-400">{it.time}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const item = (active: boolean) =>
    `relative block border-l-4 p-3 transition-all duration-200 ${
      active ? "rounded-xl font-semibold shadow-md" : "rounded-r-xl font-medium text-gray-700 hover:bg-slate-50 hover:shadow-sm"
    }`;
  return (
    <div className="px-6 py-6">
      <Link href="/" onClick={onNavigate} className="block text-center" aria-label="Facilitator guide home">
        <Image src="/eap-logo.png" alt="Elevate Adolescence Program" width={120} height={72} className="mx-auto h-auto w-[120px]" priority />
        <span className="mt-3 block text-xl font-bold tracking-tight text-navy">
          Leading <span className="font-normal text-eap">with Care</span>
        </span>
        <span className="mt-1 inline-block rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          Facilitator Edition
        </span>
      </Link>

      <nav aria-label="Guide sections" className="mt-6 space-y-2">
        <Link
          href="/"
          onClick={onNavigate}
          aria-current={pathname === "/" ? "page" : undefined}
          className={item(pathname === "/")}
          style={{ borderLeftColor: "#6b7280", backgroundColor: pathname === "/" ? "#f1f5f9" : undefined }}
        >
          <div className="text-sm leading-tight">Start Here</div>
          <div className="mt-1 text-xs opacity-75">Principles & program map</div>
        </Link>
      </nav>

      <h2 className="mb-3 mt-6 text-center text-lg font-bold text-gray-800">Live Sessions</h2>
      <nav aria-label="Live sessions" className="space-y-2">
        {sessions.map((s) => (
          <SessionGroup key={s.slug} session={s} pathname={pathname} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="my-6 border-t border-slate-200" />

      <nav aria-label="Facilitator tools" className="space-y-2">
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

      <div className="mt-6 space-y-2">
        <a
          href={guide.pdfPath}
          download
          className="flex items-center justify-center gap-2 rounded-md bg-eap px-3 py-2.5 text-sm font-semibold text-white hover:bg-eap-dark"
        >
          ⬇ Download PDF Guide
        </a>
        <a
          href={guide.learnerBinderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Open Learner Binder ↗
        </a>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
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
          ☰ Menu
        </button>
      </div>

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

      <aside className="no-print relative hidden w-72 shrink-0 border-r-4 border-periwinkle bg-white lg:block">
        <div className="binder-spine absolute inset-y-0 left-0 w-3.5 border-l-2 border-slate-500" aria-hidden="true" />
        <div className="sticky top-0 max-h-screen overflow-y-auto pl-2">
          <NavContent />
        </div>
      </aside>
    </>
  );
}
