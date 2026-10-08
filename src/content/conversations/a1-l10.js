/**
 * A1 · L10 — Transport and directions
 *
 * One scenario in two halves: first you stop a friendly passer-by and ask the
 * way to the station, then you stand at the ticket counter and buy a Fahrkarte.
 * The learner has to produce the two patterns the lesson teaches — the question
 * chunk (Wie komme ich zum …? / Wo ist …?) and the request chunk
 * (Eine Fahrkarte nach …, bitte).
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l10.zum-bahnhof',
    level: 'A1',
    title: 'The way to the station — and a ticket',
    titleDe: 'Zum Bahnhof und eine Fahrkarte',
    icon: '🚉',
    setting:
      'You are standing at the market square in a strange town with a suitcase. Your train leaves soon, but you have no idea where the station is. A woman with a shopping bag stops next to you.',
    goal: 'Ask a stranger the way to the station, check that you understood, and then buy a ticket at the counter.',
    roleBot: 'First a friendly passer-by, then the man at the ticket counter',
    roleUser: 'You, a traveller with a suitcase',
    vocabIds: [
      'v.a1.l10.bahnhof',
      'v.a1.l10.haltestelle',
      'v.a1.l10.fahrkarte',
      'v.a1.l10.strasse',
      'v.a1.l10.zug',
      'v.a1.l10.bus',
      'v.a1.l10.links',
      'v.a1.l10.rechts',
      'v.a1.l10.geradeaus',
      'v.a1.l10.zu-fuss',
      'v.a1.l10.umsteigen',
      'v.a1.l10.entschuldigung',
    ],
    grammarIds: ['g.a1.imperativ-basis', 'g.a1.praepositionen'],
    tags: ['praeposition', 'hoeflichkeit'],
    turns: [
      /* ── 1. Stopping a stranger ────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag! Sie haben einen Koffer und einen Stadtplan — kann ich Ihnen helfen?',
          en: 'Hello! You have a suitcase and a map — can I help you?',
        },
        accept: [
          {
            match: ['bahnhof', 'zug'],
            reply: {
              de: 'Zum Bahnhof? Das ist nicht weit. Gehen Sie hier geradeaus und dann die zweite Straße links.',
              en: 'To the station? That is not far. Go straight on here and then take the second street on the left.',
            },
          },
          {
            match: ['haltestelle', 'bus'],
            reply: {
              de: 'Die Haltestelle ist gleich rechts an der Ecke. Der Bus fährt auch zum Bahnhof, Linie 3.',
              en: 'The stop is right there on the right at the corner. The bus goes to the station too, line 3.',
            },
          },
          {
            match: ['flughafen', 'u-bahn', 'stadt'],
            reply: {
              de: 'Ah, dann fahren Sie am besten zuerst zum Bahnhof. Gehen Sie geradeaus und dann die zweite Straße links.',
              en: 'Ah, then it is best to go to the station first. Go straight on and then take the second street on the left.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das verstehe ich nicht. Wohin möchten Sie? Zum Beispiel: „Wie komme ich zum Bahnhof?“',
          en: 'Sorry, I do not understand. Where would you like to go? For example: "Wie komme ich zum Bahnhof?"',
        },
        hints: [
          'Entschuldigung, wie komme ich zum Bahnhof?',
          'Wo ist der Bahnhof, bitte?',
          'Ich suche die Haltestelle.',
        ],
        sample: 'Entschuldigung, wie komme ich zum Bahnhof?',
        requires: { any: ['bahnhof', 'haltestelle', 'wie komme ich', 'wo ist'] },
        teaches: ['g.a1.praepositionen'],
      },

      /* ── 2. Checking that you understood ───────────────────────────────── */
      {
        bot: {
          de: 'Also noch einmal: geradeaus und dann die zweite Straße links. Ist das klar, {name}?',
          en: 'So once again: straight on and then the second street on the left. Is that clear, {name}?',
        },
        accept: [
          {
            match: ['ja', 'klar', 'danke', 'verstehe'],
            reply: {
              de: 'Sehr gut. Der Bahnhof ist dann rechts. Die Post ist gegenüber.',
              en: 'Very good. The station is then on the right. The post office is opposite.',
            },
          },
          {
            match: ['noch einmal', 'wiederholen', 'langsam', 'nicht'],
            reply: {
              de: 'Kein Problem, ganz langsam: geradeaus, dann die zweite Straße links. Der Bahnhof ist rechts.',
              en: 'No problem, very slowly: straight on, then the second street on the left. The station is on the right.',
            },
          },
          {
            match: ['weit', 'wie lange', 'minuten', 'zu fuß'],
            reply: {
              de: 'Nein, nicht weit — zehn Minuten zu Fuß. Mit dem Bus sind es nur drei Haltestellen.',
              en: 'No, not far — ten minutes on foot. By bus it is only three stops.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — ist der Weg klar, oder wiederhole ich das?',
          en: 'Sorry — is the route clear, or shall I repeat it?',
        },
        hints: [
          'Ja, das ist klar. Vielen Dank!',
          'Können Sie das bitte wiederholen?',
          'Ist das weit?',
        ],
        sample: 'Ja, das ist klar. Vielen Dank!',
        requires: { any: ['ja', 'nein', 'danke', 'wiederholen', 'weit'] },
        teaches: ['g.a1.imperativ-basis'],
      },

      /* ── 3. Where are you travelling to? ───────────────────────────────── */
      {
        bot: {
          de: 'Gern geschehen! Und wohin fahren Sie heute?',
          en: 'You are welcome! And where are you travelling to today?',
        },
        accept: [
          {
            match: ['köln', 'berlin', 'hamburg', 'münchen'],
            reply: {
              de: 'Schöne Stadt! Kaufen Sie die Fahrkarte am Schalter im Bahnhof, nicht im Zug.',
              en: 'Beautiful city! Buy the ticket at the counter in the station, not on the train.',
            },
          },
          {
            match: ['nach hause', 'hause', 'arbeit'],
            reply: {
              de: 'Dann gute Fahrt nach Hause! Die Fahrkarte bekommen Sie am Schalter im Bahnhof.',
              en: 'Then have a good trip home! You get the ticket at the counter in the station.',
            },
          },
          {
            match: ['flughafen', 'urlaub', 'spanien', 'indien'],
            reply: {
              de: 'Zum Flughafen fährt die Linie 9 direkt vom Bahnhof. Die Fahrkarte kaufen Sie am Schalter.',
              en: 'Line 9 goes to the airport directly from the station. You buy the ticket at the counter.',
            },
          },
        ],
        fallback: {
          de: 'Wohin fahren Sie denn? Zum Beispiel: „Ich fahre nach Köln.“',
          en: 'So where are you travelling to? For example: "Ich fahre nach Köln."',
        },
        hints: ['Ich fahre nach Köln.', 'Ich fahre nach Hause.', 'Ich fahre zum Flughafen.'],
        sample: 'Ich fahre nach Köln.',
        requires: { any: ['ich fahre', 'nach', 'zum', 'zur'] },
        teaches: ['g.a1.praepositionen'],
      },

      /* ── 4. At the counter ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Am Schalter im Bahnhof: Guten Tag! Bitte schön?',
          en: 'At the counter in the station: Hello! What can I do for you?',
        },
        accept: [
          {
            match: ['fahrkarte', 'karte', 'ticket'],
            reply: {
              de: 'Eine Fahrkarte, gern. Einfach oder hin und zurück?',
              en: 'One ticket, certainly. One way or return?',
            },
          },
          {
            match: ['was kostet', 'wie viel', 'kostet'],
            reply: {
              de: 'Eine Fahrkarte kostet zwanzig Euro. Einfach oder hin und zurück?',
              en: 'A ticket costs twenty euros. One way or return?',
            },
          },
          {
            match: ['umsteigen', 'direkt', 'wann fährt'],
            reply: {
              de: 'Der Zug fährt direkt, Sie müssen nicht umsteigen. Und die Fahrkarte — einfach oder hin und zurück?',
              en: 'The train goes directly, you do not have to change. And the ticket — one way or return?',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, was möchten Sie? Zum Beispiel: „Eine Fahrkarte nach Köln, bitte.“',
          en: 'Sorry, what would you like? For example: "Eine Fahrkarte nach Köln, bitte."',
        },
        hints: [
          'Eine Fahrkarte nach Köln, bitte.',
          'Ich möchte eine Fahrkarte nach Hamburg.',
          'Was kostet eine Fahrkarte nach Köln?',
        ],
        sample: 'Eine Fahrkarte nach Köln, bitte.',
        requires: { any: ['fahrkarte', 'karte', 'möchte', 'kostet'] },
        teaches: ['g.a1.praepositionen'],
      },

      /* ── 5. One way or return ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Also, einfach oder hin und zurück?',
          en: 'So, one way or return?',
        },
        accept: [
          {
            match: ['einfach'],
            reply: {
              de: 'Einfach, gut. Das macht zwanzig Euro.',
              en: 'One way, good. That is twenty euros.',
            },
          },
          {
            match: ['hin und zurück', 'zurück'],
            reply: {
              de: 'Hin und zurück, sehr gut. Das macht fünfunddreißig Euro.',
              en: 'Return, very good. That is thirty-five euros.',
            },
          },
          {
            match: ['was bedeutet', 'verstehe nicht', 'was ist das'],
            reply: {
              de: 'Einfach ist nur nach Köln. Hin und zurück ist nach Köln und wieder hierher.',
              en: 'One way is only to Cologne. Return is to Cologne and back here again.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — möchten Sie einfach oder hin und zurück?',
          en: 'Sorry — would you like one way or return?',
        },
        hints: ['Einfach, bitte.', 'Hin und zurück, bitte.', 'Was bedeutet das?'],
        sample: 'Hin und zurück, bitte.',
        requires: { any: ['einfach', 'zurück', 'bitte'] },
        teaches: ['g.a1.praepositionen'],
      },

      /* ── 6. The last question ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Bitte schön, hier ist Ihre Fahrkarte. Haben Sie noch eine Frage?',
          en: 'Here you are, here is your ticket. Do you have another question?',
        },
        accept: [
          {
            match: ['wann', 'wie spät', 'gleis', 'wo'],
            reply: {
              de: 'Der Zug fährt um zehn Uhr von Gleis 4. Steigen Sie bitte vorne ein.',
              en: 'The train leaves at ten from platform 4. Please get on at the front.',
            },
          },
          {
            match: ['umsteigen', 'direkt'],
            reply: {
              de: 'Nein, Sie fahren direkt. Sie steigen nicht um.',
              en: 'No, you go directly. You do not change.',
            },
          },
          {
            match: ['nein', 'danke', 'alles klar', 'das ist alles'],
            reply: {
              de: 'Sehr gut. Der Zug fährt um zehn Uhr von Gleis 4.',
              en: 'Very good. The train leaves at ten from platform 4.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie noch etwas wissen? Zum Beispiel: „Wann fährt der Zug?“',
          en: 'Would you like to know anything else? For example: "Wann fährt der Zug?"',
        },
        hints: ['Wann fährt der Zug?', 'Muss ich umsteigen?', 'Nein, danke. Das ist alles.'],
        sample: 'Wann fährt der Zug?',
        requires: { any: ['wann', 'gleis', 'umsteigen', 'nein', 'danke'] },
        teaches: ['g.a1.imperativ-basis'],
      },
    ],
    closing: {
      de: 'Gute Fahrt, {name}! Der Zug steht schon auf Gleis 4.',
      en: 'Have a good trip, {name}! The train is already on platform 4.',
    },
  },
]

export default conversations
