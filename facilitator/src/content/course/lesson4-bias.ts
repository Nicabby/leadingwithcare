import type { Section } from "./types";

export const lesson4: Section = {
  id: "bias-stereotypes",
  title: "Identifying and Responding to Bias and Stereotypes",
  shortTitle: "4. Bias & Stereotypes",
  eyebrow: "Lesson 4 of 9",
  description: "How learned beliefs and automatic associations shape judgments—and how to slow them down.",
  color: "#3566bd",
  ink: "#ffffff",
  tint: "#ecf2fb",
  overview: [
    "Even thoughtful leaders use mental shortcuts. Learned messages, past experiences, group norms, cultural messages, and social patterns can influence who seems credible, committed, capable, cooperative, or difficult—sometimes before the available evidence supports that conclusion.",
    "These judgments show up in ordinary moments: who gets called on, whose ideas receive attention, whose behavior is corrected, who is given another chance, or who is seen as ready to take on responsibility. In this lesson, you use a Bias and Unlearning Check to interrupt automatic conclusions and choose a response grounded in evidence and fairness.",
  ],
  keyConcept:
    "Good intentions do not automatically prevent biased impact. A leader can value fairness and still make a choice shaped by an automatic preference, assumption, or learned stereotype.",
  objectives: [
    "Define bias, implicit bias, stereotype, assumption, lived experience, and unlearning.",
    "Explain why noticing and interrupting bias is a responsibility of inclusive leadership.",
    "Recognize how bias can influence interpretation, feedback, participation, expectations, and access to opportunities within a group.",
    "Distinguish an observation from an assumption, stereotype, or biased interpretation.",
    "Use an unlearning process to question inherited beliefs and automatic conclusions.",
  ],
  lessons: [
    {
      slug: "review",
      title: "Lesson Review",
      subtitle: "Seeing a blind spot is part of responsible leadership",
      kind: "lesson",
      summary: "Shared language for bias, four pathways bias enters decisions, and the six-step Bias and Unlearning Check.",
      overview: [
        "Bias awareness does not require proving that you have no bias. It requires noticing learned tendencies early enough to keep them from shaping relationships, expectations, participation, opportunities, or responses without examination. Approach this work with responsibility, not shame—defensiveness can close inquiry.",
      ],
      keyIdeasTitle: "Shared Language",
      keyIdeas: [
        { title: "Bias", text: "A tendency, often unconscious, to favor or disfavor certain people, groups, ideas, or behaviors." },
        { title: "Implicit bias", text: "Attitudes or stereotypes that affect understanding, actions, and decisions without conscious awareness." },
        { title: "Stereotype", text: "An overgeneralized belief about a group that may not reflect individual realities or experiences." },
        { title: "Assumption", text: "A conclusion drawn without enough evidence." },
        { title: "Lived experience", text: "Knowledge and perspective gained through direct personal experience in the world. It can reveal barriers, meanings, or impacts not visible from the outside—but one person’s experience belongs to that person; listening with care does not mean asking someone to explain an entire identity or group." },
        { title: "Unlearning", text: "Actively noticing, questioning, and changing beliefs or patterns that are inaccurate, unfair, or unhelpful." },
      ],
      tools: [
        {
          title: "Four Pathways Bias Can Enter Ordinary Decisions",
          intro: "Words such as respectful, engaged, mature, cooperative, motivated, ready, difficult, or a natural leader can sound objective while carrying unstated expectations.",
          steps: [
            { label: "Automatic filters", text: "Bias shapes what first appears normal, credible, or capable. A leader views quick, frequent speakers as most prepared while equally thoughtful written or reflective contributions get less attention. Ask: Am I recognizing engagement—or only the form that is easiest for me to see?" },
            { label: "Pattern completion", text: "When information is incomplete, the mind fills the gap with a learned story. A participant misses a session and the first thought is “They aren’t committed.” What the leader actually knows is much smaller: they did not attend." },
            { label: "Unequal interpretation", text: "The same behavior means different things depending on who does it. Two equally direct participants question an activity; one is “confident and willing to speak up,” the other “challenging and disrespectful.”" },
            { label: "Decision shortcuts", text: "Bias influences who receives patience, encouragement, second chances, meaningful roles, or opportunities to lead. Ask: What does “ready” actually mean here—and who has had the opportunity to demonstrate it?" },
          ],
        },
        {
          title: "The Bias and Unlearning Check",
          intro: "Six steps move you from Reaction → Story → Evidence → Learned Pattern → Perspective → Response. If harm is happening in the moment, address the harm first and examine the interpretation once the situation is stable.",
          steps: [
            { label: "Notice your reaction", text: "What caught my attention? What feeling or impulse appeared? Am I unusually certain, frustrated, uncomfortable, suspicious, or protective? The reaction is real; the interpretation still needs to be checked." },
            { label: "Identify the story", text: "Separate what you observed from the meaning you added. What label am I using? What motive, attitude, ability, or character trait am I assigning?" },
            { label: "Check the evidence", text: "What supports my conclusion, what doesn’t, and what is missing? What expectation or group agreement actually applies? Would I describe the same behavior the same way if someone else did it?" },
            { label: "Examine learned patterns", text: "What have I learned to associate with being respectful, engaged, capable, committed, or ready? Whose style feels most familiar? Could familiarity influence who gets the benefit of the doubt?" },
            { label: "Seek another perspective", text: "What else could be true? What context might I be missing? Is there a respectful question I could ask—without asking one person to represent an entire group?" },
            { label: "Choose a fairer response", text: "Respond to the evidence, relevant context, and shared standard rather than an unsupported label. A fair response does not mean avoiding accountability." },
          ],
        },
      ],
      scenarios: [
        {
          title: "From Label to Behavior",
          description: "A participant spoke over two people while they were sharing. The group agreement is to let each person finish.",
          options: [
            { label: "Instead of…", tone: "weak", quote: "You need to stop being so aggressive.", text: "Assigns a character label." },
            {
              label: "Try",
              tone: "strong",
              quote: "You spoke over two people while they were sharing. Our group agreement is to let each person finish. What was happening for you in that moment, and what can you do differently next time?",
              text: "Still holds the person accountable—by responding to the observable behavior and shared expectation.",
            },
          ],
          closing: "Interpretation → Response → Group Experience → Future Participation. Interrupting the cycle early means returning to the evidence.",
        },
      ],
      takeaways: [
        "When a conclusion fills missing information with a generalized belief about a group, it becomes a stereotype.",
        "When a learned preference causes similar evidence to be evaluated differently, you may be seeing a biased interpretation.",
        "Labels influence how the leader responds next, how others view a contribution, and whether a person keeps participating.",
        "The goal is not to eliminate judgment, but to make judgments more deliberate, evidence-based, and consistent.",
      ],
      next: "In Cultural Responsiveness and Identity in Groups, you will explore how identity, culture, relationships, language, values, and lived experience shape participation and trust—questioning your own defaults and adapting group practices without spotlighting or tokenizing anyone.",
      sourceNote:
        "This lesson aligns with American Psychological Association guidance on implicit bias and inclusive language and with the Kirwan Institute’s definition of implicit bias as attitudes or stereotypes that can affect understanding, actions, and decisions without conscious awareness.",
    },
    {
      slug: "binder",
      title: "Binder Activities",
      subtitle: "Bias and Unlearning Check · When a Judgment Feels Obvious",
      kind: "binder",
      summary: "Build the Bias and Unlearning Check, reflect on a judgment that feels obvious, and choose a peer question for class.",
      overview: [
        "Choose one real or realistic moment when your judgment could affect another person’s participation, feedback, group role, opportunity, sense of belonging, access to support, or accountability. Share only what you are comfortable sharing.",
      ],
      worksheets: [
        {
          id: "l4-bias-unlearning-check",
          kind: "toolkit",
          title: "Bias and Unlearning Check",
          intro: [
            "Use this check when a judgment could affect how someone is treated, included, corrected, supported, or given opportunities. You can use it before making a decision or after a moment when you realize your first interpretation may deserve another look.",
          ],
          situation: { id: "situation", label: "The moment or decision I’m examining (de-identified):", rows: 2 },
          steps: [
            {
              label: "Step 1",
              title: "Notice Your Reaction",
              ask: ["What caught my attention?", "What feeling or impulse appeared?", "Am I unusually certain, frustrated, uncomfortable, suspicious, or protective?", "What do I want to do immediately?"],
              fields: [{ id: "reaction", label: "My reaction:", rows: 2 }],
            },
            {
              label: "Step 2",
              title: "Identify the Story",
              ask: ["What actually happened?", "What label am I using?", "What motive, attitude, ability, or character trait am I assigning?", "What part of my conclusion goes beyond the evidence?"],
              fields: [{ id: "story", label: "What happened vs. the story I added:", rows: 2 }],
            },
            {
              label: "Step 3",
              title: "Check the Evidence",
              ask: ["What evidence supports my conclusion?", "What evidence does not?", "What information is missing?", "What expectation or group agreement actually applies?", "Would I describe the same behavior the same way if someone else did it?"],
              fields: [{ id: "evidence", label: "What the evidence shows:", rows: 2 }],
            },
            {
              label: "Step 4",
              title: "Examine Learned Patterns",
              ask: [
                "What have I learned to associate with being respectful, engaged, capable, committed, or ready?",
                "Whose communication or participation style feels most familiar to me?",
                "Could familiarity influence who gets the benefit of the doubt?",
                "Is a group-based belief filling in information I do not actually have?",
              ],
              fields: [{ id: "pattern", label: "Learned patterns that may be present:", rows: 2 }],
            },
            {
              label: "Step 5",
              title: "Seek Another Perspective",
              ask: [
                "What else could be true?",
                "What context might I be missing?",
                "Is there a respectful question I could ask?",
                "Is there another perspective that could help me examine my interpretation?",
                "Am I asking one person to represent an entire group, or genuinely widening my understanding?",
              ],
              fields: [{ id: "perspective", label: "Other possibilities and perspectives:", rows: 2 }],
            },
            {
              label: "Step 6",
              title: "Choose a Fairer Response",
              ask: ["What behavior or impact needs to be addressed?", "What standard should I apply?", "What context matters?", "What response would be clear, fair, and consistent?", "What could I say that protects dignity while keeping the expectation visible?"],
              fields: [{ id: "response", label: "My fairer response:", rows: 2 }],
            },
          ],
          complete: {
            title: "Finish with the Sentence Stems",
            fields: [
              { id: "s1", label: "I first thought ___." },
              { id: "s2", label: "The evidence shows ___." },
              { id: "s3", label: "A learned pattern that may be present is ___." },
              { id: "s4", label: "I will respond or decide by ___." },
            ],
          },
          useWhen: [
            "reviewing a quick judgment about someone’s behavior,",
            "deciding who receives an opportunity or leadership role,",
            "preparing feedback,",
            "noticing inconsistent expectations,",
            "questioning whether familiarity is influencing a decision, or",
            "trying to separate evidence from assumptions or stereotypes.",
          ],
          closing: "The goal of the check is not to prove that bias is present in every decision. It helps you slow the decision down long enough to examine what is shaping it.",
        },
        {
          id: "l4-judgment-obvious",
          kind: "pause",
          title: "When a Judgment Feels Obvious",
          intro: [
            "Think about a belief or expectation about respect, engagement, maturity, commitment, leadership, or participation that has sometimes felt obvious to you. It may come from family, school, culture, community, past leaders, media, or your own experience.",
          ],
          steps: [
            {
              label: "Step 1",
              title: "Notice",
              ask: ["When does this belief tend to show up?", "What behavior or situation triggers a quick reaction in you?", "What do you notice about your level of certainty, comfort, irritation, trust, or doubt?"],
              fields: [{ id: "notice", label: "What I notice:" }],
            },
            {
              label: "Step 2",
              title: "Name",
              ask: [
                "What label or story do you tend to apply?",
                "What standard are you using to decide whether someone is respectful, engaged, capable, committed, ready, or difficult?",
                "Where might that standard have come from?",
              ],
              fields: [{ id: "name", label: "The label or standard I apply, and where it may come from:" }],
            },
            {
              label: "Step 3",
              title: "Check",
              ask: [
                "What evidence actually supports your judgment? What evidence might challenge it?",
                "Would I interpret the same behavior the same way if someone else did it?",
                "Could familiarity, preference, stereotype, or a learned norm be influencing what feels “right” to me?",
              ],
              fields: [{ id: "check", label: "What I find when I check:" }],
            },
            {
              label: "Step 4",
              title: "Choose",
              ask: ["What would a fairer, more evidence-based response look like?", "What could you do to slow the judgment, gather more information, or apply the standard more consistently?"],
              fields: [{ id: "choose", label: "My fairer response:" }],
            },
          ],
          complete: {
            title: "Complete the Reflection",
            fields: [
              { id: "f1", label: "When I notice myself assuming __________," },
              { id: "f2", label: "I will check __________ and respond based on __________." },
            ],
          },
          commit: {
            title: "My Unlearning Commitment",
            fields: [{ id: "unlearning", label: "One belief or expectation I want to keep examining is __________." }],
          },
        },
        {
          id: "l4-live",
          kind: "live",
          title: "Bring to Next Class: A Judgment to Test",
          intro: [
            "Bring one de-identified judgment, decision, or scenario you would like another perspective on. You do not need to share your private reflection.",
            "Choose one question you would like a peer to ask you—such as “What evidence is strongest?”, “What information is missing?”, “Would the standard change if a different person did this?”, or “What other interpretation could fit?” During live practice, you can use that question to test the judgment and refine your response.",
          ],
          steps: [
            {
              fields: [
                { id: "judgment", label: "The de-identified judgment, decision, or scenario:", rows: 3 },
                { id: "sentences", label: "My Bias and Unlearning Check summary (I first thought… / The evidence shows… / I will respond by…):", rows: 3 },
                { id: "peer-question", label: "The question I’d like a peer to ask me:", rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: "knowledge-check",
      title: "Knowledge Check Practice",
      subtitle: "Bias, stereotype, assumption, and observation",
      kind: "practice",
      summary: "Three practice questions distinguishing bias, stereotypes, assumptions, and observations.",
      overview: ["Check your understanding of the shared language for bias and how to tell the concepts apart."],
      questions: [
        {
          id: "l4-q1",
          type: "single",
          prompt: "A program leader thinks, “People from that neighborhood usually do not care about school.” Which term best describes the statement?",
          options: ["Observation", "Assumption about one event", "Stereotype", "Lived experience"],
          correct: [2],
          explanation: "The statement is an overgeneralized belief about a group of people, which makes it a stereotype.",
        },
        {
          id: "l4-q2",
          type: "match",
          prompt: "Match each statement with the concept it best illustrates.",
          pairs: [
            { item: "A leader consistently interprets the same behavior more negatively when it comes from certain people.", answer: "Bias" },
            { item: "“Jordan was late because they do not respect my time.”", answer: "Assumption" },
            { item: "“Younger people are usually less committed to their jobs.”", answer: "Stereotype" },
            { item: "“Jordan arrived 15 minutes late.”", answer: "Observation" },
          ],
          choices: ["Observation", "Assumption", "Stereotype", "Bias"],
          explanation:
            "Observation: what can be directly seen, heard, or verified. Assumption: a conclusion made without enough information. Stereotype: a generalized belief about a group. Bias: a tendency that influences how people, behaviors, or situations are interpreted or evaluated.",
        },
        {
          id: "l4-q3",
          type: "single",
          prompt: "A leader writes, “Both participants completed the activity successfully, but I trusted the participant whose communication style felt more familiar.” Which category best identifies this?",
          options: ["Observation", "Assumption", "Stereotype", "Biased interpretation"],
          correct: [3],
          explanation: "The same evidence (both succeeded) is being weighted differently because of a learned preference for a familiar style—a biased interpretation.",
        },
      ],
    },
  ],
};
