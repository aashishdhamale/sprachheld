/**
 * A2 · L12 — Reading: the information sheet of a Hausarztpraxis, plus the
 * short message a patient sends to cancel her appointment.
 *
 * Exercise ids x.a2.l12.21 … x.a2.l12.25 belong to this file.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l12.praxis-info',
  level: 'A2',
  title: 'Informationen für unsere Patienten',
  minutes: 4,
  intro:
    'The sheet that hangs next to the door of every German family practice — and the message Frau Sander sends when she cannot keep her appointment.',
  paragraphs: [
    'Hausarztpraxis Dr. Berger: Informationen für unsere Patienten',
    'Unsere Sprechstunde ist von Montag bis Freitag von 8 bis 12 Uhr. Am Dienstag und Donnerstag sind wir auch nachmittags von 15 bis 18 Uhr für Sie da. Am Mittwochnachmittag ist die Praxis geschlossen.',
    'Bitte bringen Sie zu jedem Termin Ihre Versichertenkarte mit. Wenn Sie zu einem Termin nicht kommen können, sagen Sie ihn bitte 24 Stunden vorher ab. Bei dringenden Beschwerden rufen Sie bitte morgens zwischen 8 und 9 Uhr an. Rezepte können Sie telefonisch bestellen und am nächsten Tag bei uns abholen.',
    'Nachricht von Frau Sander:',
    'Guten Tag, ich habe morgen um 10 Uhr einen Termin bei Dr. Berger. Leider muss ich den Termin absagen, weil ich dringend nach Hamburg fahren muss. Können wir ihn auf nächste Woche verschieben? Am Donnerstagnachmittag habe ich Zeit. Vielen Dank und viele Grüße, Julia Sander',
  ],
  glossary: [
    { de: 'die Hausarztpraxis', en: 'family doctor’s practice' },
    { de: 'geschlossen', en: 'closed' },
    { de: 'mitbringen', en: 'to bring along' },
    { de: 'absagen', en: 'to cancel' },
    { de: 'vorher', en: 'beforehand, in advance' },
    { de: 'telefonisch', en: 'by phone' },
    { de: 'abholen', en: 'to collect, to pick up' },
    { de: 'Viele Grüße', en: 'best wishes (end of a message)' },
  ],
  questions: [
    {
      id: 'x.a2.l12.21',
      kind: 'mcq',
      prompt: 'An welchem Nachmittag ist die Praxis geschlossen?',
      options: ['Am Mittwochnachmittag', 'Am Dienstagnachmittag', 'Am Donnerstagnachmittag'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The sheet names Dienstag and Donnerstag as the two open afternoons and then says: Am Mittwochnachmittag ist die Praxis geschlossen. Reading the two sentences together gives the answer.',
    },
    {
      id: 'x.a2.l12.22',
      kind: 'mcq',
      prompt: 'Was müssen Patienten zu jedem Termin mitbringen?',
      options: ['Ein Rezept', 'Die Versichertenkarte', 'Eine Krankmeldung'],
      answer: 1,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Bitte bringen Sie zu jedem Termin Ihre Versichertenkarte mit. The card is what the practice needs to bill your insurance; the Rezept and the Krankmeldung are things you take away, not things you bring.',
    },
    {
      id: 'x.a2.l12.23',
      kind: 'mcq',
      prompt: 'Wie früh muss man einen Termin absagen?',
      options: ['Am selben Morgen', 'Eine Woche vorher', '24 Stunden vorher'],
      answer: 2,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The text says 24 Stunden vorher — one full day in advance. vorher always counts backwards from the appointment, so it is not "within 24 hours afterwards".',
    },
    {
      id: 'x.a2.l12.24',
      kind: 'mcq',
      prompt: 'Warum sagt Frau Sander ihren Termin ab?',
      options: ['Sie ist krank.', 'Sie muss dringend nach Hamburg fahren.', 'Sie hat den Termin vergessen.'],
      answer: 1,
      skill: 'reading',
      difficulty: 2,
      tags: ['nebensatz'],
      explain:
        'She gives her reason in a weil-clause: weil ich dringend nach Hamburg fahren muss. In a weil-clause the conjugated verb goes to the very end, so muss is the last word.',
    },
    {
      id: 'x.a2.l12.25',
      kind: 'blank',
      sentence: 'Frau Sander möchte den Termin auf ___ verschieben.',
      options: ['nächste Woche', 'nächsten Monat', 'heute Nachmittag', 'morgen früh'],
      answer: 'nächste Woche',
      skill: 'reading',
      difficulty: 3,
      explain:
        'She asks: Können wir ihn auf nächste Woche verschieben? — verschieben auf takes the accusative, which is why it is auf nächste Woche and not auf nächster Woche.',
    },
  ],
}

export default reading
