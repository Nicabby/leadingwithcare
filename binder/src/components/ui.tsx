import Link from "next/link";
import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`print-flat rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 ${className}`}>{children}</div>
  );
}

export function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-4 text-xl font-semibold text-slate-900">
      {children}
    </h2>
  );
}

export function Divider() {
  return <hr className="my-8 border-slate-200" />;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-eap text-white hover:bg-eap-dark"
      : "border border-slate-800 bg-white text-slate-900 hover:bg-slate-100";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function Quote({ children, color = "#467edd" }: { children: ReactNode; color?: string }) {
  return (
    <blockquote
      className="my-6 rounded-r-xl border-l-4 bg-white px-5 py-4 text-lg font-semibold italic leading-snug text-navy"
      style={{ borderLeftColor: color }}
    >
      {children}
    </blockquote>
  );
}

export function BulletList({ items, color = "#467edd" }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 rounded-r-lg border-l-4 bg-white py-3 pl-4 pr-3 text-slate-800 shadow-sm"
          style={{ borderLeftColor: color }}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
