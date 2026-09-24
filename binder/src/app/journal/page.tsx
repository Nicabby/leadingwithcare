import type { Metadata } from "next";
import JournalView from "./JournalView";

export const metadata: Metadata = { title: "Reflection Journal" };

export default function Page() {
  return <JournalView />;
}
