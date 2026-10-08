/**
 * A2 · L12 — Listening: a patient describes his symptoms at the reception
 * desk of a Hausarztpraxis.
 *
 * Every line is short and plain so the browser's TTS voice can speak it.
 * Exercise ids x.a2.l12.26 … x.a2.l12.29 belong to this file.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l12.am-empfang',
  level: 'A2',
  title: 'Am Empfang der Praxis',
  minutes: 4,
  intro:
    'Markus Weber comes to the reception desk without an appointment. Listen for how long he has felt ill, what hurts, and what he needs for his employer.',
  script: [
    { who: 'Empfang', text: 'Praxis Doktor Berger, guten Morgen. Was kann ich für Sie tun?' },
    { who: 'Patient', text: 'Guten Morgen. Ich heiße Markus Weber. Ich fühle mich seit drei Tagen sehr schlecht.' },
    { who: 'Empfang', text: 'Welche Beschwerden haben Sie denn?' },
    { who: 'Patient', text: 'Ich habe starken Husten und Halsschmerzen.' },
    { who: 'Patient', text: 'Gestern Abend hatte ich auch Fieber.' },
    { who: 'Empfang', text: 'Haben Sie heute schon Fieber gemessen?' },
    { who: 'Patient', text: 'Ja, achtunddreißig Grad.' },
    { who: 'Empfang', text: 'Gut. Haben Sie Ihre Versichertenkarte dabei?' },
    { who: 'Patient', text: 'Ja, hier bitte. Ich brauche auch eine Krankmeldung für meinen Chef.' },
    { who: 'Empfang', text: 'Das macht die Ärztin. Bitte setzen Sie sich ins Wartezimmer.' },
    { who: 'Patient', text: 'Wie lange muss ich denn warten?' },
    { who: 'Empfang', text: 'Ungefähr zwanzig Minuten. Dann untersucht die Ärztin Sie.' },
  ],
  transcriptHidden: true,
  questions: [
    {
      id: 'x.a2.l12.26',
      kind: 'mcq',
      prompt: 'Wie lange fühlt sich der Patient schon schlecht?',
      options: ['Seit gestern', 'Seit drei Tagen', 'Seit einer Woche'],
      answer: 1,
      skill: 'listening',
      difficulty: 1,
      explain:
        'He says: Ich fühle mich seit drei Tagen sehr schlecht. seit names the starting point of something that is still going on, so German keeps the present tense here.',
    },
    {
      id: 'x.a2.l12.27',
      kind: 'mcq',
      prompt: 'Welche Beschwerden nennt der Patient zuerst?',
      options: ['Husten und Halsschmerzen', 'Bauchschmerzen', 'Kopfschmerzen und Rückenschmerzen'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Ich habe starken Husten und Halsschmerzen is his first answer to "Welche Beschwerden haben Sie?". The fever comes one sentence later and only for yesterday evening.',
    },
    {
      id: 'x.a2.l12.28',
      kind: 'mcq',
      prompt: 'Was braucht der Patient für seinen Chef?',
      options: ['Ein Rezept', 'Eine Versichertenkarte', 'Eine Krankmeldung'],
      answer: 2,
      skill: 'listening',
      difficulty: 2,
      explain:
        'He says: Ich brauche auch eine Krankmeldung für meinen Chef. Keep the three papers apart — the Rezept goes to the pharmacy, the card stays with the practice, the Krankmeldung goes to your employer.',
    },
    {
      id: 'x.a2.l12.29',
      kind: 'mcq',
      prompt: 'Wie lange muss der Patient warten?',
      options: ['Ungefähr zehn Minuten', 'Ungefähr zwanzig Minuten', 'Ungefähr eine Stunde'],
      answer: 1,
      skill: 'listening',
      difficulty: 3,
      explain:
        'The answer is a single short phrase at the very end: Ungefähr zwanzig Minuten. ungefähr means "roughly", so it is an estimate rather than a promise.',
    },
  ],
}

export default listening
