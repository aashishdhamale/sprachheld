/**
 * A2 · L11 — Reading: the confirmation email a hotel sends after a booking.
 *
 * Real Sie-form service German: Perfekt for what the guest has booked, dative
 * after mit / von / vor / zu, and the practical details a guest actually needs
 * (price, check-in time, how to get there, how to cancel).
 *
 * Exercise ids x.a2.l11.20 … x.a2.l11.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l11.buchungsbestaetigung',
  level: 'A2',
  title: 'Ihre Buchungsbestätigung',
  titleEn: 'Your booking confirmation',
  minutes: 4,
  intro:
    'Frau Weber has booked a room for a long weekend. Two minutes later the hotel sends this email. Read it the way you would read your own: what, when, how much, and how do I get there?',
  paragraphs: [
    'Sehr geehrte Frau Weber,',
    'vielen Dank für Ihre Buchung. Wir freuen uns sehr auf Ihren Aufenthalt im Hotel Seeblick.',
    'Ihre Buchungsnummer ist 4812. Sie haben ein Doppelzimmer mit Frühstück für drei Übernachtungen gebucht, von Freitag bis Montag im März. Das Zimmer kostet 98 Euro pro Nacht, und das Frühstück ist im Preis schon dabei.',
    'Ihr Zimmer ist ab 15 Uhr frei. Am Montag ist der Check-out bis 11 Uhr möglich. Das Frühstück gibt es von sieben bis halb elf im Restaurant.',
    'Vom Hauptbahnhof fahren Sie mit der Straßenbahn Linie 2 direkt zum Hotel. Die Fahrt dauert nur zehn Minuten. Wir haben auch einen Parkplatz, er kostet 12 Euro pro Tag.',
    'Sie können die Buchung bis 48 Stunden vor der Ankunft kostenlos stornieren. Bitte schreiben Sie uns dafür kurz eine E-Mail.',
    'Gute Reise! Freundliche Grüße, Ihr Team vom Hotel Seeblick',
  ],
  glossary: [
    { de: 'die Buchungsnummer', en: 'booking reference number' },
    { de: 'die Übernachtung', en: 'overnight stay, night in a hotel' },
    { de: 'im Preis dabei', en: 'included in the price' },
    { de: 'der Check-out', en: 'check-out (leaving the room)' },
    { de: 'die Straßenbahn', en: 'tram' },
    { de: 'der Parkplatz', en: 'parking space' },
    { de: 'die Ankunft', en: 'arrival' },
    { de: 'stornieren', en: 'to cancel (a booking)' },
    { de: 'Freundliche Grüße', en: 'Kind regards (standard email sign-off)' },
  ],
  questions: [
    {
      id: 'x.a2.l11.20',
      kind: 'mcq',
      prompt: 'Wie viele Nächte bleibt Frau Weber im Hotel?',
      options: ['Drei Nächte.', 'Zwei Nächte.', 'Vier Nächte.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The email says "für drei Übernachtungen". An Übernachtung is one night in a hotel, and Friday to Monday is exactly three of them.',
    },
    {
      id: 'x.a2.l11.21',
      kind: 'mcq',
      prompt: 'Was ist im Preis schon dabei?',
      options: ['Das Frühstück.', 'Der Parkplatz.', 'Die Straßenbahn.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Only the breakfast is described as "im Preis schon dabei". The parking space is listed separately with its own price of 12 euros a day, so it costs extra.',
    },
    {
      id: 'x.a2.l11.22',
      kind: 'blank',
      sentence: 'Frau Weber hat ein ___ mit Frühstück gebucht.',
      options: ['Doppelzimmer', 'Einzelzimmer', 'Ferienhaus', 'Apartment'],
      answer: 'Doppelzimmer',
      skill: 'reading',
      difficulty: 2,
      tags: ['perfekt'],
      explain:
        'The third paragraph says "ein Doppelzimmer mit Frühstück". Doppel- means the room is for two people; ein Einzelzimmer would be for one.',
    },
    {
      id: 'x.a2.l11.23',
      kind: 'mcq',
      prompt: 'Wie kommt Frau Weber vom Hauptbahnhof zum Hotel?',
      options: ['Mit der Straßenbahn.', 'Mit dem Taxi.', 'Mit dem Bus.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['dativ'],
      explain:
        'The email names the tram: "mit der Straßenbahn Linie 2". German always names transport with mit + Dativ, so die Straßenbahn becomes der Straßenbahn.',
    },
    {
      id: 'x.a2.l11.24',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Sie können die Buchung bis 48 Stunden vor der Ankunft kostenlos stornieren.',
      answer: 'You can cancel the booking free of charge up to 48 hours before arrival.',
      accept: [
        'You can cancel the booking for free up to 48 hours before arrival.',
        'You can cancel the booking free of charge up to 48 hours before the arrival.',
        'You can cancel the booking for free up to 48 hours before the arrival.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'kostenlos = at no cost. Who is Sie here — the hotel or the guest?',
      explain:
        'vor takes the dative in time expressions, which is why it is vor der Ankunft. The sentence gives the guest a deadline: cancel earlier than 48 hours and you pay nothing.',
    },
  ],
}

export default reading
