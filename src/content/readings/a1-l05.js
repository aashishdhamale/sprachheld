/**
 * A1 · L05 — Reading: a nurse on the early shift.
 *
 * Present tense only, one clause per sentence, every separable verb visibly
 * split so the learner can see the frame: fängt … an, komme … an, sehe … fern.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l05.schichtdienst',
  level: 'A1',
  title: 'Sonja im Schichtdienst',
  titleEn: 'Sonja on shift work',
  minutes: 4,
  intro:
    'Sonja is a nurse. This week she is on the early shift — her day starts long before most people set their alarm.',
  paragraphs: [
    'Ich heiße Sonja. Ich bin Krankenpflegerin im Krankenhaus. Diese Woche arbeite ich früh.',
    'Mein Wecker klingelt um halb fünf. Ich dusche und frühstücke schnell. Um Viertel nach fünf fahre ich mit dem Bus zur Arbeit.',
    'Ich komme um sechs Uhr an. Meine Schicht fängt um halb sieben an. Mittags esse ich in der Kantine.',
    'Am Nachmittag komme ich nach Hause. Abends sehe ich manchmal fern. Um neun Uhr gehe ich ins Bett und schlafe sofort.',
  ],
  glossary: [
    { de: 'die Krankenpflegerin', en: 'nurse (female)' },
    { de: 'die Schicht', en: 'shift' },
    { de: 'halb fünf', en: 'half past four (4:30 — German counts towards five)' },
    { de: 'Viertel nach fünf', en: 'quarter past five' },
    { de: 'die Kantine', en: 'staff canteen' },
    { de: 'manchmal', en: 'sometimes' },
    { de: 'ins Bett gehen', en: 'to go to bed' },
    { de: 'sofort', en: 'immediately' },
  ],
  questions: [
    {
      id: 'x.a1.l05.20',
      kind: 'mcq',
      prompt: 'Wann klingelt Sonjas Wecker?',
      options: ['Um halb fünf.', 'Um fünf Uhr.', 'Um halb sechs.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The second paragraph says "Mein Wecker klingelt um halb fünf". In German halb fünf counts towards five, so it is 4:30.',
    },
    {
      id: 'x.a1.l05.21',
      kind: 'blank',
      sentence: 'Sonjas Schicht ___ um halb sieben an.',
      options: ['fängt', 'fangt', 'anfängt', 'fängst'],
      answer: 'fängt',
      skill: 'reading',
      difficulty: 2,
      tags: ['trennbar'],
      explain:
        'die Schicht is a sie, so anfangen takes the changed stem fäng- plus -t, and the prefix an stays at the end of the sentence.',
    },
    {
      id: 'x.a1.l05.22',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Um Viertel nach fünf fahre ich mit dem Bus zur Arbeit.',
      answer: 'At quarter past five I go to work by bus.',
      accept: [
        'At a quarter past five I go to work by bus.',
        'At quarter past five I take the bus to work.',
        'At 5:15 I go to work by bus.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'mit dem Bus is the fixed chunk for "by bus".',
      explain:
        'German names the means of transport with mit dem / mit der, and the time phrase can open the sentence because fahre still sits in position 2.',
    },
    {
      id: 'x.a1.l05.23',
      kind: 'mcq',
      prompt: 'Was macht Sonja abends manchmal?',
      options: ['Sie sieht fern.', 'Sie kauft ein.', 'Sie arbeitet im Krankenhaus.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The last paragraph says "Abends sehe ich manchmal fern" — sehe … fern is the split form of fernsehen, so the answer is watching TV.',
    },
  ],
}

export default reading
