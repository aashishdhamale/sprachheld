/**
 * A2 · L13 — Work and the office
 *
 * The conversation every employee has to survive sooner or later: telling your
 * team leader that a task will not be finished on time, giving a real reason
 * with weil, and agreeing a new date. Each turn forces one piece of the lesson —
 * a reason (weil), a report (dass), a promise (wenn … Bescheid sagen).
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l13.frist-verschieben',
    level: 'A2',
    title: 'Asking for a new deadline',
    titleDe: 'Die Frist verschieben',
    icon: '🏢',
    setting:
      'Tuesday afternoon. The report for your biggest customer is due on Friday and you already know you will not make it. Your team leader Daniel stops at your desk.',
    goal: 'Say that you cannot finish on time, explain why with weil, and agree a new deadline.',
    roleBot: 'Daniel, your team leader',
    roleUser: 'You, the person who has to deliver the report',
    vocabIds: [
      'v.a2.l13.frist',
      'v.a2.l13.aufgabe',
      'v.a2.l13.auftrag',
      'v.a2.l13.besprechung',
      'v.a2.l13.abteilung',
      'v.a2.l13.ueberstunden',
      'v.a2.l13.bescheid-sagen',
      'v.a2.l13.sich-melden',
      'v.a2.l13.sich-kuemmern',
      'v.a2.l13.erledigen',
    ],
    grammarIds: ['g.a2.nebensatz', 'g.a2.weil-dass-wenn'],
    tags: ['nebensatz'],
    turns: [
      /* ── 1. How is it going? ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Hallo {name}, gut, dass ich dich treffe. Wie läuft es mit dem Bericht für den Kunden?',
          en: 'Hello {name}, good that I am running into you. How is the report for the customer going?',
        },
        accept: [
          {
            match: ['nicht gut', 'nicht so gut', 'schlecht', 'problem'],
            reply: {
              de: 'Oh. Dann erzähl mir bitte genau, wo das Problem liegt.',
              en: 'Oh. Then please tell me exactly where the problem is.',
            },
          },
          {
            match: ['nicht fertig', 'noch nicht', 'brauche mehr zeit', 'dauert'],
            reply: {
              de: 'Noch nicht fertig, verstehe. Das ist erst mal kein Drama.',
              en: 'Not finished yet, I see. That is not a disaster for now.',
            },
          },
          {
            match: ['gut', 'fast fertig', 'super'],
            reply: {
              de: 'Das klingt gut. Trotzdem schauen wir kurz auf den Zeitplan.',
              en: 'That sounds good. All the same, let us take a quick look at the schedule.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das habe ich nicht verstanden. Wie läuft es mit dem Bericht? Zum Beispiel: „Leider läuft es nicht so gut.“',
          en: 'Sorry, I did not understand that. How is the report going? For example: "Leider läuft es nicht so gut."',
        },
        hints: [
          'Leider läuft es nicht so gut.',
          'Der Bericht ist noch nicht fertig.',
          'Es gibt ein Problem, Daniel.',
        ],
        sample: 'Leider läuft es nicht so gut. Der Bericht ist noch nicht fertig.',
        requires: { any: ['nicht', 'problem', 'leider'] },
        teaches: ['g.a2.nebensatz'],
      },

      /* ── 2. Will you make Friday? ──────────────────────────────────────── */
      {
        bot: {
          de: 'Die Frist ist am Freitag um zwölf Uhr. Schaffst du das?',
          en: 'The deadline is Friday at twelve. Will you manage that?',
        },
        accept: [
          {
            match: ['nein', 'schaffe ich nicht', 'schaffe das nicht', 'kann ich nicht'],
            reply: {
              de: 'Danke für die klare Antwort. Lieber jetzt als am Freitag. Und warum nicht?',
              en: 'Thanks for the clear answer. Better now than on Friday. And why not?',
            },
          },
          {
            match: ['glaube nicht', 'wahrscheinlich nicht', 'vielleicht', 'eher nicht'],
            reply: {
              de: 'Also eher nicht. Sag mir bitte, warum die Zeit nicht reicht.',
              en: 'So probably not. Please tell me why there is not enough time.',
            },
          },
          {
            match: ['nur wenn', 'nur mit', 'überstunden', 'ueberstunden'],
            reply: {
              de: 'Überstunden möchte ich nicht. Erklär mir bitte, warum es so knapp wird.',
              en: 'I do not want overtime. Please explain to me why it is getting so tight.',
            },
          },
        ],
        fallback: {
          de: 'Also, schaffst du die Frist am Freitag — ja oder nein?',
          en: 'So, will you make the Friday deadline — yes or no?',
        },
        hints: [
          'Nein, das schaffe ich leider nicht.',
          'Ich glaube nicht, dass ich das schaffe.',
          'Nur mit Überstunden, und das möchte ich nicht.',
        ],
        sample: 'Nein, ich glaube nicht, dass ich das bis Freitag schaffe.',
        requires: { any: ['nein', 'nicht'] },
        teaches: ['g.a2.weil-dass-wenn'],
      },

      /* ── 3. The reason (weil) ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Sag mir bitte den Grund. Warum geht es nicht?',
          en: 'Please tell me the reason. Why does it not work?',
        },
        accept: [
          {
            match: ['zahlen', 'daten', 'kunde', 'kundin', 'einkauf'],
            reply: {
              de: 'Ah, die Zahlen fehlen noch. Das kenne ich — ohne Zahlen kannst du nichts schreiben.',
              en: 'Ah, the figures are still missing. I know that — without figures you cannot write anything.',
            },
          },
          {
            match: ['krank', 'arzt', 'termin'],
            reply: {
              de: 'Das tut mir leid. Gesundheit ist wichtiger als ein Bericht.',
              en: 'I am sorry about that. Health is more important than a report.',
            },
          },
          {
            match: ['aufgaben', 'zu viel', 'auftrag', 'besprechung', 'projekt'],
            reply: {
              de: 'Ja, du hast im Moment wirklich zu viele Aufgaben. Das sehe ich auch.',
              en: 'Yes, you really do have too many tasks at the moment. I can see that too.',
            },
          },
        ],
        fallback: {
          de: 'Das habe ich nicht verstanden. Antworte bitte mit weil, zum Beispiel: „Weil die Zahlen noch fehlen.“',
          en: 'I did not understand that. Please answer with weil, for example: "Weil die Zahlen noch fehlen."',
        },
        hints: [
          'Weil die Zahlen vom Kunden noch fehlen.',
          'Weil ich zu viele andere Aufgaben habe.',
          'Weil ich zwei Tage krank war.',
        ],
        sample: 'Weil der Kunde die Zahlen noch nicht geschickt hat.',
        requires: { all: ['weil'] },
        teaches: ['g.a2.weil-dass-wenn'],
      },

      /* ── 4. A new date ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Gut, das verstehe ich. Wann kannst du den Bericht denn fertig machen?',
          en: 'Good, I understand that. So when can you finish the report?',
        },
        accept: [
          {
            match: ['montag', 'dienstag'],
            reply: {
              de: 'Montag oder Dienstag passt. Der Kunde braucht den Bericht erst am Mittwoch.',
              en: 'Monday or Tuesday works. The customer only needs the report on Wednesday.',
            },
          },
          {
            match: ['mittwoch', 'donnerstag'],
            reply: {
              de: 'Mittwoch ist knapp, aber es geht noch. Später wird es schwierig.',
              en: 'Wednesday is tight, but it still works. Any later gets difficult.',
            },
          },
          {
            match: ['nächste woche', 'naechste woche', 'in zwei wochen'],
            reply: {
              de: 'Nächste Woche ist leider zu spät. Geht es auch am Dienstag?',
              en: 'Next week is unfortunately too late. Would Tuesday work as well?',
            },
          },
        ],
        fallback: {
          de: 'Nenne mir bitte einen neuen Termin. Zum Beispiel: „Ich schaffe es bis Dienstag.“',
          en: 'Please name a new date for me. For example: "Ich schaffe es bis Dienstag."',
        },
        hints: [
          'Ich schaffe es bis Dienstag.',
          'Bis Mittwoch bin ich fertig.',
          'Wenn ich die Zahlen morgen bekomme, schaffe ich es bis Montag.',
        ],
        sample: 'Ich schaffe es bis Dienstag, wenn ich die Zahlen morgen bekomme.',
        requires: {
          any: ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'woche'],
        },
        teaches: ['g.a2.weil-dass-wenn'],
      },

      /* ── 5. Do you need help? ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Brauchst du Hilfe? Eine Kollegin kann sich um die Präsentation kümmern.',
          en: 'Do you need help? A colleague can take care of the presentation.',
        },
        accept: [
          {
            match: ['ja', 'gern', 'hilfe', 'das hilft'],
            reply: {
              de: 'Gut, dann frage ich Sandra. Sie hat diese Woche Zeit.',
              en: 'Good, then I will ask Sandra. She has time this week.',
            },
          },
          {
            match: ['nein', 'allein', 'selbst', 'danke'],
            reply: {
              de: 'In Ordnung. Aber melde dich, wenn es doch zu viel wird.',
              en: 'All right. But get in touch if it does become too much after all.',
            },
          },
          {
            match: ['zahlen', 'einkauf', 'abteilung', 'anrufen'],
            reply: {
              de: 'Gute Idee. Ich rufe die Abteilung Einkauf gleich selbst an.',
              en: 'Good idea. I will call the purchasing department myself right away.',
            },
          },
        ],
        fallback: {
          de: 'Also — brauchst du Hilfe bei der Präsentation, ja oder nein?',
          en: 'So — do you need help with the presentation, yes or no?',
        },
        hints: [
          'Ja, gern! Das hilft mir sehr.',
          'Nein danke, das schaffe ich allein.',
          'Ja, und ich brauche die Zahlen aus dem Einkauf.',
        ],
        sample: 'Ja, gern. Dann kümmere ich mich nur um den Bericht.',
        requires: { any: ['ja', 'nein', 'danke', 'gern'] },
        teaches: ['g.a2.nebensatz'],
      },

      /* ── 6. Tell me earlier next time ──────────────────────────────────── */
      {
        bot: {
          de: 'Eine Bitte noch: Ich möchte so etwas nicht erst am Freitag hören. Wie machen wir das beim nächsten Mal?',
          en: 'One more request: I do not want to hear about something like this only on Friday. How do we handle it next time?',
        },
        accept: [
          {
            match: ['bescheid'],
            reply: {
              de: 'Perfekt. Sag mir kurz Bescheid, auch wenn es nur zwei Tage sind.',
              en: 'Perfect. Just let me know briefly, even if it is only two days.',
            },
          },
          {
            match: ['melde mich', 'melde ich mich', 'melden'],
            reply: {
              de: 'Sehr gut. Melde dich lieber einmal zu oft als einmal zu spät.',
              en: 'Very good. Better get in touch once too often than once too late.',
            },
          },
          {
            match: ['schreibe', 'e-mail', 'mail', 'rufe', 'anrufen'],
            reply: {
              de: 'Eine kurze E-Mail reicht mir völlig, {name}.',
              en: 'A short email is completely enough for me, {name}.',
            },
          },
        ],
        fallback: {
          de: 'Wie informierst du mich beim nächsten Mal früher? Zum Beispiel: „Ich sage dir sofort Bescheid.“',
          en: 'How will you inform me earlier next time? For example: "Ich sage dir sofort Bescheid."',
        },
        hints: [
          'Ich sage dir sofort Bescheid.',
          'Ich melde mich, wenn es ein Problem gibt.',
          'Ich schreibe dir eine kurze E-Mail.',
        ],
        sample: 'Ich sage dir sofort Bescheid, wenn es ein Problem gibt.',
        requires: { any: ['bescheid', 'melde', 'schreibe', 'mail', 'rufe'] },
        teaches: ['g.a2.weil-dass-wenn'],
      },

      /* ── 7. Confirm the new deadline ───────────────────────────────────── */
      {
        bot: {
          de: 'Alles klar. Also neue Frist: Dienstag um zwölf Uhr. Passt das für dich?',
          en: 'All right. So the new deadline is Tuesday at twelve. Does that work for you?',
        },
        accept: [
          {
            match: ['ja', 'passt', 'in ordnung', 'einverstanden', 'klar'],
            reply: {
              de: 'Sehr gut. Dann trage ich Dienstag als neuen Termin ein.',
              en: 'Very good. Then I will enter Tuesday as the new date.',
            },
          },
          {
            match: ['nachmittag', 'später', 'spaeter', 'sechzehn', 'vier uhr'],
            reply: {
              de: 'Okay, dann Dienstag um sechzehn Uhr. Das geht auch noch.',
              en: 'Okay, Tuesday at four in the afternoon then. That still works.',
            },
          },
          {
            match: ['nein', 'geht nicht', 'zu früh', 'zu frueh'],
            reply: {
              de: 'Hm. Dann nehmen wir Mittwoch um zehn Uhr — aber wirklich nicht später.',
              en: 'Hm. Then let us take Wednesday at ten — but really not later.',
            },
          },
        ],
        fallback: {
          de: 'Passt der Dienstag um zwölf Uhr für dich — ja oder nein?',
          en: 'Does Tuesday at twelve work for you — yes or no?',
        },
        hints: [
          'Ja, das passt.',
          'Ja, Dienstag um zwölf ist in Ordnung.',
          'Kann ich ihn auch am Nachmittag schicken?',
        ],
        sample: 'Ja, das passt. Am Dienstag um zwölf Uhr ist der Bericht fertig.',
        requires: { any: ['ja', 'nein', 'passt', 'ordnung', 'nachmittag'] },
        teaches: ['g.a2.nebensatz'],
      },
    ],
    closing: {
      de: 'Danke, dass du so früh Bescheid gesagt hast, {name}. Jetzt können wir beide planen. Bis Dienstag!',
      en: 'Thank you for letting me know so early, {name}. Now we can both plan. See you on Tuesday!',
    },
  },
]

export default conversations
