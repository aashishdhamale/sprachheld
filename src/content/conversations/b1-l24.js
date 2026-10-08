/**
 * B1 · L24 — Conversation: your own job interview.
 *
 * Seven turns of a real German Vorstellungsgespräch: introduce yourself,
 * explain why you applied, describe your experience, name a strength and a
 * weakness, say where you see yourself in five years, ask a question of your
 * own, close. Sie throughout; past answers may be Perfekt or Präteritum, and
 * the five-year question invites Futur I.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l24.bewerbungsgespraech',
    level: 'B1',
    title: 'Your job interview',
    titleDe: 'Das Vorstellungsgespräch',
    icon: '🤝',
    setting:
      'You have applied for a position as a project assistant at a mid-sized company in Frankfurt and have been invited to an interview. The head of HR, Frau Dr. Seidel, welcomes you to her office.',
    goal:
      'Introduce yourself, explain your motivation and experience, talk about strengths, weaknesses and plans, and ask a question of your own.',
    roleBot: 'Frau Dr. Seidel, head of HR',
    roleUser: 'You, the applicant',
    vocabIds: [
      'v.b1.l24.bewerben',
      'v.b1.l24.stelle',
      'v.b1.l24.erfahrung',
      'v.b1.l24.staerke',
      'v.b1.l24.schwaeche',
      'v.b1.l24.zuverlaessig',
      'v.b1.l24.selbststaendig',
      'v.b1.l24.ausbildung',
      'v.b1.l24.studium',
    ],
    grammarIds: ['g.b1.praeteritum', 'g.b1.futur'],
    tags: ['praeteritum', 'futur'],
    turns: [
      /* ── 1. About you ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag, schön, dass Sie da sind. Erzählen Sie doch bitte zuerst etwas über sich.',
          en: 'Hello, nice that you could come. Please start by telling me a little about yourself.',
        },
        accept: [
          {
            match: ['studiert', 'studium', 'ausbildung', 'abschluss'],
            reply: {
              de: 'Interessant, danke. Das passt gut zu unserer Stelle.',
              en: 'Interesting, thank you. That fits our position well.',
            },
          },
          {
            match: ['gearbeitet', 'arbeite', 'arbeitete', 'erfahrung'],
            reply: {
              de: 'Danke. Über Ihre Erfahrung sprechen wir gleich noch genauer.',
              en: 'Thank you. We will talk about your experience in more detail in a moment.',
            },
          },
          {
            match: ['heiße', 'mein name', 'komme aus', 'jahre alt'],
            reply: {
              de: 'Freut mich, {name}. Und beruflich — was haben Sie bisher gemacht?',
              en: 'Pleased to meet you, {name}. And professionally — what have you done so far?',
            },
          },
        ],
        fallback: {
          de: 'Erzählen Sie ruhig kurz von Ihrem Studium oder Ihrer Ausbildung.',
          en: 'Feel free to tell me briefly about your studies or your training.',
        },
        hints: [
          'Ich heiße {name}. Ich habe Wirtschaft studiert und arbeite seit drei Jahren im Büro.',
          'Nach dem Studium arbeitete ich zwei Jahre bei einer Firma in Indien.',
          'Ich habe eine Ausbildung als Industriekaufmann gemacht.',
        ],
        sample: 'Ich heiße {name}. Ich habe Wirtschaft studiert und arbeite seit drei Jahren als Assistent im Büro.',
        requires: { any: ['heiße', 'studiert', 'ausbildung', 'gearbeitet', 'arbeite', 'arbeitete'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 2. Why this job ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Warum haben Sie sich gerade bei uns beworben?',
          en: 'Why did you apply to us in particular?',
        },
        accept: [
          {
            match: ['weil', 'interessiert', 'interessiere', 'spannend'],
            reply: {
              de: 'Das hört man gern. Was interessiert Sie besonders an der Arbeit?',
              en: 'That is nice to hear. What interests you in particular about the work?',
            },
          },
          {
            match: ['firma', 'ruf', 'international', 'team', 'projekte'],
            reply: {
              de: 'Ja, wir arbeiten tatsächlich viel international. Schön, dass Ihnen das gefällt.',
              en: 'Yes, we do in fact work internationally a lot. Nice that you like that.',
            },
          },
          {
            match: ['möchte', 'neue', 'herausforderung', 'lernen'],
            reply: {
              de: 'Eine neue Herausforderung, verstehe. Die bekommen Sie bei uns bestimmt.',
              en: 'A new challenge, I see. You will certainly get one here.',
            },
          },
        ],
        fallback: {
          de: 'Was hat Sie an unserer Stellenanzeige angesprochen?',
          en: 'What appealed to you about our job advert?',
        },
        hints: [
          'Ich habe mich beworben, weil mich die Arbeit in Projekten sehr interessiert.',
          'Ihre Firma arbeitet international, das finde ich spannend.',
          'Ich möchte etwas Neues lernen.',
        ],
        sample: 'Ich habe mich beworben, weil mich die Arbeit in internationalen Projekten sehr interessiert.',
        requires: { any: ['weil', 'interessiert', 'interessiere', 'möchte', 'firma', 'spannend'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 3. Experience ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Welche Erfahrungen haben Sie in diesem Bereich?',
          en: 'What experience do you have in this field?',
        },
        accept: [
          {
            match: ['jahre', 'jahr', 'seit'],
            reply: {
              de: 'Das ist eine solide Erfahrung. Haben Sie dort auch selbstständig gearbeitet?',
              en: 'That is solid experience. Did you also work independently there?',
            },
          },
          {
            match: ['praktikum', 'projekt', 'organisiert', 'geleitet'],
            reply: {
              de: 'Gut, das ist für die Stelle sehr nützlich.',
              en: 'Good, that is very useful for the position.',
            },
          },
          {
            match: ['wenig', 'noch keine', 'keine erfahrung', 'neu'],
            reply: {
              de: 'Kein Problem, wir arbeiten neue Kolleginnen und Kollegen gut ein.',
              en: 'No problem, we train new colleagues well.',
            },
          },
        ],
        fallback: {
          de: 'Wie lange haben Sie schon in diesem Bereich gearbeitet?',
          en: 'How long have you worked in this area?',
        },
        hints: [
          'Ich habe drei Jahre Erfahrung als Projektassistent.',
          'Während des Studiums machte ich ein Praktikum in einer Agentur.',
          'Ich habe noch wenig Erfahrung, aber ich lerne schnell.',
        ],
        sample: 'Ich habe drei Jahre Erfahrung als Assistent. Ich habe dort auch kleine Projekte organisiert.',
        requires: { any: ['jahre', 'praktikum', 'projekt', 'erfahrung', 'wenig', 'organisiert'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 4. Strengths and weaknesses ───────────────────────────────────── */
      {
        bot: {
          de: 'Was sind Ihre Stärken — und was sind Ihre Schwächen?',
          en: 'What are your strengths — and what are your weaknesses?',
        },
        accept: [
          {
            match: ['zuverlässig', 'stärke', 'teamfähig', 'flexibel', 'organisiert', 'selbstständig'],
            reply: {
              de: 'Das sind gute Eigenschaften für diese Stelle. Und eine Schwäche?',
              en: 'Those are good qualities for this position. And a weakness?',
            },
          },
          {
            match: ['schwäche', 'ungeduldig', 'perfektionist', 'nein sagen', 'zu viel'],
            reply: {
              de: 'Danke für Ihre Ehrlichkeit. Das ist eine Schwäche, mit der man gut arbeiten kann.',
              en: 'Thank you for your honesty. That is a weakness one can work with well.',
            },
          },
        ],
        fallback: {
          de: 'Nennen Sie mir bitte eine Stärke und eine Schwäche.',
          en: 'Please name one strength and one weakness.',
        },
        hints: [
          'Ich bin sehr zuverlässig. Meine Schwäche ist, dass ich manchmal zu ungeduldig bin.',
          'Meine größte Stärke ist, dass ich gut im Team arbeite.',
          'Manchmal kann ich schlecht Nein sagen.',
        ],
        sample: 'Ich bin sehr zuverlässig und arbeite gern im Team. Meine Schwäche ist, dass ich manchmal zu ungeduldig bin.',
        requires: { any: ['stärke', 'schwäche', 'zuverlässig', 'ungeduldig', 'team', 'flexibel'] },
        teaches: ['g.b1.futur'],
      },

      /* ── 5. In five years ──────────────────────────────────────────────── */
      {
        bot: {
          de: 'Wo sehen Sie sich in fünf Jahren?',
          en: 'Where do you see yourself in five years?',
        },
        accept: [
          {
            match: ['werde', 'in fünf jahren', 'hoffentlich'],
            reply: {
              de: 'Ein klares Ziel — das gefällt mir.',
              en: 'A clear goal — I like that.',
            },
          },
          {
            match: ['möchte', 'gern', 'leiten', 'verantwortung', 'weiterbilden'],
            reply: {
              de: 'Gut. Bei uns gibt es viele Möglichkeiten, sich weiterzubilden.',
              en: 'Good. We have many opportunities for further training.',
            },
          },
        ],
        fallback: {
          de: 'Was möchten Sie beruflich in den nächsten Jahren erreichen?',
          en: 'What would you like to achieve professionally in the next few years?',
        },
        hints: [
          'In fünf Jahren werde ich hoffentlich ein kleines Team leiten.',
          'Ich möchte mich weiterbilden und mehr Verantwortung übernehmen.',
        ],
        sample: 'In fünf Jahren werde ich hoffentlich eigene Projekte leiten.',
        requires: { any: ['werde', 'möchte', 'leiten', 'verantwortung', 'jahren'] },
        teaches: ['g.b1.futur'],
      },

      /* ── 6. Your question ──────────────────────────────────────────────── */
      {
        bot: {
          de: 'Haben Sie noch Fragen an uns?',
          en: 'Do you have any questions for us?',
        },
        accept: [
          {
            match: ['homeoffice', 'von zu hause'],
            reply: {
              de: 'Ja, zwei Tage pro Woche sind im Homeoffice möglich.',
              en: 'Yes, two days a week from home are possible.',
            },
          },
          {
            match: ['team', 'kollegen', 'wie viele'],
            reply: {
              de: 'Das Team hat acht Personen, die meisten sind zwischen 25 und 40.',
              en: 'The team has eight people, most of them between 25 and 40.',
            },
          },
          {
            match: ['wann', 'anfangen', 'beginnen', 'entscheidung'],
            reply: {
              de: 'Wir entscheiden bis Ende des Monats. Die Stelle beginnt am ersten Juni.',
              en: 'We will decide by the end of the month. The position starts on the first of June.',
            },
          },
          {
            match: ['weiterbildung', 'kurs', 'deutschkurs'],
            reply: {
              de: 'Ja, wir bezahlen Weiterbildungen und auch Sprachkurse.',
              en: 'Yes, we pay for further training and language courses too.',
            },
          },
          {
            match: ['nein', 'keine fragen', 'alles klar'],
            reply: {
              de: 'Gut, dann ist alles besprochen.',
              en: 'Good, then everything has been discussed.',
            },
          },
        ],
        fallback: {
          de: 'Gibt es noch etwas, das Sie wissen möchten?',
          en: 'Is there anything else you would like to know?',
        },
        hints: [
          'Ja: Kann man auch im Homeoffice arbeiten?',
          'Wie viele Personen hat das Team?',
          'Wann treffen Sie Ihre Entscheidung?',
        ],
        sample: 'Ja, ich möchte gern wissen, ob man auch im Homeoffice arbeiten kann.',
        requires: { any: ['homeoffice', 'team', 'wann', 'kurs', 'nein', 'frage', 'ob'] },
        teaches: ['g.b1.futur'],
      },

      /* ── 7. Closing ────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Wir melden uns bis Ende der Woche bei Ihnen. Vielen Dank für das Gespräch!',
          en: 'We will be in touch by the end of the week. Thank you very much for the interview!',
        },
        accept: [
          {
            match: ['danke', 'vielen dank', 'bedanke'],
            reply: {
              de: 'Gern geschehen. Auf Wiedersehen!',
              en: 'You are welcome. Goodbye!',
            },
          },
          {
            match: ['freue mich', 'rückmeldung', 'auf wiedersehen'],
            reply: {
              de: 'Wir freuen uns auch. Auf Wiedersehen!',
              en: 'So are we. Goodbye!',
            },
          },
        ],
        fallback: {
          de: 'Haben Sie noch etwas zu sagen?',
          en: 'Is there anything else you would like to say?',
        },
        hints: ['Vielen Dank für die Einladung. Ich freue mich auf Ihre Rückmeldung.', 'Ich bedanke mich für das Gespräch. Auf Wiedersehen!'],
        sample: 'Vielen Dank für die Einladung. Ich freue mich auf Ihre Rückmeldung.',
        requires: { any: ['danke', 'freue mich', 'auf wiedersehen', 'bedanke'] },
        teaches: ['g.b1.futur'],
      },
    ],
    closing: {
      de: 'Viel Erfolg, {name} — ich habe einen sehr guten Eindruck von Ihnen.',
      en: 'Good luck, {name} — I have a very good impression of you.',
    },
  },
]

export default conversations
