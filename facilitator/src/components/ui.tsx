import Link from "next/link";
import type { ReactNode } from "react";
import type { Mode } from "@/content";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`print-flat rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children, color = "#467edd" }: { children: ReactNode; color?: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider" style={{ color }}>
      {children}
    </p>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="avoid-break-after mb-4 mt-10 scroll-mt-20 text-xl font-bold text-slate-900 first:mt-0">
      {children}
    </h2>
  );
}

export function Callout({
  title,
  children,
  color = "#467edd",
  tint = "#eef3fc",
}: {
  title?: string;
  children: ReactNode;
  color?: string;
  tint?: string;
}) {
  return (
    <div className="avoid-break my-5 rounded-r-xl border-l-4 p-4 sm:p-5" style={{ borderLeftColor: color, backgroundColor: tint }}>
      {title && <p className="mb-1 font-semibold text-slate-900">{title}</p>}
      <div className="text-slate-700">{children}</div>
    </div>
  );
}

export function Bullets({ items, color = "#467edd" }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-slate-700">
          <span className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-slate-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const modeStyles: Record<Mode, string> = {
  "Main room": "bg-slate-100 text-slate-700",
  Chat: "bg-[#eef3fc] text-[#24497b]",
  Poll: "bg-[#eef3fc] text-[#24497b]",
  Breakout: "bg-[#f6eef4] text-[#7f4f74]",
  Pairs: "bg-[#f6eef4] text-[#7f4f74]",
  Triads: "bg-[#f6eef4] text-[#7f4f74]",
  Fishbowl: "bg-[#f9f5ec] text-[#6b5a2e]",
  Individual: "bg-[#f1f2fb] text-[#3f4595]",
  "Screen share": "bg-slate-100 text-slate-700",
  Whiteboard: "bg-slate-100 text-slate-700",
};

export function ModeBadge({ mode }: { mode: Mode }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${modeStyles[mode]}`}>{mode}</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
    variant === "primary" ? "bg-eap text-white hover:bg-eap-dark" : "border border-slate-800 bg-white text-slate-900 hover:bg-slate-100"
  }`;
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
