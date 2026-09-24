import Sidebar from "@/components/Sidebar";
import { guide } from "@/content";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />
        <main id="main" className="relative min-h-screen min-w-0 flex-1 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
            <header className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-5">
              <div>
                <p className="text-2xl font-bold text-gray-800 sm:text-3xl">{guide.title}</p>
                <p className="mt-1 max-w-2xl text-sm text-slate-600 sm:text-base">{guide.tagline}</p>
              </div>
              <a
                href={guide.pdfPath}
                download
                className="no-print rounded-md border border-slate-800 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
              >
                ⬇ PDF
              </a>
            </header>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
