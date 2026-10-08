/**
 * Goethe-Zertifikat A2 — Modelltest 2.
 * Original practice material in the official format; not an official paper.
 *
 * Speakers: f / f2 = women, m / m2 = men, n = announcer.
 */
export default {
  id: 'exam.a2.2',
  format: 'goethe-a2',
  level: 'A2',
  title: 'Modelltest 2',
  sections: {
    lesen: {
      teil1: {
        text: {
          title: 'Mit dem Fahrrad zur Schule – ein Projekt in Münster',
          body:
            'In Münster fahren schon viele Menschen Fahrrad. Jetzt hat die Gesamtschule Nord ein neues Projekt gestartet: „Mit dem Rad zur Schule“. Jeden Morgen um 7:15 Uhr treffen sich Schülerinnen und Schüler an fünf Treffpunkten in der Stadt. Von dort fahren sie zusammen mit zwei Lehrern zur Schule.\n\n„Viele Eltern haben Angst, wenn ihre Kinder allein mit dem Fahrrad fahren“, sagt Lehrer Stefan Brandt. „In der Gruppe ist es sicherer, und es macht mehr Spaß.“\n\nAm Anfang haben nur zwanzig Kinder mitgemacht, heute sind es schon über hundert. Für jeden Kilometer bekommen die Schüler Punkte. Die Klasse mit den meisten Punkten gewinnt am Ende des Schuljahres einen Ausflug.\n\nDie Schule möchte das Projekt auch im Winter weitermachen. Nur bei Schnee und Eis fahren die Kinder mit dem Bus.',
        },
        items: [
          { id: 'l1.1', question: 'Was ist das Projekt der Gesamtschule Nord?', options: ['Die Schüler fahren in Gruppen mit dem Rad zur Schule.', 'Die Schüler reparieren Fahrräder.', 'Die Schule kauft neue Fahrräder.'], answer: 0 },
          { id: 'l1.2', question: 'Wer fährt mit den Kindern?', options: ['Die Eltern.', 'Zwei Lehrer.', 'Ältere Schüler.'], answer: 1 },
          { id: 'l1.3', question: 'Warum ist das Projekt für die Eltern gut?', options: ['Es ist billiger als der Bus.', 'Die Kinder sind schneller in der Schule.', 'In der Gruppe ist es sicherer.'], answer: 2 },
          { id: 'l1.4', question: 'Was bekommen die Schüler für jeden Kilometer?', options: ['Geld.', 'Punkte.', 'Einen Ausflug.'], answer: 1 },
          { id: 'l1.5', question: 'Was passiert im Winter?', options: ['Bei Schnee und Eis fahren die Kinder mit dem Bus.', 'Das Projekt macht im Winter Pause.', 'Im Winter fahren alle mit dem Auto.'], answer: 0 },
        ],
      },
      teil2: {
        text: {
          title: 'Rathaus Neustadt – Informationstafel',
          body:
            '4. Stock: Bürgermeister · Sekretariat · Konferenzraum\n3. Stock: Bauamt · Kulturamt (Veranstaltungen, Vereine) · Verwaltung der Bibliothek\n2. Stock: Ausländerbehörde · Sozialamt · Wohngeld\n1. Stock: Standesamt (Heiraten, Geburtsurkunden) · Fundbüro\nErdgeschoss: Information · Bürgerbüro (Personalausweis, Reisepass, Anmeldung der Wohnung) · Kasse',
        },
        items: [
          { id: 'l2.1', question: 'Sie sind neu in der Stadt und möchten Ihre Wohnung anmelden.', options: ['Erdgeschoss', '2. Stock', 'anderer Stock'], answer: 0 },
          { id: 'l2.2', question: 'Sie möchten heiraten.', options: ['Erdgeschoss', '3. Stock', 'anderer Stock'], answer: 2 },
          { id: 'l2.3', question: 'Sie haben im Bus Ihre Tasche vergessen.', options: ['1. Stock', '4. Stock', 'anderer Stock'], answer: 0 },
          { id: 'l2.4', question: 'Sie brauchen ein neues Visum.', options: ['1. Stock', '2. Stock', 'anderer Stock'], answer: 1 },
          { id: 'l2.5', question: 'Sie möchten wissen, welche Konzerte es im Sommer in der Stadt gibt.', options: ['Erdgeschoss', '4. Stock', 'anderer Stock'], answer: 2 },
        ],
      },
      teil3: {
        text: {
          title: 'E-Mail',
          body:
            'Hallo Felix,\n\nwie geht’s? Ich habe eine tolle Nachricht: Ich habe die Prüfung bestanden! Jetzt bin ich endlich Krankenpfleger. Ab Oktober arbeite ich im Krankenhaus in Bremen. Ich muss zwar auch nachts arbeiten, aber das Team ist sehr nett.\n\nAm Samstag, den 20. September, möchte ich das feiern. Ich mache ein Grillfest bei mir im Garten. Es geht um 16 Uhr los. Kommst du auch? Bring doch deine Freundin mit! Würstchen und Salat habe ich schon, aber kannst du vielleicht Getränke mitbringen?\n\nBitte sag mir bis Mittwoch, ob du kommst. Dann weiß ich, wie viel ich einkaufen muss.\n\nBis bald!\nTim',
        },
        items: [
          { id: 'l3.1', question: 'Warum schreibt Tim?', options: ['Er hat eine neue Wohnung.', 'Er hat eine Prüfung bestanden.', 'Er hat Geburtstag.'], answer: 1 },
          { id: 'l3.2', question: 'Was ist Tim jetzt von Beruf?', options: ['Arzt.', 'Koch.', 'Krankenpfleger.'], answer: 2 },
          { id: 'l3.3', question: 'Was ist für Tim nicht so schön an der neuen Arbeit?', options: ['Er muss auch in der Nacht arbeiten.', 'Die Kollegen sind unfreundlich.', 'Das Krankenhaus ist weit weg.'], answer: 0 },
          { id: 'l3.4', question: 'Was soll Felix zum Fest mitbringen?', options: ['Salat.', 'Würstchen.', 'Getränke.'], answer: 2 },
          { id: 'l3.5', question: 'Bis wann soll Felix antworten?', options: ['Bis Mittwoch.', 'Bis Samstag.', 'Bis zum 20. September.'], answer: 0 },
        ],
      },
      teil4: {
        choices: [
          { key: 'a', title: 'Babysitterin gesucht', body: 'Wir suchen für unsere zwei Kinder (3 und 6) eine nette Babysitterin, zwei Abende pro Woche. Tel. 0151 987 65 43.' },
          { key: 'b', title: 'Möbel günstig!', body: 'Wegen Umzug verkaufen wir Sofa, Tisch und Stühle. Nur Abholung, am Samstag 10–14 Uhr, Lindenstraße 8.' },
          { key: 'c', title: 'Sprachtandem', body: 'Spanierin (25) sucht Tandempartner zum Deutschüben. Ich helfe dir gern beim Spanischlernen!' },
          { key: 'd', title: 'Yoga im Park', body: 'Jeden Samstag um 9 Uhr im Stadtpark. Für alle, auch für Anfänger. Kostenlos – bitte eine Matte mitbringen.' },
          { key: 'e', title: 'Wohnung zu vermieten', body: '2 Zimmer, Küche, Bad, 55 m², Balkon, 650 € warm. Ab 1. November. Keine Haustiere.' },
          { key: 'f', title: 'Computerkurs für Senioren', body: 'E-Mails schreiben, im Internet suchen, Fotos verschicken. Dienstags 10–12 Uhr, Volkshochschule.' },
        ],
        items: [
          { id: 'l4.1', situation: 'Elena kommt aus Italien und möchte ihr Deutsch verbessern. Sie möchte auch eine neue Sprache lernen.', answer: 'c' },
          { id: 'l4.2', situation: 'Herr Schuster ist 72 und möchte seinem Enkel E-Mails schreiben.', answer: 'f' },
          { id: 'l4.3', situation: 'Lisa und Marco suchen eine Wohnung für sich und ihre Katze.', answer: 'x' },
          { id: 'l4.4', situation: 'Sara möchte am Wochenende Sport machen, hat aber nicht viel Geld.', answer: 'd' },
          { id: 'l4.5', situation: 'Familie Nowak hat eine neue Wohnung und braucht noch einen Tisch.', answer: 'b' },
        ],
      },
    },

    hoeren: {
      teil1: {
        items: [
          {
            id: 'h1.1',
            question: 'Wie wird das Wetter morgen?',
            options: ['Sonnig und warm.', 'Trocken und kalt.', 'Regnerisch und windig.'],
            answer: 2,
            audio: [
              { s: 'n', de: 'Und jetzt das Wetter: Heute bleibt es trocken, am Nachmittag scheint auch mal die Sonne. Morgen kommt dann von Westen Regen, und es wird windig. Die Temperaturen liegen bei zwölf Grad.' },
            ],
          },
          {
            id: 'h1.2',
            question: 'Was ist heute mit der S5?',
            options: ['Sie fährt heute nicht.', 'Sie fährt seltener als normal.', 'Sie fährt eine andere Strecke.'],
            answer: 1,
            audio: [
              { s: 'n', de: 'Eine Information für alle Fahrgäste der S-Bahn: Wegen einer Störung fahren die Züge der Linie S fünf heute nur alle zwanzig Minuten. Bitte planen Sie mehr Zeit ein.' },
            ],
          },
          {
            id: 'h1.3',
            question: 'Wen sucht das Freibad?',
            options: ['Studenten für die Sommerferien.', 'Schwimmlehrer.', 'Köche für das Restaurant.'],
            answer: 0,
            audio: [
              { s: 'f', de: 'Sie suchen einen Job für die Sommerferien? Das Freibad Sonnenhügel sucht Studentinnen und Studenten für die Kasse und den Kiosk. Bewerben Sie sich bis Ende Mai per E-Mail.' },
            ],
          },
          {
            id: 'h1.4',
            question: 'Worum geht es in der Sendung?',
            options: ['Um Sport im Sommer.', 'Um Gesundheit im Winter.', 'Um Rezepte für den Winter.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Heute in unserer Sendung „Gesund leben“: Unsere Ärztin Doktor Sabine Roth erklärt, wie man im Winter fit bleibt. Haben Sie Fragen? Dann rufen Sie uns ab zehn Uhr an.' },
            ],
          },
          {
            id: 'h1.5',
            question: 'Was ist am Sonntag kostenlos?',
            options: ['Der Bus.', 'Das Parken.', 'Der Eintritt ins Museum.'],
            answer: 0,
            audio: [
              { s: 'n', de: 'Am kommenden Sonntag ist in der Innenstadt verkaufsoffener Sonntag. Die Geschäfte sind von dreizehn bis achtzehn Uhr geöffnet. Die Busse fahren an diesem Tag kostenlos.' },
            ],
          },
        ],
      },
      teil2: {
        prompt: 'Frau Berger zeigt der neuen Kollegin Frau Ito das Büro. Wer ist wofür da? Wählen Sie für jede Person die richtige Aufgabe.',
        audio: [
          { s: 'f', de: 'So, Frau Ito, jetzt zeige ich Ihnen alles. Hier rechts sitzt Herr Schmitt. Wenn Ihr Computer nicht funktioniert, fragen Sie ihn. Er kennt sich super mit Technik aus.' },
          { s: 'f2', de: 'Gut zu wissen. Und wer ist die Frau dort am Fenster?' },
          { s: 'f', de: 'Das ist Frau Weber. Sie macht die Urlaubsplanung. Wenn Sie Urlaub nehmen möchten, sprechen Sie mit ihr.' },
          { s: 'f2', de: 'Und wo bekomme ich einen Schlüssel für das Büro?' },
          { s: 'f', de: 'Den Schlüssel bekommen Sie bei Herrn Yilmaz am Empfang.' },
          { s: 'f2', de: 'Und wer bringt die Post?' },
          { s: 'f', de: 'Die Post und die Pakete holt Frau Lange. Sie bringt sie jeden Morgen in die Büros.' },
          { s: 'f2', de: 'Und wenn ich eine Rechnung habe?' },
          { s: 'f', de: 'Rechnungen bringen Sie bitte zu Herrn Fischer in die Buchhaltung, Zimmer zwölf. Ach ja, die Kaffeemaschine steht in der Küche. Die ist leider oft kaputt!' },
        ],
        choices: [
          { key: 'a', emoji: '💻', label: 'Computerprobleme' },
          { key: 'b', emoji: '📅', label: 'Urlaub planen' },
          { key: 'c', emoji: '☕', label: 'Kaffeemaschine' },
          { key: 'd', emoji: '📦', label: 'Post und Pakete' },
          { key: 'e', emoji: '🧾', label: 'Rechnungen' },
          { key: 'f', emoji: '🔑', label: 'Schlüssel' },
          { key: 'g', emoji: '🖨', label: 'Drucker' },
          { key: 'h', emoji: '🍽', label: 'Kantine' },
        ],
        items: [
          { id: 'h2.1', label: 'Herr Schmitt', answer: 'a' },
          { id: 'h2.2', label: 'Frau Weber', answer: 'b' },
          { id: 'h2.3', label: 'Herr Yilmaz', answer: 'f' },
          { id: 'h2.4', label: 'Frau Lange', answer: 'd' },
          { id: 'h2.5', label: 'Herr Fischer', answer: 'e' },
        ],
      },
      teil3: {
        items: [
          {
            id: 'h3.1',
            question: 'Was isst der Mann?',
            options: ['Schnitzel mit Pommes.', 'Fisch mit Kartoffeln.', 'Gemüsesuppe.'],
            answer: 2,
            audio: [
              { s: 'f', de: 'Haben Sie schon gewählt?' },
              { s: 'm', de: 'Ja, ich nehme das Schnitzel mit Pommes.' },
              { s: 'f', de: 'Das Schnitzel ist leider aus. Wir haben aber heute Fisch mit Kartoffeln.' },
              { s: 'm', de: 'Hm, Fisch mag ich nicht so. Dann nehme ich die Gemüsesuppe.' },
            ],
          },
          {
            id: 'h3.2',
            question: 'Wohin fährt die Familie in den Urlaub?',
            options: ['Nach Italien.', 'An die Nordsee.', 'In die Berge.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Fahrt ihr dieses Jahr wieder nach Italien?' },
              { s: 'f', de: 'Nein, im August ist es uns dort zu heiß. Wir fahren an die Nordsee. Die Kinder wollen am Strand spielen.' },
            ],
          },
          {
            id: 'h3.3',
            question: 'Warum kommt die Frau zu spät?',
            options: ['Der Bus ist nicht gekommen.', 'Sie hat verschlafen.', 'Sie hatte einen Unfall.'],
            answer: 0,
            audio: [
              { s: 'm', de: 'Da bist du ja endlich! Es ist schon halb neun.' },
              { s: 'f', de: 'Entschuldige! Mein Bus ist nicht gekommen, und ich musste zu Fuß gehen.' },
            ],
          },
          {
            id: 'h3.4',
            question: 'Was ist das Problem mit der neuen Wohnung?',
            options: ['Sie ist zu klein.', 'Sie ist zu dunkel.', 'Die Nachbarn sind laut.'],
            answer: 2,
            audio: [
              { s: 'f', de: 'Und, wie ist deine neue Wohnung?' },
              { s: 'm', de: 'Eigentlich sehr schön, groß und hell. Aber die Nachbarn sind so laut! Sie machen jede Nacht Musik.' },
            ],
          },
          {
            id: 'h3.5',
            question: 'Was kauft der Mann?',
            options: ['Einen Roman.', 'Einen Kalender.', 'Ein Kochbuch.'],
            answer: 1,
            audio: [
              { s: 'm', de: 'Ich brauche ein Geschenk für meine Freundin. Sie liest sehr gern.' },
              { s: 'f', de: 'Wie wäre es mit diesem Roman? Der ist gerade sehr beliebt.' },
              { s: 'm', de: 'Den hat sie schon. Haben Sie vielleicht einen schönen Kalender?' },
              { s: 'f', de: 'Ja, hier haben wir Kalender mit Fotos aus der ganzen Welt.' },
              { s: 'm', de: 'Super, den nehme ich.' },
            ],
          },
        ],
      },
      teil4: {
        audio: [
          { s: 'm', de: 'Willkommen bei „Menschen im Gespräch“. Herr Kraus, Sie haben zwanzig Jahre in Berlin gelebt, und jetzt wohnen Sie auf dem Land. Warum?' },
          { s: 'm2', de: 'Ja, das stimmt. Berlin war toll, aber auch sehr laut und teuer. Vor zwei Jahren ist unsere Tochter geboren. Dann wollten wir mehr Platz und mehr Natur.' },
          { s: 'm', de: 'Wo wohnen Sie jetzt?' },
          { s: 'm2', de: 'In einem kleinen Dorf in Brandenburg, mit nur achthundert Einwohnern. Wir haben ein altes Haus mit einem großen Garten gekauft.' },
          { s: 'm', de: 'Und Ihre Arbeit?' },
          { s: 'm2', de: 'Ich bin Grafiker und arbeite jetzt meistens von zu Hause. Nur einmal in der Woche fahre ich nach Berlin ins Büro. Mit dem Zug dauert das eine Stunde.' },
          { s: 'm', de: 'Was fehlt Ihnen auf dem Land?' },
          { s: 'm2', de: 'Am Anfang haben mir die Kinos und Restaurants gefehlt. Aber jetzt nicht mehr. Hier kennt jeder jeden, und die Nachbarn helfen sich. Das ist sehr schön.' },
          { s: 'm', de: 'Gibt es auch Probleme?' },
          { s: 'm2', de: 'Ja, der Bus fährt nur dreimal am Tag. Ohne Auto geht hier fast nichts.' },
        ],
        items: [
          { id: 'h4.1', statement: 'Herr Kraus hat früher in Berlin gewohnt.', answer: true },
          { id: 'h4.2', statement: 'Die Familie wohnt jetzt in einer Wohnung in einer Kleinstadt.', answer: false },
          { id: 'h4.3', statement: 'Herr Kraus fährt jeden Tag nach Berlin.', answer: false },
          { id: 'h4.4', statement: 'Im Dorf helfen sich die Nachbarn.', answer: true },
          { id: 'h4.5', statement: 'Auf dem Land braucht man ein Auto.', answer: true },
        ],
      },
    },

    schreiben: {
      teil1: {
        situation: 'Ihre Freundin Sandra hat Sie am Freitag zum Abendessen eingeladen. Sie möchten gern kommen. Schreiben Sie Sandra eine Nachricht.',
        register: 'informal',
        points: [
          { de: 'Bedanken Sie sich für die Einladung.', en: 'Thank her for the invitation.', keys: ['danke', 'dank'] },
          { de: 'Fragen Sie, was Sie mitbringen sollen.', en: 'Ask what you should bring.', keys: ['mitbring', 'bringen', 'soll ich'] },
          { de: 'Fragen Sie, wie Sie zu Sandras Wohnung kommen.', en: 'Ask how to get to Sandra’s flat.', keys: ['weg', 'adresse', 'wie komme', 'bus', 'straße', 'wohnst'] },
        ],
        sample:
          'Liebe Sandra,\n\nvielen Dank für die Einladung! Ich komme am Freitag gern. Soll ich etwas mitbringen? Und wie komme ich zu deiner Wohnung?\n\nBis Freitag\n{name}',
      },
      teil2: {
        situation: 'Sie haben am Dienstag um 10 Uhr einen Termin bei Ihrer Ärztin, Frau Dr. Hoffmann. Sie können nicht kommen. Schreiben Sie eine E-Mail an die Praxis.',
        register: 'formal',
        points: [
          { de: 'Sagen Sie, warum Sie nicht kommen können.', en: 'Say why you can’t come.', keys: ['weil', 'muss', 'arbeit', 'krank', 'kind', 'leider'] },
          { de: 'Bitten Sie um einen neuen Termin.', en: 'Ask for a new appointment.', keys: ['neuen termin', 'anderen termin', 'termin', 'verschieben'] },
          { de: 'Sagen Sie, wann Sie Zeit haben.', en: 'Say when you are free.', keys: ['montag', 'mittwoch', 'donnerstag', 'freitag', 'vormittag', 'nachmittag', 'uhr', 'zeit'] },
        ],
        sample:
          'Sehr geehrte Frau Dr. Hoffmann,\n\nleider kann ich am Dienstag um 10 Uhr nicht kommen, weil ich arbeiten muss. Kann ich bitte einen neuen Termin bekommen? Ich habe am Donnerstagnachmittag Zeit.\n\nMit freundlichen Grüßen\n{name}',
      },
    },

    sprechen: {
      teil1: {
        cards: [
          { word: 'Familie', sampleQ: 'Hast du Geschwister?', partnerQ: 'Wie viele Personen gibt es in deiner Familie?', sampleA: 'Wir sind vier: meine Eltern, meine Schwester und ich.' },
          { word: 'Sport', sampleQ: 'Welchen Sport machst du gern?', partnerQ: 'Was isst du am liebsten?', sampleA: 'Am liebsten esse ich Nudeln mit Tomatensoße.' },
          { word: 'Lieblingsessen', sampleQ: 'Was ist dein Lieblingsessen?', partnerQ: 'Was hast du letztes Wochenende gemacht?', sampleA: 'Ich habe Freunde getroffen, und wir sind ins Kino gegangen.' },
          { word: 'Wochenende', sampleQ: 'Was machst du am Wochenende?', partnerQ: 'Wie lange lernst du schon Deutsch?', sampleA: 'Ich lerne seit einem Jahr Deutsch.' },
        ],
      },
      teil2: {
        topic: 'Was machen Sie in Ihrer Freizeit?',
        prompts: [
          { de: 'Was?', keys: ['gern', 'spiele', 'koche', 'lese', 'gehe', 'mache'] },
          { de: 'Wann?', keys: ['abend', 'wochenende', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag', 'manchmal', 'oft', 'jeden'] },
          { de: 'Mit wem?', keys: ['mit meiner', 'mit meinem', 'mit meinen', 'allein', 'freund', 'kollegen'] },
          { de: 'Was möchten Sie gern einmal machen?', keys: ['möchte', 'würde', 'einmal', 'gern einmal'] },
        ],
        sample:
          'In meiner Freizeit koche ich gern, und ich spiele Badminton. Badminton spiele ich jeden Mittwochabend und manchmal am Wochenende. Ich spiele mit meinen Kollegen, und wir haben viel Spaß zusammen. Ich möchte gern einmal einen Tanzkurs machen, weil ich gern Musik höre.',
        followQ: 'Haben Sie in der Woche genug Freizeit?',
        followA: 'Nicht immer. Ich arbeite viel, aber am Wochenende habe ich mehr Zeit.',
      },
      teil3: {
        task: 'Ihre Kollegin hat bald Geburtstag. Sie möchten am Donnerstag zusammen ein Geschenk kaufen. Wann haben Sie beide Zeit?',
        day: 'Donnerstag',
        calendar: [
          { t: '8:00', e: 'Arbeit' },
          { t: '9:00', e: 'Arbeit' },
          { t: '10:00', e: 'Arbeit' },
          { t: '11:00', e: 'Arbeit' },
          { t: '12:00', e: 'Mittagessen mit dem Chef' },
          { t: '13:00', e: 'Arbeit' },
          { t: '14:00', e: 'Arbeit' },
          { t: '15:00', e: '' },
          { t: '16:00', e: 'Zahnarzt' },
          { t: '17:00', e: '' },
          { t: '18:00', e: 'Sport' },
        ],
        turns: [
          { partner: 'Hallo! Können wir am Donnerstag in der Mittagspause einkaufen gehen?', sample: 'Um zwölf geht es leider nicht, da esse ich mit meinem Chef. Hast du um drei Zeit?' },
          { partner: 'Um drei habe ich noch eine Besprechung. Und um vier?', sample: 'Um vier muss ich zum Zahnarzt. Geht es um fünf?' },
          { partner: 'Um fünf ist perfekt! Was wollen wir ihr schenken?', sample: 'Vielleicht ein Buch? Sie liest doch gern. Oder Blumen?' },
          { partner: 'Ein Buch ist eine gute Idee. Wo treffen wir uns?', sample: 'Treffen wir uns um fünf vor der Buchhandlung. Bis Donnerstag!' },
        ],
      },
    },
  },
}
