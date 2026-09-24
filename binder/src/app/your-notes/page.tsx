import type { Metadata } from "next";
import NotesView from "./NotesView";

export const metadata: Metadata = { title: "Your Notes" };

export default function Page() {
  return <NotesView />;
}
