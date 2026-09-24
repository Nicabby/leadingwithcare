export type KeyIdea = {
  title: string;
  text: string;
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

export type Reflection = {
  intro: string;
  prompt: string;
  digDeeper: string;
  finish: string;
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
  kind: "lesson" | "practice";
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
  reflection?: Reflection;
  takeaways?: string[];
  closing?: string;
  resources?: string[];
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

export type Resource = {
  id: string;
  title: string;
  sectionId: string;
  type: string;
  description: string;
  why: string;
  file?: string;
  size?: string;
};
