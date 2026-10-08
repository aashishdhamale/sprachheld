/**
 * B1 · L20 — Conversation: chasing up an e-mail that got no answer.
 *
 * You wrote to a language school a week ago and heard nothing, so you call.
 * Seven turns in the Sie register of a German office phone call: say who
 * you are and why you call, explain what you asked, give the subject line,
 * ask for the information in writing, give your e-mail address, ask one
 * more question, close politely.
 *
 * um … zu and zu + Infinitiv carry the hints (Ich rufe an, um … zu fragen),
 * and every turn also accepts the plain A2 answer.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l20.nachfragen',
    level: 'B1',
    title: 'Chasing up an unanswered e-mail',
    titleDe: 'Nach einer E-Mail nachfragen',
    icon: '☎️',
    setting:
      'Last Monday you e-mailed the Sprachschule Lingua to ask about their evening course, and nobody has replied. You call the school office. Frau Wenzel picks up.',
    goal:
      'Say why you are calling, explain what you asked, ask for the information by e-mail, give your address and close the call politely.',
    roleBot: 'Frau Wenzel at the language school office',
    roleUser: 'You, a prospective student',
    vocabIds: [
      'v.b1.l20.nachricht',
      'v.b1.l20.anfrage',
      'v.b1.l20.betreff',
      'v.b1.l20.anhang',
      'v.b1.l20.beantworten',
      'v.b1.l20.bestaetigen',
      'v.b1.l20.mitteilen',
      'v.b1.l20.bedanken',
      'v.b1.l20.erreichen',
    ],
    grammarIds: ['g.b1.formell', 'g.b1.infinitiv'],
    tags: ['formell', 'infinitiv'],
    turns: [
      /* ── 1. Who you are and why you call ───────────────────────────────── */
      {
        bot: {
          de: 'Sprachschule Lingua, Wenzel am Apparat. Guten Tag!',
          en: 'Lingua language school, Wenzel speaking. Hello!',
        },
        accept: [
          {
            match: ['ich rufe an', 'zu fragen', 'nachfragen', 'nachzufragen'],
            reply: {
              de: 'Guten Tag, {name}. Gern helfe ich Ihnen. Worum geht es denn?',
              en: 'Hello, {name}. I am happy to help. What is it about?',
            },
          },
          {
            match: ['e-mail', 'geschickt', 'geschrieben', 'anfrage', 'keine antwort'],
            reply: {
              de: 'Oh, das tut mir leid, dass Sie noch keine Antwort haben. Worum ging es in Ihrer E-Mail?',
              en: 'Oh, I am sorry you have not had an answer yet. What was your e-mail about?',
            },
          },
          {
            match: ['mein name', 'hier ist', 'guten tag'],
            reply: {
              de: 'Guten Tag, {name}. Was kann ich für Sie tun?',
              en: 'Hello, {name}. What can I do for you?',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, wie ist Ihr Name, und worum geht es?',
          en: 'Sorry, what is your name, and what is it about?',
        },
        hints: [
          'Guten Tag, hier ist {name}. Ich rufe an, um nach meiner E-Mail zu fragen.',
          'Ich habe Ihnen letzte Woche eine E-Mail geschickt.',
          'Guten Tag, mein Name ist {name}.',
        ],
        sample: 'Guten Tag, hier ist {name}. Ich habe Ihnen letzte Woche eine E-Mail geschickt, aber noch keine Antwort bekommen.',
        requires: { any: ['hier ist', 'mein name', 'e-mail', 'ich rufe an', 'anfrage'] },
        teaches: ['g.b1.formell'],
      },

      /* ── 2. What you asked ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Das tut mir leid. Was wollten Sie denn wissen?',
          en: 'I am sorry about that. What did you want to know?',
        },
        accept: [
          {
            match: ['abendkurs', 'kurs', 'beginnt', 'anfängt'],
            reply: {
              de: 'Der nächste Abendkurs beginnt am 6. Oktober, montags und mittwochs ab halb sieben.',
              en: 'The next evening course starts on the 6th of October, Mondays and Wednesdays from half past six.',
            },
          },
          {
            match: ['kostet', 'preis', 'wie viel'],
            reply: {
              de: 'Der Kurs kostet 390 Euro für zehn Wochen.',
              en: 'The course costs 390 euros for ten weeks.',
            },
          },
          {
            match: ['test', 'niveau', 'b1', 'b2'],
            reply: {
              de: 'Vor dem Kurs machen wir einen kurzen Test, um das richtige Niveau zu finden.',
              en: 'Before the course we do a short test to find the right level.',
            },
          },
        ],
        fallback: {
          de: 'Ging es um einen Kurs, um den Preis oder um etwas anderes?',
          en: 'Was it about a course, the price, or something else?',
        },
        hints: [
          'Ich möchte wissen, wann der Abendkurs beginnt.',
          'Ich wollte fragen, wie viel der Kurs kostet.',
          'Ich wollte wissen, ob ich vorher einen Test machen muss.',
        ],
        sample: 'Ich möchte wissen, wann der nächste Abendkurs beginnt und wie viel er kostet.',
        requires: { any: ['kurs', 'kostet', 'preis', 'test', 'beginnt'] },
        teaches: ['g.b1.formell'],
      },

      /* ── 3. The subject line ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich finde Ihre E-Mail leider nicht. Was stand denn im Betreff?',
          en: 'Unfortunately I cannot find your e-mail. What did the subject line say?',
        },
        accept: [
          {
            match: ['betreff', 'anfrage', 'abendkurs', 'frage'],
            reply: {
              de: 'Ah, jetzt sehe ich sie — sie war im falschen Ordner. Das ist mein Fehler.',
              en: 'Ah, now I can see it — it was in the wrong folder. That is my mistake.',
            },
          },
          {
            match: ['weiß nicht', 'nicht mehr', 'keine ahnung', 'erinnere'],
            reply: {
              de: 'Kein Problem, das ist auch nicht so wichtig. Ich helfe Ihnen trotzdem.',
              en: 'No problem, that is not so important. I will help you anyway.',
            },
          },
        ],
        fallback: {
          de: 'Wissen Sie noch ungefähr, was Sie in den Betreff geschrieben haben?',
          en: 'Do you roughly remember what you wrote in the subject line?',
        },
        hints: ['Im Betreff stand „Anfrage Abendkurs“.', 'Das weiß ich leider nicht mehr.'],
        sample: 'Im Betreff stand „Anfrage Abendkurs B2“.',
        requires: { any: ['betreff', 'anfrage', 'abendkurs', 'weiß nicht', 'nicht mehr'] },
        teaches: ['g.b1.formell'],
      },

      /* ── 4. Ask for it in writing ──────────────────────────────────────── */
      {
        bot: {
          de: 'Soll ich Ihnen die Informationen noch einmal schriftlich schicken?',
          en: 'Shall I send you the information again in writing?',
        },
        accept: [
          {
            match: ['könnten sie', 'würden sie', 'wäre nett', 'wäre gut'],
            reply: {
              de: 'Natürlich, sehr gern.',
              en: 'Of course, with pleasure.',
            },
          },
          {
            match: ['ja', 'bitte', 'gern', 'schicken', 'per e-mail'],
            reply: {
              de: 'Gut, das mache ich sofort.',
              en: 'Good, I will do that straight away.',
            },
          },
          {
            match: ['nein', 'nicht nötig', 'brauche ich nicht'],
            reply: {
              de: 'In Ordnung. Ich schicke Ihnen trotzdem das Anmeldeformular, dann haben Sie es schon.',
              en: 'All right. I will still send you the registration form, then you have it already.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie alles noch einmal per E-Mail bekommen?',
          en: 'Would you like to get everything again by e-mail?',
        },
        hints: [
          'Ja, bitte. Könnten Sie mir die Informationen per E-Mail schicken?',
          'Ja, gern, das wäre sehr nett.',
          'Nein, danke, das ist nicht nötig.',
        ],
        sample: 'Ja, bitte. Könnten Sie mir die Informationen per E-Mail schicken?',
        requires: { any: ['ja', 'bitte', 'gern', 'könnten', 'nein'] },
        teaches: ['g.b1.formell'],
      },

      /* ── 5. Your e-mail address ────────────────────────────────────────── */
      {
        bot: {
          de: 'Wie ist Ihre E-Mail-Adresse? Dann schreibe ich sie mir richtig auf.',
          en: 'What is your e-mail address? Then I will write it down correctly.',
        },
        accept: [
          {
            match: ['@', 'punkt', ' at '],
            reply: {
              de: 'Danke, ich habe es notiert. Sie bekommen die E-Mail noch heute.',
              en: 'Thank you, I have noted it down. You will get the e-mail today.',
            },
          },
          {
            match: ['adresse', 'e-mail', 'buchstabiere'],
            reply: {
              de: 'Buchstabieren Sie bitte ganz langsam, dann schreibe ich mit.',
              en: 'Please spell it very slowly, then I will write it down.',
            },
          },
        ],
        fallback: {
          de: 'Ich brauche nur Ihre E-Mail-Adresse, bitte.',
          en: 'I just need your e-mail address, please.',
        },
        hints: ['Meine E-Mail-Adresse ist …', 'Ich buchstabiere: …'],
        sample: 'Meine E-Mail-Adresse ist {name}@beispiel.de.',
        requires: { any: ['@', 'punkt', 'adresse'] },
        teaches: ['g.b1.formell'],
      },

      /* ── 6. One more question ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Im Anhang schicke ich Ihnen auch das Anmeldeformular. Haben Sie sonst noch Fragen?',
          en: 'I will also attach the registration form. Do you have any other questions?',
        },
        accept: [
          {
            match: ['test', 'prüfung', 'niveau'],
            reply: {
              de: 'Ja, vor dem Kurs gibt es einen kurzen Einstufungstest. Er dauert nur zwanzig Minuten.',
              en: 'Yes, before the course there is a short placement test. It only takes twenty minutes.',
            },
          },
          {
            match: ['bezahlen', 'überweisen', 'kostet', 'raten'],
            reply: {
              de: 'Sie können den Kurs in zwei Raten bezahlen, per Überweisung.',
              en: 'You can pay for the course in two instalments, by bank transfer.',
            },
          },
          {
            match: ['nein', 'keine', 'alles klar', 'danke'],
            reply: {
              de: 'Gut, dann ist alles geklärt.',
              en: 'Good, then everything is sorted out.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie noch etwas wissen, zum Beispiel über den Test oder die Bezahlung?',
          en: 'Is there anything else you would like to know, for example about the test or payment?',
        },
        hints: [
          'Ja, muss ich vorher einen Test machen?',
          'Kann ich den Kurs in Raten bezahlen?',
          'Nein, danke, das ist alles.',
        ],
        sample: 'Ja, ich möchte noch wissen, ob ich vorher einen Test machen muss.',
        requires: { any: ['test', 'bezahlen', 'nein', 'danke', 'frage'] },
        teaches: ['g.b1.infinitiv'],
      },

      /* ── 7. Close the call ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Dann wünsche ich Ihnen viel Erfolg. Kann ich sonst noch etwas für Sie tun?',
          en: 'Then I wish you every success. Is there anything else I can do for you?',
        },
        accept: [
          {
            match: ['danke', 'vielen dank', 'bedanke'],
            reply: {
              de: 'Sehr gern geschehen.',
              en: 'You are very welcome.',
            },
          },
          {
            match: ['wiederhören', 'tschüss', 'auf wiedersehen', 'nein'],
            reply: {
              de: 'Auf Wiederhören!',
              en: 'Goodbye!',
            },
          },
        ],
        fallback: {
          de: 'Ist sonst alles in Ordnung?',
          en: 'Is everything else all right?',
        },
        hints: ['Nein, das ist alles. Vielen Dank für Ihre Hilfe!', 'Ich bedanke mich. Auf Wiederhören!'],
        sample: 'Nein, das ist alles. Vielen Dank für Ihre Hilfe! Auf Wiederhören.',
        requires: { any: ['danke', 'wiederhören', 'nein', 'bedanke'] },
        teaches: ['g.b1.formell'],
      },
    ],
    closing: {
      de: 'Auf Wiederhören, {name}, und bis bald im Kurs!',
      en: 'Goodbye, {name}, and see you soon on the course!',
    },
  },
]

export default conversations
