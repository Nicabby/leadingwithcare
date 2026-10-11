"use client";

import type { jsPDF as JsPDF } from "jspdf";
import { sections, worksheetSteps, type WorksheetRef } from "@/content";
import type { BinderState } from "./store";
import { lessonKey } from "./store";

const NAVY: [number, number, number] = [36, 73, 123];
const PLUM: [number, number, number] = [127, 79, 116];
const BLUE: [number, number, number] = [70, 126, 221];
const SLATE: [number, number, number] = [71, 85, 105];
const INK: [number, number, number] = [23, 23, 23];

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** The built-in PDF fonts only cover basic Latin, so normalize typography. */
function clean(text: string) {
  return text
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/—/g, " - ")
    .replace(/–/g, "-")
    .replace(/…/g, "...")
    .replace(/[•·]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E -ÿ]/g, "");
}

class Writer {
  doc: JsPDF;
  y: number;
  readonly margin = 56;
  readonly pageW: number;
  readonly pageH: number;
  readonly width: number;
  constructor(doc: JsPDF) {
    this.doc = doc;
    this.pageW = doc.internal.pageSize.getWidth();
    this.pageH = doc.internal.pageSize.getHeight();
    this.width = this.pageW - this.margin * 2;
    this.y = this.margin;
  }
  ensure(h: number) {
    if (this.y + h > this.pageH - this.margin - 20) {
      this.doc.addPage();
      this.y = this.margin;
    }
  }
  text(str: string, opts: { size?: number; bold?: boolean; italic?: boolean; color?: [number, number, number]; gap?: number; indent?: number } = {}) {
    const { size = 11, bold = false, italic = false, color = INK, gap = 4, indent = 0 } = opts;
    const style = bold && italic ? "bolditalic" : bold ? "bold" : italic ? "italic" : "normal";
    this.doc.setFont("helvetica", style);
    this.doc.setFontSize(size);
    this.doc.setTextColor(...color);
    const lh = size * 1.35;
    const paragraphs = clean(str).split(/\n/);
    for (const para of paragraphs) {
      const lines: string[] = this.doc.splitTextToSize(para || " ", this.width - indent);
      for (const line of lines) {
        this.ensure(lh);
        this.doc.text(line, this.margin + indent, this.y + size);
        this.y += lh;
      }
    }
    this.y += gap;
  }
  rule(color: [number, number, number] = [226, 232, 240], weight = 0.8) {
    this.ensure(10);
    this.doc.setDrawColor(...color);
    this.doc.setLineWidth(weight);
    this.doc.line(this.margin, this.y, this.pageW - this.margin, this.y);
    this.y += 10;
  }
  writingLines(count: number) {
    this.doc.setDrawColor(203, 213, 225);
    this.doc.setLineWidth(0.6);
    for (let i = 0; i < count; i++) {
      this.ensure(22);
      this.y += 20;
      this.doc.line(this.margin + 10, this.y, this.pageW - this.margin, this.y);
    }
    this.y += 8;
  }
  header(title: string, subtitle: string, name: string) {
    const { doc } = this;
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, this.pageW, 110, "F");
    // brand stripes
    const stripes = ["#7f4f74", "#cdb483", "#467edd", "#dcc1e4", "#b1b4e5"];
    stripes.forEach((c, i) => {
      doc.setFillColor(...hexToRgb(c));
      doc.rect((this.pageW / stripes.length) * i, 110, this.pageW / stripes.length, 6, "F");
    });
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text(clean(title), this.margin, 58);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(clean(subtitle), this.margin, 82);
    this.y = 140;
    const date = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    this.text(`${name ? `Name: ${name}     ` : ""}Exported: ${date}`, { size: 10, color: SLATE, gap: 10 });
  }
  footer(label: string) {
    const { doc } = this;
    const pages = doc.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...SLATE);
      doc.text(clean(label), this.margin, this.pageH - 28);
      doc.text(`Page ${i} of ${pages}`, this.pageW - this.margin, this.pageH - 28, { align: "right" });
    }
  }
  sectionBar(title: string, colorHex: string) {
    this.ensure(170);
    this.y += 6;
    this.doc.setFillColor(...hexToRgb(colorHex));
    this.doc.rect(this.margin, this.y, 6, 22, "F");
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(15);
    this.doc.setTextColor(...NAVY);
    this.doc.text(clean(title), this.margin + 14, this.y + 16);
    this.y += 34;
  }
}

async function newDoc() {
  const { jsPDF } = await import("jspdf");
  return new jsPDF({ unit: "pt", format: "letter" });
}

function fileSafe(name: string) {
  return name.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
}

export type WorksheetExport = {
  title: string;
  subtitle: string;
  intro: string;
  file: string;
  items: WorksheetRef[];
  includeBlank: boolean;
};

/** Export any set of binder activities (toolkit, Pause & Check, live practice, or the whole binder). */
export async function exportWorksheetsPdf(state: BinderState, opts: WorksheetExport) {
  const doc = await newDoc();
  const w = new Writer(doc);
  w.header(opts.title, opts.subtitle, state.name);
  w.text(opts.intro, { size: 10.5, color: SLATE, gap: 12 });

  let written = 0;
  for (const section of sections) {
    const items = opts.items.filter((r) => r.section.id === section.id);
    const visible = items.filter(({ worksheet }) => {
      const e = state.work[worksheet.id];
      return opts.includeBlank || (e && Object.values(e.values).some((v) => v.trim()));
    });
    if (!visible.length) continue;
    w.sectionBar(section.title, section.color);
    for (const { worksheet } of visible) {
      const values = state.work[worksheet.id]?.values ?? {};
      w.ensure(90);
      w.text(worksheet.title, { size: 13, bold: true, color: INK, gap: 6 });
      for (const group of worksheetSteps(worksheet)) {
        const answered = group.fields.filter((f) => (values[f.id] ?? "").trim());
        if (!opts.includeBlank && !answered.length) continue;
        w.ensure(70);
        if (group.heading) w.text(group.heading.toUpperCase(), { size: 8.5, bold: true, color: PLUM, gap: 3 });
        for (const f of group.fields) {
          const a = (values[f.id] ?? "").trim();
          if (!a && !opts.includeBlank) continue;
          w.ensure(a ? 50 : 100);
          w.text(f.label, { size: 10.5, bold: true, color: NAVY, gap: 3 });
          if (a) w.text(a, { size: 11, color: INK, gap: 9, indent: 10 });
          else w.writingLines((f.rows ?? 3) >= 3 ? 3 : 2);
        }
      }
      w.rule();
      written++;
    }
  }
  if (!written) {
    w.text("Nothing here yet. Complete the activities in your lessons, or export with blank prompts included.", {
      size: 11,
      color: SLATE,
    });
  }
  w.footer(`Leading with Care  |  ${opts.title}`);
  doc.save(`Leading-with-Care-${opts.file}${state.name ? `-${fileSafe(state.name)}` : ""}.pdf`);
}

export async function exportNotesPdf(state: BinderState) {
  const doc = await newDoc();
  const w = new Writer(doc);
  w.header("Your Notes", "Learning notes  |  Leading with Care", state.name);
  let written = 0;
  for (const section of sections) {
    const items = section.lessons.filter((l) => (state.notes[lessonKey(section.id, l.slug)] ?? "").trim());
    if (!items.length) continue;
    w.sectionBar(section.title, section.color);
    for (const lesson of items) {
      w.ensure(60);
      w.text(lesson.title, { size: 12.5, bold: true, color: BLUE, gap: 4 });
      w.text(state.notes[lessonKey(section.id, lesson.slug)].trim(), { size: 11, gap: 10 });
      w.rule();
      written++;
    }
  }
  if (!written) w.text("No notes yet.", { size: 11, color: SLATE });
  w.footer("Leading with Care  |  Your Notes");
  doc.save(`Leading-with-Care-Notes${state.name ? `-${fileSafe(state.name)}` : ""}.pdf`);
}
