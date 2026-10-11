export type Mode =
  | "Main room"
  | "Chat"
  | "Poll"
  | "Breakout"
  | "Pairs"
  | "Triads"
  | "Fishbowl"
  | "Individual"
  | "Screen share"
  | "Whiteboard"
  | "Survey";

/** A scenario offered in two versions so facilitators can match their group. */
export type DualScenario = {
  title: string;
  youth: string;
  workplace: string;
};

/**
 * Text containing "[TBD" is highlighted in the guide so open items are easy to spot.
 */
export type ActivityGuide = {
  purpose: string;
  setup: string[];
  /** Suggested facilitator language — adapt, don't read verbatim. */
  say: string[];
  instructions: string[];
  /** Text to paste into chat or broadcast to breakout rooms. */
  chat?: string;
  scenarios?: DualScenario[];
  debrief: string[];
  listenFor: string[];
  watchFor: string[];
  /** How the activity connects to the learner Digital Binder. */
  binder: string[];
  handouts?: string[];
};

export type RunItem = {
  id: string;
  start: number;
  end: number;
  activity: string;
  purpose: string;
  method: string;
  modes: Mode[];
  notes: string;
  /** Major activities get a full facilitation guide. */
  guide?: ActivityGuide;
};

export type Session = {
  number: number;
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  color: string;
  ink: string;
  tint: string;
  status: "Outline" | "Draft" | "Final";
  overview: {
    modules: string[];
    purpose: string;
    objectives: string[];
    concepts: { title: string; text: string }[];
    toolkit: string[];
  };
  before: {
    prework: string[];
    bring: string[];
    prep: string[];
    materials: string[];
    breakouts: string[];
  };
  runOfShow: RunItem[];
  close: {
    reflection: string[];
    carryForward: string[];
    next: string[];
  };
};

export type HandoutBlock =
  | { kind: "text"; heading?: string; text: string }
  | { kind: "list"; heading?: string; items: string[]; checkbox?: boolean; numbered?: boolean }
  | { kind: "lines"; heading?: string; prompt?: string; count: number }
  | { kind: "table"; heading?: string; columns: string[]; rows: string[][]; blankRows?: number }
  | { kind: "cards"; heading?: string; cards: { title: string; label?: string; text: string }[] }
  | { kind: "dual"; heading?: string; scenario: DualScenario };

export type Handout = {
  id: string;
  title: string;
  type: "Role Cards" | "Scenario Cards" | "Observer Sheet" | "Worksheet" | "Reference Card";
  session: number | null;
  audience: "Learners" | "Facilitator" | "Volunteers";
  purpose: string;
  blocks: HandoutBlock[];
};
