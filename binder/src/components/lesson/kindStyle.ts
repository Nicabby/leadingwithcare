import type { WorksheetKind } from "@/content/types";

export const kindStyle: Record<
  WorksheetKind,
  { label: string; icon: string; border: string; bg: string; accent: string; chip: string }
> = {
  toolkit: {
    label: "Build Your Toolkit",
    icon: "🧰",
    border: "#24497b",
    bg: "#f4f7fb",
    accent: "#24497b",
    chip: "#dfe7f2",
  },
  pause: {
    label: "Pause & Check Reflection",
    icon: "⏸",
    border: "#dcc1e4",
    bg: "#fbf6fc",
    accent: "#7f4f74",
    chip: "#f1e4f4",
  },
  activity: {
    label: "Practice Activity",
    icon: "✏️",
    border: "#467edd",
    bg: "#f3f7fe",
    accent: "#3566bd",
    chip: "#dfe9fb",
  },
  live: {
    label: "Bring to Live Practice",
    icon: "💬",
    border: "#cdb483",
    bg: "#fbf8f1",
    accent: "#6f5a2c",
    chip: "#f1e8d4",
  },
};
