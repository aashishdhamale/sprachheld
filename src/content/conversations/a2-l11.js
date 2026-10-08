/**
 * A2 · L11 — Conversation: booking a hotel room on the phone.
 *
 * The learner has to get through a real service call: say what they want,
 * give the dates, choose the room, react to the price, decide about breakfast,
 * say how they arrive (mit dem Zug / mit dem Auto — dative), give a name and
 * confirm the booking. Every turn branches three ways, so a yes, a no and a
 * question all lead somewhere different.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l11.zimmer-buchen',
    level: 'A2',
    title: 'Booking a room by phone',
    titleDe: 'Ein Zimmer am Telefon buchen',
    icon: '☎️',
    setting:
      'You are planning a long weekend in Hamburg. You call the Hotel Seeblick, and a receptionist picks up after two rings.',
    goal: 'Book a room: say the dates, choose the room type, react to the price, settle the breakfast and confirm.',
    roleBot: 'Frau Krüger at the hotel reception',
    roleUser: 'You, the guest on the phone',
    vocabIds: [
      'v.a2.l11.hotel',
      'v.a2.l11.buchen',
      'v.a2.l11.reservieren',
      'v.a2.l11.buchung',
      'v.a2.l11.einzelzimmer',
      'v.a2.l11.doppelzimmer',
      'v.a2.l11.uebernachtung',
      'v.a2.l11.aufenthalt',
      'v.a2.l11.reise',
      'v.a2.l11.flug',
    ],
    grammarIds: ['g.a2.perfekt', 'g.a2.dativ'],
    tags: ['dativ', 'perfekt'],
    turns: [
      /* ── 1. What do you want? ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Hotel Seeblick, Krüger am Apparat. Guten Tag! Was kann ich für Sie tun?',
          en: 'Hotel Seeblick, Krüger speaking. Hello! What can I do for you?',
        },
        accept: [
          {
            match: ['einzelzimmer'],
            reply: {
              de: 'Ein Einzelzimmer — das habe ich notiert.',
              en: 'A single room — I have made a note of that.',
            },
          },
          {
            match: ['doppelzimmer'],
            reply: {
              de: 'Ein Doppelzimmer — sehr gern.',
              en: 'A double room — with pleasure.',
            },
          },
          {
            match: ['zimmer', 'buchen', 'reservieren', 'übernachten'],
            reply: {
              de: 'Gern, wir haben noch Zimmer frei.',
              en: 'Certainly, we still have rooms available.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich habe Sie nicht verstanden. Möchten Sie ein Zimmer buchen? Zum Beispiel: „Ich möchte ein Doppelzimmer reservieren.“',
          en: 'Sorry, I did not understand you. Would you like to book a room? For example: "Ich möchte ein Doppelzimmer reservieren."',
        },
        hints: [
          'Ich möchte ein Zimmer reservieren.',
          'Ich hätte gern ein Einzelzimmer.',
          'Haben Sie noch ein Doppelzimmer frei?',
        ],
        sample: 'Guten Tag! Ich möchte ein Doppelzimmer reservieren.',
        requires: { any: ['zimmer', 'buchen', 'reservieren'] },
        teaches: ['g.a2.perfekt'],
      },

      /* ── 2. The dates ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Für welche Tage brauchen Sie das Zimmer?',
          en: 'Which days do you need the room for?',
        },
        accept: [
          {
            match: ['eine nacht', 'eine übernachtung', 'einen tag', 'nur einen'],
            reply: {
              de: 'Nur eine Übernachtung — das geht auch. Da ist noch alles frei.',
              en: 'Only one night — that works too. Everything is still free then.',
            },
          },
          {
            match: ['zwei nächte', 'zwei tage', 'freitag', 'wochenende'],
            reply: {
              de: 'Zwei Nächte, sehr gut. Am Wochenende ist es bei uns immer voll, aber ich habe noch ein Zimmer.',
              en: 'Two nights, very good. We are always full at the weekend, but I still have one room.',
            },
          },
          {
            match: ['drei', 'vier', 'fünf', 'eine woche'],
            reply: {
              de: 'Länger ist kein Problem. Ab drei Übernachtungen bekommen Sie sogar einen kleinen Rabatt.',
              en: 'Longer is no problem. From three nights on you even get a small discount.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, für wie viele Nächte denn? Zum Beispiel: „Von Freitag bis Sonntag, also zwei Nächte.“',
          en: 'Sorry, for how many nights? For example: "Von Freitag bis Sonntag, also zwei Nächte."',
        },
        hints: ['Von Freitag bis Sonntag, bitte.', 'Für zwei Nächte.', 'Ich brauche das Zimmer eine Woche.'],
        sample: 'Von Freitag bis Sonntag, also zwei Nächte.',
        requires: { any: ['nacht', 'nächte', 'tag', 'tage', 'woche', 'bis'] },
      },

      /* ── 3. Which room? ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und möchten Sie ein Einzelzimmer oder ein Doppelzimmer?',
          en: 'And would you like a single room or a double room?',
        },
        accept: [
          {
            match: ['einzelzimmer', 'allein', 'eine person'],
            reply: {
              de: 'Gut, ein Einzelzimmer. Das Zimmer zum Garten ist sehr ruhig.',
              en: 'Good, a single room. The room facing the garden is very quiet.',
            },
          },
          {
            match: ['doppelzimmer', 'zwei personen', 'meine frau', 'mein mann', 'wir'],
            reply: {
              de: 'Gut, ein Doppelzimmer. Es hat ein großes Bett und einen Balkon.',
              en: 'Good, a double room. It has a large bed and a balcony.',
            },
          },
          {
            match: ['ruhig', 'balkon', 'bad', 'dusche', 'egal'],
            reply: {
              de: 'Dann nehme ich Zimmer 204. Es ist ruhig, hat eine Dusche und einen Balkon.',
              en: 'Then I will take room 204. It is quiet, it has a shower and a balcony.',
            },
          },
        ],
        fallback: {
          de: 'Also, Einzelzimmer oder Doppelzimmer? Sagen Sie einfach: „Ein Doppelzimmer, bitte.“',
          en: 'So, single room or double room? Just say: "Ein Doppelzimmer, bitte."',
        },
        hints: ['Ein Einzelzimmer, bitte.', 'Ich hätte gern ein Doppelzimmer.', 'Ein ruhiges Zimmer mit Dusche, bitte.'],
        sample: 'Ich hätte gern ein Doppelzimmer mit Balkon.',
        requires: { any: ['einzelzimmer', 'doppelzimmer', 'zimmer'] },
      },

      /* ── 4. The price ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Das Doppelzimmer kostet 98 Euro pro Nacht, das Einzelzimmer 79 Euro. Ist das für Sie in Ordnung?',
          en: 'The double room costs 98 euros per night, the single room 79 euros. Is that all right for you?',
        },
        accept: [
          {
            match: ['teuer', 'günstiger', 'billiger', 'zu viel', 'weniger'],
            reply: {
              de: 'Das verstehe ich. Ab Sonntag kostet dasselbe Zimmer nur 85 Euro.',
              en: 'I understand that. From Sunday on the same room only costs 85 euros.',
            },
          },
          {
            match: ['frühstück', 'inklusive', 'dabei', 'extra'],
            reply: {
              de: 'Gute Frage — dazu komme ich gleich.',
              en: 'Good question — I will come to that in a moment.',
            },
          },
          {
            match: ['ja', 'in ordnung', 'gut', 'okay', 'passt', 'einverstanden'],
            reply: {
              de: 'Sehr schön. Dann nehme ich das so in die Buchung auf.',
              en: 'Lovely. Then I will put it into the booking like that.',
            },
          },
        ],
        fallback: {
          de: 'Ist der Preis für Sie in Ordnung — ja oder nein?',
          en: 'Is the price all right for you — yes or no?',
        },
        hints: ['Ja, das ist in Ordnung.', 'Das ist mir leider zu teuer.', 'Ist das Frühstück dabei?'],
        sample: 'Ja, 98 Euro pro Nacht sind in Ordnung.',
        requires: { any: ['ja', 'nein', 'ordnung', 'teuer', 'frühstück'] },
      },

      /* ── 5. Breakfast ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Möchten Sie das Frühstück dazu? Es kostet 12 Euro pro Person.',
          en: 'Would you like breakfast as well? It costs 12 euros per person.',
        },
        accept: [
          {
            match: ['nein', 'ohne', 'kein', 'brauche nicht'],
            reply: {
              de: 'Kein Problem, dann ohne Frühstück. Gegenüber vom Hotel gibt es ein gutes Café.',
              en: 'No problem, then without breakfast. Opposite the hotel there is a good café.',
            },
          },
          {
            match: ['wann', 'wie lange', 'wo', 'was kostet', 'wie viel'],
            reply: {
              de: 'Es gibt Frühstück von sieben bis halb elf im Restaurant, für 12 Euro pro Person.',
              en: 'Breakfast is served from seven until half past ten in the restaurant, for 12 euros per person.',
            },
          },
          {
            match: ['ja', 'gern', 'bitte', 'mit frühstück'],
            reply: {
              de: 'Sehr gern. Das Frühstück gibt es von sieben bis halb elf im Restaurant.',
              en: 'With pleasure. Breakfast is served from seven until half past ten in the restaurant.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie Frühstück dazu — ja oder nein?',
          en: 'Would you like breakfast as well — yes or no?',
        },
        hints: ['Ja, mit Frühstück, bitte.', 'Nein danke, ohne Frühstück.', 'Wann gibt es Frühstück?'],
        sample: 'Ja, mit Frühstück, bitte.',
        requires: { any: ['ja', 'nein', 'frühstück', 'ohne'] },
      },

      /* ── 6. How do you get here? ───────────────────────────────────────── */
      {
        bot: {
          de: 'Kommen Sie mit dem Auto oder mit dem Zug, {name}?',
          en: 'Are you coming by car or by train, {name}?',
        },
        accept: [
          {
            match: ['auto', 'wagen', 'parkplatz', 'parken'],
            reply: {
              de: 'Dann reserviere ich Ihnen einen Parkplatz. Er kostet 12 Euro pro Tag.',
              en: 'Then I will reserve a parking space for you. It costs 12 euros a day.',
            },
          },
          {
            match: ['flugzeug', 'flug', 'flughafen', 'fliege'],
            reply: {
              de: 'Vom Flughafen fahren Sie am besten mit dem Zug bis zum Hauptbahnhof.',
              en: 'From the airport it is best to take the train to the main station.',
            },
          },
          {
            match: ['zug', 'bahn', 'bahnhof', 'straßenbahn'],
            reply: {
              de: 'Sehr gut. Vom Hauptbahnhof fahren Sie mit der Straßenbahn Linie 2 direkt zu uns.',
              en: 'Very good. From the main station take tram line 2 straight to us.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — kommen Sie mit dem Auto oder mit dem Zug?',
          en: 'Sorry — are you coming by car or by train?',
        },
        hints: ['Ich komme mit dem Zug.', 'Wir kommen mit dem Auto.', 'Ich komme mit dem Flugzeug.'],
        sample: 'Ich komme mit dem Zug.',
        requires: { any: ['zug', 'auto', 'bahn', 'flug'] },
        teaches: ['g.a2.dativ'],
      },

      /* ── 7. The name ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Auf welchen Namen darf ich die Buchung machen?',
          en: 'What name should I make the booking in?',
        },
        accept: [
          {
            match: ['für meine frau', 'für meinen mann', 'für meine kollegin', 'für meinen kollegen'],
            reply: {
              de: 'Alles klar, dann läuft die Buchung auf diesen Namen.',
              en: 'All right, then the booking will be in that name.',
            },
          },
          {
            match: ['firma', 'geschäftlich', 'rechnung', 'büro'],
            reply: {
              de: 'Verstanden. Die Rechnung schicken wir dann an die Firma.',
              en: 'Understood. We will send the invoice to the company in that case.',
            },
          },
          {
            match: ['name', 'heiße', 'ich bin'],
            reply: {
              de: 'Danke, {name}. Ich habe die Buchung gespeichert.',
              en: 'Thank you, {name}. I have saved the booking.',
            },
          },
        ],
        fallback: {
          de: 'Wie ist Ihr Name, bitte? Zum Beispiel: „Mein Name ist Weber.“',
          en: 'What is your name, please? For example: "Mein Name ist Weber."',
        },
        hints: ['Mein Name ist …', 'Ich heiße …', 'Die Buchung ist für meine Frau.'],
        sample: 'Mein Name ist Weber.',
        requires: { any: ['name', 'heiße', 'ich bin'] },
      },

      /* ── 8. Confirming ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich fasse kurz zusammen: ein Zimmer für zwei Nächte, mit Frühstück. Passt das so, {name}?',
          en: 'Let me sum up briefly: a room for two nights, with breakfast. Is that correct, {name}?',
        },
        accept: [
          {
            match: ['nein', 'falsch', 'nicht richtig', 'stimmt nicht'],
            reply: {
              de: 'Entschuldigung! Dann ändere ich das schnell und schicke Ihnen die neue Buchung.',
              en: 'Sorry! Then I will change it quickly and send you the new booking.',
            },
          },
          {
            match: ['bestätigung', 'e-mail', 'mail', 'wann bekomme'],
            reply: {
              de: 'Die Bestätigung kommt in fünf Minuten per E-Mail. Darin steht auch Ihre Buchungsnummer.',
              en: 'The confirmation will arrive by email in five minutes. It also contains your booking number.',
            },
          },
          {
            match: ['ja', 'passt', 'genau', 'richtig', 'stimmt', 'danke'],
            reply: {
              de: 'Wunderbar. Sie bekommen die Bestätigung gleich per E-Mail.',
              en: 'Wonderful. You will get the confirmation by email shortly.',
            },
          },
        ],
        fallback: {
          de: 'Passt die Buchung so — ja oder nein?',
          en: 'Is the booking correct like that — yes or no?',
        },
        hints: ['Ja, das passt.', 'Nein, das stimmt nicht.', 'Schicken Sie mir bitte eine Bestätigung.'],
        sample: 'Ja, das passt. Schicken Sie mir bitte eine Bestätigung.',
        requires: { any: ['ja', 'nein', 'passt', 'bestätigung'] },
      },
    ],
    closing: {
      de: 'Vielen Dank für Ihre Buchung, {name}! Wir freuen uns auf Ihren Aufenthalt. Gute Reise!',
      en: 'Thank you for your booking, {name}! We look forward to your stay. Have a good trip!',
    },
  },
]

export default conversations
