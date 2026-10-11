import type { Section } from "./types";

export const lesson5: Section = {
  id: "cultural-responsiveness",
  title: "Cultural Responsiveness and Identity in Groups",
  shortTitle: "5. Cultural Responsiveness & Identity",
  eyebrow: "Lesson 5 of 9",
  description: "Cultural humility, visible and less visible identity, hidden defaults, and avoiding tokenizing.",
  color: "#cdb483",
  ink: "#24497b",
  tint: "#f8f3ea",
  overview: [
    "People bring culture, identity, relationships, language, values, and past experiences into every space. These influences shape how people interpret what is happening, how comfortable they feel participating, what builds trust, and which expectations feel familiar—or unfamiliar.",
    "Cultural responsiveness begins with recognizing that our own way of communicating, participating, or making meaning is not the only way. It does not require knowing everything about every culture; it asks us to stay curious, examine the assumptions built into the spaces we create, and respond without asking people to explain, defend, or represent an entire group.",
  ],
  keyConcept: "Culture can inform our curiosity. It should not become a shortcut for predicting a person.",
  objectives: [
    "Explain the differences among cultural awareness, sensitivity, humility, and responsiveness.",
    "Identify visible and less visible aspects of identity that may influence participation and trust.",
    "Recognize prompts and norms that assume one family structure, communication style, value system, or lived experience.",
    "Adapt language and participation expectations without spotlighting or tokenizing people.",
    "Use cultural humility and a Cultural Responsiveness Check to guide leadership choices.",
  ],
  lessons: [
    {
      slug: "review",
      title: "Lesson Review",
      subtitle: "Culture as living context",
      kind: "lesson",
      summary: "Four levels of cultural practice, identity and disclosure, hidden defaults in prompts and norms, and the seven-part Cultural Responsiveness Check.",
      overview: [
        "People may belong to many cultures and identity groups at the same time, and those influences are not fixed. People within the same group may have very different beliefs and experiences. Culturally responsive practice is not about memorizing rules about groups; it is about noticing your assumptions, staying open to what you don’t know, listening for individual experience, and adjusting conditions when norms unnecessarily limit participation.",
      ],
      keyIdeasTitle: "From Recognition to Responsive Action",
      keyIdeas: [
        { title: "Cultural awareness", text: "Recognizing that cultural differences exist and can influence experience, communication, trust, and participation.", tip: "The leader recognizes that “family” may refer to different structures, relationships, and sources of care." },
        { title: "Cultural sensitivity", text: "Engaging across difference with care and respect while avoiding dismissive or demeaning behavior.", tip: "The leader avoids language that judges one family form as normal, complete, or preferable." },
        { title: "Cultural humility", text: "Recognizing the limits of your knowledge and remaining open, reflective, and willing to learn.", tip: "The leader recognizes that they do not know which relationships feel safe, meaningful, or supportive for each person." },
        {
          title: "Cultural responsiveness",
          text: "Adapting language, norms, activities, and decisions to honor and include diverse identities and lived experiences.",
          tip: "The leader changes “How has your family supported you?” to “Think of a person, relationship, place, or community that has supported you. You may also respond using an example you have observed or a fictional scenario.”",
        },
        {
          title: "Identity has visible and less visible dimensions",
          text: "More visible aspects (age, dress, language use, accent, apparent role, visible disability, communication or participation style) can still be misread—visible does not mean fully understood. Less visible aspects (family expectations, faith, immigration experiences, neurodiversity, economic pressures, caregiving, trauma history, values, language confidence, past experiences with institutions) influence participation without being apparent.",
        },
        {
          title: "People choose disclosure",
          text: "Inclusion should not require disclosure. When personal information is requested:",
          points: ["explain why it is relevant,", "make clear whether disclosure is optional,", "protect privacy,", "offer another way to participate when possible, and", "avoid asking someone to justify why they chose not to share."],
        },
        {
          title: "Avoid spotlighting and tokenizing",
          text: "Tokenizing occurs when someone is singled out or treated as a representative of an entire identity, culture, or group—such as turning to the only Muslim participant during a discussion about Ramadan. Instead, invite broad contributions, let people choose whether to share, use credible sources when background knowledge is needed, and remember that one person’s experience remains unique to that individual.",
        },
      ],
      comparison: {
        title: "Find the Hidden Default",
        left: "Risk",
        right: "Adapt",
        rows: [
          ["Family structure: “Ask your mom and dad.”", "“Ask a caregiver, family member, trusted adult, or another person who supports you.”"],
          ["Safety at home: “Think of a time your family made you feel safe.”", "“Think of a person, place, routine, or experience that has supported you. You may also use a fictional example.”"],
          ["Public disclosure: “Everyone share a personal story.”", "“You may share from your experience, discuss an observation, use the scenario, or pass.”"],
          ["Shared meaning of respect: “We all know respect means making eye contact.”", "Define the purpose—such as listening without interruption—while allowing different forms of respectful body language."],
          ["One leadership style: “A good leader speaks up first.”", "Recognize leadership through preparation, thoughtful questions, synthesis, advocacy, follow-through, facilitation, and other contributions."],
          ["“Tell us how your family celebrates.”", "“Think about a tradition, routine, celebration, or meaningful practice you have experienced, observed, or learned about.”"],
          ["“What does a good leader look like?”", "“What are some different ways a person can contribute leadership to a group?”"],
        ],
      },
      tools: [
        {
          title: "The Cultural Responsiveness Check",
          intro: "Default → Pressure → Invitation → Choice → Perspective → Language → Impact. Ask: What could I change in the design so that more people can enter, participate, and contribute without working around an unnecessary barrier?",
          steps: [
            { label: "Find the Default", text: "What version of family, communication, respect, participation, leadership, safety, or experience does the design quietly treat as expected? What experience does someone need for this prompt to fit easily?" },
            { label: "Look for Pressure Points", text: "Where might someone have to reveal, explain, defend, translate, or represent something about themselves just to take part? That is a design problem, not a participation problem." },
            { label: "Open the Door Wider", text: "Keep the purpose, but broaden the entry point so someone can reach the same goal from more than one starting point." },
            { label: "Build in Choice", text: "Decide where flexibility can exist without losing the purpose. What can vary, and what needs to stay the same?" },
            { label: "Bring in Perspective", text: "Whose knowledge could help me see what I am missing? Credible resources, colleagues, community guidance, participant feedback, or people with lived experience when they choose to contribute." },
            { label: "Say What You Mean", text: "Plan the actual words participants will hear so choices are not something people have to guess." },
            { label: "Watch What Happens", text: "Who participates easily? Who still has to work around the design? Whose contributions actually shape the conversation? A change may create more options without creating more influence—if so, revise again." },
          ],
        },
      ],
      scenarios: [
        {
          title: "Visible Behavior Leaves Meaning Unresolved",
          description:
            "A participant avoids eye contact and gives short answers during a group discussion. They may be showing respect in a familiar way, uncomfortable, anxious, processing, uncertain about language, tired, unsure whether the group is safe, thinking deeply, or disengaged.",
          options: [
            {
              label: "Care-centered response",
              tone: "strong",
              text: "Stay close to what you can observe, avoid labeling the person publicly, and create a low-pressure opportunity to participate or provide context.",
            },
          ],
          closing: "What is visible is never the whole story. Cultural humility starts by leaving room for meanings you don’t yet know.",
        },
      ],
      takeaways: [
        "Use cultural knowledge to ask better questions—not to conclude “they behave this way because of their culture.”",
        "Design for variation rather than waiting for people to disclose personal information.",
        "A culturally responsive leader looks for the default before it becomes someone else’s barrier.",
        "Responsiveness is not the change you intended. It is what the change actually made possible.",
      ],
      next: "In Equity vs. Equality: Supporting Access and Participation, you will extend this thinking. Cultural responsiveness questions the defaults built into the space; equity asks whether everyone actually has a workable route to participate, contribute, and access what they need.",
    },
    {
      slug: "binder",
      title: "Binder Activities",
      subtitle: "Cultural Responsiveness Check · When Something Familiar Means Something Different",
      kind: "binder",
      summary: "Build the Cultural Responsiveness Check (with a worked example), reflect on cultural humility, and bring a prompt to review.",
      overview: [
        "Choose one real or realistic prompt, activity, norm, discussion, example, or participation practice you would like to examine.",
      ],
      worksheets: [
        {
          id: "l5-cultural-responsiveness-check",
          kind: "toolkit",
          title: "Cultural Responsiveness Check",
          intro: [
            "Work through the seven parts. Whenever possible, complete the check before the activity. If you notice pressure or exclusion in the moment, you can still pause and adjust—briefly name the change without asking an affected participant to explain why the original design didn’t work.",
          ],
          example: {
            title: "Personal Storytelling in a Leadership Workshop",
            intro:
              "A leadership workshop includes this instruction: “Think of a painful experience involving your family. Everyone will take a turn sharing what happened and how it shaped you.” The goal—building empathy and connection—is reasonable. The route creates several risks.",
            rows: [
              ["1. Find the Default", "The activity assumes participants have a family experience they are willing and able to discuss publicly."],
              ["2. Look for Pressure Points", "Participation requires personal disclosure. Someone who does not want to share has no way to complete the activity."],
              ["3. Open the Door Wider", "Keep the theme of challenge and support, but allow participants to use their own experience, an experience they have observed, or a provided scenario."],
              ["4. Build in Choice", "Participants may speak, write, or pass on personal disclosure while still completing the learning task."],
              ["5. Bring in Perspective", "Review whether the activity’s approach to vulnerability and connection reflects only one idea of how trust is built."],
              ["6. Say What You Mean", "Tell participants explicitly: “Personal sharing is optional. You may use your own experience, an observed example, or the scenario provided.”"],
              ["7. Watch What Happens", "Notice whether participants use the options comfortably and whether all response formats are taken seriously during the discussion."],
              ["Conclusion", "The purpose stays the same. The route becomes more inclusive."],
            ],
          },
          situation: { id: "situation", label: "The prompt, activity, or norm I’m reviewing:", rows: 2 },
          steps: [
            { label: "Part 1", title: "Find the Default", text: "Identify the experiences or participation methods that the design assumes as standard or expected.", fields: [{ id: "default", label: "Notes:", rows: 2 }] },
            { label: "Part 2", title: "Look for Pressure Points", text: "Identify areas where individuals may feel compelled to disclose, explain, or justify aspects of their identity or experiences.", fields: [{ id: "pressure", label: "Notes:", rows: 2 }] },
            { label: "Part 3", title: "Open the Door Wider", text: "Explore alternative approaches to achieve the same objectives, accommodating diverse starting points.", fields: [{ id: "door", label: "Notes:", rows: 2 }] },
            { label: "Part 4", title: "Build in Choice", text: "Identify elements that can be flexible while maintaining the intended outcomes.", fields: [{ id: "choice", label: "Notes:", rows: 2 }] },
            { label: "Part 5", title: "Bring in Perspective", text: "Seek insights from diverse sources to uncover potential blind spots in the design.", fields: [{ id: "perspective", label: "Notes:", rows: 2 }] },
            { label: "Part 6", title: "Say What You Mean", text: "Use precise language that clearly conveys inclusivity and respect for individual choices.", fields: [{ id: "language", label: "Notes:", rows: 2 }] },
            { label: "Part 7", title: "Watch What Happens", text: "Monitor and evaluate the impact of changes to determine their effectiveness in enhancing inclusivity and participation.", fields: [{ id: "watch", label: "Notes:", rows: 2 }] },
          ],
          complete: {
            title: "Make Responsiveness Visible",
            fields: [
              { id: "r1", label: "The default I noticed is __________." },
              { id: "r2", label: "The pressure point may be __________." },
              { id: "r3", label: "I will widen the invitation by __________." },
              { id: "r4", label: "I will make the choice clear by saying __________." },
              { id: "r5", label: "I will watch for __________ to see whether the change helped." },
            ],
          },
          useWhen: [
            "designing or revising an activity,",
            "writing discussion prompts,",
            "setting group expectations,",
            "choosing examples,",
            "planning participation, or",
            "reviewing something that didn’t land the way you expected.",
          ],
          closing: "Use it whenever you want to ask: What does this design assume—and who has to adapt because of it?",
        },
        {
          id: "l5-familiar-different",
          kind: "pause",
          title: "When Something Familiar Means Something Different",
          intro: [
            "Think about a moment when you realized that a behavior, phrase, expectation, or group norm that felt familiar to you carried a different meaning for someone else.",
          ],
          steps: [
            { label: "Step 1", title: "Notice", ask: ["What happened?", "What behavior, response, or difference first caught your attention?", "What was your immediate reaction to it?"], fields: [{ id: "notice", label: "What I noticed:" }] },
            {
              label: "Step 2",
              title: "Name",
              ask: ["What meaning did you initially give the behavior or difference?", "What did you assume was normal, respectful, appropriate, engaged, supportive, or expected in the context?"],
              fields: [{ id: "name", label: "The meaning I gave it:" }],
            },
            {
              label: "Step 3",
              title: "Check",
              ask: ["What else could have been true?", "How might culture, identity, communication style, relationships, context, or lived experience have influenced the understanding of the situation?"],
              fields: [{ id: "check", label: "What else could have been true:" }],
            },
            {
              label: "Step 4",
              title: "Choose",
              text: "What could you do differently next time?",
              list: ["asking a question instead of making a conclusion,", "changing the wording of a prompt,", "widening participation options,", "avoiding a public label,", "seeking another perspective, or", "allowing someone to choose what they disclose."],
              listTitle: "Consider actions such as:",
              fields: [{ id: "choose", label: "What I will do differently:" }],
            },
          ],
          complete: {
            title: "Complete the Reflection",
            fields: [{ id: "f1", label: "When a behavior, meaning, or preference is unfamiliar to me, I will pause before concluding __________ and instead ask or consider __________." }],
          },
          commit: {
            title: "My Cultural Humility Commitment",
            fields: [
              { id: "c1", label: "When I encounter something unfamiliar, I will pause before assuming __________." },
              { id: "c2", label: "I will remain curious by __________." },
              { id: "c3", label: "One prompt, norm, or activity I want to revisit using the Cultural Responsiveness Check:" },
            ],
          },
        },
        {
          id: "l5-live",
          kind: "live",
          title: "Bring to Next Class: A Prompt or Norm to Review",
          intro: [
            "Bring a de-identified prompt, group norm, activity, or scenario. Choose something you would like help reviewing for hidden assumptions, inclusive language, meaningful choice, tokenizing or spotlighting risk, or participation options. You do not need to bring the private reflection itself.",
            "In the next session, you will use peer discussion to audit the practice, revise the wording, and practice introducing the change.",
          ],
          steps: [
            {
              fields: [
                { id: "item", label: "The prompt, norm, activity, or scenario (as currently written):", rows: 3 },
                { id: "focus", label: "What I’d like help reviewing it for:", rows: 2 },
                { id: "draft", label: "My draft revision (optional):", rows: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: "knowledge-check",
      title: "Knowledge Check Practice",
      subtitle: "Responsive design without tokenizing",
      kind: "practice",
      summary: "Six practice questions on cultural responsiveness, inclusive prompts, and avoiding tokenizing.",
      overview: ["Check your understanding of the four levels of cultural practice and how to adapt designs."],
      questions: [
        {
          id: "l5-q1",
          type: "single",
          prompt: "An educator notices that rapid whole-group discussions favor participants who are comfortable thinking aloud. They start sending reflection questions in advance and let participants contribute verbally or in writing. Which practice is most evident?",
          options: ["Cultural awareness", "Cultural sensitivity", "Cultural humility", "Cultural responsiveness"],
          correct: [3],
          explanation: "The educator turned awareness into a change in structure and practice—that is responsiveness.",
        },
        {
          id: "l5-q2",
          type: "single",
          prompt: "Jordan looks down while the facilitator speaks and gives brief answers when invited to join the discussion. What is the strongest response?",
          options: [
            "Assume Jordan is showing respect, and stop inviting them to participate.",
            "Notice the behavior without assigning meaning, offer more than one way to participate, and check privately whether another format would help.",
            "Explain to the group that eye contact is expected when someone is speaking.",
            "Ask Jordan to explain how people from their culture communicate with leaders.",
          ],
          correct: [1],
          explanation: "Visible behavior leaves meaning unresolved. Stay close to the observation, widen participation options, and check privately—without assuming a cultural explanation or asking Jordan to represent a group.",
        },
        {
          id: "l5-q3",
          type: "single",
          prompt: "A program leader is preparing a discussion on support systems. The original prompt says: “Think of a time your mom or dad helped you through something difficult.” Which revision is most culturally responsive?",
          options: [
            "“Think of a time your parents helped you through something difficult.”",
            "“Think of a time a caregiver, family member, trusted adult, or another supportive person helped you through something difficult. You may also use a fictional example.”",
            "“Think of a time someone in your family helped you through something difficult, and explain why they were important.”",
            "“Share a personal story about someone who supported you so everyone can learn from different experiences.”",
          ],
          correct: [1],
          explanation: "This revision widens the invitation beyond one family structure and adds a non-disclosure route (a fictional example), so no one has to correct the wording or share personally to participate.",
        },
        {
          id: "l5-q4",
          type: "single",
          prompt: "During a discussion about holidays, a facilitator wants to include experiences beyond the majority tradition. Which response best avoids tokenizing?",
          options: [
            "Ask the only participant known to observe another holiday to explain it to everyone.",
            "Invite anyone to share a tradition if they choose, provide researched examples, and allow people to pass.",
            "Avoid mentioning cultural traditions because differences may create discomfort.",
            "Ask each person to disclose their religious identity before the discussion begins.",
          ],
          correct: [1],
          explanation: "Broad, optional invitations plus credible background examples include diverse traditions without singling anyone out or requiring disclosure.",
        },
        {
          id: "l5-q5",
          type: "single",
          prompt:
            "Participants nominate someone who “showed leadership” during a group project. Most nominations go to people who spoke first or presented, even though others organized tasks, resolved disagreements, supported peers, or kept the project moving. The Guide wants to keep the activity while reducing its hidden assumptions. What should they do?",
          options: [
            "Remind participants that “leadership looks different for everyone” and keep the nomination process the same.",
            "Ask participants to nominate someone whose leadership style is different from their own.",
            "Clarify several ways leadership may be demonstrated and ask participants to identify a specific behavior or contribution that influenced the group.",
            "Allow participants who were quieter during the project to nominate themselves for recognition.",
          ],
          correct: [2],
          explanation: "This changes the design itself (“Say What You Mean”), widening what counts as leadership and grounding nominations in specific contributions.",
        },
        {
          id: "l5-q6",
          type: "match",
          prompt: "Match each assumption with the revision that makes the activity or expectation more inclusive.",
          pairs: [
            { item: "“Good participation means speaking up quickly.”", answer: "Offer more than one way to contribute, including speaking, writing, or reflecting before responding." },
            { item: "“Respect means making eye contact when someone is speaking.”", answer: "Focus on the purpose of respectful listening without requiring one specific form of body language." },
            { item: "“Everyone should be able to share a personal experience.”", answer: "Allow participants to respond from personal experience, an observation, a scenario, or to pass." },
            { item: "“A strong leader is the person who speaks first and most often.”", answer: "Recognize leadership through preparation, questions, support, follow-through, facilitation, and other contributions." },
          ],
          choices: [
            "Allow participants to respond from personal experience, an observation, a scenario, or to pass.",
            "Offer more than one way to contribute, including speaking, writing, or reflecting before responding.",
            "Focus on the purpose of respectful listening without requiring one specific form of body language.",
            "Recognize leadership through preparation, questions, support, follow-through, facilitation, and other contributions.",
          ],
          explanation: "Each revision keeps the purpose of the expectation while removing the hidden default about how it must be met.",
        },
      ],
    },
  ],
};
