/**
 * B1 · L22 — Conversation: helping a neighbour with her new smartphone.
 *
 * Seven turns in the Sie register with an older neighbour: offer help,
 * explain how to download an app, advise on a password, say where photos are
 * saved, switch off adverts, warn about a phishing message, accept a coffee.
 * The passive and relative clauses turn up where they naturally would —
 * Die Fotos werden … gespeichert, eine Nachricht, in der … gefragt wurde.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l22.neues-handy',
    level: 'B1',
    title: 'Your neighbour’s new phone',
    titleDe: 'Das neue Handy der Nachbarin',
    icon: '📱',
    setting:
      'Your neighbour Frau Becker, 74, has just been given a smartphone by her granddaughter. She rings your bell, phone in hand, and asks if you have a few minutes.',
    goal:
      'Explain step by step how to download an app, choose a password, find saved photos and switch off adverts — and warn her about a suspicious message.',
    roleBot: 'Frau Becker, your neighbour',
    roleUser: 'You, the helpful neighbour',
    vocabIds: [
      'v.b1.l22.herunterladen',
      'v.b1.l22.passwort',
      'v.b1.l22.speichern',
      'v.b1.l22.loeschen',
      'v.b1.l22.werbung',
      'v.b1.l22.bildschirm',
      'v.b1.l22.technik',
    ],
    grammarIds: ['g.b1.passiv', 'g.b1.relativsatz'],
    tags: ['passiv', 'relativsatz'],
    turns: [
      /* ── 1. Offer help ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ach, gut, dass Sie da sind! Ich habe ein neues Handy, aber ich verstehe gar nichts von dieser Technik. Können Sie mir helfen?',
          en: 'Oh, good that you are in! I have a new phone, but I do not understand this technology at all. Can you help me?',
        },
        accept: [
          {
            match: ['natürlich', 'gern', 'klar', 'helfe', 'kein problem'],
            reply: {
              de: 'Wie nett von Ihnen! Meine Enkelin wohnt leider so weit weg.',
              en: 'How kind of you! Unfortunately my granddaughter lives so far away.',
            },
          },
          {
            match: ['was möchten', 'was ist', 'wie kann ich', 'was brauchen'],
            reply: {
              de: 'Das erkläre ich Ihnen gleich. Danke, dass Sie sich Zeit nehmen!',
              en: 'I will explain that in a moment. Thank you for taking the time!',
            },
          },
        ],
        fallback: {
          de: 'Haben Sie vielleicht ein paar Minuten für mich?',
          en: 'Do you perhaps have a few minutes for me?',
        },
        hints: [
          'Natürlich helfe ich Ihnen gern. Was möchten Sie machen?',
          'Klar, kein Problem!',
          'Gern. Wie kann ich Ihnen helfen?',
        ],
        sample: 'Natürlich helfe ich Ihnen gern. Was möchten Sie machen?',
        requires: { any: ['natürlich', 'gern', 'klar', 'helfe', 'kein problem'] },
        teaches: ['g.b1.passiv'],
      },

      /* ── 2. Download an app ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Meine Enkelin sagt, ich soll eine App herunterladen, mit der man Videoanrufe machen kann. Wie geht das?',
          en: 'My granddaughter says I should download an app you can make video calls with. How does that work?',
        },
        accept: [
          {
            match: ['zuerst', 'dann', 'danach', 'öffnen', 'suchen'],
            reply: {
              de: 'Zuerst öffnen, dann suchen … Ah, jetzt sehe ich die App! Und jetzt lädt sie.',
              en: 'First open, then search … Ah, now I can see the app! And now it is loading.',
            },
          },
          {
            match: ['herunterladen', 'laden', 'installieren', 'store'],
            reply: {
              de: 'Ich drücke hier auf „Laden“ … Sehr gut, sie wird schon installiert!',
              en: 'I press "Get" here … Very good, it is already being installed!',
            },
          },
          {
            match: ['zeige', 'zeigen', 'mache ich', 'geben sie'],
            reply: {
              de: 'Ja, zeigen Sie es mir bitte einmal. Dann kann ich es beim nächsten Mal allein.',
              en: 'Yes, please show me once. Then I can do it on my own next time.',
            },
          },
        ],
        fallback: {
          de: 'Wo finde ich denn diese App?',
          en: 'Where do I find this app, then?',
        },
        hints: [
          'Zuerst öffnen Sie den App Store, dann suchen Sie die App.',
          'Sie müssen auf „Laden“ drücken, dann wird die App installiert.',
          'Geben Sie mir kurz das Handy, ich zeige es Ihnen.',
        ],
        sample: 'Zuerst öffnen Sie den App Store, dann suchen Sie die App und laden sie herunter.',
        requires: { any: ['zuerst', 'öffnen', 'suchen', 'laden', 'herunterladen', 'zeige'] },
        teaches: ['g.b1.passiv'],
      },

      /* ── 3. A password ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Jetzt fragt das Handy nach einem Passwort. Kann ich nicht einfach mein Geburtsdatum nehmen?',
          en: 'Now the phone is asking for a password. Can I not just use my date of birth?',
        },
        accept: [
          {
            match: ['lieber nicht', 'nicht sicher', 'besser nicht', 'nein'],
            reply: {
              de: 'Ach so, das ist zu einfach? Gut, dann denke ich mir etwas anderes aus.',
              en: 'Oh, that is too easy? Good, then I will think of something else.',
            },
          },
          {
            match: ['zahlen', 'buchstaben', 'sicher', 'lang'],
            reply: {
              de: 'Zahlen und Buchstaben, verstehe. Ein Passwort, das niemand errät.',
              en: 'Numbers and letters, I see. A password that nobody can guess.',
            },
          },
          {
            match: ['aufschreiben', 'notieren', 'vergessen'],
            reply: {
              de: 'Gute Idee, ich schreibe es auf einen Zettel und lege ihn in die Schublade.',
              en: 'Good idea, I will write it on a slip of paper and put it in the drawer.',
            },
          },
        ],
        fallback: {
          de: 'Was für ein Passwort soll ich nehmen?',
          en: 'What kind of password should I use?',
        },
        hints: [
          'Lieber nicht, das ist nicht sicher.',
          'Nehmen Sie ein langes Passwort mit Zahlen und Buchstaben.',
          'Schreiben Sie das Passwort auf, damit Sie es nicht vergessen.',
        ],
        sample: 'Lieber nicht, das ist nicht sicher. Nehmen Sie ein Passwort mit Zahlen und Buchstaben.',
        requires: { any: ['nicht sicher', 'nein', 'zahlen', 'buchstaben', 'aufschreiben', 'lieber nicht'] },
        teaches: ['g.b1.relativsatz'],
      },

      /* ── 4. Where photos are saved ─────────────────────────────────────── */
      {
        bot: {
          de: 'Ich habe heute Morgen schon Fotos von meinen Blumen gemacht. Aber wo werden die Fotos eigentlich gespeichert?',
          en: 'I already took photos of my flowers this morning. But where are the photos actually saved?',
        },
        accept: [
          {
            match: ['gespeichert', 'galerie', 'fotos', 'bilder'],
            reply: {
              de: 'In der Galerie, aha! Da sind sie ja, meine Rosen.',
              en: 'In the gallery, I see! There they are, my roses.',
            },
          },
          {
            match: ['cloud', 'internet', 'online'],
            reply: {
              de: 'In einer Cloud? Hm, das muss mir meine Enkelin noch einmal genau erklären.',
              en: 'In a cloud? Hm, my granddaughter will have to explain that to me properly again.',
            },
          },
        ],
        fallback: {
          de: 'Wo finde ich meine Fotos wieder?',
          en: 'Where do I find my photos again?',
        },
        hints: [
          'Die Fotos werden in der Galerie gespeichert.',
          'Ihre Bilder finden Sie hier in der Galerie.',
          'Die Fotos werden auch in der Cloud gespeichert.',
        ],
        sample: 'Die Fotos werden automatisch in der Galerie gespeichert.',
        requires: { any: ['gespeichert', 'galerie', 'cloud', 'fotos', 'bilder'] },
        teaches: ['g.b1.passiv'],
      },

      /* ── 5. Adverts ────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und noch etwas: Auf dem Bildschirm kommt ständig Werbung. Kann man die irgendwie ausschalten?',
          en: 'And one more thing: adverts keep popping up on the screen. Can you switch them off somehow?',
        },
        accept: [
          {
            match: ['einstellungen', 'ausschalten', 'abschalten'],
            reply: {
              de: 'In den Einstellungen … Wunderbar, die Werbung ist weg!',
              en: 'In the settings … Wonderful, the adverts are gone!',
            },
          },
          {
            match: ['löschen', 'app', 'deinstallieren'],
            reply: {
              de: 'Die App mit der Werbung löschen? Gut, die brauche ich sowieso nicht.',
              en: 'Delete the app with the adverts? Fine, I do not need it anyway.',
            },
          },
          {
            match: ['leider nicht', 'geht nicht', 'nicht ganz'],
            reply: {
              de: 'Schade. Dann muss ich wohl damit leben.',
              en: 'Pity. Then I suppose I will have to live with it.',
            },
          },
        ],
        fallback: {
          de: 'Was kann man gegen die Werbung machen?',
          en: 'What can you do about the adverts?',
        },
        hints: [
          'Ja, das kann man in den Einstellungen ausschalten.',
          'Die App, die so viel Werbung zeigt, können Sie löschen.',
          'Leider geht das nicht ganz.',
        ],
        sample: 'Ja, das kann man in den Einstellungen ausschalten.',
        requires: { any: ['einstellungen', 'ausschalten', 'löschen', 'leider', 'geht nicht'] },
        teaches: ['g.b1.relativsatz'],
      },

      /* ── 6. A suspicious message ───────────────────────────────────────── */
      {
        bot: {
          de: 'Gestern habe ich eine Nachricht bekommen, in der nach meiner Kontonummer gefragt wurde. Angeblich von meiner Bank. Soll ich antworten?',
          en: 'Yesterday I got a message asking for my account number. Supposedly from my bank. Should I reply?',
        },
        accept: [
          {
            match: ['auf keinen fall', 'nein', 'nicht antworten', 'gefährlich', 'betrug'],
            reply: {
              de: 'Oh je, gut, dass ich Sie gefragt habe! Ich antworte auf keinen Fall.',
              en: 'Oh dear, good thing I asked you! I will definitely not reply.',
            },
          },
          {
            match: ['löschen', 'sofort'],
            reply: {
              de: 'Ich lösche sie gleich. Weg damit!',
              en: 'I will delete it straight away. Away with it!',
            },
          },
          {
            match: ['bank', 'anrufen', 'fragen'],
            reply: {
              de: 'Richtig, ich rufe morgen lieber direkt bei meiner Bank an.',
              en: 'Right, I would rather call my bank directly tomorrow.',
            },
          },
        ],
        fallback: {
          de: 'Was soll ich mit dieser Nachricht machen?',
          en: 'What should I do with this message?',
        },
        hints: [
          'Nein, auf keinen Fall! Löschen Sie die Nachricht sofort.',
          'Das ist gefährlich. Rufen Sie lieber direkt bei der Bank an.',
          'Eine Bank fragt nie per Nachricht nach Ihrer Kontonummer.',
        ],
        sample: 'Nein, auf keinen Fall! Löschen Sie die Nachricht sofort.',
        requires: { any: ['nein', 'auf keinen fall', 'löschen', 'gefährlich', 'bank'] },
        teaches: ['g.b1.relativsatz'],
      },

      /* ── 7. Coffee ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Vielen Dank! Ohne Sie hätte ich das nie geschafft. Darf ich Ihnen einen Kaffee und ein Stück Kuchen anbieten?',
          en: 'Thank you so much! Without you I would never have managed. May I offer you a coffee and a piece of cake?',
        },
        accept: [
          {
            match: ['gern', 'sehr gern', 'gerne', 'ja', 'lecker'],
            reply: {
              de: 'Wunderbar, kommen Sie herein! Der Kuchen ist noch warm.',
              en: 'Wonderful, come in! The cake is still warm.',
            },
          },
          {
            match: ['keine zeit', 'leider', 'ein anderes mal', 'nein danke'],
            reply: {
              de: 'Schade! Dann bringe ich Ihnen nachher ein Stück vorbei.',
              en: 'Pity! Then I will bring a piece round to you later.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie noch auf einen Kaffee hereinkommen?',
          en: 'Would you like to come in for a coffee?',
        },
        hints: ['Sehr gern, vielen Dank!', 'Leider habe ich keine Zeit, aber gern ein anderes Mal.'],
        sample: 'Sehr gern, vielen Dank!',
        requires: { any: ['gern', 'ja', 'danke', 'leider', 'keine zeit'] },
        teaches: ['g.b1.passiv'],
      },
    ],
    closing: {
      de: 'Sie sind ein Schatz, {name}! Jetzt rufe ich gleich meine Enkelin an.',
      en: 'You are a treasure, {name}! Now I am going to call my granddaughter straight away.',
    },
  },
]

export default conversations
