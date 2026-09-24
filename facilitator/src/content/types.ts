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
  | "Whiteboard";

/** A scenario offered in two versions so facilitators can match their group. */
export type DualScenario = {
  title: string;
  youth: string;
  workplace: string;
};

export type Segment = {
  id: string;
  start: number;
  end: number;
  title: string;
  modes: Mode[];
  goal: string;
  /** Suggested facilitator language — adapt, don't read verbatim. */
  say?: string[];
  steps?: string[];
  /** Text to paste into Zoom chat or broadcast to breakout rooms. */
  chat?: string;
  poll?: { question: string; options: string[]; note?: string };
  scenarios?: DualScenario[];
  debrief?: string[];
  listenFor?: string[];
  tip?: string;
  ifShort?: string;
  handouts?: string[];
};

export type Slide = { title: string; bullets: string[]; notes?: string };

export type Challenge = { challenge: string; response: string };

export type Session = {
  number: number;
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  color: string;
  ink: string;
  tint: string;
  purpose: string;
  objectives: string[];
  why: string;
  concepts: { title: string; text: string }[];
  elearning: { before: string[]; after: string[] };
  materials: string[];
  prep: string[];
  learnerMessage: string;
  segments: Segment[];
  discussion: string[];
  slides: Slide[];
  handouts: string[];
  challenges: Challenge[];
  afterReflection: string[];
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
