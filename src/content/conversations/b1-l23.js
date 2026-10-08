/**
 * B1 · L23 — Conversation: joining a neighbourhood initiative.
 *
 * Seven turns at the first meeting of "Grünes Viertel": say why you are
 * interested, what annoys you, suggest an idea, choose where to get
 * involved, agree a date, say what you already do, leave your contact.
 *
 * The verbs with fixed prepositions are the backbone — sich interessieren
 * für, sich ärgern über, sich engagieren für — and adjective endings come up
 * naturally (den vielen Müll, mehr öffentliche Mülleimer). Sie throughout.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l23.gruenes-viertel',
    level: 'B1',
    title: 'The neighbourhood initiative',
    titleDe: 'Die Initiative „Grünes Viertel“',
    icon: '🌳',
    setting:
      'A poster in your building invited everyone to the first meeting of “Grünes Viertel”, a group that wants to make the neighbourhood cleaner and greener. You go along. The organiser, Frau Albers, greets you at the door.',
    goal:
      'Say why you came, what bothers you in the neighbourhood, suggest an idea, choose how you want to help and leave your contact details.',
    roleBot: 'Frau Albers, the organiser',
    roleUser: 'You, a resident',
    vocabIds: [
      'v.b1.l23.umwelt',
      'v.b1.l23.muell',
      'v.b1.l23.engagieren',
      'v.b1.l23.aergern',
      'v.b1.l23.trennen',
      'v.b1.l23.sparen',
      'v.b1.l23.umweltfreundlich',
      'v.b1.l23.oeffentlich',
    ],
    grammarIds: ['g.b1.praepositionen', 'g.b1.adjektivendungen'],
    tags: ['praeposition', 'adjektivendungen'],
    turns: [
      /* ── 1. Why you came ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Herzlich willkommen bei „Grünes Viertel“! Schön, dass Sie da sind. Warum interessieren Sie sich für unsere Initiative?',
          en: 'A warm welcome to "Grünes Viertel"! Lovely that you are here. Why are you interested in our initiative?',
        },
        accept: [
          {
            match: ['interessiere mich', 'umwelt', 'umweltschutz'],
            reply: {
              de: 'Das freut mich! Hier sind viele Leute, die genauso denken.',
              en: 'I am pleased to hear it! There are lots of people here who think the same way.',
            },
          },
          {
            match: ['etwas tun', 'viertel', 'nachbarn', 'helfen', 'engagieren'],
            reply: {
              de: 'Genau darum geht es: Wir wollen gemeinsam etwas für unser Viertel tun.',
              en: 'That is exactly the point: we want to do something together for our neighbourhood.',
            },
          },
          {
            match: ['plakat', 'neu', 'kennenlernen', 'neugierig'],
            reply: {
              de: 'Wie schön, dann lernen Sie heute gleich viele Nachbarn kennen.',
              en: 'How nice, then today you will get to know lots of neighbours at once.',
            },
          },
        ],
        fallback: {
          de: 'Was hat Sie zu uns geführt?',
          en: 'What brought you to us?',
        },
        hints: [
          'Ich interessiere mich für Umweltschutz und möchte etwas für unser Viertel tun.',
          'Ich habe das Plakat gesehen und war neugierig.',
          'Ich möchte meine Nachbarn kennenlernen.',
        ],
        sample: 'Ich interessiere mich für Umweltschutz und möchte etwas für unser Viertel tun.',
        requires: { any: ['interessiere', 'umwelt', 'viertel', 'plakat', 'nachbarn', 'helfen'] },
        teaches: ['g.b1.praepositionen'],
      },

      /* ── 2. What annoys you ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Was stört Sie in unserem Viertel am meisten?',
          en: 'What bothers you most in our neighbourhood?',
        },
        accept: [
          {
            match: ['müll', 'dreck', 'schmutzig', 'park'],
            reply: {
              de: 'Das hören wir oft. Besonders am Wochenende sieht der Park schlimm aus.',
              en: 'We hear that a lot. The park looks terrible especially at weekends.',
            },
          },
          {
            match: ['verkehr', 'autos', 'lärm', 'laut', 'parken'],
            reply: {
              de: 'Ja, der Verkehr ist wirklich ein großes Problem — vor allem für die Kinder.',
              en: 'Yes, the traffic really is a big problem — especially for the children.',
            },
          },
          {
            match: ['ärgere mich', 'stört mich', 'finde es schlimm'],
            reply: {
              de: 'Das verstehe ich. Dann sind Sie hier genau richtig.',
              en: 'I understand that. Then you are in exactly the right place.',
            },
          },
        ],
        fallback: {
          de: 'Gibt es etwas, worüber Sie sich hier ärgern?',
          en: 'Is there anything here that annoys you?',
        },
        hints: [
          'Ich ärgere mich über den vielen Müll im Park.',
          'Mich stört der laute Verkehr in unserer Straße.',
          'Es gibt zu viele Autos und zu wenig Grün.',
        ],
        sample: 'Ich ärgere mich über den vielen Müll im Park.',
        requires: { any: ['müll', 'verkehr', 'autos', 'lärm', 'ärgere', 'stört', 'park'] },
        teaches: ['g.b1.praepositionen'],
      },

      /* ── 3. An idea ────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Haben Sie eine Idee, was man dagegen tun könnte?',
          en: 'Do you have an idea what could be done about it?',
        },
        accept: [
          {
            match: ['mülleimer', 'aufräumen', 'sauber', 'aufräumaktion', 'aktion'],
            reply: {
              de: 'Eine Aufräumaktion — sehr gut! So etwas machen wir am liebsten zusammen.',
              en: 'A clean-up — very good! That is the kind of thing we like doing together best.',
            },
          },
          {
            match: ['fahrrad', 'radweg', 'bäume', 'blumen', 'garten'],
            reply: {
              de: 'Mehr Grün und bessere Radwege — das steht schon auf unserer Liste!',
              en: 'More green and better cycle paths — that is already on our list!',
            },
          },
          {
            match: ['könnten', 'sollten', 'vielleicht', 'wie wäre es'],
            reply: {
              de: 'Gute Idee. Schreiben Sie sie gleich auf unsere Ideenwand.',
              en: 'Good idea. Write it straight onto our ideas wall.',
            },
          },
        ],
        fallback: {
          de: 'Was würden Sie vorschlagen?',
          en: 'What would you suggest?',
        },
        hints: [
          'Wir könnten mehr Mülleimer aufstellen und einmal im Monat den Park sauber machen.',
          'Wie wäre es mit einer Aufräumaktion am Samstag?',
          'Wir brauchen mehr Bäume und einen sicheren Radweg.',
        ],
        sample: 'Wir könnten mehr Mülleimer aufstellen und einmal im Monat eine Aufräumaktion im Park machen.',
        requires: { any: ['könnten', 'sollten', 'mülleimer', 'aktion', 'bäume', 'radweg', 'wie wäre'] },
        teaches: ['g.b1.adjektivendungen'],
      },

      /* ── 4. Where you would get involved ───────────────────────────────── */
      {
        bot: {
          de: 'Wir planen auch einen Reparatur-Abend und einen Gemeinschaftsgarten. Wofür würden Sie sich gern engagieren?',
          en: 'We are also planning a repair evening and a community garden. What would you like to get involved in?',
        },
        accept: [
          {
            match: ['aufräumaktion', 'park', 'müll'],
            reply: {
              de: 'Super, dann gehören Sie zum Team „Sauberer Park“.',
              en: 'Great, then you belong to the "Clean Park" team.',
            },
          },
          {
            match: ['reparatur', 'reparieren', 'fahrräder'],
            reply: {
              de: 'Prima, wir suchen noch Leute, die gern reparieren!',
              en: 'Excellent, we are still looking for people who like repairing things!',
            },
          },
          {
            match: ['garten', 'pflanzen', 'blumen', 'gemüse'],
            reply: {
              de: 'Wunderbar, der Garten braucht viele Hände.',
              en: 'Wonderful, the garden needs lots of hands.',
            },
          },
          {
            match: ['würde mich', 'engagieren', 'mitmachen', 'helfen'],
            reply: {
              de: 'Schön, dass Sie mitmachen wollen. Wir finden bestimmt die richtige Aufgabe für Sie.',
              en: 'Nice that you want to join in. We will surely find the right task for you.',
            },
          },
        ],
        fallback: {
          de: 'Bei welchem Projekt möchten Sie mitmachen?',
          en: 'Which project would you like to join?',
        },
        hints: [
          'Ich würde mich gern für die Aufräumaktion im Park engagieren.',
          'Ich repariere gern Fahrräder — ich helfe beim Reparatur-Abend.',
          'Ich würde gern im Garten mitmachen.',
        ],
        sample: 'Ich würde mich gern für die Aufräumaktion im Park engagieren.',
        requires: { any: ['engagieren', 'aufräumaktion', 'reparatur', 'garten', 'mitmachen', 'helfe'] },
        teaches: ['g.b1.praepositionen'],
      },

      /* ── 5. A date ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Wir treffen uns immer am ersten Samstag im Monat um zehn Uhr. Haben Sie da Zeit?',
          en: 'We always meet on the first Saturday of the month at ten o’clock. Are you free then?',
        },
        accept: [
          {
            match: ['ja', 'zeit', 'passt', 'klappt', 'gut'],
            reply: {
              de: 'Sehr schön, dann sehen wir uns am nächsten ersten Samstag!',
              en: 'Very nice, then we will see each other on the next first Saturday!',
            },
          },
          {
            match: ['nein', 'leider', 'arbeite', 'nicht'],
            reply: {
              de: 'Kein Problem, Sie können auch einfach kommen, wenn es bei Ihnen passt.',
              en: 'No problem, you can also just come whenever it suits you.',
            },
          },
        ],
        fallback: {
          de: 'Passt Ihnen der Samstagvormittag?',
          en: 'Does Saturday morning suit you?',
        },
        hints: ['Ja, am Samstag habe ich meistens Zeit.', 'Leider arbeite ich oft am Samstag.'],
        sample: 'Ja, am Samstagvormittag habe ich meistens Zeit.',
        requires: { any: ['ja', 'zeit', 'passt', 'leider', 'nein'] },
        teaches: ['g.b1.adjektivendungen'],
      },

      /* ── 6. What you already do ────────────────────────────────────────── */
      {
        bot: {
          de: 'Zum Schluss interessiert mich noch: Was tun Sie selbst im Alltag für die Umwelt?',
          en: 'Finally I am curious: what do you do for the environment in everyday life?',
        },
        accept: [
          {
            match: ['fahrrad', 'bus', 'bahn', 'öffentlich', 'zu fuß'],
            reply: {
              de: 'Toll — öffentliche Verkehrsmittel und das Fahrrad sind die beste Lösung in der Stadt.',
              en: 'Great — public transport and the bicycle are the best solution in the city.',
            },
          },
          {
            match: ['trenne', 'müll', 'recycl'],
            reply: {
              de: 'Mülltrennung ist wichtig. Das machen leider nicht alle im Haus!',
              en: 'Sorting rubbish is important. Unfortunately not everyone in the building does it!',
            },
          },
          {
            match: ['spare', 'energie', 'strom', 'weniger', 'kaufe', 'fleisch'],
            reply: {
              de: 'Sehr gut. Kleine Dinge machen am Ende einen großen Unterschied.',
              en: 'Very good. Small things make a big difference in the end.',
            },
          },
        ],
        fallback: {
          de: 'Gibt es etwas, das Sie schon für die Umwelt tun?',
          en: 'Is there anything you already do for the environment?',
        },
        hints: [
          'Ich fahre mit dem Fahrrad und trenne meinen Müll.',
          'Ich spare Energie und kaufe weniger Plastik.',
          'Ich fahre fast immer mit öffentlichen Verkehrsmitteln.',
        ],
        sample: 'Ich fahre mit dem Fahrrad zur Arbeit und trenne meinen Müll.',
        requires: { any: ['fahrrad', 'trenne', 'spare', 'bus', 'öffentlich', 'weniger'] },
        teaches: ['g.b1.adjektivendungen'],
      },

      /* ── 7. Contact details ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Darf ich Sie auf unsere Liste schreiben, damit wir Sie über die nächsten Termine informieren können?',
          en: 'May I put you on our list so that we can let you know about the next dates?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'natürlich', 'klar'],
            reply: {
              de: 'Danke! Dann bekommen Sie unseren Newsletter einmal im Monat.',
              en: 'Thank you! Then you will get our newsletter once a month.',
            },
          },
          {
            match: ['lieber nicht', 'nein', 'keine liste'],
            reply: {
              de: 'Kein Problem. Die Termine hängen auch immer im Treppenhaus.',
              en: 'No problem. The dates are always posted in the stairwell too.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie über die nächsten Termine informiert werden?',
          en: 'Would you like to be informed about the next dates?',
        },
        hints: ['Ja, gern. Meine E-Mail-Adresse ist …', 'Lieber nicht, aber ich komme bestimmt wieder.'],
        sample: 'Ja, gern. Meine E-Mail-Adresse ist {name}@beispiel.de.',
        requires: { any: ['ja', 'gern', 'natürlich', 'nein', 'lieber nicht'] },
        teaches: ['g.b1.praepositionen'],
      },
    ],
    closing: {
      de: 'Schön, dass Sie dabei sind, {name}! Bis zum ersten Samstag.',
      en: 'Lovely to have you on board, {name}! See you on the first Saturday.',
    },
  },
]

export default conversations
