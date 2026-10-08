/**
 * A2 · L11 — Listening: checking in at a hotel reception.
 *
 * Short spoken lines for the de-DE TTS voice. Every question can be answered
 * from the audio alone, and each has exactly one defensible answer: the room
 * type, the number of nights, the breakfast times and the check-out time are
 * all said out loud, once.
 *
 * Exercise ids x.a2.l11.25 … x.a2.l11.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l11.an-der-rezeption',
  level: 'A2',
  title: 'An der Rezeption',
  titleEn: 'At the hotel reception',
  minutes: 3,
  intro:
    'Half past eight in the evening. A guest arrives at the Hotel Seeblick and checks in. Listen for four things: the type of room, how long he stays, the breakfast times and the check-out time.',
  transcriptHidden: true,
  script: [
    { who: 'Rezeptionistin', text: 'Guten Abend und willkommen im Hotel Seeblick!' },
    { who: 'Gast', text: 'Guten Abend. Ich habe ein Einzelzimmer für zwei Nächte reserviert.' },
    { who: 'Rezeptionistin', text: 'Sehr gern. Wie ist Ihr Name, bitte?' },
    { who: 'Gast', text: 'Mein Name ist Daniel Brenner.' },
    { who: 'Rezeptionistin', text: 'Einen Moment, bitte. Ja, hier ist die Buchung: Zimmer 204 im zweiten Stock.' },
    { who: 'Gast', text: 'Sehr gut. Ist das Frühstück dabei?' },
    { who: 'Rezeptionistin', text: 'Ja, natürlich. Es gibt Frühstück von sieben bis halb elf im Restaurant.' },
    { who: 'Gast', text: 'Prima. Ich bin mit dem Zug gekommen und habe noch eine Frage.' },
    { who: 'Gast', text: 'Wann muss ich am Freitag das Zimmer verlassen?' },
    { who: 'Rezeptionistin', text: 'Bis elf Uhr, bitte. Hier ist Ihre Karte. Einen schönen Aufenthalt!' },
    { who: 'Gast', text: 'Vielen Dank. Gute Nacht!' },
  ],
  questions: [
    {
      id: 'x.a2.l11.25',
      kind: 'mcq',
      prompt: 'Was für ein Zimmer hat der Gast reserviert?',
      options: ['Ein Einzelzimmer.', 'Ein Doppelzimmer.', 'Ein Zimmer für drei Personen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['perfekt'],
      explain:
        'He says "Ich habe ein Einzelzimmer für zwei Nächte reserviert" — Einzel- means the room is for one person. The Perfekt tells you the booking already happened.',
    },
    {
      id: 'x.a2.l11.26',
      kind: 'mcq',
      prompt: 'Wie lange bleibt der Gast im Hotel?',
      options: ['Zwei Nächte.', 'Eine Nacht.', 'Drei Nächte.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'The length of the stay comes in the same sentence as the room: "für zwei Nächte". Hotels always count in nights, not in days.',
    },
    {
      id: 'x.a2.l11.27',
      kind: 'mcq',
      prompt: 'Wann gibt es Frühstück?',
      options: ['Von sieben bis halb elf.', 'Von acht bis zehn.', 'Von halb sieben bis elf.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'The receptionist says "von sieben bis halb elf". halb elf counts towards eleven, so breakfast ends at 10:30, not at 11.',
    },
    {
      id: 'x.a2.l11.28',
      kind: 'blank',
      sentence: 'Der Gast muss das Zimmer bis ___ Uhr verlassen.',
      options: ['elf', 'zehn', 'zwölf', 'neun'],
      answer: 'elf',
      skill: 'listening',
      difficulty: 3,
      hint: 'Two similar times are spoken. One is about breakfast, the other about leaving the room.',
      explain:
        'He asks when he has to leave the room and she answers "Bis elf Uhr". halb elf (10:30) is the end of breakfast — a different time, so the two must be kept apart.',
    },
  ],
}

export default listening
