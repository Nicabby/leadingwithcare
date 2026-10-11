import type { Handout } from "./types";

// Add session-specific handouts here as session details are finalized. [TBD]
export const handouts: Handout[] = [
  {
    id: "lwc-reference",
    title: "Leading with Care Reference Card",
    type: "Reference Card",
    session: null,
    audience: "Learners",
    purpose: "A one-page thinking tool participants can keep open during every session.",
    blocks: [
      {
        kind: "cards",
        heading: "Pause & Check",
        cards: [
          { label: "1", title: "Notice", text: "What did I actually see or hear? What happened in my own response?" },
          { label: "2", title: "Name", text: "What story or assumption did I add? What could I actually verify?" },
          { label: "3", title: "Check", text: "What else could be true? What information is missing?" },
          { label: "4", title: "Choose", text: "What response protects dignity while keeping the purpose, expectation, or boundary clear?" },
        ],
      },
      {
        kind: "list",
        heading: "Seven principles",
        items: [
          "Stay grounded in what you know.",
          "Protect dignity.",
          "Question assumptions.",
          "Maintain appropriate boundaries.",
          "Create meaningful access.",
          "Stay curious.",
          "Choose a workable next step.",
        ],
      },
    ],
  },
];

export function getHandout(id: string) {
  return handouts.find((h) => h.id === id);
}
