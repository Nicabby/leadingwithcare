import type { Handout } from "./types";

// PLACEHOLDER CONTENT — add Leading with Care handouts here.
export const handouts: Handout[] = [
  {
    id: "lwc-reference",
    title: "Leading with Care Reference Card",
    type: "Reference Card",
    session: null,
    audience: "Learners",
    purpose: "[Placeholder] A one-page thinking tool used in every session.",
    blocks: [
      {
        kind: "cards",
        cards: [{ label: "[TBD]", title: "[Placeholder] Card title", text: "[Placeholder] Card text." }],
      },
    ],
  },
];

export function getHandout(id: string) {
  return handouts.find((h) => h.id === id);
}
