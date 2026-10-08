/**
 * Goethe-Zertifikat A1 (Start Deutsch 1) — Modelltest 1.
 * Original practice material in the official format; not an official paper.
 *
 * Speakers: f / f2 = women, m / m2 = men, n = announcer.
 */
export default {
  id: 'exam.a1.1',
  format: 'goethe-a1',
  level: 'A1',
  title: 'Modelltest 1',
  sections: {
    hoeren: {
      teil1: {
        items: [
          {
            id: 'h1.1',
            question: 'Wann kommt der Zug aus Hamburg heute an?',
            options: ['Um 14:30 Uhr.', 'Um 14:50 Uhr.', 'Um 15:20 Uhr.'],
            answer: 1,
            audio: [
              { s: 'f', de: 'Entschuldigung, wann kommt der Zug aus Hamburg an?' },
              { s: 'm', de: 'Der Zug aus Hamburg? Normalerweise um halb drei.' },
              { s: 'f', de: 'Und heute?' },
              { s: 'm', de: 'Heute hat er zwanzig Minuten Verspätung. Er kommt also um zehn vor drei.' },
            ],
          },
          {
            id: 'h1.2',
            question: 'Was kauft die Frau?',
            options: ['Tomaten und Gurken.', 'Gurken und Brot.', 'Tomaten und Brot.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Guten Tag, was möchten Sie?' },
              { s: 'f', de: 'Ich hätte gern ein Kilo Tomaten und zwei Gurken.' },
              { s: 'm', de: 'Tomaten haben wir heute leider nicht mehr.' },
              { s: 'f', de: 'Schade. Dann nehme ich nur die Gurken und ein Brot, bitte.' },
            ],
          },
          {
            id: 'h1.3',
            question: 'Wo ist die Toilette?',
            options: ['Im ersten Stock links.', 'Im Erdgeschoss rechts.', 'Im zweiten Stock links.'],
            answer: 0,
            audio: [
              { s: 'm', de: 'Entschuldigung, wo ist hier die Toilette?' },
              { s: 'f', de: 'Die Toilette ist im ersten Stock. Gehen Sie die Treppe hoch und dann links.' },
              { s: 'm', de: 'Im ersten Stock, links. Vielen Dank!' },
            ],
          },
          {
            id: 'h1.4',
            question: 'Wie ist die Telefonnummer von Frau Berger?',
            options: ['069 34728', '069 34782', '096 34728'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Praxis Doktor Lang, guten Tag.' },
              { s: 'm', de: 'Guten Tag. Ich brauche bitte die Telefonnummer von Frau Berger.' },
              { s: 'f', de: 'Einen Moment. Die Nummer ist null sechs neun, drei vier sieben zwei acht.' },
              { s: 'm', de: 'Also null sechs neun, drei vier sieben zwei acht?' },
              { s: 'f', de: 'Ja, richtig.' },
            ],
          },
          {
            id: 'h1.5',
            question: 'Was macht Jonas am Samstag?',
            options: ['Er geht schwimmen.', 'Er besucht seine Oma.', 'Er spielt Fußball.'],
            answer: 2,
            audio: [
              { s: 'f', de: 'Jonas, was machst du am Wochenende? Gehst du wieder schwimmen?' },
              { s: 'm', de: 'Nein, am Samstag spiele ich Fußball, und am Sonntag besuche ich meine Oma.' },
              { s: 'f', de: 'Und am Freitagabend?' },
              { s: 'm', de: 'Da bin ich müde. Da bleibe ich zu Hause.' },
            ],
          },
          {
            id: 'h1.6',
            question: 'Wie viel kostet die Fahrkarte hin und zurück?',
            options: ['43 Euro.', '68 Euro.', '86 Euro.'],
            answer: 2,
            audio: [
              { s: 'm', de: 'Eine Fahrkarte nach München, bitte.' },
              { s: 'f', de: 'Einfach oder hin und zurück?' },
              { s: 'm', de: 'Hin und zurück, bitte.' },
              { s: 'f', de: 'Das macht sechsundachtzig Euro. Einfach kostet dreiundvierzig Euro.' },
              { s: 'm', de: 'Hier, bitte.' },
            ],
          },
        ],
      },
      teil2: {
        items: [
          {
            id: 'h2.1',
            statement: 'Die Schuhe sind heute billiger.',
            answer: true,
            audio: [
              { s: 'n', de: 'Liebe Kundinnen und Kunden, heute haben wir ein besonderes Angebot: Alle Schuhe kosten nur die Hälfte. Sie finden unsere Schuhabteilung im Erdgeschoss.' },
            ],
          },
          {
            id: 'h2.2',
            statement: 'Der Zug nach Berlin fährt von Gleis 4 ab.',
            answer: false,
            audio: [
              { s: 'n', de: 'Achtung am Gleis vier: Der ICE nach Berlin fährt heute nicht von Gleis vier, sondern von Gleis sieben ab. Bitte beachten Sie die Änderung.' },
            ],
          },
          {
            id: 'h2.3',
            statement: 'Der Flug nach Wien ist pünktlich.',
            answer: false,
            audio: [
              { s: 'n', de: 'Liebe Fluggäste, der Flug LH dreihundertzwei nach Wien hat eine Stunde Verspätung. Die neue Abflugzeit ist sechzehn Uhr dreißig.' },
            ],
          },
          {
            id: 'h2.4',
            statement: 'Das Museum öffnet morgen um 10 Uhr.',
            answer: true,
            audio: [
              { s: 'n', de: 'Liebe Besucherinnen und Besucher, das Museum schließt in fünfzehn Minuten. Bitte gehen Sie zum Ausgang. Morgen sind wir ab zehn Uhr wieder für Sie da.' },
            ],
          },
        ],
      },
      teil3: {
        items: [
          {
            id: 'h3.1',
            question: 'Wann treffen sich Peter und Sabine?',
            options: ['Um 7 Uhr.', 'Um 8 Uhr.', 'Um 9 Uhr.'],
            answer: 1,
            audio: [
              { s: 'f', de: 'Hallo Peter, hier ist Sabine. Wir treffen uns heute nicht um sieben, sondern erst um acht Uhr im Café Mozart. Ich muss länger arbeiten. Bis später!' },
            ],
          },
          {
            id: 'h3.2',
            question: 'Was soll Frau Schneider machen?',
            options: ['Das Auto abholen.', 'Morgen anrufen.', 'Zur Bank gehen.'],
            answer: 0,
            audio: [
              { s: 'm', de: 'Guten Tag, Frau Schneider, hier ist die Autowerkstatt Klein. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen. Die Reparatur kostet hundertzwanzig Euro.' },
            ],
          },
          {
            id: 'h3.3',
            question: 'Was soll Tom kaufen?',
            options: ['Brot und Milch.', 'Milch und Eier.', 'Eier und Brot.'],
            answer: 1,
            audio: [
              { s: 'f', de: 'Hallo Tom, hier ist Mama. Kannst du bitte nach der Schule Milch und Eier kaufen? Brot habe ich schon. Danke, bis heute Abend!' },
            ],
          },
          {
            id: 'h3.4',
            question: 'Wann ist der nächste Kurs?',
            options: ['Am Montag.', 'Am Dienstag.', 'Am Mittwoch.'],
            answer: 2,
            audio: [
              { s: 'm', de: 'Hallo, hier ist Markus vom Sprachkurs. Der Kurs am Montag fällt leider aus. Die Lehrerin ist krank. Wir sehen uns dann am Mittwoch. Tschüss!' },
            ],
          },
          {
            id: 'h3.5',
            question: 'Wann ist der neue Termin?',
            options: ['Morgen um 9 Uhr.', 'Am Freitag um 10 Uhr.', 'Am Freitag um 9 Uhr.'],
            answer: 1,
            audio: [
              { s: 'f', de: 'Guten Tag, hier ist die Praxis Doktor Weber. Sie haben morgen um neun Uhr einen Termin. Leider ist Doktor Weber morgen nicht da. Können Sie am Freitag um zehn Uhr kommen? Bitte rufen Sie uns zurück.' },
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
            body: 'Liebe Anna,\n\nwie geht es dir? Ich bin jetzt seit zwei Wochen in Köln. Meine Wohnung ist klein, aber sehr schön. Sie hat einen Balkon und ist nicht teuer. Morgen fange ich mit meiner neuen Arbeit an. Ich bin ein bisschen nervös! Am Samstag mache ich eine kleine Party. Kommst du auch? Die Party beginnt um acht Uhr.\n\nViele Grüße\nLena',
          },
          {
            title: 'Nachricht an Herrn Braun',
            body: 'Hallo Herr Braun,\n\nder Techniker kommt am Donnerstag zwischen 10 und 12 Uhr und repariert die Heizung. Bitte bleiben Sie in dieser Zeit zu Hause. Haben Sie keine Zeit? Dann rufen Sie bitte im Büro an: 0221 58 49 30.\n\nMit freundlichen Grüßen\nHausverwaltung Müller',
          },
        ],
        items: [
          { id: 'l1.1', statement: 'Lena wohnt schon lange in Köln.', answer: false },
          { id: 'l1.2', statement: 'Lenas Wohnung ist billig.', answer: true },
          { id: 'l1.3', statement: 'Lena macht am Samstag eine Party.', answer: true },
          { id: 'l1.4', statement: 'Der Techniker kommt am Vormittag.', answer: true },
          { id: 'l1.5', statement: 'Herr Braun soll den Techniker anrufen.', answer: false },
        ],
      },
      teil2: {
        items: [
          {
            id: 'l2.1',
            situation: 'Sie möchten am Sonntag schwimmen gehen.',
            options: [
              { title: 'Hallenbad Mitte', body: 'Öffnungszeiten: Montag bis Freitag 7–21 Uhr, Samstag 9–18 Uhr. Sonntag geschlossen.' },
              { title: 'Freizeitbad Aqualand', body: 'Täglich geöffnet von 10 bis 22 Uhr, auch am Wochenende. Mit Sauna und Rutsche!' },
            ],
            answer: 1,
          },
          {
            id: 'l2.2',
            situation: 'Sie suchen eine Wohnung für sich, Ihren Mann und Ihre zwei Kinder.',
            options: [
              { title: 'Zu vermieten', body: '1-Zimmer-Apartment, 28 m², im Zentrum, ideal für Studenten. 390 € warm.' },
              { title: 'Schöne 4-Zimmer-Wohnung', body: '95 m², mit Garten, ruhige Lage. Schule und Kindergarten in der Nähe.' },
            ],
            answer: 1,
          },
          {
            id: 'l2.3',
            situation: 'Sie möchten Deutsch lernen, haben aber nur am Abend Zeit.',
            options: [
              { title: 'Sprachschule Lingua', body: 'Deutschkurse für Anfänger: Montag und Mittwoch, 18:30–20:00 Uhr.' },
              { title: 'Volkshochschule', body: 'Deutsch A1 – Intensivkurs: Montag bis Freitag, 9–13 Uhr.' },
            ],
            answer: 0,
          },
          {
            id: 'l2.4',
            situation: 'Sie möchten ein gebrauchtes Fahrrad kaufen.',
            options: [
              { title: 'Fahrradladen Speiche', body: 'Neue Fahrräder ab 399 €. Reparaturen schnell und günstig.' },
              { title: 'Kleinanzeige', body: 'Verkaufe Damenrad, 3 Jahre alt, guter Zustand, 120 €. Tel. 0176 445 21 89.' },
            ],
            answer: 1,
          },
          {
            id: 'l2.5',
            situation: 'Sie möchten heute Abend ins Theater gehen.',
            options: [
              { title: 'Theater am Park', body: 'Heute 20 Uhr: „Der kleine Prinz“. Karten an der Abendkasse ab 19 Uhr.' },
              { title: 'Theater am Park', body: 'Unser neues Programm beginnt im September. Karten ab 1. August online.' },
            ],
            answer: 0,
          },
        ],
      },
      teil3: {
        items: [
          {
            id: 'l3.1',
            text: { title: 'An der Tür einer Arztpraxis', body: 'Praxis Dr. Sommer\nSprechzeiten: Mo–Fr 8–12 Uhr\nDi und Do auch 15–18 Uhr' },
            statement: 'Sie können am Dienstagnachmittag zum Arzt gehen.',
            answer: true,
          },
          {
            id: 'l3.2',
            text: { title: 'Am Supermarkt', body: 'Liebe Kunden!\nWegen Renovierung ist unser Geschäft vom 3. bis 8. Juni geschlossen.\nAb 9. Juni sind wir wieder für Sie da!' },
            statement: 'Der Supermarkt ist am 5. Juni geöffnet.',
            answer: false,
          },
          {
            id: 'l3.3',
            text: { title: 'Am Bahnhof', body: 'Fahrkarten bitte am Automaten kaufen.\nIm Zug kein Verkauf!' },
            statement: 'Sie können im Zug eine Fahrkarte kaufen.',
            answer: false,
          },
          {
            id: 'l3.4',
            text: { title: 'Im Restaurant', body: 'Mittagstisch\nMontag bis Freitag, 11:30–14:30 Uhr\nTagesgericht mit Getränk: 9,50 €' },
            statement: 'Das Tagesgericht kostet mit Getränk 9,50 €.',
            answer: true,
          },
          {
            id: 'l3.5',
            text: { title: 'In der Bibliothek', body: 'Bitte leise sein!\nEssen und Trinken sind in der Bibliothek nicht erlaubt.' },
            statement: 'In der Bibliothek darf man Kaffee trinken.',
            answer: false,
          },
        ],
      },
    },

    schreiben: {
      teil1: {
        situation:
          'Ihr Freund Ahmed Yilmaz möchte im Fitnessstudio „FitPlus“ trainieren. Er ist 29 Jahre alt und kommt aus der Türkei. Er wohnt in der Gartenstraße 14 in 50667 Köln. Ahmed ist Koch von Beruf. Er möchte nur am Wochenende trainieren. Sie füllen das Formular für Ahmed aus.',
        form: {
          title: 'Anmeldung – Fitnessstudio FitPlus',
          fields: [
            { label: 'Familienname', given: 'Yilmaz' },
            { label: 'Vorname', given: 'Ahmed' },
            { label: 'Alter', answer: '29', accept: ['29 Jahre'] },
            { label: 'Herkunftsland', answer: 'Türkei', accept: ['die Türkei', 'Turkei'] },
            { label: 'Straße, Hausnummer', given: 'Gartenstraße 14' },
            { label: 'PLZ, Wohnort', answer: '50667 Köln', accept: ['50667, Köln', '50667 Koln'] },
            { label: 'Beruf', answer: 'Koch' },
            { label: 'Trainingszeit (Mo–Fr / Wochenende)', answer: 'Wochenende', accept: ['am Wochenende', 'Samstag und Sonntag', 'Sa und So'] },
          ],
        },
      },
      teil2: {
        situation: 'Sie haben am Samstag Geburtstag und machen eine Party. Schreiben Sie Ihrer Freundin Maria eine E-Mail.',
        register: 'informal',
        points: [
          { de: 'Warum schreiben Sie?', en: 'Why are you writing? (the invitation)', keys: ['party', 'feier', 'geburtstag', 'einlad'] },
          { de: 'Wann und wo ist die Party?', en: 'When and where is the party?', keys: ['uhr', 'samstag', 'bei mir', 'wohnung', 'garten', 'café', 'cafe', 'restaurant'] },
          { de: 'Was soll Maria mitbringen?', en: 'What should Maria bring?', keys: ['mitbring', 'bring', 'salat', 'kuchen', 'getränk', 'musik'] },
        ],
        sample:
          'Liebe Maria,\n\nam Samstag habe ich Geburtstag und mache eine Party. Ich lade dich ein! Die Party beginnt um 19 Uhr bei mir zu Hause. Kannst du bitte einen Salat mitbringen?\n\nViele Grüße\n{name}',
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
        extra: ['Buchstabieren Sie Ihren Vornamen.', 'Nennen Sie Ihre Telefonnummer.'],
        sample:
          'Ich heiße {name}. Ich bin dreißig Jahre alt. Ich komme aus Indien und wohne jetzt in Berlin. Ich spreche Englisch, Hindi und ein bisschen Deutsch. Ich bin Ingenieur von Beruf. Mein Hobby ist Kochen.',
      },
      teil2: {
        topic: 'Essen und Trinken',
        cards: [
          { word: 'Frühstück', sampleQ: 'Was isst du zum Frühstück?', partnerQ: 'Trinkst du morgens Kaffee oder Tee?', sampleA: 'Ich trinke morgens Tee mit Milch.' },
          { word: 'Obst', sampleQ: 'Welches Obst isst du gern?', partnerQ: 'Isst du gern Fleisch?', sampleA: 'Nein, ich esse lieber Gemüse.' },
          { word: 'Restaurant', sampleQ: 'Gehst du oft ins Restaurant?', partnerQ: 'Was ist dein Lieblingsessen?', sampleA: 'Mein Lieblingsessen ist Pizza.' },
          { word: 'Getränk', sampleQ: 'Was ist dein Lieblingsgetränk?', partnerQ: 'Kochst du gern?', sampleA: 'Ja, ich koche fast jeden Abend.' },
        ],
      },
      teil3: {
        cards: [
          { emoji: '🧂', label: 'Salz', sample: 'Gibst du mir bitte das Salz?', partnerReq: 'Kannst du mir bitte dein Handy geben?', reactSample: 'Ja, hier bitte.' },
          { emoji: '🪟', label: 'Fenster', sample: 'Kannst du bitte das Fenster zumachen?', partnerReq: 'Hilfst du mir bitte?', reactSample: 'Ja, natürlich. Was soll ich machen?' },
          { emoji: '✏️', label: 'Kuli', sample: 'Hast du bitte einen Kuli für mich?', partnerReq: 'Kannst du bitte das Licht anmachen?', reactSample: 'Ja, gern.' },
          { emoji: '☕', label: 'Kaffee', sample: 'Ich hätte gern einen Kaffee, bitte.', partnerReq: 'Gibst du mir bitte deine Telefonnummer?', reactSample: 'Ja, gern. Meine Nummer ist null eins sieben sechs, zwei drei vier fünf.' },
        ],
      },
    },
  },
}
