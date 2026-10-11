import type { Metadata, Viewport } from "next";
import Sidebar from "@/components/Sidebar";
import StorageBanner from "@/components/StorageBanner";
import { binder } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Leading with Care Binder",
    template: "%s · Leading with Care Binder",
  },
  description: "Digital Binder for the Leading with Care course: lesson reviews, Pause & Check reflections, your Care-Centered Practice Toolkit, and live-session preparation.",
  applicationName: "LWC Binder",
  appleWebApp: { capable: true, title: "LWC Binder" },
};

export const viewport: Viewport = {
  themeColor: "#467edd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Sidebar />
          <main id="main" className="relative min-h-screen min-w-0 flex-1 bg-slate-50">
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-8">
              <header className="mb-6 border-b border-slate-200 pb-5">
                <p className="text-2xl font-bold text-gray-800 sm:text-3xl">{binder.heading}</p>
                <p className="mt-1 text-sm text-slate-600 sm:text-base">{binder.tagline}</p>
              </header>
              <StorageBanner />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
