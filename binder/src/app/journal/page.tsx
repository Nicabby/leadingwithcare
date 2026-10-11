import type { Metadata } from "next";
import WorksheetCollection from "@/components/WorksheetCollection";

export const metadata: Metadata = { title: "Pause & Check Journal" };

export default function Page() {
  return (
    <WorksheetCollection
      kinds={["pause"]}
      icon="⏸"
      title="Pause & Check Journal"
      description={[
        "Every Pause & Check Reflection from the course in one place. Each one follows the same four moves: Notice, Name, Check, Choose.",
        "These reflections are for your own thinking. Some may remain completely private—you decide what you record and what you share.",
      ]}
      pdf={{
        title: "Pause & Check Journal",
        subtitle: "Reflections  |  Leading with Care",
        intro:
          "This journal holds your Pause & Check Reflections from the Leading with Care course. There are no perfect answers - it captures how you are thinking, so you can return later and notice what has changed.",
        file: "Pause-and-Check-Journal",
      }}
    />
  );
}
