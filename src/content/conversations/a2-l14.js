/**
 * A2 · L14 — Conversation: the flat viewing.
 *
 * Seven turns that walk the learner through the four questions every German
 * tenant has to ask out loud — Miete, Nebenkosten, Kaution, Einzugstermin —
 * and finish with a decision. The landlord uses Sie throughout, as he would.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l14.besichtigung',
    level: 'A2',
    title: 'Viewing a flat',
    titleDe: 'Die Wohnungsbesichtigung',
    icon: '🔑',
    setting:
      'Thursday, five in the afternoon. Herr Neumann, the landlord, unlocks the door of a 3-room flat on the third floor and shows you in.',
    goal: 'Find out the rent, the extra costs and the deposit, say when you could move in, and end with a clear answer.',
    roleBot: 'Herr Neumann, the landlord',
    roleUser: 'You, looking for a flat',
    vocabIds: [
      'v.a2.l14.vermieter',
      'v.a2.l14.mietvertrag',
      'v.a2.l14.kaution',
      'v.a2.l14.nebenkosten',
      'v.a2.l14.warmmiete',
      'v.a2.l14.quadratmeter',
      'v.a2.l14.stock',
      'v.a2.l14.aufzug',
      'v.a2.l14.heizung',
      'v.a2.l14.hausmeister',
      'v.a2.l14.einziehen',
      'v.a2.l14.moebliert',
    ],
    grammarIds: ['g.a2.wechselpraepositionen', 'g.a2.akk-dat'],
    tags: ['wechselpraepositionen', 'dativ', 'akkusativ'],
    turns: [
      /* ── 1. First impression ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag, {name}! Schön, dass Sie da sind. Das ist das Wohnzimmer. Wie gefällt Ihnen die Wohnung?',
          en: 'Good afternoon, {name}! Good that you are here. This is the living room. How do you like the flat?',
        },
        accept: [
          {
            match: ['gefällt mir', 'sehr gut', 'schön', 'hell'],
            reply: {
              de: 'Das freut mich. Die Fenster gehen nach Süden, deshalb ist es hier so hell.',
              en: 'I am glad. The windows face south, that is why it is so bright in here.',
            },
          },
          {
            match: ['wie groß', 'quadratmeter', 'wie viele zimmer', 'größe'],
            reply: {
              de: 'Die Wohnung hat 78 Quadratmeter und drei Zimmer. Wir sind hier im dritten Stock.',
              en: 'The flat has 78 square metres and three rooms. We are on the third floor here.',
            },
          },
          {
            match: ['möbliert', 'möbel', 'küche'],
            reply: {
              de: 'Nein, die Wohnung ist nicht möbliert. Nur die Küche bleibt in der Wohnung.',
              en: 'No, the flat is not furnished. Only the kitchen stays in the flat.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das habe ich nicht verstanden. Wie finden Sie die Wohnung?',
          en: 'Sorry, I did not understand that. What do you think of the flat?',
        },
        hints: ['Die Wohnung gefällt mir sehr gut.', 'Sie ist schön hell.', 'Wie groß ist die Wohnung?'],
        sample: 'Die Wohnung gefällt mir sehr gut.',
        requires: { any: ['gefällt', 'gut', 'schön', 'hell', 'groß', 'quadratmeter', 'möbliert'] },
        teaches: ['g.a2.akk-dat'],
      },

      /* ── 2. The rent ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Dann zeige ich Ihnen gleich noch die Küche. Haben Sie vorher Fragen zur Miete?',
          en: 'Then I will show you the kitchen in a moment. Do you have any questions about the rent first?',
        },
        accept: [
          {
            match: ['wie hoch ist die miete', 'was kostet', 'wie viel kostet', 'wie hoch ist die kaltmiete'],
            reply: {
              de: 'Die Kaltmiete beträgt 690 Euro im Monat. Die Nebenkosten kommen noch dazu.',
              en: 'The basic rent is 690 euros a month. The service charges come on top of that.',
            },
          },
          {
            match: ['warmmiete'],
            reply: {
              de: 'Die Warmmiete liegt bei 870 Euro. Da sind die Nebenkosten schon dabei.',
              en: 'The rent including bills is 870 euros. The service charges are already included there.',
            },
          },
          {
            match: ['zu teuer', 'günstiger', 'weniger', 'verhandeln'],
            reply: {
              de: 'Der Preis steht leider fest. 690 Euro kalt ist für diese Lage normal.',
              en: 'The price is fixed, unfortunately. 690 euros before bills is normal for this area.',
            },
          },
        ],
        fallback: {
          de: 'Fragen Sie ruhig. Möchten Sie wissen, wie hoch die Miete ist?',
          en: 'Do ask. Would you like to know how high the rent is?',
        },
        hints: ['Wie hoch ist die Miete?', 'Was kostet die Wohnung im Monat?', 'Wie hoch ist die Warmmiete?'],
        sample: 'Wie hoch ist die Kaltmiete?',
        requires: { any: ['miete', 'kostet', 'wie hoch', 'wie viel'] },
        teaches: ['g.a2.akk-dat'],
      },

      /* ── 3. The service charges ────────────────────────────────────────── */
      {
        bot: {
          de: 'Viele Mieter vergessen die Nebenkosten. Möchten Sie dazu etwas wissen?',
          en: 'Many tenants forget the service charges. Would you like to know something about them?',
        },
        accept: [
          {
            match: ['ja', 'wie hoch', 'wie viel', 'nebenkosten'],
            reply: {
              de: 'Die Nebenkosten betragen 180 Euro im Monat. Heizung, Wasser und Müll sind dabei.',
              en: 'The service charges are 180 euros a month. Heating, water and rubbish are included.',
            },
          },
          {
            match: ['strom', 'internet', 'gas'],
            reply: {
              de: 'Strom und Internet zahlen Sie selbst. Das sind noch einmal etwa 60 Euro.',
              en: 'You pay for electricity and internet yourself. That is another 60 euros or so.',
            },
          },
          {
            match: ['nein', 'danke', 'alles klar', 'weiß ich schon'],
            reply: {
              de: 'Gut. Ich sage es trotzdem kurz: 180 Euro im Monat, mit Heizung und Wasser.',
              en: 'Fine. I will say it briefly anyway: 180 euros a month, including heating and water.',
            },
          },
        ],
        fallback: {
          de: 'Noch einmal, bitte. Möchten Sie die Nebenkosten wissen — ja oder nein?',
          en: 'Once more, please. Would you like to know the service charges — yes or no?',
        },
        hints: ['Ja, wie hoch sind die Nebenkosten?', 'Was ist in den Nebenkosten dabei?', 'Nein danke, das weiß ich schon.'],
        sample: 'Ja, wie hoch sind die Nebenkosten?',
        requires: { any: ['ja', 'nein', 'nebenkosten', 'strom', 'wie hoch'] },
        teaches: ['g.a2.akk-dat'],
      },

      /* ── 4. The deposit ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Eine Sache steht noch im Mietvertrag. Wissen Sie, wie hoch die Kaution ist?',
          en: 'One more thing is in the rental contract. Do you know how high the deposit is?',
        },
        accept: [
          {
            match: ['nein', 'keine ahnung', 'wie hoch', 'wie viel'],
            reply: {
              de: 'Die Kaution beträgt zwei Kaltmieten, also 1380 Euro. Sie bekommen das Geld zurück, wenn es keine Schäden gibt.',
              en: 'The deposit is two months of basic rent, so 1380 euros. You get the money back if there is no damage.',
            },
          },
          {
            match: ['zwei', 'drei', 'monatsmieten', 'kaltmieten'],
            reply: {
              de: 'Genau, zwei Kaltmieten. Das sind 1380 Euro, und Sie zahlen sie vor dem Einzug.',
              en: 'Exactly, two months of basic rent. That is 1380 euros, and you pay it before moving in.',
            },
          },
          {
            match: ['viel geld', 'teuer', 'raten', 'in teilen'],
            reply: {
              de: 'Ja, das ist viel Geld. Sie können die Kaution auch in drei Raten zahlen.',
              en: 'Yes, that is a lot of money. You can also pay the deposit in three instalments.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie es noch einmal, bitte. Was möchten Sie über die Kaution wissen?',
          en: 'Say that again, please. What would you like to know about the deposit?',
        },
        hints: ['Nein, wie hoch ist die Kaution?', 'Zwei Monatsmieten, oder?', 'Kann ich die Kaution in Raten zahlen?'],
        sample: 'Nein. Wie hoch ist die Kaution?',
        requires: { any: ['kaution', 'wie hoch', 'zwei', 'nein', 'raten'] },
        teaches: ['g.a2.akk-dat'],
      },

      /* ── 5. Moving in ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Die Wohnung ist ab dem ersten März frei. Wann möchten Sie einziehen?',
          en: 'The flat is available from the first of March. When would you like to move in?',
        },
        accept: [
          {
            match: ['märz', '1. märz', 'ersten märz'],
            reply: {
              de: 'Perfekt, dann passt alles. Der Mieter zieht Ende Februar aus.',
              en: 'Perfect, then everything fits. The tenant is moving out at the end of February.',
            },
          },
          {
            match: ['april', 'mai', 'später', 'juni'],
            reply: {
              de: 'Das geht auch. Dann steht die Wohnung einen Monat leer, das ist kein Problem.',
              en: 'That works too. Then the flat stands empty for a month, that is no problem.',
            },
          },
          {
            match: ['sofort', 'februar', 'nächste woche', 'früher'],
            reply: {
              de: 'So früh geht es leider nicht. Der Mieter wohnt noch bis Ende Februar hier.',
              en: 'Unfortunately that is too early. The tenant is still living here until the end of February.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, wann möchten Sie einziehen? Zum Beispiel: „Ich möchte am ersten März einziehen.“',
          en: 'Sorry, when would you like to move in? For example: "Ich möchte am ersten März einziehen."',
        },
        hints: ['Ich möchte am ersten März einziehen.', 'Ich ziehe lieber im April ein.', 'Geht es auch schon im Februar?'],
        sample: 'Ich möchte am ersten März einziehen.',
        requires: { any: ['märz', 'april', 'mai', 'februar', 'einziehen', 'sofort'] },
        teaches: ['g.a2.wechselpraepositionen'],
      },

      /* ── 6. When something breaks ──────────────────────────────────────── */
      {
        bot: {
          de: 'Im Haus gibt es einen Hausmeister. Wenn etwas kaputt ist, rufen Sie ihn an. Haben Sie dazu eine Frage?',
          en: 'There is a caretaker in the building. If something is broken, you call him. Do you have a question about that?',
        },
        accept: [
          {
            match: ['heizung', 'kaputt', 'schaden', 'reparieren'],
            reply: {
              de: 'Der Hausmeister repariert vieles selbst. Bei der Heizung kommt aber eine Firma.',
              en: 'The caretaker repairs a lot himself. For the heating, though, a company comes.',
            },
          },
          {
            match: ['wer', 'nummer', 'telefonnummer', 'wie heißt'],
            reply: {
              de: 'Der Hausmeister heißt Herr Berger. Seine Nummer hängt unten im Treppenhaus.',
              en: 'The caretaker is called Herr Berger. His number is on the wall downstairs in the stairwell.',
            },
          },
          {
            match: ['nein', 'danke', 'alles klar', 'keine frage'],
            reply: {
              de: 'Gut. Melden Sie mir trotzdem jeden Schaden, ich bin ja der Vermieter.',
              en: 'Fine. Report every fault to me anyway, after all I am the landlord.',
            },
          },
        ],
        fallback: {
          de: 'Das habe ich nicht verstanden. Haben Sie eine Frage zum Hausmeister?',
          en: 'I did not understand that. Do you have a question about the caretaker?',
        },
        hints: ['Wer repariert die Heizung?', 'Wie heißt der Hausmeister?', 'Nein danke, alles klar.'],
        sample: 'Wer repariert die Heizung, wenn sie kaputt ist?',
        requires: { any: ['wer', 'hausmeister', 'heizung', 'nein', 'nummer'] },
        teaches: ['g.a2.akk-dat'],
      },

      /* ── 7. The decision ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Gut, {name}. Möchten Sie die Wohnung nehmen?',
          en: 'Right, {name}. Would you like to take the flat?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'nehme', 'möchte die wohnung'],
            reply: {
              de: 'Sehr schön! Dann schicke ich Ihnen morgen den Mietvertrag per E-Mail.',
              en: 'Very good! Then I will send you the rental contract by e-mail tomorrow.',
            },
          },
          {
            match: ['überlegen', 'bedenkzeit', 'nachdenken', 'melde mich', 'vielleicht'],
            reply: {
              de: 'Natürlich. Sagen Sie mir bitte bis Freitag Bescheid, ich habe noch zwei Termine.',
              en: 'Of course. Please let me know by Friday, I still have two other viewings.',
            },
          },
          {
            match: ['nein', 'leider nicht', 'zu teuer', 'passt nicht'],
            reply: {
              de: 'Schade. Trotzdem danke für Ihr Interesse. Auf Wiedersehen!',
              en: 'What a pity. Thank you for your interest anyway. Goodbye!',
            },
          },
        ],
        fallback: {
          de: 'Also, möchten Sie die Wohnung nehmen — ja oder nein?',
          en: 'So, would you like to take the flat — yes or no?',
        },
        hints: ['Ja, ich nehme die Wohnung.', 'Ich möchte es mir noch überlegen.', 'Nein, leider ist sie zu teuer.'],
        sample: 'Ja, ich nehme die Wohnung gern.',
        requires: { any: ['ja', 'nein', 'nehme', 'überlegen', 'gern'] },
        teaches: ['g.a2.akk-dat'],
      },
    ],
    closing: {
      de: 'Vielen Dank für Ihre Zeit, {name}. Ich melde mich morgen bei Ihnen. Auf Wiedersehen!',
      en: 'Thank you for your time, {name}. I will get in touch with you tomorrow. Goodbye!',
    },
  },
]

export default conversations
