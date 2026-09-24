import type { Metadata } from "next";
import { RESOURCE_PASSWORD, SHOW_RESOURCE_PASSWORD, resources, sections } from "@/content";
import { Card } from "@/components/ui";

export const metadata: Metadata = { title: "Resource Packages" };

export default function ResourcePackages() {
  return (
    <Card>
      <h1 className="text-3xl font-bold text-slate-900">Resource Packages</h1>
      <p className="mt-2 text-lg text-slate-600">
        Download practical tools and reference materials organized by module. Each resource supports the lessons in
        its section and is designed for everyday leadership moments.
      </p>

      <div className="mt-6 flex gap-3 rounded-xl border border-gold bg-[#f9f5ec] p-4">
        <span className="text-2xl" aria-hidden="true">
          🔒
        </span>
        <div>
          <p className="font-semibold text-navy">Password Protected Resources</p>
          <p className="mt-1 text-slate-700">
            All resource documents are password protected.{" "}
            {SHOW_RESOURCE_PASSWORD ? (
              <>
                When prompted, use the password:{" "}
                <code className="rounded bg-white px-2 py-0.5 font-mono font-bold text-navy">{RESOURCE_PASSWORD}</code>
              </>
            ) : (
              "When prompted, enter the password provided with your course."
            )}
          </p>
        </div>
      </div>

      {sections.map((section) => {
        const items = resources.filter((r) => r.sectionId === section.id);
        if (!items.length) return null;
        return (
          <section key={section.id} className="mt-10" aria-labelledby={`r-${section.id}`}>
            <div className="border-l-4 pl-4" style={{ borderLeftColor: section.color }}>
              <h2 id={`r-${section.id}`} className="text-xl font-bold text-slate-900">
                {section.title}
              </h2>
              <p className="text-slate-600">{section.description}</p>
              <p className="mt-1 text-sm text-slate-500">
                {(() => {
                  const n = items.filter((i) => i.file).length;
                  return n ? `${n} resource${n === 1 ? "" : "s"} available` : "Resource coming soon";
                })()}
              </p>
            </div>
            <div className="mt-4 space-y-3">
              {items.map((r) => (
                <div
                  key={r.id}
                  id={r.id}
                  className="scroll-mt-24 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm target:ring-2 target:ring-eap sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900">{r.title}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {r.type}
                      {r.size ? ` · PDF · ${r.size}` : ""}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{r.description}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      <span className="font-semibold text-navy">Why this matters: </span>
                      {r.why}
                    </p>
                  </div>
                  {r.file ? (
                    <a
                      href={`/resources/${r.file}`}
                      download
                      className="inline-flex shrink-0 items-center justify-center rounded-md bg-eap px-4 py-2.5 text-sm font-medium text-white hover:bg-eap-dark"
                    >
                      ⬇ Download
                    </a>
                  ) : (
                    <span className="inline-flex shrink-0 items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-500">
                      Coming soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </Card>
  );
}
