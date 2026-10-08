/**
 * A2 · L15 — Reading: the letter the Bürgeramt sends before your appointment.
 *
 * The real text type: an appointment confirmation with the list of documents
 * you have to bring. It is written almost entirely in Sie-imperatives, which
 * is exactly the grammar of this lesson, plus two wenn-clauses.
 * No passive, no relative clauses, no Präteritum.
 *
 * Exercise ids: x.a2.l15.20 … x.a2.l15.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l15.anmeldung',
  level: 'A2',
  title: 'Ihr Termin im Bürgeramt',
  titleEn: 'Your appointment at the registration office',
  minutes: 5,
  intro:
    'Marina Costa has moved to Berlin and booked an appointment to register her address. This is the letter the office sends her. Read it like a checklist: what must she bring, and what happens if something is missing?',
  paragraphs: [
    'Bürgeramt Mitte, Karlstraße 12, 10117 Berlin. Sehr geehrte Frau Costa, Sie haben am Dienstag, den 3. März, einen Termin für die Anmeldung Ihrer Wohnung.',
    'Bitte kommen Sie pünktlich um 9.30 Uhr. Ziehen Sie am Eingang eine Wartenummer und warten Sie dann vor Schalter 4. Wenn Sie zu spät kommen, ist Ihre Wartenummer leider nicht mehr gültig.',
    'Bringen Sie bitte diese Unterlagen mit: Ihren Ausweis oder Ihren Pass, das Formular für die Anmeldung einer Wohnung und die Wohnungsgeberbestätigung von Ihrem Vermieter. Ohne diese Bestätigung können wir die Anmeldung nicht machen.',
    'Das Formular finden Sie auch auf unserer Internetseite. Füllen Sie es bitte zu Hause aus, aber unterschreiben Sie es erst bei uns am Schalter. Die Anmeldung selbst kostet nichts. Eine Bescheinigung für Ihren Arbeitgeber kostet fünf Euro.',
    'Wenn Sie den Termin nicht schaffen, rufen Sie uns bitte vorher an oder schreiben Sie eine E-Mail. Wir geben Ihnen dann einen neuen Termin. Mit freundlichen Grüßen, M. Hoffmann, Bürgeramt Mitte',
  ],
  glossary: [
    { de: 'die Unterlagen', en: 'documents, paperwork (always plural)' },
    { de: 'der Schalter', en: 'counter, service window' },
    { de: 'gültig', en: 'valid' },
    { de: 'die Wohnungsgeberbestätigung', en: 'landlord’s confirmation that you live there' },
    { de: 'die Bescheinigung', en: 'certificate, official confirmation' },
    { de: 'ohne', en: 'without (+ accusative)' },
    { de: 'erst', en: 'not until, only then' },
    { de: 'nicht schaffen', en: 'not to manage (to make it)' },
  ],
  questions: [
    {
      id: 'x.a2.l15.20',
      kind: 'mcq',
      prompt: 'Wofür ist der Termin?',
      options: ['Für die Anmeldung der Wohnung.', 'Für einen neuen Ausweis.', 'Für eine Überweisung.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The first paragraph names the reason: einen Termin für die Anmeldung Ihrer Wohnung. In German offices the Anmeldung is always the address registration.',
    },
    {
      id: 'x.a2.l15.21',
      kind: 'mcq',
      prompt: 'Was passiert, wenn Frau Costa zu spät kommt?',
      options: [
        'Ihre Wartenummer ist nicht mehr gültig.',
        'Sie bekommt sofort einen anderen Schalter.',
        'Sie muss fünf Euro bezahlen.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The wenn-clause spells out the consequence: Wenn Sie zu spät kommen, ist Ihre Wartenummer leider nicht mehr gültig. The five euros belong to a different sentence, about the Bescheinigung.',
    },
    {
      id: 'x.a2.l15.22',
      kind: 'mcq',
      prompt: 'Welche Unterlage kommt vom Vermieter?',
      options: ['Die Wohnungsgeberbestätigung.', 'Der Personalausweis.', 'Das Formular für die Anmeldung.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The list says: die Wohnungsgeberbestätigung von Ihrem Vermieter. The preposition von tells you who hands the paper over — the ID and the form are yours.',
    },
    {
      id: 'x.a2.l15.23',
      kind: 'blank',
      sentence: 'Frau Costa füllt das Formular zu Hause aus, aber sie ___ es erst am Schalter.',
      options: ['unterschreibt', 'überweist', 'hebt ab', 'verbindet'],
      answer: 'unterschreibt',
      skill: 'reading',
      difficulty: 2,
      tags: ['konnektoren'],
      explain:
        'aber contrasts two actions on the same paper: filling it in at home, signing it at the counter. erst means "not before that moment".',
    },
    {
      id: 'x.a2.l15.24',
      kind: 'mcq',
      prompt: 'Was kostet Geld?',
      options: [
        'Nur die Bescheinigung für den Arbeitgeber.',
        'Die Anmeldung und die Bescheinigung.',
        'Nichts, alles ist kostenlos.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      explain:
        'Two sentences stand next to each other on purpose: Die Anmeldung selbst kostet nichts — Eine Bescheinigung kostet fünf Euro. The little word selbst marks the contrast.',
    },
  ],
}

export default reading
