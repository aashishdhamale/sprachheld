/**
 * Goethe-Zertifikat A1 (Start Deutsch 1) — Modelltest 2.
 * Original practice material in the official format; not an official paper.
 *
 * Speakers: f / f2 = women, m / m2 = men, n = announcer.
 */
export default {
  id: 'exam.a1.2',
  format: 'goethe-a1',
  level: 'A1',
  title: 'Modelltest 2',
  sections: {
    hoeren: {
      teil1: {
        items: [
          {
            id: 'h1.1',
            question: 'Welcher Bus fährt zum Bahnhof?',
            options: ['Die Linie 2.', 'Die Linie 12.', 'Die Linie 20.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Entschuldigung, fährt dieser Bus zum Bahnhof?' },
              { s: 'f', de: 'Nein, der fährt zum Krankenhaus. Zum Bahnhof fährt die Linie zwölf.' },
              { s: 'm', de: 'Und wo hält die Zwölf?' },
              { s: 'f', de: 'Da drüben, vor der Post.' },
            ],
          },
          {
            id: 'h1.2',
            question: 'Wann gehen die beiden ins Kino?',
            options: ['Am Dienstag.', 'Am Mittwoch.', 'Am Donnerstag.'],
            answer: 2,
            audio: [
              { s: 'm', de: 'Hast du am Dienstag Zeit? Wir können ins Kino gehen.' },
              { s: 'f', de: 'Am Dienstag arbeite ich bis acht. Aber am Donnerstag habe ich frei.' },
              { s: 'm', de: 'Donnerstag ist gut. Dann gehen wir am Donnerstag.' },
            ],
          },
          {
            id: 'h1.3',
            question: 'Was trinkt der Mann?',
            options: ['Kaffee mit Milch.', 'Tee mit Zitrone.', 'Tee mit Milch.'],
            answer: 1,
            audio: [
              { s: 'f', de: 'Was möchten Sie trinken?' },
              { s: 'm', de: 'Einen Kaffee, bitte. Ach nein, lieber einen Tee.' },
              { s: 'f', de: 'Mit Zitrone oder mit Milch?' },
              { s: 'm', de: 'Mit Zitrone, bitte.' },
            ],
          },
          {
            id: 'h1.4',
            question: 'Wie alt ist Lisas Bruder?',
            options: ['16 Jahre.', '13 Jahre.', '6 Jahre.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Das hier auf dem Foto ist mein Bruder Max.' },
              { s: 'm', de: 'Oh, der ist aber groß! Wie alt ist er?' },
              { s: 'f', de: 'Er ist schon sechzehn. Und meine Schwester ist dreizehn.' },
            ],
          },
          {
            id: 'h1.5',
            question: 'Wo ist das Handy?',
            options: ['In der Küche.', 'Im Büro.', 'Im Auto.'],
            answer: 2,
            audio: [
              { s: 'm', de: 'Ich finde mein Handy nicht! Ist es in der Küche?' },
              { s: 'f', de: 'Nein, da ist es nicht. Vielleicht im Auto?' },
              { s: 'm', de: 'Ach ja, richtig. Es liegt im Auto.' },
            ],
          },
          {
            id: 'h1.6',
            question: 'Wie ist das Wetter morgen?',
            options: ['Es regnet.', 'Die Sonne scheint.', 'Es schneit.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Was machen wir morgen? Gehen wir in den Park?' },
              { s: 'm', de: 'Morgen regnet es den ganzen Tag. Aber am Sonntag scheint die Sonne.' },
              { s: 'f', de: 'Dann gehen wir morgen ins Museum.' },
            ],
          },
        ],
      },
      teil2: {
        items: [
          {
            id: 'h2.1',
            statement: 'Die U3 fährt heute bis zum Hauptbahnhof.',
            answer: true,
            audio: [
              { s: 'n', de: 'Sehr geehrte Fahrgäste, wegen Bauarbeiten fährt die U-Bahn-Linie drei heute nur bis zum Hauptbahnhof. Bitte nehmen Sie dann den Bus.' },
            ],
          },
          {
            id: 'h2.2',
            statement: 'Der Supermarkt ist heute bis 20 Uhr geöffnet.',
            answer: false,
            audio: [
              { s: 'n', de: 'Liebe Kundinnen und Kunden, unser Supermarkt schließt heute schon um achtzehn Uhr. Morgen sind wir wieder von acht bis zwanzig Uhr für Sie da.' },
            ],
          },
          {
            id: 'h2.3',
            statement: 'Der Deutschkurs ist heute in Raum 12.',
            answer: false,
            audio: [
              { s: 'n', de: 'Eine Information für den Deutschkurs A1: Ihr Kurs ist heute nicht in Raum zwölf, sondern in Raum einundzwanzig im zweiten Stock.' },
            ],
          },
          {
            id: 'h2.4',
            statement: 'Herr Wagner soll zur Information kommen.',
            answer: true,
            audio: [
              { s: 'n', de: 'Achtung, eine Durchsage für Herrn Thomas Wagner. Herr Wagner, bitte kommen Sie zur Information im Erdgeschoss. Ihre Frau wartet dort auf Sie.' },
            ],
          },
        ],
      },
      teil3: {
        items: [
          {
            id: 'h3.1',
            question: 'Was soll Julia machen?',
            options: ['Zum Arzt gehen.', 'Mit dem Trainer sprechen.', 'Ben besuchen.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Hallo Julia, hier ist Ben. Ich bin krank und kann heute nicht zum Fußballtraining kommen. Kannst du das bitte dem Trainer sagen? Danke!' },
            ],
          },
          {
            id: 'h3.2',
            question: 'Ab wann kann man die Tickets abholen?',
            options: ['Ab Montag.', 'Ab Dienstag.', 'Ab Samstag.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Guten Tag, hier ist das Reisebüro Sonnenschein. Ihre Tickets für Spanien sind da. Sie können sie ab Montag bei uns abholen. Wir sind von neun bis achtzehn Uhr im Büro.' },
            ],
          },
          {
            id: 'h3.3',
            question: 'Wann kommt der Mann nach Hause?',
            options: ['Um 7 Uhr.', 'Um 8 Uhr.', 'Um 9 Uhr.'],
            answer: 2,
            audio: [
              { s: 'm', de: 'Hallo Schatz, ich bin es. Ich komme heute später nach Hause, so um neun. Im Büro gibt es so viel Arbeit. Wir können dann zusammen essen.' },
            ],
          },
          {
            id: 'h3.4',
            question: 'Wohin geht die Klasse morgen?',
            options: ['In den Zoo.', 'Ins Museum.', 'In den Park.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Hallo, hier ist Frau Koch, die Lehrerin von Emma. Morgen machen wir einen Ausflug in den Zoo. Bitte geben Sie Emma etwas zu essen und zu trinken mit. Wir sind um vierzehn Uhr wieder in der Schule.' },
            ],
          },
          {
            id: 'h3.5',
            question: 'Was bringt das Möbelhaus am Mittwoch?',
            options: ['Einen Tisch.', 'Ein Sofa.', 'Ein Bett.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Guten Tag, hier ist das Möbelhaus Wohnwelt. Wir bringen Ihr neues Sofa am Mittwoch zwischen acht und zwölf Uhr. Ist das in Ordnung? Bitte rufen Sie uns kurz an.' },
            ],
          },
        ],
      },
    },

    lesen: {
      teil1: {
        texts: [
          {
            title: 'E-Mail',
            body: 'Hallo Paul,\n\nich bin jetzt in Wien bei meiner Tante. Die Stadt ist toll! Heute Vormittag war ich im Museum, und am Nachmittag sind wir mit dem Schiff auf der Donau gefahren. Das Wetter ist super, jeden Tag scheint die Sonne. Am Freitag fahre ich mit dem Zug zurück. Kannst du mich vom Bahnhof abholen? Der Zug kommt um 17:45 Uhr an.\n\nLiebe Grüße\nSophie',
          },
          {
            title: 'Brief der Schule',
            body: 'Liebe Eltern,\n\nam Freitag, den 14. März, feiern wir in der Schule ein Frühlingsfest. Es beginnt um 15 Uhr. Die Kinder singen und tanzen. Bitte bringen Sie einen Kuchen oder einen Salat mit. Getränke gibt es in der Schule.\n\nViele Grüße\nFrau Schulz, Klassenlehrerin',
          },
        ],
        items: [
          { id: 'l1.1', statement: 'Sophie besucht in Wien ihre Tante.', answer: true },
          { id: 'l1.2', statement: 'In Wien regnet es oft.', answer: false },
          { id: 'l1.3', statement: 'Paul soll Sophie am Freitag abholen.', answer: true },
          { id: 'l1.4', statement: 'Das Schulfest beginnt am Vormittag.', answer: false },
          { id: 'l1.5', statement: 'Die Eltern sollen Getränke mitbringen.', answer: false },
        ],
      },
      teil2: {
        items: [
          {
            id: 'l2.1',
            situation: 'Sie möchten am Samstag Ihr Auto waschen lassen.',
            options: [
              { title: 'Autowäsche Blitz', body: 'Montag bis Samstag 8–20 Uhr. Waschen ab 9 €.' },
              { title: 'Autohaus Meier', body: 'Neu- und Gebrauchtwagen. Beratung Montag bis Freitag, 9–18 Uhr.' },
            ],
            answer: 0,
          },
          {
            id: 'l2.2',
            situation: 'Sie möchten mit Ihrer Tochter (5 Jahre) am Nachmittag etwas unternehmen.',
            options: [
              { title: 'Kinderkino', body: 'Jeden Mittwoch um 15 Uhr: Filme für Kinder ab 4 Jahren. Eintritt 3 €.' },
              { title: 'Malkurs für Kinder', body: 'Für Kinder von 8 bis 12 Jahren, samstags 10–12 Uhr.' },
            ],
            answer: 0,
          },
          {
            id: 'l2.3',
            situation: 'Ihr Computer ist kaputt. Sie möchten ihn reparieren lassen.',
            options: [
              { title: 'Computer-Shop Byte', body: 'Neue Laptops und PCs – günstige Angebote jede Woche!' },
              { title: 'PC-Hilfe Schmidt', body: 'Ihr Computer ist kaputt? Wir reparieren schnell und billig. Wir kommen auch zu Ihnen nach Hause.' },
            ],
            answer: 1,
          },
          {
            id: 'l2.4',
            situation: 'Sie möchten am Abend mit Freunden essen gehen. Sie essen kein Fleisch.',
            options: [
              { title: 'Restaurant Grüner Garten', body: 'Vegetarische und vegane Küche. Täglich 12–23 Uhr.' },
              { title: 'Steakhaus Texas', body: 'Die besten Steaks der Stadt! Täglich ab 17 Uhr.' },
            ],
            answer: 0,
          },
          {
            id: 'l2.5',
            situation: 'Sie suchen eine Arbeit am Wochenende.',
            options: [
              { title: 'Bäckerei Krause', body: 'Wir suchen eine Verkäuferin oder einen Verkäufer, Montag bis Freitag, 6–12 Uhr.' },
              { title: 'Café Sonne', body: 'Wir suchen Kellner und Kellnerinnen für Samstag und Sonntag. Tel. 089 23 45 67.' },
            ],
            answer: 1,
          },
        ],
      },
      teil3: {
        items: [
          {
            id: 'l3.1',
            text: { title: 'An der Apotheke', body: 'Apotheke am Markt\nHeute Notdienst bis 22 Uhr' },
            statement: 'Die Apotheke ist heute bis 22 Uhr geöffnet.',
            answer: true,
          },
          {
            id: 'l3.2',
            text: { title: 'Auf einem Parkplatz', body: 'Parken nur für Kunden.\nMaximal 2 Stunden.' },
            statement: 'Hier können alle Leute den ganzen Tag parken.',
            answer: false,
          },
          {
            id: 'l3.3',
            text: { title: 'In einer Sprachschule', body: 'Anmeldung für neue Kurse:\nRaum 5, 2. Stock' },
            statement: 'Für die Anmeldung gehen Sie in den zweiten Stock.',
            answer: true,
          },
          {
            id: 'l3.4',
            text: { title: 'Im Treppenhaus', body: 'Achtung! Der Aufzug ist kaputt.\nBitte benutzen Sie die Treppe.' },
            statement: 'Sie können heute mit dem Aufzug fahren.',
            answer: false,
          },
          {
            id: 'l3.5',
            text: { title: 'An einer Bäckerei', body: 'Bäckerei Brezel\nAuch sonntags geöffnet: 7–11 Uhr\nFrische Brötchen!' },
            statement: 'Am Sonntag kann man hier am Nachmittag Brötchen kaufen.',
            answer: false,
          },
        ],
      },
    },

    schreiben: {
      teil1: {
        situation:
          'Ihre Kollegin Mei Chen möchte einen Deutschkurs an der Volkshochschule machen. Sie ist 34 Jahre alt und kommt aus China. Sie wohnt in der Bergstraße 7 in 80331 München. Mei ist Ärztin von Beruf. Sie möchte den Kurs am Abend machen. Ihre E-Mail-Adresse ist mei.chen@beispiel.de. Sie füllen das Formular für Mei aus.',
        form: {
          title: 'Anmeldung Deutschkurs – Volkshochschule München',
          fields: [
            { label: 'Familienname', given: 'Chen' },
            { label: 'Vorname', given: 'Mei' },
            { label: 'Alter', answer: '34', accept: ['34 Jahre'] },
            { label: 'Herkunftsland', answer: 'China' },
            { label: 'Adresse', given: 'Bergstraße 7, 80331 München' },
            { label: 'Beruf', answer: 'Ärztin', accept: ['Arztin'] },
            { label: 'Kurszeit (vormittags / abends)', answer: 'abends', accept: ['am Abend', 'Abend'] },
            { label: 'E-Mail', answer: 'mei.chen@beispiel.de' },
          ],
        },
      },
      teil2: {
        situation: 'Sie können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Wolf, eine E-Mail.',
        register: 'formal',
        points: [
          { de: 'Entschuldigen Sie sich.', en: 'Apologise.', keys: ['entschuldig', 'leider', 'tut mir leid'] },
          { de: 'Warum können Sie nicht kommen?', en: 'Why can’t you come?', keys: ['krank', 'arzt', 'arbeit', 'kind', 'termin', 'weil', 'muss'] },
          { de: 'Fragen Sie nach den Hausaufgaben.', en: 'Ask about the homework.', keys: ['hausaufgabe', 'aufgabe'] },
        ],
        sample:
          'Liebe Frau Wolf,\n\nleider kann ich morgen nicht zum Deutschkurs kommen. Ich bin krank und muss zum Arzt gehen. Welche Hausaufgaben haben wir? Können Sie mir bitte schreiben?\n\nViele Grüße\n{name}',
      },
    },

    sprechen: {
      teil1: {
        keywords: [
          { de: 'Name?', keys: ['heiße', 'heisse', 'name ist', 'bin '] },
          { de: 'Alter?', keys: ['jahre alt', 'jahre'] },
          { de: 'Land?', keys: ['komme aus'] },
          { de: 'Wohnort?', keys: ['wohne'] },
          { de: 'Sprachen?', keys: ['spreche'] },
          { de: 'Beruf?', keys: ['von beruf', 'arbeite', 'student', 'studiere'] },
          { de: 'Hobby?', keys: ['hobby', 'hobbys', 'gern', 'spiele', 'lese', 'koche'] },
        ],
        extra: ['Buchstabieren Sie Ihren Familiennamen.', 'Nennen Sie Ihre Hausnummer und Postleitzahl.'],
        sample:
          'Mein Name ist {name}. Ich bin fünfundzwanzig Jahre alt und komme aus Indien. Ich wohne in Hamburg. Ich spreche Englisch und ein bisschen Deutsch. Ich bin Student. Ich lese gern und spiele Cricket.',
      },
      teil2: {
        topic: 'Freizeit',
        cards: [
          { word: 'Wochenende', sampleQ: 'Was machst du am Wochenende?', partnerQ: 'Spielst du gern Fußball?', sampleA: 'Nein, ich spiele lieber Tennis.' },
          { word: 'Sport', sampleQ: 'Welchen Sport machst du?', partnerQ: 'Was machst du am Abend?', sampleA: 'Am Abend sehe ich fern oder ich lese.' },
          { word: 'Musik', sampleQ: 'Hörst du gern Musik?', partnerQ: 'Wohin fährst du im Sommer?', sampleA: 'Im Sommer fahre ich nach Italien.' },
          { word: 'Urlaub', sampleQ: 'Wo machst du gern Urlaub?', partnerQ: 'Hast du ein Hobby?', sampleA: 'Ja, mein Hobby ist Fotografieren.' },
        ],
      },
      teil3: {
        cards: [
          { emoji: '📱', label: 'Handy', sample: 'Kannst du mir bitte dein Handy geben?', partnerReq: 'Kannst du bitte die Tür aufmachen?', reactSample: 'Ja, gern.' },
          { emoji: '🚪', label: 'Tür', sample: 'Machen Sie bitte die Tür zu.', partnerReq: 'Gibst du mir bitte ein Glas Wasser?', reactSample: 'Ja, hier bitte.' },
          { emoji: '💧', label: 'Wasser', sample: 'Ich hätte gern ein Glas Wasser, bitte.', partnerReq: 'Kannst du mir bitte zehn Euro geben?', reactSample: 'Tut mir leid, ich habe kein Geld dabei.' },
          { emoji: '🔑', label: 'Schlüssel', sample: 'Gib mir bitte den Schlüssel.', partnerReq: 'Kannst du bitte langsam sprechen?', reactSample: 'Ja, natürlich.' },
        ],
      },
    },
  },
}
