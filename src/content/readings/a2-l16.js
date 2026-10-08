/**
 * A2 · L16 — Reading: the group chat that has to agree on a Saturday.
 *
 * Four friends, two places, one evening. The text type is a WhatsApp group —
 * short messages, each with an opinion and a comparative to back it up, and a
 * compromise at the end. No passive, no relative clauses; the only past forms
 * are war and habe … Feierabend.
 *
 * Exercise ids: x.a2.l16.20 … x.a2.l16.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l16.gruppenchat',
  level: 'A2',
  title: 'Wohin gehen wir am Samstag?',
  titleEn: 'Where are we going on Saturday?',
  minutes: 4,
  intro:
    'Four friends are planning Saturday evening in their group chat. Two places are on the table and everybody has an opinion. Read for three things: who suggests what, what each person holds against the other place, and what they finally agree on.',
  paragraphs: [
    'Jonas: Hallo Leute! Was machen wir am Samstag? Ich habe keine Lust auf einen Abend vor dem Fernseher.',
    'Mira: Ich schlage das neue Lokal in der Bahnhofstraße vor. Das Essen dort ist besser als im Restaurant am Markt, und es ist auch billiger.',
    'Tarek: Hm, das Lokal ist mir zu laut. In der Kneipe am Park ist es viel gemütlicher.',
    'Mira: Die Kneipe ist gemütlich, aber die Musik ist dort am Samstag immer sehr laut.',
    'Jonas: Ich finde beide Vorschläge gut. Am liebsten gehe ich aber ins Lokal, weil ich dort noch nie war.',
    'Sara: Ich komme später, weil ich erst um acht Uhr Feierabend habe. Schreibt mir am besten eine Nachricht.',
    'Tarek: Okay, dann machen wir es so: erst das Lokal, danach noch eine Runde in der Kneipe. Einverstanden?',
    'Mira: Perfekt! Ich reserviere einen Tisch für sieben Uhr.',
  ],
  glossary: [
    { de: 'Leute', en: 'people, guys (how you address a group of friends)' },
    { de: 'vor dem Fernseher', en: 'in front of the TV' },
    { de: 'mir zu laut', en: 'too loud for me (the person goes in the dative)' },
    { de: 'gemütlich', en: 'cosy, comfortable, relaxed' },
    { de: 'beide', en: 'both' },
    { de: 'noch nie', en: 'never (up to now)' },
    { de: 'Feierabend haben', en: 'to finish work for the day' },
    { de: 'eine Runde', en: 'a round of drinks' },
    { de: 'Einverstanden?', en: 'Agreed? Is that OK with everyone?' },
  ],
  questions: [
    {
      id: 'x.a2.l16.20',
      kind: 'mcq',
      prompt: 'Was schlägt Mira zuerst vor?',
      options: [
        'Das neue Lokal in der Bahnhofstraße.',
        'Die Kneipe am Park.',
        'Einen Abend vor dem Fernseher.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'Her first message begins with Ich schlage … vor — the separable verb vorschlagen. Everything between schlage and vor is the suggestion itself.',
    },
    {
      id: 'x.a2.l16.21',
      kind: 'mcq',
      prompt: 'Warum ist Tarek gegen das Lokal?',
      options: ['Es ist ihm zu laut.', 'Es ist ihm zu teuer.', 'Das Essen ist dort schlecht.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'He writes das Lokal ist mir zu laut. The little dative mir turns a fact into a personal opinion: loud for him, not loud in general.',
    },
    {
      id: 'x.a2.l16.22',
      kind: 'mcq',
      prompt: 'Welches Argument hat Mira gegen die Kneipe?',
      options: [
        'Die Musik ist dort am Samstag sehr laut.',
        'Die Kneipe ist nicht gemütlich.',
        'Die Getränke sind dort zu teuer.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'She first agrees — Die Kneipe ist gemütlich — and only then comes the objection after aber. In German the real point of such a message is always behind the aber.',
    },
    {
      id: 'x.a2.l16.23',
      kind: 'mcq',
      prompt: 'Warum möchte Jonas am liebsten ins Lokal?',
      options: [
        'Weil er dort noch nie war.',
        'Weil das Essen dort billiger ist.',
        'Weil es dort gemütlicher ist.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      hint: 'Two of the three answers are in the chat — but not in Jonas’ message.',
      explain:
        'The price argument is Miras and the gemütlich argument is Tareks. Jonas gives his own reason in a weil-clause: weil ich dort noch nie war. Always check who says a sentence, not only that it appears.',
    },
    {
      id: 'x.a2.l16.24',
      kind: 'blank',
      sentence: 'Am Ende gehen alle zuerst ins Lokal und danach noch in die ___.',
      options: ['Kneipe', 'Bahnhofstraße', 'Nachricht'],
      answer: 'Kneipe',
      skill: 'reading',
      difficulty: 2,
      explain:
        'Tarek’s erst … danach solves the argument by doing both. erst means "first of all" here, and danach means "after that" — the two words that carry the compromise.',
    },
  ],
}

export default reading
