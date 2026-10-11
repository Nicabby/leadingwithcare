export type KeyIdea = {
  title: string;
  text: string;
  points?: string[];
  tip?: string;
};

export type ToolStep = {
  label: string;
  text: string;
};

export type Tool = {
  title: string;
  intro?: string;
  steps: ToolStep[];
};

export type Checklist = {
  title: string;
  intro?: string;
  items: string[];
};

export type Comparison = {
  title: string;
  left: string;
  right: string;
  rows: [string, string][];
};

export type ScenarioOption = {
  label: string;
  tone: "weak" | "strong";
  quote?: string;
  text?: string;
  pointsTitle?: string;
  points?: string[];
};

export type Scenario = {
  title: string;
  description: string;
  options: ScenarioOption[];
  closing?: string;
};

/** A fillable binder activity. Responses are saved per field in the learner's browser. */
export type WorksheetKind = "pause" | "toolkit" | "activity" | "live";

export type Field = {
  id: string;
  /** question or sentence stem shown above the box */
  label: string;
  rows?: number;
  placeholder?: string;
};

export type WorksheetStep = {
  /** e.g. "Step 1" or "Notice" */
  label?: string;
  title?: string;
  text?: string;
  /** questions to consider */
  ask?: string[];
  /** list heading + items, e.g. "Consider factors such as:" */
  listTitle?: string;
  list?: string[];
  consider?: string;
  example?: string;
  fields?: Field[];
};

export type Worksheet = {
  /** globally unique id — also the storage key and page anchor */
  id: string;
  kind: WorksheetKind;
  title: string;
  /** small label above the title, e.g. "Build Your Toolkit" */
  eyebrow?: string;
  intro?: string[];
  /** a field shown first, e.g. the de-identified situation being reviewed */
  situation?: Field;
  steps: WorksheetStep[];
  /** read-only worked example shown in a collapsible panel */
  example?: { title: string; intro?: string; rows: [string, string][] };
  /** closing sentence stems ("Complete the Reflection") */
  complete?: { title: string; intro?: string; fields: Field[] };
  /** extra commitments ("Add to Your Digital Binder") */
  commit?: { title: string; intro?: string; fields: Field[]; after?: string };
  useWhen?: string[];
  closing?: string;
};

export type Question =
  | {
      id: string;
      type: "single" | "multi" | "truefalse";
      prompt: string;
      options: string[];
      correct: number[];
      explanation: string;
    }
  | {
      id: string;
      type: "match";
      prompt: string;
      pairs: { item: string; answer: string }[];
      /** display order of the answer choices */
      choices: string[];
      explanation: string;
    };

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  kind: "lesson" | "binder" | "practice";
  summary: string;
  overview: string[];
  objectives?: string[];
  quote?: string;
  checklists?: Checklist[];
  keyIdeasTitle?: string;
  keyIdeas?: KeyIdea[];
  tools?: Tool[];
  comparison?: Comparison;
  scenarios?: Scenario[];
  worksheets?: Worksheet[];
  sourceNote?: string;
  takeaways?: string[];
  closing?: string;
  /** "What's next" bridge to the following lesson */
  next?: string;
  /** practice only */
  scenarioIntro?: string;
  questions?: Question[];
};

export type Section = {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  color: string;
  /** text color to use on top of `color` */
  ink: string;
  tint: string;
  overview: string[];
  keyConcept?: string;
  objectives: string[];
  lessons: Lesson[];
};
