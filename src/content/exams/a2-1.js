/**
 * Goethe-Zertifikat A2 — Modelltest 1.
 * Original practice material in the official format; not an official paper.
 *
 * Speakers: f / f2 = women, m / m2 = men, n = announcer.
 */
export default {
  id: 'exam.a2.1',
  format: 'goethe-a2',
  level: 'A2',
  title: 'Modelltest 1',
  sections: {
    lesen: {
      teil1: {
        text: {
          title: 'Ein Café nur für Senioren? Nein – für alle!',
          body:
            'In der Kölner Südstadt gibt es seit März ein besonderes Café: das „Café Zeitlos“. Hier arbeiten nur Menschen über 65 Jahre. Die Idee hatte Monika Hartmann (68). Sie war vierzig Jahre lang Lehrerin. „Nach der Rente war mir langweilig“, erzählt sie. „Ich wollte wieder etwas mit Menschen machen.“\n\nZusammen mit vier Freundinnen und zwei Freunden hat sie das Café eröffnet. Jeden Tag backen sie frische Kuchen nach alten Rezepten. Am beliebtesten ist der Apfelkuchen von Herrn Becker.\n\nDie Gäste sind nicht nur ältere Leute. Viele Studenten kommen zum Lernen, und am Wochenende kommen Familien mit Kindern. Jeden Mittwochnachmittag gibt es einen Spielenachmittag: Dann spielen Jung und Alt zusammen Karten oder Schach.\n\nDas Café ist von Dienstag bis Sonntag von 10 bis 18 Uhr geöffnet. Montags ist Ruhetag.',
        },
        items: [
          { id: 'l1.1', question: 'Wer arbeitet im Café Zeitlos?', options: ['Studenten.', 'Ältere Menschen.', 'Lehrerinnen.'], answer: 1 },
          { id: 'l1.2', question: 'Warum hat Monika Hartmann das Café eröffnet?', options: ['Sie hatte als Rentnerin zu wenig zu tun.', 'Sie brauchte mehr Geld.', 'Sie wollte nicht mehr als Lehrerin arbeiten.'], answer: 0 },
          { id: 'l1.3', question: 'Was ist im Café besonders beliebt?', options: ['Der Kaffee.', 'Der Käsekuchen.', 'Der Apfelkuchen.'], answer: 2 },
          { id: 'l1.4', question: 'Was passiert jeden Mittwoch?', options: ['Es gibt einen Backkurs.', 'Junge und alte Gäste spielen zusammen.', 'Das Café ist geschlossen.'], answer: 1 },
          { id: 'l1.5', question: 'Wann ist das Café geschlossen?', options: ['Am Montag.', 'Am Sonntag.', 'Am Mittwochnachmittag.'], answer: 0 },
        ],
      },
      teil2: {
        text: {
          title: 'Kaufhaus Merkur – Wegweiser',
          body:
            '4. Stock: Restaurant mit Dachterrasse · Kundentoiletten · Fundbüro\n3. Stock: Elektronik · Computer und Handys · Fotoservice · Musik und Filme\n2. Stock: Haushaltswaren · Küche und Geschirr · Bettwäsche und Handtücher · Spielwaren\n1. Stock: Damenmode · Herrenmode · Kindermode · Sportbekleidung\nErdgeschoss: Kosmetik · Schmuck und Uhren · Zeitschriften · Information\nUntergeschoss: Lebensmittel · Getränke · Bäckerei · Schlüsseldienst',
        },
        items: [
          { id: 'l2.1', question: 'Sie möchten Ihrer Nichte eine Puppe schenken.', options: ['1. Stock', '3. Stock', 'anderer Stock'], answer: 2 },
          { id: 'l2.2', question: 'Sie brauchen eine neue Sporthose.', options: ['1. Stock', 'Untergeschoss', 'anderer Stock'], answer: 0 },
          { id: 'l2.3', question: 'Ihr Handy ist kaputt. Sie möchten ein neues kaufen.', options: ['Erdgeschoss', '3. Stock', 'anderer Stock'], answer: 1 },
          { id: 'l2.4', question: 'Sie haben gestern im Kaufhaus Ihren Regenschirm vergessen.', options: ['Erdgeschoss', '4. Stock', 'anderer Stock'], answer: 1 },
          { id: 'l2.5', question: 'Sie möchten frische Brötchen kaufen.', options: ['Erdgeschoss', '2. Stock', 'anderer Stock'], answer: 2 },
        ],
      },
      teil3: {
        text: {
          title: 'E-Mail',
          body:
            'Liebe Katja,\n\nvielen Dank für deine E-Mail! Entschuldige, dass ich erst jetzt antworte, aber die letzten Wochen waren sehr stressig. Ich habe eine neue Stelle in einem Hotel in Hamburg gefunden und bin am 1. Mai umgezogen. Die Arbeit an der Rezeption macht mir viel Spaß, aber ich muss oft am Wochenende arbeiten.\n\nMeine neue Wohnung ist leider noch nicht fertig. Die Küche fehlt noch, deshalb esse ich meistens im Hotel. Nächste Woche kommt endlich die Küche, und dann möchte ich eine kleine Party machen.\n\nHast du im Juni Zeit? Dann kannst du mich besuchen! Hamburg ist im Sommer wunderschön. Wir können am Hafen spazieren gehen oder eine Schifffahrt machen. Du kannst bei mir schlafen, ich habe ein Gästezimmer.\n\nSchreib mir bald!\nLiebe Grüße\nJana',
        },
        items: [
          { id: 'l3.1', question: 'Warum hat Jana nicht früher geschrieben?', options: ['Sie war krank.', 'Sie hatte viel zu tun.', 'Sie war im Urlaub.'], answer: 1 },
          { id: 'l3.2', question: 'Wo arbeitet Jana jetzt?', options: ['In einem Hotel.', 'In einem Restaurant.', 'In einem Reisebüro.'], answer: 0 },
          { id: 'l3.3', question: 'Wo isst Jana zurzeit meistens?', options: ['Zu Hause.', 'Bei Freunden.', 'Bei ihrer Arbeit.'], answer: 2 },
          { id: 'l3.4', question: 'Was möchte Jana machen, wenn die Küche da ist?', options: ['Eine Party feiern.', 'Kochen lernen.', 'Noch einmal umziehen.'], answer: 0 },
          { id: 'l3.5', question: 'Was schlägt Jana für Juni vor?', options: ['Sie möchte Katja besuchen.', 'Katja soll nach Hamburg kommen.', 'Sie wollen zusammen in den Urlaub fahren.'], answer: 1 },
        ],
      },
      teil4: {
        choices: [
          { key: 'a', title: 'Tanzschule Schwung', body: 'Salsa, Tango und Walzer für Paare und Singles. Anfängerkurse jeden Dienstag um 19 Uhr.' },
          { key: 'b', title: 'Kochkurs „Italienisch für Anfänger“', body: 'Vier Abende, je drei Stunden, mit Essen und Wein. Volkshochschule, 120 €.' },
          { key: 'c', title: 'Hundesitter gesucht!', body: 'Wir suchen eine Person für unseren Hund Bello: zweimal am Tag spazieren gehen, 10 € pro Stunde.' },
          { key: 'd', title: 'Fahrradtouren am Wochenende', body: 'Jeden Sonntag fahren wir 40 bis 60 Kilometer durch die Region. Treffpunkt: Rathausplatz, 9 Uhr. Kostenlos!' },
          { key: 'e', title: 'Nachhilfe in Mathe und Englisch', body: 'Studentin hilft Schülern der Klassen 5 bis 10. Auch online. 15 € pro Stunde.' },
          { key: 'f', title: 'Kinderfahrräder günstig', body: 'Gebrauchte Fahrräder für Kinder von 4 bis 10 Jahren, ab 30 €. Tel. 0171 234 56 78.' },
        ],
        items: [
          { id: 'l4.1', situation: 'Jonas ist Student und braucht neben dem Studium etwas Geld. Er mag Tiere.', answer: 'c' },
          { id: 'l4.2', situation: 'Familie Özdemir möchte ihrem Sohn (7) ein Fahrrad kaufen. Ein neues ist zu teuer.', answer: 'f' },
          { id: 'l4.3', situation: 'Clara möchte am Wochenende Sport machen, aber nicht allein.', answer: 'd' },
          { id: 'l4.4', situation: 'Herr und Frau Lang möchten zusammen einen Kurs besuchen. Sie tanzen gern.', answer: 'a' },
          { id: 'l4.5', situation: 'Max hat in der Schule Probleme in Deutsch und sucht Hilfe.', answer: 'x' },
        ],
      },
    },

    hoeren: {
      teil1: {
        items: [
          {
            id: 'h1.1',
            question: 'Wie wird das Wetter morgen im Süden?',
            options: ['Es regnet.', 'Es ist sonnig.', 'Es ist kühl.'],
            answer: 1,
            audio: [
              { s: 'n', de: 'Und nun das Wetter für morgen: Im Norden bleibt es bewölkt, und am Nachmittag gibt es Regen. Im Süden scheint den ganzen Tag die Sonne, bei Temperaturen bis vierundzwanzig Grad. Am Wochenende wird es dann überall kühler.' },
            ],
          },
          {
            id: 'h1.2',
            question: 'Was ist auf der A3 passiert?',
            options: ['Es gab einen Unfall.', 'Es gibt eine Baustelle.', 'Die Straße ist wegen Schnee gesperrt.'],
            answer: 0,
            audio: [
              { s: 'n', de: 'Achtung, Autofahrer: Auf der A3 zwischen Frankfurt und Würzburg gibt es nach einem Unfall zehn Kilometer Stau. Fahren Sie, wenn möglich, über die A7.' },
            ],
          },
          {
            id: 'h1.3',
            question: 'Wann beginnt das Feuerwerk?',
            options: ['Um 14 Uhr.', 'Um 20 Uhr.', 'Um 22 Uhr.'],
            answer: 2,
            audio: [
              { s: 'n', de: 'Am Samstag feiert Freiburg sein großes Sommerfest. Ab vierzehn Uhr gibt es Musik und Essen auf dem Marktplatz. Um zweiundzwanzig Uhr beginnt das Feuerwerk. Der Eintritt ist frei.' },
            ],
          },
          {
            id: 'h1.4',
            question: 'Was kann man gewinnen?',
            options: ['Eine Reise.', 'Konzertkarten.', 'Ein Radio.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Hier ist Radio Sonne mit unserem Gewinnspiel! Rufen Sie heute zwischen sechzehn und achtzehn Uhr an und beantworten Sie unsere Frage. Sie können zwei Karten für das Konzert der Band Nordlicht gewinnen.' },
            ],
          },
          {
            id: 'h1.5',
            question: 'Was ist neu in der Stadtbibliothek?',
            options: ['Sie ist am Sonntag geöffnet.', 'Sie ist am Montag geschlossen.', 'Bücher kosten jetzt Geld.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Die Stadtbibliothek ist ab nächster Woche auch sonntags geöffnet, und zwar von elf bis siebzehn Uhr. Außerdem kann man ab Montag Bücher auch online ausleihen.' },
            ],
          },
        ],
      },
      teil2: {
        prompt: 'Was macht Lukas wann? Wählen Sie für jeden Tag die richtige Aktivität.',
        audio: [
          { s: 'f', de: 'Hallo Lukas! Hast du diese Woche mal Zeit? Wir könnten ins Kino gehen.' },
          { s: 'm', de: 'Hallo Mia! Am Sonntag war ich bei meiner Oma, das war schön. Aber diese Woche ist wirklich voll. Am Montag muss ich zum Zahnarzt. Das ist nicht so schön.' },
          { s: 'f', de: 'Oh nein! Und am Dienstag?' },
          { s: 'm', de: 'Am Dienstag gehe ich mit meinem Bruder schwimmen. Das machen wir jede Woche.' },
          { s: 'f', de: 'Und Mittwoch? Am Mittwoch läuft ein neuer Film.' },
          { s: 'm', de: 'Mittwoch geht leider nicht. Am Mittwoch hat meine Mutter Geburtstag, da essen wir alle zusammen.' },
          { s: 'f', de: 'Schade. Und am Donnerstag?' },
          { s: 'm', de: 'Am Donnerstag muss ich den ganzen Tag lernen. Am Freitagvormittag habe ich nämlich eine Prüfung.' },
          { s: 'f', de: 'Und am Freitagabend, nach der Prüfung?' },
          { s: 'm', de: 'Am Freitagabend habe ich Zeit! Dann gehen wir ins Kino, okay?' },
          { s: 'f', de: 'Super, Freitag ist gut!' },
        ],
        choices: [
          { key: 'a', emoji: '🏊', label: 'schwimmen' },
          { key: 'b', emoji: '🦷', label: 'zum Zahnarzt' },
          { key: 'c', emoji: '🎂', label: 'Geburtstag feiern' },
          { key: 'd', emoji: '🛒', label: 'einkaufen' },
          { key: 'e', emoji: '🎬', label: 'ins Kino' },
          { key: 'f', emoji: '👵', label: 'Oma besuchen' },
          { key: 'g', emoji: '⚽', label: 'Fußball spielen' },
          { key: 'h', emoji: '📚', label: 'lernen' },
        ],
        items: [
          { id: 'h2.1', label: 'Montag', answer: 'b' },
          { id: 'h2.2', label: 'Dienstag', answer: 'a' },
          { id: 'h2.3', label: 'Mittwoch', answer: 'c' },
          { id: 'h2.4', label: 'Donnerstag', answer: 'h' },
          { id: 'h2.5', label: 'Freitagabend', answer: 'e' },
        ],
      },
      teil3: {
        items: [
          {
            id: 'h3.1',
            question: 'Wie viel bezahlt die Frau für die Jacke?',
            options: ['59 Euro.', '95 Euro.', '159 Euro.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Ich suche eine warme Jacke für den Winter.' },
              { s: 'm', de: 'Wie gefällt Ihnen diese hier? Sie kostet hundertneunundfünfzig Euro.' },
              { s: 'f', de: 'Die ist schön, aber zu teuer. Haben Sie auch etwas Billigeres?' },
              { s: 'm', de: 'Diese Jacke hier ist im Angebot, nur neunundfünfzig Euro.' },
              { s: 'f', de: 'Die nehme ich.' },
            ],
          },
          {
            id: 'h3.2',
            question: 'Wo treffen sich Anna und Tom?',
            options: ['Vor dem Kino.', 'Im Café.', 'Am Bahnhof.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Anna, treffen wir uns um sieben vor dem Kino?' },
              { s: 'f', de: 'Vor dem Kino ist es so kalt. Treffen wir uns lieber im Café gegenüber.' },
              { s: 'm', de: 'Okay, dann im Café. Bis später!' },
            ],
          },
          {
            id: 'h3.3',
            question: 'Was hat der Mann am Wochenende gemacht?',
            options: ['Er war in den Bergen.', 'Er hat Freunde besucht.', 'Er hat seine Wohnung gestrichen.'],
            answer: 2,
            audio: [
              { s: 'f', de: 'Na, wie war dein Wochenende? Warst du wieder in den Bergen?' },
              { s: 'm', de: 'Nein, diesmal nicht. Ich habe meine Wohnung gestrichen. Das hat zwei Tage gedauert!' },
              { s: 'f', de: 'Oh, das ist anstrengend.' },
            ],
          },
          {
            id: 'h3.4',
            question: 'Wann ist der Termin beim Arzt?',
            options: ['Heute um 16 Uhr.', 'Heute um 17 Uhr.', 'Morgen um 8:30 Uhr.'],
            answer: 2,
            audio: [
              { s: 'f', de: 'Praxis Doktor Neumann, guten Tag.' },
              { s: 'm', de: 'Guten Tag, ich brauche einen Termin. Ich habe seit drei Tagen Halsschmerzen.' },
              { s: 'f', de: 'Können Sie heute um sechzehn Uhr kommen?' },
              { s: 'm', de: 'Heute arbeite ich bis siebzehn Uhr. Geht es auch morgen früh?' },
              { s: 'f', de: 'Ja, morgen um halb neun.' },
              { s: 'm', de: 'Perfekt, vielen Dank.' },
            ],
          },
          {
            id: 'h3.5',
            question: 'Wie fährt die Frau normalerweise zur Arbeit?',
            options: ['Mit dem Fahrrad.', 'Mit dem Auto.', 'Mit dem Bus.'],
            answer: 0,
            audio: [
              { s: 'm', de: 'Fährst du immer noch mit dem Auto zur Arbeit?' },
              { s: 'f', de: 'Nein, seit einem Monat fahre ich mit dem Fahrrad. Das ist gesund und billiger. Nur wenn es regnet, nehme ich den Bus.' },
            ],
          },
        ],
      },
      teil4: {
        audio: [
          { s: 'm', de: 'Herzlich willkommen bei „Stadtleben“. Heute ist Petra Klein bei uns im Studio. Frau Klein, Sie haben vor drei Jahren einen Gemeinschaftsgarten gegründet. Was ist das genau?' },
          { s: 'f', de: 'Ein Gemeinschaftsgarten ist ein Garten für alle. Viele Menschen in der Stadt haben keinen eigenen Garten. Bei uns können sie zusammen Gemüse und Blumen pflanzen.' },
          { s: 'm', de: 'Wie viele Leute machen mit?' },
          { s: 'f', de: 'Am Anfang waren wir nur fünf Personen. Heute sind es über sechzig: Kinder, Studenten, Familien und Rentner.' },
          { s: 'm', de: 'Was pflanzen Sie im Garten?' },
          { s: 'f', de: 'Vor allem Tomaten, Salat und Kräuter. Und natürlich Blumen für die Bienen.' },
          { s: 'm', de: 'Kostet das Mitmachen etwas?' },
          { s: 'f', de: 'Nein, das ist kostenlos. Wir bekommen Geld von der Stadt. Aber jeder hilft mit: Man muss einmal in der Woche zwei Stunden im Garten arbeiten.' },
          { s: 'm', de: 'Und was machen Sie mit dem Gemüse?' },
          { s: 'f', de: 'Das Gemüse teilen wir. Und einmal im Monat kochen wir zusammen und machen ein großes Fest.' },
        ],
        items: [
          { id: 'h4.1', statement: 'Petra Klein hat den Garten vor drei Jahren gegründet.', answer: true },
          { id: 'h4.2', statement: 'Heute machen nur Rentner im Garten mit.', answer: false },
          { id: 'h4.3', statement: 'Im Garten wachsen Tomaten und Salat.', answer: true },
          { id: 'h4.4', statement: 'Man muss für den Garten bezahlen.', answer: false },
          { id: 'h4.5', statement: 'Die Gruppe kocht jede Woche zusammen.', answer: false },
        ],
      },
    },

    schreiben: {
      teil1: {
        situation: 'Sie wollten sich heute Abend mit Ihrem Freund Daniel treffen. Sie können aber nicht kommen. Schreiben Sie Daniel eine Nachricht.',
        register: 'informal',
        points: [
          { de: 'Entschuldigen Sie sich und sagen Sie, warum Sie nicht kommen können.', en: 'Apologise and say why you can’t come.', keys: ['leider', 'sorry', 'tut mir leid', 'entschuldig', 'krank', 'arbeit', 'muss'] },
          { de: 'Machen Sie einen neuen Vorschlag (Tag, Uhrzeit).', en: 'Suggest a new day and time.', keys: ['morgen', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag', 'uhr', 'nächste'] },
          { de: 'Fragen Sie, ob Daniel dann Zeit hat.', en: 'Ask whether Daniel is free then.', keys: ['zeit', 'kannst du', 'geht', 'passt', 'hast du'] },
        ],
        sample:
          'Hallo Daniel,\n\nes tut mir leid, ich kann heute Abend nicht kommen. Ich muss lange arbeiten. Treffen wir uns am Freitag um 19 Uhr? Hast du dann Zeit?\n\nViele Grüße\n{name}',
      },
      teil2: {
        situation: 'Sie haben im Internet einen Sprachkurs gefunden. Schreiben Sie an die Sprachschule „Deutsch Plus“, Herrn Krüger.',
        register: 'formal',
        points: [
          { de: 'Sagen Sie, welchen Kurs Sie machen möchten.', en: 'Say which course you want to take.', keys: ['kurs', 'a2', 'b1', 'abend', 'intensiv', 'möchte'] },
          { de: 'Fragen Sie nach dem Preis.', en: 'Ask about the price.', keys: ['kostet', 'preis', 'kosten', 'wie viel', 'wieviel'] },
          { de: 'Fragen Sie, wann der Kurs beginnt.', en: 'Ask when the course starts.', keys: ['beginnt', 'anfang', 'wann', 'startet', 'datum'] },
        ],
        sample:
          'Sehr geehrter Herr Krüger,\n\nich möchte gern einen Deutschkurs A2 am Abend machen. Wie viel kostet der Kurs? Und wann beginnt der nächste Kurs? Ich freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\n{name}',
      },
    },

    sprechen: {
      teil1: {
        cards: [
          { word: 'Geburtstag', sampleQ: 'Wann hast du Geburtstag?', partnerQ: 'Wie feierst du deinen Geburtstag?', sampleA: 'Ich feiere meistens mit meiner Familie zu Hause.' },
          { word: 'Wohnort', sampleQ: 'Wo wohnst du?', partnerQ: 'Wie lange wohnst du schon in deiner Stadt?', sampleA: 'Ich wohne seit zwei Jahren hier.' },
          { word: 'Beruf', sampleQ: 'Was bist du von Beruf?', partnerQ: 'Was machst du in deiner Freizeit?', sampleA: 'In meiner Freizeit spiele ich Gitarre und gehe joggen.' },
          { word: 'Reisen', sampleQ: 'Reist du gern?', partnerQ: 'Welche Sprachen sprichst du?', sampleA: 'Ich spreche Englisch, Hindi und ein bisschen Deutsch.' },
        ],
      },
      teil2: {
        topic: 'Wie wohnen Sie?',
        prompts: [
          { de: 'Wo?', keys: ['wohne in', 'stadt', 'dorf', 'zentrum', 'wohnung', 'haus'] },
          { de: 'Wie groß?', keys: ['zimmer', 'quadratmeter', 'groß', 'klein'] },
          { de: 'Mit wem?', keys: ['allein', 'mit meiner', 'mit meinem', 'mit meinen', 'zusammen', 'familie'] },
          { de: 'Was gefällt Ihnen (nicht)?', keys: ['gefällt', 'mag', 'schön', 'laut', 'ruhig', 'toll'] },
        ],
        sample:
          'Ich wohne in einer Wohnung in der Stadtmitte. Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Sie ist ungefähr fünfzig Quadratmeter groß. Ich wohne zusammen mit meiner Frau. Mir gefällt, dass die Wohnung hell ist und einen Balkon hat. Nicht so gut ist, dass die Straße sehr laut ist.',
        followQ: 'Möchten Sie gern einmal in einem Haus mit Garten wohnen?',
        followA: 'Ja, sehr gern. Dann kann ich im Garten Gemüse pflanzen.',
      },
      teil3: {
        task: 'Sie möchten am Samstag zusammen einen Freund im Krankenhaus besuchen. Wann haben Sie beide Zeit?',
        day: 'Samstag',
        calendar: [
          { t: '8:00', e: 'joggen' },
          { t: '9:00', e: '' },
          { t: '10:00', e: 'Deutschkurs' },
          { t: '11:00', e: 'Deutschkurs' },
          { t: '12:00', e: 'Mittagessen mit Tina' },
          { t: '13:00', e: '' },
          { t: '14:00', e: '' },
          { t: '15:00', e: 'Wohnung putzen' },
          { t: '16:00', e: '' },
          { t: '17:00', e: '' },
          { t: '18:00', e: 'Kino mit Ben' },
        ],
        turns: [
          { partner: 'Hallo! Hast du am Samstagvormittag Zeit, so um zehn?', sample: 'Nein, um zehn habe ich Deutschkurs. Geht es vielleicht am Nachmittag?' },
          { partner: 'Am Nachmittag ist gut. Um eins und um zwei kann ich leider nicht, da bin ich bei meiner Schwester. Wie ist es um drei?', sample: 'Um drei putze ich meine Wohnung. Aber um vier habe ich Zeit. Passt dir das?' },
          { partner: 'Um vier ist super! Sollen wir etwas mitbringen?', sample: 'Ja, wir können Blumen oder Schokolade mitbringen. Ich kaufe die Blumen.' },
          { partner: 'Gute Idee. Wo treffen wir uns?', sample: 'Treffen wir uns um vier vor dem Krankenhaus. Bis Samstag!' },
        ],
      },
    },
  },
}
