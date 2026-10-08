/**
 * A2 · L15 — Listening: a customer phones the bank hotline about a blocked card.
 *
 * Twelve short lines for the de-DE TTS voice: every number is spelled out as a
 * word, no line runs longer than one breath, and the four facts the questions
 * ask about (why it is blocked, what to bring, what it costs, how late the
 * branch is open) each sit in exactly one line.
 *
 * Exercise ids: x.a2.l15.25 … x.a2.l15.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l15.karte-gesperrt',
  level: 'A2',
  title: 'Die Karte ist gesperrt',
  titleEn: 'The card is blocked',
  minutes: 4,
  intro:
    'Herr Yilmaz wanted to withdraw cash this morning, but the machine kept his card out of service. He calls the bank hotline. Listen for why the card is blocked, what he has to bring, what it costs and how long the branch is open today.',
  transcriptHidden: true,
  script: [
    { who: 'Frau Krause', text: 'Nordbank Kundenservice, mein Name ist Krause. Guten Tag.' },
    { who: 'Herr Yilmaz', text: 'Guten Tag, hier ist Yilmaz. Meine EC-Karte funktioniert nicht mehr.' },
    { who: 'Frau Krause', text: 'Das tut mir leid. Was ist denn genau passiert?' },
    { who: 'Herr Yilmaz', text: 'Ich wollte heute Morgen Geld abheben. Der Automat sagt: Karte gesperrt.' },
    { who: 'Frau Krause', text: 'Einen Moment bitte, ich schaue nach. Nennen Sie mir Ihr Geburtsdatum.' },
    { who: 'Herr Yilmaz', text: 'Der zwölfte April neunzehnhundertneunzig.' },
    { who: 'Frau Krause', text: 'Danke. Sie haben die PIN dreimal falsch eingegeben. Deshalb ist die Karte gesperrt.' },
    { who: 'Herr Yilmaz', text: 'Oh je. Was muss ich jetzt machen?' },
    { who: 'Frau Krause', text: 'Kommen Sie bitte mit Ihrem Ausweis in unsere Filiale. Dort bekommen Sie eine neue PIN.' },
    { who: 'Herr Yilmaz', text: 'Kostet das etwas?' },
    { who: 'Frau Krause', text: 'Die neue PIN kostet fünf Euro. Die Filiale hat heute bis sechzehn Uhr geöffnet.' },
    { who: 'Herr Yilmaz', text: 'Gut, dann komme ich gleich vorbei. Vielen Dank für Ihre Hilfe!' },
  ],
  questions: [
    {
      id: 'x.a2.l15.25',
      kind: 'mcq',
      prompt: 'Warum ist die EC-Karte gesperrt?',
      options: [
        'Herr Yilmaz hat die PIN dreimal falsch eingegeben.',
        'Das Konto von Herrn Yilmaz ist leer.',
        'Die Karte ist zu alt.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Frau Krause names the reason and then draws the conclusion with deshalb: Sie haben die PIN dreimal falsch eingegeben. Deshalb ist die Karte gesperrt. Whenever you hear deshalb, the reason came just before it.',
    },
    {
      id: 'x.a2.l15.26',
      kind: 'mcq',
      prompt: 'Was soll Herr Yilmaz in die Filiale mitbringen?',
      options: ['Seinen Ausweis.', 'Einen Kontoauszug.', 'Das alte Formular.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'The instruction comes as a Sie imperative with mit + dative: Kommen Sie bitte mit Ihrem Ausweis in unsere Filiale. German offices and banks almost always want the Ausweis, not paperwork.',
    },
    {
      id: 'x.a2.l15.27',
      kind: 'mcq',
      prompt: 'Was kostet die neue PIN?',
      options: ['Fünf Euro.', 'Nichts.', 'Fünfzehn Euro.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'He asks Kostet das etwas? and the answer is Die neue PIN kostet fünf Euro. Listen to the end of fünf — fünfzehn has an extra syllable, and that syllable is the whole difference.',
    },
    {
      id: 'x.a2.l15.28',
      kind: 'mcq',
      prompt: 'Bis wann hat die Filiale heute geöffnet?',
      options: ['Bis sechzehn Uhr.', 'Bis achtzehn Uhr.', 'Bis zwölf Uhr.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'The opening time is tacked on to the sentence about the five euros, so it is easy to miss: Die Filiale hat heute bis sechzehn Uhr geöffnet. German service lines use the 24-hour clock, so sechzehn Uhr is four in the afternoon.',
    },
  ],
}

export default listening
