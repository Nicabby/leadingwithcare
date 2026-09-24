import type { Handout, HandoutBlock } from "@/content";

function Lines({ count }: { count: number }) {
  return (
    <div className="mt-1">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-8 border-b border-slate-300" />
      ))}
    </div>
  );
}

function Block({ block }: { block: HandoutBlock }) {
  const heading = "heading" in block && block.heading ? <p className="font-semibold text-slate-900">{block.heading}</p> : null;
  switch (block.kind) {
    case "text":
      return (
        <div className="avoid-break">
          {heading}
          <p className="text-slate-700">{block.text}</p>
        </div>
      );
    case "list": {
      const Tag = block.numbered ? "ol" : "ul";
      return (
        <div className="avoid-break">
          {heading}
          <Tag className={`mt-1 space-y-1 pl-5 text-slate-700 ${block.numbered ? "list-decimal" : "list-disc"}`}>
            {block.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </Tag>
        </div>
      );
    }
    case "lines":
      return (
        <div className="avoid-break">
          {heading}
          {block.prompt && <p className="text-sm text-slate-600">{block.prompt}</p>}
          <Lines count={block.count} />
        </div>
      );
    case "table":
      return (
        <div className="avoid-break">
          {heading}
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  {block.columns.map((c) => (
                    <th key={c} scope="col" className="border border-slate-300 bg-navy p-2 font-semibold text-white">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((cell, ci) => (
                      <td key={ci} className={`h-14 border border-slate-300 p-2 align-top ${ci === 0 ? "font-medium text-slate-800" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                {Array.from({ length: block.blankRows ?? 0 }).map((_, i) => (
                  <tr key={`b${i}`}>
                    {block.columns.map((c) => (
                      <td key={c} className="h-16 border border-slate-300 p-2" />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "cards":
      return (
        <div>
          {heading}
          <div className="mt-2 grid gap-3 sm:grid-cols-2 print:grid-cols-2">
            {block.cards.map((c) => (
              <div key={c.title + (c.label ?? "")} className="avoid-break rounded-xl border-2 border-dashed border-slate-300 p-3">
                {c.label && <p className="text-xs font-bold uppercase tracking-wider text-eap">{c.label}</p>}
                <p className="font-semibold text-slate-900">{c.title}</p>
                <p className="mt-1 text-sm text-slate-700">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "dual":
      return (
        <div className="avoid-break">
          {heading}
          <div className="mt-2 rounded-xl border-2 border-dashed border-slate-300 p-3">
            <p className="font-semibold text-slate-900">{block.scenario.title}</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2 print:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#3f4595]">Youth version</p>
                <p className="text-sm text-slate-700">{block.scenario.youth}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-navy">Workplace version</p>
                <p className="text-sm text-slate-700">{block.scenario.workplace}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default function HandoutView({ handout, anchorPrefix = "" }: { handout: Handout; anchorPrefix?: string }) {
  return (
    <section id={`${anchorPrefix}${handout.id}`} className="handout scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="avoid-break flex flex-wrap items-start justify-between gap-2 border-b-4 border-periwinkle pb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Leading with Care · {handout.session ? `Session ${handout.session}` : "All sessions"} · {handout.type}
          </p>
          <h3 className="text-xl font-bold text-navy">{handout.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{handout.purpose}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">For {handout.audience.toLowerCase()}</span>
      </div>
      <div className="mt-4 space-y-5">
        {handout.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>
    </section>
  );
}
