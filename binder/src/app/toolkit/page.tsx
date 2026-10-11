import type { Metadata } from "next";
import WorksheetCollection from "@/components/WorksheetCollection";

export const metadata: Metadata = { title: "My Care-Centered Practice Toolkit" };

export default function Page() {
  return (
    <WorksheetCollection
      kinds={["toolkit"]}
      icon="🧰"
      title="My Care-Centered Practice Toolkit"
      description={[
        "The practical tools you build across the course, collected in one place. Return to them whenever you are planning a difficult conversation, reviewing an activity or meeting, responding to a challenging moment, or considering how to make a space more inclusive and responsive.",
        "You don’t need every tool every time. Choose the tool that helps you ask the right question for the situation.",
      ]}
      pdf={{
        title: "Care-Centered Practice Toolkit",
        subtitle: "My completed tools  |  Leading with Care",
        intro:
          "Your Care-Centered Practice Toolkit from the Leading with Care course. Choose the tool that helps you ask the right question for the situation.",
        file: "Practice-Toolkit",
      }}
    />
  );
}
