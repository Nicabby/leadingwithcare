import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Leading with Care Facilitator Guide", template: "%s · Leading with Care Facilitator Guide" },
  description: "Facilitator guide for the Leading with Care live virtual sessions.",
  applicationName: "LWC Facilitator Guide",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#24497b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
