/**
 * A1 · L06 — Lunch in a German restaurant.
 *
 * Six turns that follow the real order of a meal: drink, food, bread, how it
 * tastes, the bill, goodbye. Every branch keeps the learner inside the
 * accusative (einen Kaffee, den Salat, die Rechnung) and inside the present
 * tense — plus möchte, the one polite form a beginner needs everywhere.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l06.mittagessen',
    level: 'A1',
    title: 'Lunch at the restaurant',
    titleDe: 'Mittagessen im Restaurant',
    icon: '🍽️',
    setting:
      'One o’clock, a small restaurant near the office. You sit down, and the waiter comes to your table.',
    goal: 'Order a drink and a main course, say how it tastes, and ask for the bill.',
    roleBot: 'Herr Sommer, the waiter',
    roleUser: 'You, the guest',
    vocabIds: [
      'v.a1.l06.kaffee',
      'v.a1.l06.wasser',
      'v.a1.l06.saft',
      'v.a1.l06.suppe',
      'v.a1.l06.salat',
      'v.a1.l06.brot',
      'v.a1.l06.broetchen',
      'v.a1.l06.speisekarte',
      'v.a1.l06.rechnung',
      'v.a1.l06.bestellen',
      'v.a1.l06.moechten',
      'v.a1.l06.schmecken',
      'v.a1.l06.lecker',
    ],
    grammarIds: ['g.a1.akkusativ', 'g.a1.artikel'],
    tags: ['akkusativ', 'artikel'],
    turns: [
      /* ── 1. The drink ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag und herzlich willkommen! Möchten Sie schon etwas trinken?',
          en: 'Good afternoon and welcome! Would you like something to drink already?',
        },
        accept: [
          {
            match: ['kaffee'],
            reply: {
              de: 'Sehr gern, einen Kaffee. Hier ist die Speisekarte, {name}.',
              en: 'With pleasure, one coffee. Here is the menu, {name}.',
            },
          },
          {
            match: ['wasser'],
            reply: {
              de: 'Ein Wasser, natürlich. Hier ist die Speisekarte, {name}.',
              en: 'A water, of course. Here is the menu, {name}.',
            },
          },
          {
            match: ['saft', 'tee', 'cola'],
            reply: {
              de: 'Gern! Das bringe ich sofort. Und hier ist die Speisekarte, {name}.',
              en: 'Gladly! I will bring that right away. And here is the menu, {name}.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das verstehe ich nicht. Was möchten Sie trinken? Zum Beispiel: „Ich möchte einen Kaffee.“',
          en: 'Sorry, I do not understand. What would you like to drink? For example: "Ich möchte einen Kaffee."',
        },
        hints: ['Ich möchte einen Kaffee.', 'Ein Wasser, bitte.', 'Ich nehme einen Saft.'],
        sample: 'Ich möchte einen Kaffee, bitte.',
        requires: { any: ['kaffee', 'wasser', 'saft', 'tee'] },
        teaches: ['g.a1.akkusativ'],
      },

      /* ── 2. The food ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und was möchten Sie essen? Die Suppe und der Salat sind heute sehr gut.',
          en: 'And what would you like to eat? The soup and the salad are very good today.',
        },
        accept: [
          {
            match: ['suppe'],
            reply: {
              de: 'Eine gute Wahl! Die Suppe ist heute mit Gemüse.',
              en: 'A good choice! The soup has vegetables in it today.',
            },
          },
          {
            match: ['salat'],
            reply: {
              de: 'Sehr gern. Der Salat kommt mit Käse und Brot.',
              en: 'Very well. The salad comes with cheese and bread.',
            },
          },
          {
            match: ['fleisch', 'nudeln', 'hauptgericht'],
            reply: {
              de: 'Natürlich, das Hauptgericht. Das dauert ungefähr zehn Minuten.',
              en: 'Of course, the main course. That takes about ten minutes.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich verstehe das nicht. Möchten Sie die Suppe oder den Salat?',
          en: 'Sorry, I do not understand. Would you like the soup or the salad?',
        },
        hints: ['Ich nehme die Suppe.', 'Ich möchte den Salat, bitte.', 'Ich bestelle das Fleisch.'],
        sample: 'Ich nehme den Salat, bitte.',
        requires: { any: ['suppe', 'salat', 'fleisch', 'nudeln'] },
        teaches: ['g.a1.akkusativ'],
      },

      /* ── 3. Bread with it? ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Möchten Sie auch Brot oder ein Brötchen dazu?',
          en: 'Would you also like bread or a bread roll with it?',
        },
        accept: [
          {
            match: ['brot'],
            reply: {
              de: 'Sehr gern, frisches Brot. Das kommt sofort.',
              en: 'Very well, fresh bread. That is coming right away.',
            },
          },
          {
            match: ['brötchen', 'brotchen', 'ja'],
            reply: {
              de: 'Gern, ich bringe ein Brötchen mit Butter.',
              en: 'Gladly, I will bring a bread roll with butter.',
            },
          },
          {
            match: ['nein', 'danke', 'kein'],
            reply: {
              de: 'Kein Problem, {name}. Dann kommt gleich das Essen.',
              en: 'No problem, {name}. Then the food is coming in a moment.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie Brot dazu — ja oder nein?',
          en: 'Would you like bread with it — yes or no?',
        },
        hints: ['Ja, ein Brötchen, bitte.', 'Ja, ich möchte Brot.', 'Nein, danke.'],
        sample: 'Ja, ein Brötchen, bitte.',
        requires: { any: ['brot', 'brötchen', 'brotchen', 'ja', 'nein', 'danke'] },
        teaches: ['g.a1.artikel'],
      },

      /* ── 4. How does it taste? ─────────────────────────────────────────── */
      {
        bot: {
          de: 'So, hier ist Ihr Essen. Guten Appetit! Schmeckt das Essen?',
          en: 'Here is your food. Enjoy your meal! Does the food taste good?',
        },
        accept: [
          {
            match: ['nicht', 'nein', 'leider'],
            reply: {
              de: 'Oh, das tut mir leid. Möchten Sie etwas anderes?',
              en: 'Oh, I am sorry. Would you like something else?',
            },
          },
          {
            match: ['lecker', 'super', 'sehr gut'],
            reply: {
              de: 'Das freut mich sehr, {name}! Unser Koch kocht jeden Tag frisch.',
              en: 'That makes me very happy, {name}! Our chef cooks fresh every day.',
            },
          },
          {
            match: ['ja', 'gut', 'schmeckt'],
            reply: {
              de: 'Schön! Die Suppe und der Salat sind heute wirklich frisch.',
              en: 'Lovely! The soup and the salad really are fresh today.',
            },
          },
        ],
        fallback: {
          de: 'Schmeckt das Essen? Zum Beispiel: „Ja, es schmeckt sehr lecker.“',
          en: 'Does the food taste good? For example: "Ja, es schmeckt sehr lecker."',
        },
        hints: ['Ja, es schmeckt sehr lecker.', 'Das Essen ist sehr gut.', 'Nein, es schmeckt nicht so gut.'],
        sample: 'Ja, es schmeckt sehr lecker.',
        requires: { any: ['schmeckt', 'lecker', 'gut', 'nicht'] },
        teaches: ['g.a1.akkusativ'],
      },

      /* ── 5. The bill ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Möchten Sie noch einen Kaffee, oder bringe ich die Rechnung?',
          en: 'Would you like another coffee, or shall I bring the bill?',
        },
        accept: [
          {
            match: ['rechnung', 'zahlen', 'bezahlen'],
            reply: {
              de: 'Natürlich. Ich bringe die Rechnung sofort.',
              en: 'Of course. I will bring the bill right away.',
            },
          },
          {
            match: ['kaffee'],
            reply: {
              de: 'Gern, noch einen Kaffee. Danach bringe ich die Rechnung.',
              en: 'Gladly, another coffee. After that I will bring the bill.',
            },
          },
          {
            match: ['nein', 'danke'],
            reply: {
              de: 'Alles klar, {name}. Dann bringe ich jetzt die Rechnung.',
              en: 'All right, {name}. Then I will bring the bill now.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — noch einen Kaffee, oder möchten Sie die Rechnung?',
          en: 'Sorry — another coffee, or would you like the bill?',
        },
        hints: ['Die Rechnung, bitte.', 'Ich möchte bezahlen.', 'Ja, noch einen Kaffee, bitte.'],
        sample: 'Die Rechnung, bitte.',
        requires: { any: ['rechnung', 'zahlen', 'bezahlen', 'kaffee', 'nein'] },
        teaches: ['g.a1.akkusativ'],
      },

      /* ── 6. Goodbye ────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Hier ist die Rechnung: zwölf Euro achtzig. Kommen Sie bald wieder?',
          en: 'Here is the bill: twelve euros eighty. Will you come again soon?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'natürlich', 'naturlich'],
            reply: {
              de: 'Das freut mich! Bis bald, {name}.',
              en: 'That makes me happy! See you soon, {name}.',
            },
          },
          {
            match: ['vielleicht', 'nächste', 'nachste', 'morgen', 'woche'],
            reply: {
              de: 'Sehr schön. Von Montag bis Freitag haben wir ein Mittagsmenü.',
              en: 'Very nice. From Monday to Friday we have a set lunch.',
            },
          },
          {
            match: ['danke', 'tschüss', 'tschuss', 'wiedersehen'],
            reply: {
              de: 'Ich danke Ihnen, {name}. Einen schönen Tag noch!',
              en: 'Thank you, {name}. Have a nice day!',
            },
          },
        ],
        fallback: {
          de: 'Kommen Sie bald wieder? Zum Beispiel: „Ja, sehr gern!“',
          en: 'Will you come again soon? For example: "Ja, sehr gern!"',
        },
        hints: ['Ja, sehr gern!', 'Ja, das Essen ist super.', 'Vielleicht nächste Woche.'],
        sample: 'Ja, sehr gern. Das Essen ist lecker.',
        requires: { any: ['ja', 'gern', 'vielleicht', 'danke'] },
        teaches: ['g.a1.artikel'],
      },
    ],
    closing: {
      de: 'Sehr gut gemacht, {name}! Sie können jetzt im Restaurant bestellen und bezahlen.',
      en: 'Very well done, {name}! You can now order and pay in a restaurant.',
    },
  },
]

export default conversations
