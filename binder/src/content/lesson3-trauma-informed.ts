import type { Section } from "./types";

export const lesson3: Section = {
  id: "trauma-informed-practice",
  title: "Understanding Trauma-Informed Practice",
  shortTitle: "3. Trauma-Informed Practice",
  eyebrow: "Lesson 3 of 9",
  description: "Recognizing possible stress responses, creating safety, choice, and predictability, and knowing your role.",
  color: "#7f4f74",
  ink: "#ffffff",
  tint: "#f6eef4",
  overview: [
    "People may enter a classroom, program, workshop, meeting, or community space carrying stress that others cannot see. A tense exchange, unexpected change, sensitive topic, conflict, or public correction can affect a person’s ability to think, communicate, or participate in that moment.",
    "Trauma-informed practice does not require a leader to know someone’s history or decide whether trauma explains their behavior. Instead, it asks: What can I do in this moment to reduce unnecessary pressure, support dignity and choice, and keep expectations and boundaries clear?",
  ],
  keyConcept: "Notice the behavior. Do not diagnose the cause.",
  objectives: [
    "Define trauma-informed practice in accessible, nonclinical language.",
    "Recognize behaviors that may occur when someone is experiencing stress or activation without assuming what caused the response.",
    "Use safety, choice, predictability, calm communication, and supportive boundaries to reduce unnecessary stress.",
    "Distinguish support within a leader’s role from situations requiring escalation or professional support.",
    "Choose care-centered responses to distress, withdrawal, defensiveness, or emotional intensity.",
  ],
  lessons: [
    {
      slug: "review",
      title: "Lesson Review",
      subtitle: "Supportive, not clinical",
      kind: "lesson",
      summary: "Five core concepts, possible stress responses, in-the-moment actions, and the limits of a leader’s role.",
      overview: [
        "Trauma-informed practice matters anywhere people are asked to participate, learn, trust others, receive feedback, navigate conflict, experience change, or try something unfamiliar. It asks, “What conditions will reduce avoidable stress and support dignity and participation?”—not “What happened to this person that made them behave this way?”",
      ],
      keyIdeasTitle: "Shared Language",
      keyIdeas: [
        { title: "Trauma-informed practice", text: "An approach prioritizing safety, dignity, choice, trust, and predictability while recognizing that trauma and stress can shape response." },
        { title: "Safety", text: "Physical and emotional security sufficient to participate without fear of humiliation, coercion, or harm." },
        { title: "Choice", text: "Meaningful options for engaging, contributing, asking questions, pausing, or opting out when appropriate." },
        { title: "Predictability", text: "Clear routines, expectations, agendas, and transitions that help people know what is coming." },
        { title: "Boundaries of care", text: "Knowing what support fits your role and when supervision, professional help, or emergency response is needed." },
        {
          title: "Difficulty still belongs — and harm still has limits",
          text: "Learning, feedback, disagreement, change, consequences, and accountability can feel uncomfortable and may still be necessary. The goal is to handle difficult moments with clarity, dignity, appropriate choice, and care. Stress does not make harmful behavior acceptable: if someone is harming, threatening, insulting, or intimidating another person, address the behavior first.",
        },
      ],
      comparison: {
        title: "Recognize Possible Stress Responses Without Assigning a Cause",
        left: "Behaviors you might notice",
        right: "Leader focus",
        rows: [
          ["Fight: arguing, raising one’s voice, becoming defensive, strongly challenging a decision, or pushing against a boundary.", "Lower unnecessary intensity, keep your own tone steady, state boundaries clearly, and avoid turning the moment into a public power struggle."],
          ["Flight: withdrawing, leaving the space, disengaging, avoiding a topic, or trying to end the interaction.", "Allow space when it is safe, make the route back into participation clear, and check in privately when appropriate."],
          ["Freeze: silence, a blank expression, difficulty answering, appearing stuck, or needing more time to respond.", "Reduce pressure, slow the pace, clarify the immediate next step, and allow time."],
          ["Fawn: quickly agreeing, volunteering excessively, people-pleasing, or hiding disagreement to reduce tension.", "Do not assume quick agreement means genuine comfort or consent. Offer another opportunity to respond later or privately."],
          ["Activation: increased emotion, difficulty focusing, rapid speech, agitation, physical restlessness, or an intensified version of another response.", "Lower unnecessary stimulation, orient the person to what is happening now, communicate steadily, and make the next step clear."],
        ],
      },
      quote: "Describe behavior; don’t diagnose. “You have been quiet since the change was announced” is supportable. “You are freezing because of trauma” is not.",
      tools: [
        {
          title: "Create Safety, Choice, and Predictability in the Moment",
          intro: "Use these quick actions when someone appears distressed, withdrawn, defensive, stuck, or emotionally intense, and there is no immediate danger requiring emergency action.",
          steps: [
            { label: "Signal what is coming", text: "State what will happen next, approximately how long it will take, and what the person needs to know or do right now. Keep the next step simple and predictable." },
            { label: "Offer meaningful choices", text: "Offer two or more realistic options when the setting allows—listening for now, responding in writing, taking a brief break, speaking privately later. Be clear when something cannot be changed. “Speak now or explain why you refuse” is not meaningful choice." },
            { label: "Restore predictability", text: "Return to a familiar routine when possible, or explain clearly what has changed. Repeat the immediate next step in simple language instead of adding more information." },
            { label: "Communicate with calm", text: "Slow your pace, lower unnecessary intensity, use a steady tone, and move a check-in away from public attention when possible. Calm does not mean avoiding a difficult message." },
            { label: "Acknowledge and check", text: "Acknowledge what you can observe without naming an emotion or diagnosis: “We’ve covered a lot quickly. Would a pause or a little more time help?” Avoid “You’re triggered” or “I know this is bringing something up for you.”" },
            { label: "Hold supportive boundaries", text: "State necessary limits clearly and without humiliation. If someone’s behavior is affecting the safety or dignity of others, stop the harmful behavior first, then clarify next steps." },
          ],
        },
      ],
      scenarios: [
        {
          title: "Language for Difficult Moments",
          description: "Privacy can reduce pressure. You do not need to ask for the story behind the reaction.",
          options: [
            { label: "Returning after distress", tone: "strong", quote: "Welcome back. Would you prefer to listen, rejoin with a written response, or talk privately after the session? The next activity will last ten minutes." },
            { label: "Withdrawal", tone: "strong", quote: "I’ve noticed you’ve been quiet since we changed activities. You’re welcome to listen for now, write a response, or check in with me afterward." },
            { label: "Defensiveness", tone: "strong", quote: "I hear that this feedback feels important to respond to. Let’s pause, review the specific concern, and decide whether to continue here or speak privately." },
            { label: "Emotional intensity", tone: "strong", quote: "I want to hear the concern, and we need to lower our voices so everyone can remain in the conversation. We can pause for five minutes or continue privately." },
          ],
        },
      ],
      checklists: [
        {
          title: "Within Your Role",
          intro: "Create safer conditions, listen without pressing for personal details, offer workable choices, check in privately where appropriate, maintain respectful boundaries, and follow the procedures of your setting.",
          items: ["Listen and orient", "Offer workable choices", "Set respectful boundaries", "Connect someone with appropriate support"],
        },
        {
          title: "Outside Your Role",
          intro: "Do not diagnose, counsel, require personal disclosure, promise secrecy, investigate beyond your authority, or attempt to manage serious safety concerns alone.",
          items: ["Diagnosing or providing therapy", "Requiring personal disclosure", "Promising secrecy", "Managing a serious safety concern alone"],
        },
        {
          title: "When to Escalate",
          intro: "Follow the safety, safeguarding, or reporting process required in your setting. Contact the designated person or service, share only the necessary information, protect privacy as much as the situation allows, and calmly explain the next step.",
          items: [
            "Someone may be in immediate danger",
            "Someone may harm themselves or someone else",
            "Abuse, exploitation, or another serious safety concern is disclosed",
            "The situation is beyond your training or authority",
            "Your program or organization requires additional action",
          ],
        },
      ],
      takeaways: [
        "You do not need to know someone’s history to create conditions that reduce unnecessary stress.",
        "Treat stress-related behavior as information to notice, not proof of a particular response.",
        "The immediate goal is to make the next few minutes more manageable—not to uncover the reason.",
        "Immediate safety comes first. Know your program’s escalation process before you need it, and do not improvise one during a serious safety concern.",
      ],
      next: "In Identifying and Responding to Bias and Stereotypes, you will build on the same discipline—staying close to what you can observe instead of treating your first interpretation as fact—to examine how learned beliefs and automatic associations influence what leaders notice, assume, and decide.",
      sourceNote:
        "The lesson’s emphasis on safety, transparent communication, collaboration, choice, and role boundaries aligns with SAMHSA’s guidance for trauma-informed approaches (2014). The National Child Traumatic Stress Network and CDC guidance on safe, stable, nurturing relationships and environments also inform the practical focus on predictable conditions and supportive adult responses.",
    },
    {
      slug: "binder",
      title: "Binder Activities",
      subtitle: "Safety and Support Response Map · Responding Without Needing the Story",
      kind: "binder",
      summary: "Build the Safety and Support Response Map, reflect on responding without the story, and prepare a scenario for class.",
      overview: [
        "Use a real or realistic situation. You do not need to know why the person was responding this way. Remove names and identifying details before recording a real situation.",
      ],
      worksheets: [
        {
          id: "l3-safety-support-map",
          kind: "toolkit",
          title: "Safety and Support Response Map",
          intro: [
            "Plan a care-centered response when someone appears distressed, withdrawn, defensive, overwhelmed, or emotionally intense. Start with what you can observe, then consider immediate safety, meaningful choice, necessary boundaries, supportive language, and whether additional support or escalation is required.",
          ],
          steps: [
            {
              label: "Step 1",
              title: "Start with What Happened",
              text: "Describe only what you could see, hear, or verify. Avoid naming a diagnosis, guessing about someone’s history, or deciding what caused the response.",
              ask: ["What did I actually observe?", "What changed in the person’s behavior or participation?", "What am I interpreting rather than knowing?"],
              example: "“The participant became quiet, stopped writing, and did not respond when invited to speak.”",
              fields: [{ id: "observed", label: "What I observed:" }],
            },
            {
              label: "Step 2",
              title: "Check Immediate Safety",
              text: "Think about the person, the rest of the group, and yourself as the leader. If immediate danger is present, follow the appropriate safety or escalation process rather than continuing through the remaining steps.",
              ask: ["Is anyone in immediate danger?", "Is harmful behavior occurring?", "Does the situation need to be moved out of the group setting?", "Is there a required safety or safeguarding process I need to follow?"],
              fields: [{ id: "safety", label: "What safety requires right now:", rows: 2 }],
            },
            {
              label: "Step 3",
              title: "Offer a Meaningful Choice",
              text: "If there is no immediate danger, identify one or two realistic options that could reduce unnecessary pressure and restore some sense of agency. Be clear when something cannot be changed.",
              list: ["listening instead of speaking for the moment,", "responding in writing,", "taking a short break,", "moving to a quieter space,", "checking in privately later, or", "choosing between two workable participation options."],
              listTitle: "A meaningful choice might include:",
              fields: [{ id: "choice", label: "The choices I can offer:", rows: 2 }],
            },
            {
              label: "Step 4",
              title: "Keep the Boundary Clear",
              text: "Support does not replace expectations, group agreements, or safety boundaries. State the boundary simply and respectfully.",
              ask: ["What expectation still applies?", "Is there a group agreement that needs to be restated?", "Is there a privacy or confidentiality limit?", "Is someone’s behavior affecting others?"],
              example: "“You can take a few minutes outside. We do need to return to the activity, and I’ll check in with you before we begin the next part.”",
              fields: [{ id: "boundary", label: "The boundary that needs to stay clear:", rows: 2 }],
            },
            {
              label: "Step 5",
              title: "Choose Supportive Language",
              text: "Use language that stays close to what you observed, avoids diagnosing or explaining the person’s reaction, lowers unnecessary pressure, makes the next step clear, and protects privacy where possible.",
              example: "“I’ve noticed you’ve become quiet since we changed activities. You don’t need to explain anything right now. You can listen for a few minutes, write your response, or check in with me afterward.”",
              fields: [{ id: "language", label: "What I could say:" }],
            },
            {
              label: "Step 6",
              title: "Decide Whether More Support Is Needed",
              text: "If you need additional support, follow the process already established for your setting. Do not improvise a clinical, investigative, or emergency response on your own.",
              ask: [
                "Can I appropriately support this within the group or program?",
                "Does another person need to be involved?",
                "Is there a designated supervisor, safeguarding contact, counselor, or other support?",
                "Does policy require documentation or reporting?",
                "Is the situation beyond my training or authority?",
              ],
              fields: [{ id: "support", label: "Additional support or process that may be needed:", rows: 2 }],
            },
          ],
          complete: {
            title: "Map the Response",
            fields: [
              { id: "m1", label: "I observed __________." },
              { id: "m2", label: "Safety requires __________." },
              { id: "m3", label: "I can offer __________." },
              { id: "m4", label: "I need to keep __________ clear." },
              { id: "m5", label: "I can say __________." },
              { id: "m6", label: "If additional support is needed, I will follow __________." },
            ],
          },
          useWhen: [
            "preparing for a situation that may involve stress, distress, or strong emotion;",
            "responding when someone becomes withdrawn, defensive, overwhelmed, or visibly upset;",
            "deciding what meaningful choices you can offer in the moment;",
            "identifying which expectations or boundaries still need to remain clear;",
            "planning language that supports dignity without requiring personal disclosure; or",
            "determining whether a situation is within your role or requires additional support or escalation.",
          ],
          closing: "The goal of the map is not to identify why someone is responding in a particular way. It helps you focus on what you can observe, what support is appropriate, and the safest, most manageable next step.",
        },
        {
          id: "l3-without-the-story",
          kind: "pause",
          title: "Responding Without Needing the Story",
          intro: [
            "Think about a group moment when someone became withdrawn, defensive, visibly distressed, overwhelmed, or emotionally intense. You do not need to choose a highly personal situation or know what caused the response.",
          ],
          steps: [
            {
              label: "Step 1",
              title: "Notice",
              ask: ["What did you actually see or hear?", "What happened in your own response?", "What did you want to do first?"],
              listTitle: "Did you notice an urge to:",
              list: ["fix the situation,", "ask what was wrong,", "get an answer quickly,", "calm the person,", "correct the behavior,", "take control, or", "move away from the discomfort?"],
              fields: [{ id: "notice", label: "What I noticed:" }],
            },
            {
              label: "Step 2",
              title: "Name",
              ask: [
                "What explanation did you begin giving for the behavior?",
                "What did you assume the person felt, needed, intended, or was experiencing?",
                "What can I actually know without guessing about someone’s history, trauma, diagnosis, or intent?",
              ],
              fields: [{ id: "name", label: "The explanation I began giving — and what I can actually know:" }],
            },
            {
              label: "Step 3",
              title: "Check",
              text: "What could reduce unnecessary pressure right now? Consider predictability, meaningful choice, privacy, calm communication, more time, a clear boundary, a manageable next step, or another participation option.",
              ask: ["Is this within my role?", "Would this situation require another person, process, or level of support?"],
              fields: [{ id: "check", label: "What could reduce pressure, and whether it’s within my role:" }],
            },
            {
              label: "Step 4",
              title: "Choose",
              ask: [
                "What could you say or do that supports dignity without requiring an explanation?",
                "What expectation or boundary still needs to remain clear?",
                "What is the smallest useful next step?",
                "If additional support is required, what established process would you follow?",
              ],
              fields: [{ id: "choose", label: "What I would say or do:" }],
            },
          ],
          complete: {
            title: "Complete the Reflection",
            fields: [
              { id: "f1", label: "When I notice __________," },
              { id: "f2", label: "I will support safety by __________," },
              { id: "f3", label: "keep __________ clear," },
              { id: "f4", label: "and follow __________ if additional support is needed." },
            ],
          },
          commit: {
            title: "Language I Can Use Under Pressure",
            intro:
              "Write one short phrase you would feel comfortable using during a difficult moment. For example: “You don’t need to explain right now. Let’s focus on what would help with the next few minutes.” or “We can pause here. I’ll explain what happens next, and we can check in privately.”",
            fields: [{ id: "phrase", label: "My phrase:" }],
            after: "The goal is to have language available before you are trying to find the right words under pressure.",
          },
        },
        {
          id: "l3-live",
          kind: "live",
          title: "Bring to Next Class: A Scenario and Your Response",
          intro: [
            "Bring one de-identified scenario and the short response you drafted. You do not need to share the person’s identity, personal or confidential information, your private reflection, or any suspected trauma history.",
            "During class, you can practice how to lower unnecessary pressure, provide meaningful choice, keep a boundary clear, respond without diagnosing, and recognize when the situation is beyond your role.",
          ],
          steps: [
            {
              fields: [
                { id: "scenario", label: "The de-identified scenario:", rows: 3 },
                { id: "response", label: "The short response I drafted:", rows: 3 },
                { id: "question", label: "What I’d like to practice or get feedback on:", rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: "knowledge-check",
      title: "Knowledge Check Practice",
      subtitle: "Responding supportively and within your role",
      kind: "practice",
      summary: "Four practice questions on trauma-informed responses and escalation.",
      overview: ["Check your understanding of supportive, non-clinical responses and when to escalate."],
      questions: [
        {
          id: "l3-q1",
          type: "single",
          prompt: "During a group activity, a participant becomes quiet and asks if they can step outside for a few minutes. The Guide does not know why. Which response best reflects trauma-informed practice?",
          options: [
            "Ask what happened before deciding whether they may leave.",
            "Tell them that everyone needs to remain in the room so the rules stay consistent.",
            "Acknowledge the request, clarify when and how they can rejoin, and avoid requiring a personal explanation.",
            "Ask whether the activity triggered a trauma response.",
          ],
          correct: [2],
          explanation: "This offers choice and predictability (a clear route back) without requiring disclosure or diagnosing the response.",
        },
        {
          id: "l3-q2",
          type: "single",
          prompt: "A participant becomes noticeably tense during a discussion and begins responding to every suggestion with, “Whatever you think is best.” What is the strongest response?",
          options: [
            "Treat the agreement as confirmation that the participant is comfortable.",
            "Ask whether they are having a fawn response.",
            "Tell them they need to speak honestly before the discussion can continue.",
            "Reduce the pressure to answer immediately and provide another opportunity to respond later or privately.",
          ],
          correct: [3],
          explanation: "Quick agreement doesn’t necessarily mean genuine comfort or consent. Reducing pressure and offering another opportunity to respond supports dignity without labeling the person.",
        },
        {
          id: "l3-q3",
          type: "single",
          prompt: "A participant becomes visibly upset during a discussion and begins crying. There is no sign of immediate danger. Which response is strongest?",
          options: [
            "Ask them to explain what triggered the reaction so the group can help.",
            "Stop the discussion and immediately contact emergency services because crying indicates a crisis.",
            "Ignore the reaction to avoid embarrassing the participant.",
            "Offer a break, say no explanation is required, and arrange a private check-in.",
          ],
          correct: [3],
          explanation: "Without immediate danger, the leader reduces pressure, offers choice, protects privacy, and follows up—without requiring the story behind the reaction.",
        },
        {
          id: "l3-q4",
          type: "single",
          prompt: "A participant tells a program leader they are in urgent danger and asks the leader to keep it secret. What should the leader do?",
          options: [
            "Promise secrecy so the participant continues talking.",
            "Ask the group to decide what support the participant needs.",
            "Follow the organization’s escalation and safety protocol and explain the next step calmly.",
            "Wait until the next day to see whether the danger passes.",
          ],
          correct: [2],
          explanation: "Immediate safety comes first. Leaders should not promise secrecy or manage a serious safety concern alone; they follow the required process and explain the next step calmly.",
        },
      ],
    },
  ],
};
