/**
 * B1 · L20 — Listening: a colleague helps with an e-mail to a new client.
 *
 * Twelve lines between two colleagues who say du — and talk about how to
 * write Sie. The four facts the questions test (why Mia is unsure, the
 * subject line, last week's mistake, the deadline) each sit in one line,
 * and the wrong options are all mentioned in the conversation too.
 *
 * Exercise ids: x.b1.l20.25 … x.b1.l20.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l20.mail-an-kunden',
  level: 'B1',
  title: 'Eine E-Mail an einen neuen Kunden',
  titleEn: 'An e-mail to a new client',
  minutes: 4,
  intro:
    'Mia has to write to a client she has never met and asks her colleague Paul for help. Listen for why she is unsure, what goes in the subject line, what happened to her last week and when the client must sign.',
  transcriptHidden: true,
  script: [
    { who: 'Mia', text: 'Du, Paul, hast du kurz Zeit? Ich muss eine E-Mail an einen neuen Kunden schreiben.' },
    { who: 'Paul', text: 'Klar. Kennst du den Kunden schon persönlich?' },
    { who: 'Mia', text: 'Nein, noch nicht. Deshalb bin ich unsicher, wie ich anfangen soll.' },
    { who: 'Paul', text: 'Dann schreib auf jeden Fall „Sehr geehrter Herr Lorenz“ und benutz „Sie“.' },
    { who: 'Mia', text: 'Okay. Und was schreibe ich in den Betreff?' },
    { who: 'Paul', text: 'Etwas Kurzes, zum Beispiel „Ihr Angebot vom 12. Mai“.' },
    { who: 'Mia', text: 'Gut. Ich soll ihm auch den Vertrag schicken.' },
    { who: 'Paul', text: 'Dann schreib: „Im Anhang finden Sie den Vertrag.“ Und vergiss nicht, ihn wirklich anzuhängen!' },
    { who: 'Mia', text: 'Das ist mir letzte Woche passiert. Ich habe den Anhang einfach vergessen.' },
    { who: 'Paul', text: 'Siehst du! Und bitte ihn, den Vertrag bis Donnerstag zu unterschreiben. Am Freitag brauchen wir ihn schon.' },
    { who: 'Mia', text: 'Super, danke. Und am Ende „Mit freundlichen Grüßen“, oder?' },
    { who: 'Paul', text: 'Genau. „Liebe Grüße“ schreibst du nur an Freunde.' },
  ],
  questions: [
    {
      id: 'x.b1.l20.25',
      kind: 'mcq',
      prompt: 'Warum ist Mia unsicher?',
      options: ['Sie kennt den Kunden noch nicht persönlich.', 'Sie hat den Vertrag verloren.', 'Sie spricht nicht gut Deutsch.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Paul asks whether she knows the client personally; she says Nein, noch nicht — and deshalb links that straight to being unsure how to start.',
    },
    {
      id: 'x.b1.l20.26',
      kind: 'mcq',
      prompt: 'Was soll im Betreff stehen?',
      options: ['Etwas Kurzes, zum Beispiel „Ihr Angebot vom 12. Mai“.', '„Sehr geehrter Herr Lorenz“.', 'Nur der Name des Kunden.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        '„Sehr geehrter Herr Lorenz“ is the Anrede, the greeting line — Paul gives it as advice for the start of the e-mail, not for the subject line.',
    },
    {
      id: 'x.b1.l20.27',
      kind: 'mcq',
      prompt: 'Was ist Mia letzte Woche passiert?',
      options: ['Sie hat den Anhang vergessen.', 'Sie hat die falsche Anrede benutzt.', 'Sie hat die E-Mail an den falschen Kunden geschickt.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['infinitiv'],
      explain:
        'Paul warns vergiss nicht, ihn wirklich anzuhängen — and Mia answers that exactly this happened to her: Ich habe den Anhang einfach vergessen.',
    },
    {
      id: 'x.b1.l20.28',
      kind: 'mcq',
      prompt: 'Bis wann soll der Kunde den Vertrag unterschreiben?',
      options: ['Bis Donnerstag.', 'Bis Freitag.', 'Bis zum 12. Mai.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'The deadline for signing is Donnerstag; Freitag is when the company needs the contract, and the 12th of May is the date of the offer in the subject line.',
    },
  ],
}

export default listening
