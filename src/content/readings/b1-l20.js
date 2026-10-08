/**
 * B1 · L20 — Reading: an enquiry, the school's reply, and a note to a friend.
 *
 * Three real e-mail shapes side by side so the register difference is the
 * point: a formal enquiry with könnten and ob-clauses, the school's formal
 * reply with Im Anhang finden Sie and um … zu, and the same news told to a
 * friend with du, stell dir vor and Liebe Grüße.
 *
 * Exercise ids: x.b1.l20.20 … x.b1.l20.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l20.anfrage-sprachkurs',
  level: 'B1',
  title: 'Eine Anfrage, eine Antwort und eine Nachricht an einen Freund',
  titleEn: 'An enquiry, a reply and a message to a friend',
  minutes: 6,
  intro:
    'Ravi Sharma works as a nurse and wants to improve his German. Read his enquiry to a language school, the school’s reply, and then what he writes to his friend Jonas.',
  paragraphs: [
    'Sehr geehrte Damen und Herren, auf Ihrer Internetseite habe ich gelesen, dass Sie im Herbst einen Abendkurs für Deutsch B2 anbieten. Ich arbeite als Krankenpfleger und habe nur nach 18 Uhr Zeit. Könnten Sie mir bitte mitteilen, wann der Kurs beginnt und wie viel er kostet? Außerdem möchte ich wissen, ob es vorher einen Test gibt. Ich freue mich auf Ihre Rückmeldung. Mit freundlichen Grüßen, Ravi Sharma',
    'Sehr geehrter Herr Sharma, vielen Dank für Ihre Anfrage. Der Abendkurs B2 beginnt am 6. Oktober und findet montags und mittwochs von 18:30 bis 20:00 Uhr statt. Er kostet 390 Euro. Um den richtigen Kurs für Sie zu finden, machen wir vorher einen kurzen Einstufungstest. Im Anhang finden Sie das Anmeldeformular. Bei Fragen können Sie sich gern an mich wenden. Mit freundlichen Grüßen, Claudia Wenzel, Sprachschule Lingua',
    'Hallo Jonas, stell dir vor: Ich habe mich für einen Deutschkurs angemeldet! Der Kurs ist zweimal pro Woche am Abend, also kann ich trotzdem weiter im Krankenhaus arbeiten. Vorher muss ich noch einen Test machen, aber das ist kein Problem. Hast du Lust, am Mittwoch nach dem Kurs mal etwas trinken zu gehen? Liebe Grüße, Ravi',
  ],
  glossary: [
    { de: 'die Internetseite', en: 'website' },
    { de: 'anbieten', en: 'to offer' },
    { de: 'außerdem', en: 'in addition, also' },
    { de: 'stattfinden', en: 'to take place' },
    { de: 'der Einstufungstest', en: 'placement test' },
    { de: 'das Anmeldeformular', en: 'registration form' },
    { de: 'stell dir vor', en: 'guess what, imagine' },
    { de: 'sich anmelden', en: 'to sign up, to register' },
  ],
  questions: [
    {
      id: 'x.b1.l20.20',
      kind: 'mcq',
      prompt: 'Warum schreibt Herr Sharma an die Sprachschule?',
      options: ['Er möchte Informationen über einen Kurs.', 'Er möchte sich über einen Kurs beschweren.', 'Er sucht eine Arbeit als Lehrer.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'It is an Anfrage: he asks when the course starts, what it costs and whether there is a test. Nothing in it is a complaint.',
    },
    {
      id: 'x.b1.l20.21',
      kind: 'mcq',
      prompt: 'Wann hat Herr Sharma Zeit für einen Kurs?',
      options: ['Nur am Abend nach 18 Uhr.', 'Nur am Vormittag.', 'Nur am Wochenende.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'He works as a nurse and says he only has time nach 18 Uhr — which is exactly why he asks about an Abendkurs.',
    },
    {
      id: 'x.b1.l20.22',
      kind: 'mcq',
      prompt: 'Warum macht die Schule vorher einen Test?',
      options: ['Um den richtigen Kurs für ihn zu finden.', 'Um ihm ein Zertifikat zu geben.', 'Um den Preis zu berechnen.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['infinitiv'],
      explain:
        'The school says it with um … zu: "Um den richtigen Kurs für Sie zu finden, machen wir vorher einen kurzen Einstufungstest." The um-clause opens the sentence, so machen comes straight after it.',
    },
    {
      id: 'x.b1.l20.23',
      kind: 'blank',
      sentence: 'Frau Wenzel schickt das Anmeldeformular im ___.',
      options: ['Anhang', 'Betreff', 'Brief', 'Kurs'],
      answer: 'Anhang',
      skill: 'reading',
      difficulty: 2,
      explain:
        '"Im Anhang finden Sie das Anmeldeformular" — the standard line for an attachment. im is in + dem, because der Anhang is masculine.',
    },
    {
      id: 'x.b1.l20.24',
      kind: 'mcq',
      prompt: 'Was ist im dritten Text anders als in den ersten beiden?',
      options: [
        'Ravi schreibt informell, mit du und „Liebe Grüße“.',
        'Ravi schreibt sehr formell.',
        'Ravi schreibt an die Sprachschule.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      tags: ['formell'],
      explain:
        'Same news, new register: Hallo instead of Sehr geehrte, du and stell dir vor instead of Sie and Könnten Sie, Liebe Grüße instead of Mit freundlichen Grüßen.',
    },
  ],
}

export default reading
