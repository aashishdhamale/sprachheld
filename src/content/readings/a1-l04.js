/**
 * A1 · L04 — Family and people
 *
 * r.a1.l04.meine-familie — Sarah introduces her family in short present-tense
 * sentences. Every sentence recycles haben or a possessive article.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l04.meine-familie',
  level: 'A1',
  title: 'Meine Familie',
  minutes: 3,
  intro: 'Sarah from Kiel writes a short text about the people in her family.',
  paragraphs: [
    'Hallo! Ich heiße Sarah und ich komme aus Kiel. Meine Familie ist nicht groß. Ich habe einen Bruder und eine Schwester.',
    'Mein Bruder heißt Tim. Er ist neunzehn Jahre alt und noch ledig. Meine Schwester Lena ist verheiratet. Ihr Mann heißt Jonas. Sie haben eine Tochter. Das Kind ist zwei Jahre alt.',
    'Meine Eltern wohnen in Hamburg. Meine Großeltern wohnen auch dort. Sie sind sehr nett.',
  ],
  glossary: [
    { de: 'ledig', en: 'single, not married' },
    { de: 'verheiratet', en: 'married' },
    { de: 'Jahre alt', en: 'years old' },
    { de: 'noch', en: 'still' },
    { de: 'auch', en: 'also, too' },
    { de: 'dort', en: 'there' },
    { de: 'nett', en: 'nice, kind' },
  ],
  questions: [
    {
      id: 'x.a1.l04.20',
      kind: 'mcq',
      prompt: 'Wie viele Geschwister hat Sarah?',
      options: ['Einen Bruder und eine Schwester.', 'Zwei Brüder.', 'Nur eine Schwester.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['akkusativ'],
      explain:
        'The first paragraph says "Ich habe einen Bruder und eine Schwester" — after haben the masculine article becomes einen, which is your clue that Bruder is one person, not two.',
    },
    {
      id: 'x.a1.l04.21',
      kind: 'blank',
      sentence: 'Lena ist verheiratet. ___ Mann heißt Jonas.',
      options: ['Ihr', 'Ihre', 'Sein', 'Seine'],
      answer: 'Ihr',
      skill: 'reading',
      difficulty: 2,
      tags: ['possessiv'],
      explain:
        'Two separate decisions: the owner is Lena, a woman, so the word is ihr — and der Mann is masculine nominative, so it takes no ending.',
    },
    {
      id: 'x.a1.l04.22',
      kind: 'mcq',
      prompt: 'Wo wohnen Sarahs Eltern?',
      options: ['In Hamburg.', 'In Kiel.', 'In Leipzig.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Sarah herself comes from Kiel, but the last paragraph says her parents live in Hamburg — a text often names more than one town, so match each place to its own sentence.',
    },
    {
      id: 'x.a1.l04.23',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Meine Großeltern wohnen auch dort.',
      answer: 'My grandparents live there too.',
      accept: ['My grandparents also live there.'],
      skill: 'reading',
      difficulty: 3,
      tags: ['possessiv'],
      hint: 'Großeltern only exists in the plural.',
      explain:
        'Großeltern is plural, so the possessive takes -e (meine) and the verb takes the plural ending -en (wohnen) — plural agreement shows up twice in one short sentence.',
    },
  ],
}

export default reading
