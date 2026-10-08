/**
 * A2 · L14 — Reading: a flat advert plus the message that answers it.
 *
 * Two authentic text types side by side: the compressed, verb-less German of a
 * Wohnungsanzeige (Kaltmiete / Nebenkosten / Warmmiete / Kaution) and a short
 * polite e-mail asking for a Besichtigung. Present tense, one weil-clause,
 * no relative clauses and no attributive adjective endings.
 *
 * Exercise ids: x.a2.l14.14 … x.a2.l14.18.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l14.wohnungsanzeige',
  level: 'A2',
  title: 'Die Anzeige und die Besichtigung',
  titleEn: 'The advert and the viewing',
  minutes: 5,
  intro:
    'A flat in Leipzig is up for rent. Read the advert first — German adverts leave out most verbs — and then the message Amira writes to the landlord.',
  paragraphs: [
    'Helle 3-Zimmer-Wohnung in Leipzig-Süd, 78 Quadratmeter, dritter Stock mit Aufzug. Die Wohnung ist nicht möbliert, aber die Küche bleibt in der Wohnung. Kaltmiete 690 Euro, Nebenkosten 180 Euro, Warmmiete also 870 Euro. Die Kaution beträgt zwei Kaltmieten. Die Wohnung ist ab März frei.',
    'Im Haus wohnen sechs Mieter. Ein Hausmeister kümmert sich um das Treppenhaus und den Garten. Die Heizung ist neu, und im Keller gibt es eine Waschmaschine für alle Mieter. Haustiere sind nach Absprache erlaubt. Eine Besichtigung ist nur nach Termin möglich.',
    'Sehr geehrter Herr Neumann, Ihre Anzeige gefällt mir sehr gut. Ich arbeite seit zwei Jahren in Leipzig und suche eine Wohnung mit Aufzug. Kann ich die Wohnung am Donnerstag um 17 Uhr besichtigen? Am Freitag habe ich leider keine Zeit, weil ich bis 19 Uhr arbeite. Die Kaution kann ich sofort zahlen. Ich freue mich über eine Antwort. Mit freundlichen Grüßen, Amira Khalil',
  ],
  glossary: [
    { de: 'die Anzeige', en: 'advert, listing' },
    { de: 'die Kaltmiete', en: 'basic rent, without the service charges' },
    { de: 'besichtigen', en: 'to view (a flat)' },
    { de: 'das Treppenhaus', en: 'stairwell, communal staircase' },
    { de: 'nach Absprache', en: 'by arrangement' },
    { de: 'das Haustier', en: 'pet' },
    { de: 'Sehr geehrter Herr …', en: 'Dear Mr … (formal letter opening)' },
    { de: 'Mit freundlichen Grüßen', en: 'Kind regards (formal letter closing)' },
  ],
  questions: [
    {
      id: 'x.a2.l14.14',
      kind: 'mcq',
      prompt: 'Wie hoch ist die Warmmiete?',
      options: ['870 Euro', '690 Euro', '180 Euro'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'Warmmiete is Kaltmiete plus Nebenkosten — 690 + 180 = 870. The advert even does the sum for you with "Warmmiete also 870 Euro".',
    },
    {
      id: 'x.a2.l14.15',
      kind: 'mcq',
      prompt: 'Was steht über die Möbel in der Anzeige?',
      options: [
        'Die Wohnung ist nicht möbliert, aber die Küche bleibt.',
        'Die Wohnung ist komplett möbliert.',
        'Der Mieter muss auch die Küche mitbringen.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        '"nicht möbliert" means you bring your own furniture; the one exception is named straight afterwards with aber — die Küche bleibt in der Wohnung.',
    },
    {
      id: 'x.a2.l14.16',
      kind: 'blank',
      sentence: 'Die Wohnung liegt im dritten ___, aber es gibt einen Aufzug.',
      options: ['Stock', 'Keller', 'Zimmer', 'Garten'],
      answer: 'Stock',
      skill: 'reading',
      difficulty: 2,
      tags: ['wechselpraepositionen'],
      explain:
        'der Stock is the floor of a building, and im = in dem, because a floor is a position (Wo?) and not a movement.',
    },
    {
      id: 'x.a2.l14.17',
      kind: 'mcq',
      prompt: 'Wann möchte Amira die Wohnung besichtigen?',
      options: ['Am Donnerstag um 17 Uhr.', 'Am Freitag um 19 Uhr.', 'Im März.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'She proposes Thursday and rules Friday out. Friday only appears with bis 19 Uhr — that is when she works, not when she wants to come.',
    },
    {
      id: 'x.a2.l14.18',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Am Freitag habe ich leider keine Zeit, weil ich bis 19 Uhr arbeite.',
      answer: 'On Friday I unfortunately have no time, because I work until 7 p.m.',
      accept: [
        'Unfortunately I have no time on Friday, because I work until 7 p.m.',
        'On Friday I unfortunately have no time because I work until 19:00.',
        'Unfortunately I do not have time on Friday because I work until 7 p.m.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'Two clauses, two verbs — and the German verb in the weil-clause sits at the very end.',
      explain:
        'weil sends its verb to the end (… bis 19 Uhr **arbeite**), which is why the German looks scrambled next to the English. keine Zeit haben is the fixed phrase for "to have no time".',
    },
  ],
}

export default reading
