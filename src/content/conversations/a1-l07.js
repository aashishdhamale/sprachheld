/**
 * A1 · L07 — Shopping and money
 *
 * One Saturday errand in six turns: order at the bakery, pay there, then walk
 * into the supermarket, find a product, decide on a quantity and get through
 * the till. The learner has to produce ein/eine, a quantity word, a price
 * question and one negation (Ich brauche keine Tüte).
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l07.einkaufen',
    level: 'A1',
    title: 'At the bakery and the supermarket',
    titleDe: 'In der Bäckerei und im Supermarkt',
    icon: '🛒',
    setting:
      'Saturday morning. You go to the bakery first, then to the supermarket. The same friendly voice serves you in both shops.',
    goal: 'Ask for what you want, ask what it costs, choose a quantity and pay at the till.',
    roleBot: 'The shop assistant — first in the bakery, then at the supermarket till',
    roleUser: 'You, doing the Saturday shopping',
    vocabIds: [
      'v.a1.l07.supermarkt',
      'v.a1.l07.baeckerei',
      'v.a1.l07.kasse',
      'v.a1.l07.preis',
      'v.a1.l07.euro',
      'v.a1.l07.kaufen',
      'v.a1.l07.kosten',
      'v.a1.l07.brauchen',
      'v.a1.l07.bezahlen',
      'v.a1.l07.teuer',
      'v.a1.l07.packung',
      'v.a1.l07.tuete',
    ],
    grammarIds: ['g.a1.ein', 'g.a1.negation'],
    tags: ['artikel', 'negation'],
    turns: [
      /* ── 1. Ordering at the bakery ─────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Morgen! Willkommen in der Bäckerei. Was möchten Sie?',
          en: 'Good morning! Welcome to the bakery. What would you like?',
        },
        accept: [
          {
            match: ['brötchen', 'broetchen'],
            reply: {
              de: 'Brötchen, sehr gern. Die sind heute noch ganz warm.',
              en: 'Rolls, of course. They are still completely warm today.',
            },
          },
          {
            match: ['kuchen'],
            reply: {
              de: 'Kuchen haben wir auch. Ein Stück kostet zwei Euro.',
              en: 'We have cake too. One piece costs two euros.',
            },
          },
          {
            match: ['brot', 'möchte', 'moechte', 'nehme'],
            reply: {
              de: 'Ein Brot, sehr gern. Das Brot hier ist heute ganz frisch.',
              en: 'A loaf of bread, of course. The bread here is very fresh today.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das verstehe ich nicht. Sagen Sie zum Beispiel: „Ich möchte ein Brot, bitte."',
          en: 'Sorry, I do not understand. Say for example: "Ich möchte ein Brot, bitte."',
        },
        hints: ['Ich möchte ein Brot, bitte.', 'Ich nehme zwei Brötchen.', 'Haben Sie Kuchen?'],
        sample: 'Ich möchte ein Brot, bitte.',
        requires: { any: ['möchte', 'moechte', 'nehme', 'brot', 'brötchen', 'broetchen', 'kuchen'] },
        teaches: ['g.a1.ein'],
      },

      /* ── 2. Anything else? ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Sehr gern. Sonst noch etwas, {name}?',
          en: 'Certainly. Anything else, {name}?',
        },
        accept: [
          {
            match: ['nein', 'das ist alles', 'nichts mehr'],
            reply: {
              de: 'Alles klar. Dann sind wir fertig.',
              en: 'All right. Then we are done.',
            },
          },
          {
            match: ['wie viel', 'was kostet', 'kostet'],
            reply: {
              de: 'Das Brot kostet zwei Euro achtzig, ein Brötchen vierzig Cent.',
              en: 'The bread costs two euros eighty, a roll forty cents.',
            },
          },
          {
            match: ['ja', 'auch', 'noch'],
            reply: {
              de: 'Gern, ich lege es dazu. Das ist dann ein bisschen mehr.',
              en: 'Gladly, I will add it. That will be a little more, then.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie noch etwas — ja oder nein?',
          en: 'Would you like anything else — yes or no?',
        },
        hints: ['Nein, danke. Das ist alles.', 'Ja, ich nehme auch zwei Brötchen.', 'Wie viel kostet das Brot?'],
        sample: 'Nein, danke. Das ist alles.',
        requires: { any: ['nein', 'ja', 'danke', 'kostet', 'wie viel'] },
      },

      /* ── 3. Paying at the bakery ───────────────────────────────────────── */
      {
        bot: {
          de: 'Das macht drei Euro zwanzig. Bezahlen Sie bar oder mit Karte?',
          en: 'That comes to three euros twenty. Are you paying in cash or by card?',
        },
        accept: [
          {
            match: ['karte'],
            reply: {
              de: 'Mit Karte, sehr gern. Bitte hier auf das Gerät.',
              en: 'By card, of course. On the reader here, please.',
            },
          },
          {
            match: ['bar', 'kleingeld', 'euro'],
            reply: {
              de: 'Bar, gut. Hier sind achtzig Cent zurück. Vielen Dank!',
              en: 'Cash, good. Here is eighty cents back. Thank you very much!',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — bar oder mit Karte?',
          en: 'Sorry — cash or card?',
        },
        hints: ['Mit Karte, bitte.', 'Bar, bitte.', 'Ich bezahle bar.'],
        sample: 'Mit Karte, bitte.',
        requires: { any: ['bar', 'karte'] },
      },

      /* ── 4. Finding something in the supermarket ───────────────────────── */
      {
        bot: {
          de: 'So, jetzt im Supermarkt. Guten Tag! Suchen Sie etwas?',
          en: 'Right, now at the supermarket. Hello! Are you looking for something?',
        },
        accept: [
          {
            match: ['kaffee'],
            reply: {
              de: 'Kaffee finden Sie hinten links. Wir haben zehn Sorten.',
              en: 'You will find coffee at the back on the left. We have ten kinds.',
            },
          },
          {
            match: ['wasser', 'flasche'],
            reply: {
              de: 'Wasser ist ganz vorne. Eine Flasche kostet neunundneunzig Cent.',
              en: 'Water is right at the front. A bottle costs ninety-nine cents.',
            },
          },
          {
            match: ['milch', 'butter', 'käse', 'kaese'],
            reply: {
              de: 'Ja, das haben wir natürlich. Es ist dort rechts.',
              en: 'Yes, of course we have that. It is over there on the right.',
            },
          },
        ],
        fallback: {
          de: 'Was suchen Sie denn? Fragen Sie zum Beispiel: „Haben Sie Kaffee?"',
          en: 'What are you looking for? Ask for example: "Haben Sie Kaffee?"',
        },
        hints: ['Haben Sie Kaffee?', 'Ich suche Wasser.', 'Wo ist die Milch?'],
        sample: 'Haben Sie Kaffee?',
        requires: { any: ['haben sie', 'ich suche', 'wo ist', 'kaffee', 'wasser', 'milch'] },
      },

      /* ── 5. How much of it ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Eine Packung Kaffee kostet vier Euro neunzig. Wie viele Packungen möchten Sie?',
          en: 'A packet of coffee costs four euros ninety. How many packets would you like?',
        },
        accept: [
          {
            match: ['teuer', 'keine', 'zu viel'],
            reply: {
              de: 'Zu teuer? Kein Problem. Dieser Kaffee hier kostet nur drei Euro.',
              en: 'Too expensive? No problem. This coffee here only costs three euros.',
            },
          },
          {
            match: ['zwei', 'drei', 'vier'],
            reply: {
              de: 'Sehr gern. Zwei Packungen kosten neun Euro achtzig.',
              en: 'Of course. Two packets cost nine euros eighty.',
            },
          },
          {
            match: ['eine packung', 'nur eine', 'nehme eine', 'eins'],
            reply: {
              de: 'Eine Packung, gut. Das macht vier Euro neunzig.',
              en: 'One packet, good. That comes to four euros ninety.',
            },
          },
        ],
        fallback: {
          de: 'Wie viele Packungen möchten Sie? Zum Beispiel: „Ich nehme zwei Packungen."',
          en: 'How many packets would you like? For example: "Ich nehme zwei Packungen."',
        },
        hints: ['Ich nehme zwei Packungen.', 'Nur eine Packung, bitte.', 'Das ist zu teuer.'],
        sample: 'Ich nehme zwei Packungen.',
        requires: { any: ['eine', 'zwei', 'drei', 'nehme', 'teuer'] },
        teaches: ['g.a1.ein'],
      },

      /* ── 6. At the till ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'So, an der Kasse. Das macht zusammen zwölf Euro fünfzig. Brauchen Sie eine Tüte?',
          en: 'Right, at the till. That comes to twelve euros fifty altogether. Do you need a bag?',
        },
        accept: [
          {
            match: ['nein', 'keine', 'nicht'],
            reply: {
              de: 'Sehr gut, {name}. Eine Tüte kostet hier auch zwanzig Cent extra.',
              en: 'Very good, {name}. A bag here costs twenty cents extra anyway.',
            },
          },
          {
            match: ['ja', 'bitte eine', 'eine tüte', 'eine tuete'],
            reply: {
              de: 'Eine Tüte, gern. Die kostet zwanzig Cent extra.',
              en: 'A bag, sure. That costs twenty cents extra.',
            },
          },
          {
            match: ['karte', 'bar'],
            reply: {
              de: 'Beides geht bei uns, {name}. Und die Tüte? Ja oder nein?',
              en: 'We take both, {name}. And the bag? Yes or no?',
            },
          },
        ],
        fallback: {
          de: 'Brauchen Sie eine Tüte — ja oder nein?',
          en: 'Do you need a bag — yes or no?',
        },
        hints: ['Nein, danke. Ich brauche keine Tüte.', 'Ja, eine Tüte, bitte.', 'Ich bezahle mit Karte.'],
        sample: 'Nein, danke. Ich brauche keine Tüte.',
        requires: { any: ['ja', 'nein', 'tüte', 'tuete', 'karte', 'bar'] },
        teaches: ['g.a1.negation'],
      },
    ],
    closing: {
      de: 'Super, {name}! Ihr Einkauf ist fertig. Bis zum nächsten Mal!',
      en: 'Great, {name}! Your shopping is done. See you next time!',
    },
  },
]

export default conversations
