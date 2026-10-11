import type { Metadata } from "next";
import WorksheetCollection from "@/components/WorksheetCollection";

export const metadata: Metadata = { title: "Live Practice Prep" };

export default function Page() {
  return (
    <WorksheetCollection
      kinds={["live"]}
      icon="💬"
      title="Live Practice Prep"
      description={[
        "Prepare the de-identified examples, questions, and drafts you will bring to each instructor-led session for scenarios, role-play, small-group discussion, and peer feedback.",
        "The goal is not to arrive with a perfect answer. The live sessions let you test your thinking, hear other perspectives, practice language, and revise your approach.",
      ]}
      pdf={{
        title: "Live Practice Prep",
        subtitle: "Bring to class  |  Leading with Care",
        intro:
          "Your preparation notes for the Leading with Care live sessions. Examples should be de-identified and shared only as far as you are comfortable and authorized.",
        file: "Live-Practice-Prep",
      }}
    />
  );
}
