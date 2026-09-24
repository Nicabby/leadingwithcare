// Renders /print to the PDF edition. Usage: start the site (npm run build && npm start), then:
//   node scripts/make-pdf.mjs [baseUrl]
import { chromium } from "playwright";
const base = process.argv[2] ?? "http://localhost:3000";
const exe = process.env.CHROMIUM_PATH;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage();
await page.goto(`${base}/print`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: "public/Leading-with-Care-Facilitator-Guide.pdf",
  format: "Letter",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate:
    '<div style="width:100%;font-size:8px;color:#64748b;padding:0 0.55in;display:flex;justify-content:space-between;font-family:Arial,sans-serif"><span>Leading with Care · Facilitator Guide</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
  margin: { top: "0.6in", bottom: "0.7in", left: "0.55in", right: "0.55in" },
  outline: true,
  tagged: true,
});
await browser.close();
console.log("PDF written");
