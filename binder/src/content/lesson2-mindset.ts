import type { Section } from "./types";

export const lesson2: Section = {
  id: "mindset-emotional-safety",
  title: "Mindset, Assumptions, and Creating Emotional Safety",
  shortTitle: "2. Mindset & Emotional Safety",
  eyebrow: "Lesson 2 of 9",
  description: "Separating observation from assumption, five conditions for emotional safety, and curiosity before correction.",
  color: "#24497b",
  ink: "#ffffff",
  tint: "#eaf0f7",
  overview: [
    "A leader’s response begins before they speak. What they notice, the meaning they attach to it, and the expectations they bring can turn the same behavior into an invitation to inquire or a reason to correct.",
    "In this lesson, you separate observation from assumption, examine five conditions that support emotional safety, and apply the Pause & Check Reflection to challenging moments—using curiosity before correction while keeping expectations and accountability clear.",
  ],
  keyConcept:
    "Silence does not always mean disengagement. Resistance does not always mean defiance. Confidence does not always mean understanding.",
  objectives: [
    "Explain how mindset influences what leaders notice, assume, and do.",
    "Distinguish an observation from an assumption.",
    "Identify how predictability, clarity, warmth, boundaries, and repair support emotional safety.",
    "Use the Pause & Check Reflection to select a dignity-protecting response.",
    "Lead with curiosity before correction while maintaining appropriate accountability.",
  ],
  lessons: [
    {
      slug: "review",
      title: "Lesson Review",
      subtitle: "From automatic reaction to deliberate response",
      kind: "lesson",
      summary: "Mindset as a filter, observation vs. assumption, the five conditions of emotional safety, and curiosity with accountability.",
      overview: [
        "When a leader treats a first interpretation as settled fact, their response can create pressure, shame, or confusion. A deliberate pause creates room for a more accurate and useful response.",
      ],
      keyIdeasTitle: "Shared Language",
      keyIdeas: [
        { title: "Mindset", text: "Beliefs and expectations that shape what you notice, how you interpret it, and how you respond. One leader may read a late arrival as disrespect; another notices the time, withholds judgment, and checks what happened." },
        { title: "Observation", text: "What you can directly see, hear, count, quote, or otherwise verify." },
        { title: "Assumption", text: "A conclusion made without enough information, often shaped by experience, bias, stereotypes, or incomplete context." },
        { title: "Emotional safety", text: "Feeling respected, included, and free from shame, pressure, or unnecessary judgment while participating. It does not promise constant comfort, agreement, or freedom from consequences." },
        { title: "Curiosity in leadership", text: "Seeking to understand before judging, correcting, or deciding what a behavior means." },
      ],
      comparison: {
        title: "Separate What Happened from the Story",
        left: "Observation",
        right: "Assumption to check",
        rows: [
          ["“She has not spoken during the group discussion.”", "“She does not care about the topic.” (She may need processing time, prefer another method, be unsure of the prompt, or be choosing to listen.)"],
          ["“Three people arrived after the stated start time.”", "“They are unmotivated.” (The arrival time may need addressing, but motive is unknown until you check for context.)"],
          ["“The participant answered, ‘Fine,’ and then looked back at the screen.”", "“They are angry and refusing to engage.” (Emotion and intent remain interpretations to check.)"],
          ["“The participant answered immediately and spoke for two minutes.”", "“They fully understand the change.” (Fluency and confidence are visible; understanding still needs to be checked.)"],
          ["Mina looked at the floor during the explanation.", "Mina tried to avoid engaging with the explanation."],
          ["Jordan interrupted Lee three times.", "Jordan tried to dominate the discussion."],
          ["Sam’s voice became louder after the decision.", "Sam became aggressive after the decision."],
        ],
      },
      tools: [
        {
          title: "Five Conditions That Shape Emotional Safety",
          intro: "People often assess safety through ordinary details. The strongest response usually combines several conditions rather than relying on warmth alone.",
          steps: [
            { label: "Predictability", text: "Explain the flow, routine, timing, and participation options. Give notice when plans change. In practice: send an agenda before a meeting and identify which decisions will be made." },
            { label: "Clarity", text: "Name the purpose, expectations, roles, and limits of an activity. Check understanding rather than assuming silence means agreement. In practice: state what input can influence and what has already been decided." },
            { label: "Warmth", text: "Use tone, body language, and words that communicate welcome and respect. Warmth does not require avoiding direct language. In practice: speak privately, use a steady tone, and acknowledge the person’s contribution before raising a concern." },
            { label: "Boundaries", text: "Set limits that protect dignity, focus, and group safety. Apply them consistently while considering relevant context. In practice: interrupt personal attacks, restate the discussion norm, and redirect attention to the issue." },
            { label: "Repair", text: "Address misunderstandings, tension, or harm instead of pretending nothing happened. Name the impact, take appropriate responsibility, and clarify what will change. In practice: correct a public misstatement and follow up with the person affected." },
          ],
        },
        {
          title: "Care-Centered Accountability Conversation",
          intro: "Curiosity does not cancel accountability. A care-centered conversation can hold four elements together.",
          steps: [
            { label: "Observation", text: "Describe the specific behavior or outcome without assigning motive." },
            { label: "Inquiry", text: "Ask an open, respectful question and listen for relevant context." },
            { label: "Expectation and impact", text: "Clarify what is required and who or what is affected." },
            { label: "Next step", text: "Agree on support, action, timing, and follow-through within appropriate boundaries." },
          ],
        },
      ],
      scenarios: [
        {
          title: "Crossed Arms and No Answer",
          description: "A participant sits with crossed arms and does not answer an invitation to speak.",
          options: [
            {
              label: "Automatic interpretation",
              tone: "weak",
              quote: "They are refusing to participate and have a bad attitude.",
              text: "This turns posture and one unanswered invitation into a claim about intent.",
            },
            {
              label: "Evidence-based view → curious possibilities",
              tone: "strong",
              text: "The participant has crossed arms and did not respond to one invitation; motive, emotion, and willingness remain unknown. They may need time, prefer listening, be unsure what is being asked, or feel uncomfortable speaking publicly—possibilities to check, not replacement assumptions.",
            },
            {
              label: "Care-centered response",
              tone: "strong",
              quote:
                "You are welcome to listen for now, write down a thought, or share with a partner first. We will return to the group in a few minutes.",
              text: "The response provides choice and predictability while preserving participation.",
            },
          ],
        },
        {
          title: "Choose the Order the Moment Requires",
          description:
            "When there is no immediate danger, inquiry can precede correction. When conduct is harming or threatening someone, interrupt it clearly before asking questions. The standard remains dignity for everyone involved.",
          options: [
            {
              label: "Missed deadline",
              tone: "strong",
              quote:
                "The report was due Tuesday and arrived Thursday, which delayed the review. What affected the timing? Let’s clarify what support is useful and agree on the next deadline.",
            },
            {
              label: "Personal attack — boundary first",
              tone: "strong",
              quote:
                "Stop. Personal attacks are outside our discussion agreement. We can name disagreement without targeting a person. We will pause, then I will check in separately.",
            },
            {
              label: "Repeated silence",
              tone: "strong",
              quote:
                "I have noticed you have not spoken in the last two group discussions. I do not want to assume why. Is there a participation route or information that would help?",
            },
            {
              label: "Confusing direction",
              tone: "strong",
              quote:
                "Several groups interpreted the activity differently, so I want to check my instructions before deciding what went wrong. What did you understand the task to be?",
            },
          ],
        },
      ],
      takeaways: [
        "A quick conclusion may prove accurate, but it deserves examination before it becomes a decision, consequence, or public comment.",
        "Observations stay close to verifiable details; assumptions add motive, attitude, ability, or character.",
        "Predictability, clarity, warmth, boundaries, and repair make emotional safety practical.",
        "When there is no immediate danger, lead with curiosity; when harm is occurring, set the boundary first and inquire afterward.",
      ],
      next: "In Understanding Trauma-Informed Practice, you will learn a non-clinical approach to recognizing possible stress responses, strengthening safety and choice, and staying within appropriate leadership boundaries—responding supportively without diagnosing someone or assuming you know the cause of their behavior.",
      sourceNote:
        "This lesson draws on psychological safety research, defining psychological safety as a shared belief that a team is safe for interpersonal risk-taking, along with social and emotional learning competencies involving self-awareness, social awareness, relationship skills, and responsible decision-making. Key foundations include Edmondson (1999) and CASEL (2020).",
    },
    {
      slug: "binder",
      title: "Binder Activities",
      subtitle: "Emotional Safety Check · When My First Story Feels True",
      kind: "binder",
      summary: "Build the Emotional Safety Check, reflect on a quick judgment, and prepare an example for the live session.",
      overview: [
        "Use a real or realistic situation. Remove names and identifying details before recording anything about a real person.",
      ],
      worksheets: [
        {
          id: "l2-emotional-safety-check",
          kind: "toolkit",
          title: "Emotional Safety Check",
          intro: [
            "A leader shapes emotional safety through the everyday conditions they create. Before a group activity, conversation, lesson, meeting, or program—or after one that did not go as expected—use this check to review five conditions that can support meaningful participation.",
            "You don’t need every condition to look the same in every situation. The check helps you notice where a small change could clarify expectations, make participation more workable, or help you navigate a difficult moment with dignity.",
          ],
          situation: { id: "situation", label: "The situation I’m reviewing (de-identified):", rows: 2 },
          steps: [
            {
              label: "Step 1",
              title: "Predictability",
              ask: [
                "Do people know what is going to happen?",
                "Are the purpose, timing, and basic flow clear?",
                "Have I explained any changes or potentially sensitive parts in advance?",
                "Do people know what choices they will have?",
              ],
              consider: "What could I make more predictable before we begin?",
              fields: [{ id: "predictability", label: "My notes on predictability:", rows: 2 }],
            },
            {
              label: "Step 2",
              title: "Clarity",
              ask: [
                "Do people understand what is expected?",
                "Are roles, instructions, and boundaries clear?",
                "Do people know what is optional and what is required?",
                "Have I checked understanding rather than assuming silence means agreement?",
              ],
              consider: "What could I explain, simplify, or confirm?",
              fields: [{ id: "clarity", label: "My notes on clarity:", rows: 2 }],
            },
            {
              label: "Step 3",
              title: "Warmth",
              ask: [
                "Does my tone communicate respect and welcome?",
                "Can someone ask a question, make a mistake, or express uncertainty without being embarrassed?",
                "Can I be direct without becoming dismissive or shaming?",
              ],
              consider: "What could I say or do to make respect more visible?",
              fields: [{ id: "warmth", label: "My notes on warmth:", rows: 2 }],
            },
            {
              label: "Step 4",
              title: "Boundaries",
              ask: [
                "What limits or group agreements need to be clear?",
                "What behavior would require me to step in?",
                "Am I applying expectations consistently?",
                "Can I maintain the boundary without humiliating someone?",
              ],
              consider: "What boundary needs to be named or reinforced?",
              fields: [{ id: "boundaries", label: "My notes on boundaries:", rows: 2 }],
            },
            {
              label: "Step 5",
              title: "Repair",
              ask: [
                "If confusion, tension, exclusion, or harm occurs, how will I respond?",
                "Am I willing to acknowledge my own mistake if I contributed to the problem?",
                "What follow-up might be needed?",
                "How will people know what will change next?",
              ],
              consider: "What would repair look like if something does not go as intended?",
              fields: [{ id: "repair", label: "My notes on repair:", rows: 2 }],
            },
          ],
          complete: {
            title: "Make the Safety Check Actionable",
            intro: "Choose one condition you could strengthen in the situation you are reviewing.",
            fields: [
              { id: "c1", label: "The condition I want to strengthen is __________." },
              { id: "c2", label: "Right now, I notice __________." },
              { id: "c3", label: "One change I can make is __________." },
              { id: "c4", label: "I will know the change is helping when __________." },
            ],
          },
          useWhen: [
            "preparing a new activity or discussion,",
            "reviewing a group experience,",
            "planning a difficult conversation,",
            "introducing a change,",
            "responding after something did not go as expected, or",
            "considering how to make participation clearer and more supportive.",
          ],
        },
        {
          id: "l2-first-story",
          kind: "pause",
          title: "When My First Story Feels True",
          intro: [
            "Think about a moment when someone’s behavior led you to make a quick judgment. It could involve silence, lateness, hesitation, disagreement, visible discomfort, confusion, resistance, or another behavior that caught your attention. An everyday interaction is enough.",
          ],
          steps: [
            {
              label: "Step 1",
              title: "Notice",
              ask: ["What did you actually see or hear?", "What happened in your own response?", "What did you want to do first?"],
              listTitle: "Did you notice yourself becoming:",
              list: ["irritated,", "impatient,", "worried,", "defensive,", "uncomfortable,", "certain about what the behavior meant, or", "ready to correct or respond immediately?"],
              fields: [{ id: "notice", label: "What I noticed:" }],
            },
            {
              label: "Step 2",
              title: "Name",
              ask: [
                "What story did you begin telling yourself about the person or situation?",
                "What did you assume the behavior meant—disengaged, disrespectful, unprepared, resistant, uninterested, confused, or unwilling to participate?",
                "Now separate the story from the observation: What could I actually see, hear, count, quote, or verify?",
              ],
              fields: [{ id: "name", label: "The story I told myself — and what I could actually verify:" }],
            },
            {
              label: "Step 3",
              title: "Check",
              ask: ["What else could be true? What information is missing?"],
              listTitle: "Could something like this also be affecting the situation?",
              list: ["unclear instructions,", "processing time,", "confidence,", "communication style,", "previous experience,", "stress,", "uncertainty,", "the group format, or", "something you cannot see"],
              consider: "What question, participation option, or private check-in could help me learn more without putting the person on the spot?",
              fields: [{ id: "check", label: "What else could be true:" }],
            },
            {
              label: "Step 4",
              title: "Choose",
              text: "What response would protect dignity while still keeping the purpose, expectation, or boundary clear? What could you ask, clarify, offer, change, restate, or follow up on?",
              consider: "Does my response address what I observed—or am I responding to the story I created about it?",
              fields: [{ id: "choose", label: "One response I could realistically use:" }],
            },
          ],
          complete: {
            title: "Complete the Reflection",
            fields: [
              { id: "f1", label: "When I notice __________," },
              { id: "f2", label: "I will pause before assuming __________." },
              { id: "f3", label: "I will ask, say, or do __________ to protect dignity, clarity, and trust." },
            ],
          },
          commit: {
            title: "My Personal Pause Cue",
            intro:
              "Your cue might be feeling unusually certain about someone’s intention, becoming frustrated quickly, wanting to correct someone immediately, using a label such as “disrespectful” or “unmotivated,” feeling pressure to solve the situation quickly, or reacting more strongly than the situation seems to require.",
            fields: [
              { id: "cue", label: "I know I need to pause when I notice myself __________." },
              { id: "cue-action", label: "When that happens, I will __________ before I respond." },
            ],
            after: "This is your personal reminder that a first interpretation may be possible without yet being proven.",
          },
        },
        {
          id: "l2-live",
          kind: "live",
          title: "Bring to Next Class: A Pause & Check Situation",
          intro: [
            "Bring one de-identified situation in which you used—or could have used—the Pause & Check Reflection. You do not need to share your private reflection or identify the person involved.",
            "During the live session, you will use it to practice separating observation from assumption, generating other possible explanations, asking a curiosity-based question, and balancing dignity with clear expectations or boundaries.",
          ],
          steps: [
            {
              fields: [
                { id: "behavior", label: "The behavior I observed:", rows: 2 },
                { id: "assumption", label: "The assumption I noticed:", rows: 2 },
                { id: "possibility", label: "One other possibility I considered:", rows: 2 },
                { id: "response", label: "The response I drafted:", rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: "knowledge-check",
      title: "Knowledge Check Practice",
      subtitle: "Observation, repair, and curiosity with accountability",
      kind: "practice",
      summary: "Four practice questions on observation, repair, and the Pause & Check process.",
      overview: ["Check your understanding of observation vs. assumption, repair, and curiosity before correction."],
      questions: [
        {
          id: "l2-q1",
          type: "single",
          prompt: "During a workshop, a participant looks at their phone twice while another person is speaking. Which leader note is the strongest observation?",
          options: [
            "The participant is bored with the discussion.",
            "The participant does not respect the speaker.",
            "The participant looked at their phone twice during the speaker’s comments.",
            "The participant is dealing with an urgent personal issue.",
          ],
          correct: [2],
          explanation: "An observation stays close to what can be seen and verified. Boredom, disrespect, and an urgent issue all add a motive or explanation that hasn’t been confirmed.",
        },
        {
          id: "l2-q2",
          type: "single",
          prompt: "A facilitator realizes they gave unclear instructions, then publicly blamed the group for completing the wrong task. Which response best supports repair?",
          options: [
            "Move on quickly so the mistake does not receive more attention.",
            "Apologize for the unclear directions, name the impact, clarify the task, and adjust the timeline.",
            "Repeat the original instructions more firmly and keep the same deadline.",
            "Cancel the task so no one feels uncomfortable about the mistake.",
          ],
          correct: [1],
          explanation: "Repair means addressing the misunderstanding instead of pretending nothing happened: name the impact, take appropriate responsibility, and clarify what will change.",
        },
        {
          id: "l2-q3",
          type: "single",
          prompt: "A team member reacts sharply to feedback in a meeting. What should the leader do first in the Pause-and-Check process?",
          options: [
            "Explain the consequence for speaking sharply.",
            "Ask the person to explain their behavior to the group.",
            "List several possible reasons for the reaction.",
            "Notice their own immediate reaction and impulse.",
          ],
          correct: [3],
          explanation: "Pause & Check begins with Notice—including what is happening in your own response—before naming the story, checking other possibilities, and choosing a response.",
        },
        {
          id: "l2-q4",
          type: "single",
          prompt:
            "A participant agreed to prepare one part of a group activity but has arrived without it for the second time. The rest of the group has had to adjust. Which response best combines curiosity with accountability?",
          options: [
            "“You clearly aren’t taking this seriously. You need to be prepared next time.”",
            "“It’s fine. Someone else can take over your part from now on.”",
            "“Your part of the activity wasn’t ready again today, and the group had to adjust. What got in the way? Let’s clarify what you need and what you can commit to for next time.”",
            "“Explain to the group why you weren’t prepared so everyone understands.”",
          ],
          correct: [2],
          explanation: "This response holds all four elements: observation, inquiry, expectation and impact, and a next step—without assigning motive or demanding public explanation.",
        },
        {
          id: "l2-q5",
          type: "match",
          prompt: "Sort each statement: is it a grounded observation, or an interpretation to check?",
          pairs: [
            { item: "Mina looked at the floor during the explanation.", answer: "Grounded observation" },
            { item: "Jordan tried to dominate the discussion.", answer: "Interpretation to check" },
            { item: "Sam’s voice became louder after the decision.", answer: "Grounded observation" },
            { item: "Mina tried to avoid engaging with the explanation.", answer: "Interpretation to check" },
            { item: "Jordan interrupted Lee three times.", answer: "Grounded observation" },
            { item: "Sam became aggressive after the decision.", answer: "Interpretation to check" },
          ],
          choices: ["Grounded observation", "Interpretation to check"],
          explanation: "Subtle wording can turn a visible action into a claim about intent. “Tried to,” “avoid,” “dominate,” and “aggressive” add motive or character that still needs checking.",
        },
      ],
    },
  ],
};
