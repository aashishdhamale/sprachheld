/**
 * A2 · L14 — Listening: a tenant phones the caretaker about a cold radiator.
 *
 * Short spoken lines for the de-DE TTS voice: no numbers written as digits
 * where a word does the job, no subordinate clause longer than four words.
 * Two times are offered on purpose (neun bis elf Uhr / vier Uhr), so the
 * learner has to follow the negotiation to the end.
 *
 * Exercise ids: x.a2.l14.19 … x.a2.l14.22.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l14.heizung-kaputt',
  level: 'A2',
  title: 'Die Heizung ist kalt',
  titleEn: 'The heating is cold',
  minutes: 4,
  intro:
    'Frau Gruber phones the caretaker of her building. Listen for the floor she lives on, which room the problem is in, and the appointment they finally agree on.',
  transcriptHidden: true,
  script: [
    { who: 'Hausmeister', text: 'Hausmeisterservice Berger, guten Morgen.' },
    { who: 'Frau Gruber', text: 'Guten Morgen, hier ist Gruber aus dem vierten Stock.' },
    { who: 'Frau Gruber', text: 'Meine Heizung im Wohnzimmer funktioniert seit Samstag nicht.' },
    { who: 'Hausmeister', text: 'Das tut mir leid. Ist die Heizung ganz kalt?' },
    { who: 'Frau Gruber', text: 'Ja, ganz kalt. In der Küche ist sie aber warm.' },
    { who: 'Hausmeister', text: 'Gut, dann ist nur ein Heizkörper kaputt.' },
    { who: 'Hausmeister', text: 'Ich komme morgen zwischen neun und elf Uhr.' },
    { who: 'Frau Gruber', text: 'Morgen früh arbeite ich leider. Geht es auch am Nachmittag?' },
    { who: 'Hausmeister', text: 'Dann komme ich morgen um vier Uhr. Passt das?' },
    { who: 'Frau Gruber', text: 'Ja, um vier Uhr bin ich zu Hause. Vielen Dank!' },
    { who: 'Hausmeister', text: 'Gern. Bitte melden Sie den Schaden auch dem Vermieter.' },
  ],
  questions: [
    {
      id: 'x.a2.l14.19',
      kind: 'mcq',
      prompt: 'In welchem Stock wohnt Frau Gruber?',
      options: ['Im vierten Stock.', 'Im dritten Stock.', 'Im ersten Stock.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'She gives her floor while introducing herself: "hier ist Gruber aus dem vierten Stock". On the phone Germans say the surname first, then where they are calling from.',
    },
    {
      id: 'x.a2.l14.20',
      kind: 'mcq',
      prompt: 'Welche Heizung ist kaputt?',
      options: ['Die Heizung im Wohnzimmer.', 'Die Heizung in der Küche.', 'Die Heizung im Bad.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'She names the living room, then adds that the kitchen radiator is warm — the second sentence is there to rule the kitchen out, not to name a second fault.',
    },
    {
      id: 'x.a2.l14.21',
      kind: 'mcq',
      prompt: 'Wann kommt der Hausmeister?',
      options: ['Morgen um vier Uhr.', 'Morgen zwischen neun und elf Uhr.', 'Heute um vier Uhr.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      hint: 'He offers one time, she says no, and then he offers another one.',
      explain:
        'The morning slot is only an offer — she works then, so he moves it: "Dann komme ich morgen um vier Uhr." In a negotiation the last time named is the one that counts.',
    },
    {
      id: 'x.a2.l14.22',
      kind: 'blank',
      sentence: 'Frau Gruber soll den Schaden auch ___ melden.',
      options: ['dem Vermieter', 'den Vermieter', 'der Vermieter', 'dem Mieter'],
      answer: 'dem Vermieter',
      skill: 'listening',
      difficulty: 2,
      tags: ['dativ', 'akkusativ'],
      explain:
        'melden has two objects: the damage is the thing reported (accusative, den Schaden) and the landlord is the person who gets the news (dative, dem Vermieter).',
    },
  ],
}

export default listening
