/**
 * A2 · L18 — Listening: a customer and a shop assistant sort out a faulty phone.
 *
 * Twelve short lines for the de-DE TTS voice. The four facts the questions ask
 * about — what the phone does, when it was bought, what happens to it now, and
 * how long that takes — each sit in exactly one line, and every wrong option is
 * something the audio actually rules out.
 *
 * Exercise ids: x.a2.l18.25 … x.a2.l18.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l18.handy-reparatur',
  level: 'A2',
  title: 'Das Handy geht immer aus',
  titleEn: 'The phone keeps switching off',
  minutes: 4,
  intro:
    'Frau Özkan takes her phone back to the shop where she bought it. Listen for what the phone does wrong, when she bought it, what the assistant does with it and how long that takes.',
  transcriptHidden: true,
  script: [
    { who: 'Verkäufer', text: 'Guten Tag! Was kann ich für Sie tun?' },
    { who: 'Frau Özkan', text: 'Guten Tag. Mein Handy funktioniert nicht richtig. Es geht immer wieder aus.' },
    { who: 'Verkäufer', text: 'Das tut mir leid. Seit wann haben Sie das Problem?' },
    { who: 'Frau Özkan', text: 'Seit Samstag. Ich habe das Handy vor drei Wochen hier gekauft.' },
    { who: 'Verkäufer', text: 'Haben Sie die Quittung dabei?' },
    { who: 'Frau Özkan', text: 'Ja, hier ist sie. Ich habe doch noch Garantie, oder?' },
    { who: 'Verkäufer', text: 'Natürlich, zwei Jahre. Wir schicken das Handy zur Reparatur.' },
    { who: 'Frau Özkan', text: 'Wie lange dauert das denn?' },
    { who: 'Verkäufer', text: 'Ungefähr zehn Tage. Für die Zeit bekommen Sie ein Ersatzhandy.' },
    { who: 'Frau Özkan', text: 'Kann ich es nicht einfach umtauschen?' },
    { who: 'Verkäufer', text: 'Leider nicht. Aber wir rufen Sie an, wenn das Handy fertig ist.' },
    { who: 'Frau Özkan', text: 'Gut, dann klappt das so. Vielen Dank für Ihre Hilfe!' },
  ],
  questions: [
    {
      id: 'x.a2.l18.25',
      kind: 'mcq',
      prompt: 'Was ist das Problem mit dem Handy?',
      options: ['Es geht immer wieder aus.', 'Der Bildschirm ist kaputt.', 'Es ist zu langsam.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['trennbar'],
      explain:
        'Frau Özkan names the fault in her first sentence: Es geht immer wieder aus. ausgehen is separable, so the prefix aus arrives last — wait for the end of the sentence before you decide what the verb was.',
    },
    {
      id: 'x.a2.l18.26',
      kind: 'mcq',
      prompt: 'Wann hat Frau Özkan das Handy gekauft?',
      options: ['Vor drei Wochen.', 'Vor drei Tagen.', 'Vor drei Monaten.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Two time phrases stand right next to each other: seit Samstag is when the trouble started, vor drei Wochen is when she bought it. vor + dative always means "ago", so listen for the noun after it.',
    },
    {
      id: 'x.a2.l18.27',
      kind: 'mcq',
      prompt: 'Was macht der Verkäufer mit dem Handy?',
      options: ['Er schickt es zur Reparatur.', 'Er tauscht es sofort um.', 'Er gibt ihr das Geld zurück.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'He says Wir schicken das Handy zur Reparatur, and when she asks for an exchange he answers Leider nicht. A question in the dialogue that gets a no is not an answer — only what he actually does counts.',
    },
    {
      id: 'x.a2.l18.28',
      kind: 'mcq',
      prompt: 'Wie lange dauert die Reparatur?',
      options: ['Ungefähr zehn Tage.', 'Ungefähr zwei Tage.', 'Ungefähr zehn Wochen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'The answer is a short phrase without a verb: Ungefähr zehn Tage. Both parts matter — the number zehn and the unit Tage — so hold the whole phrase in your head, not just the number.',
    },
  ],
}

export default listening
