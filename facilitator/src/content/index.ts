import { session1 } from "./session1";
import { session2 } from "./session2";
import { session3 } from "./session3";
import { session4 } from "./session4";
import { session5 } from "./session5";
import { session6 } from "./session6";

export * from "./types";
export { handouts, getHandout } from "./handouts";

export const guide = {
  title: "Leading with Care Facilitator Guide",
  short: "Facilitator Guide",
  tagline: "Six live virtual sessions that extend the Leading with Care course through discussion, scenario practice, reflection, and application.",
  learnerBinderUrl: "https://leadingwithcare.vercel.app",
  pdfPath: "/Leading-with-Care-Facilitator-Guide.pdf",
};

export const sessions = [session1, session2, session3, session4, session5, session6];

export function getSession(slug: string) {
  return sessions.find((s) => s.slug === slug);
}

export const principles = [
  {
    title: "Facilitate application, not a second lecture",
    text: "Assume learners have encountered the concepts in the eLearning. Use live time to retrieve, discuss, test, practice, and apply.",
  },
  {
    title: "Ask before telling",
    text: "Use questions to surface learners’ reasoning. When correcting a misconception, connect the correction to a concrete example.",
  },
  {
    title: "Model what you teach",
    text: "Every session is a chance to demonstrate predictability, clarity, choice, and repair. Preview the agenda, offer more than one way to participate, and name it when you adjust.",
  },
  {
    title: "Protect psychological safety without removing productive challenge",
    text: "Allow learners to pass on personal sharing. Challenge ideas and behaviors rather than identities or character.",
  },
  {
    title: "Keep examples close to their world",
    text: "Scenarios in this guide offer a youth version (school, programs, clubs, volunteering) and a workplace version. Choose the one that fits your group, or offer both.",
  },
  {
    title: "Debrief every activity",
    text: "The learning often happens after the practice. Use the debrief sequence: What happened? What did you notice? Why did it matter? Which tool or principle shows up? What would you try next time?",
  },
  {
    title: "Use Zoom intentionally",
    text: "Change the participation mode every 10–20 minutes: voice, chat, poll, annotation, breakout, fishbowl, individual reflection.",
  },
];

export const virtualDelivery = [
  "Keep cameras optional unless program policy states otherwise; invite participation through voice, chat, reactions, polls, annotation, and breakout rooms.",
  "Put breakout instructions on screen and paste them into chat before opening rooms. Every activity in this guide includes ready-to-paste text.",
  "For triads, assign roles explicitly: Leader / Participant / Observer. Rotate roles when time allows.",
  "Fishbowls work well virtually: spotlight volunteers in the main room while observers use a simple lens in chat or on paper.",
  "Use a visible timer and broadcast a 2-minute warning to breakout rooms.",
  "Never require learners to disclose personal experiences. Scenarios can always be discussed hypothetically, and examples participants bring should be de-identified.",
  "Keep a quiet breakout room available so participants can step away without explaining.",
];

export const debriefSequence = [
  { step: "What happened?", text: "Describe the events without judgment." },
  { step: "What did you notice?", text: "Specific words, actions, reactions." },
  { step: "Why did it matter?", text: "Impact on people and results." },
  { step: "Which tool or principle shows up?", text: "Name the care-centered practice in action." },
  { step: "What would you try next time?", text: "One concrete adjustment." },
];
