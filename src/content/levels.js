/** CEFR levels. The learning path runs strictly A1 → A2 → B1. */

export const levels = [
  {
    id: 'a1',
    cefr: 'A1',
    title: 'Beginner',
    tagline: 'From zero to everyday basics',
    description:
      'Say who you are, handle shops, cafés and small talk, and build correct simple sentences in the present tense.',
    canDo: [
      'Introduce yourself and ask people about themselves',
      'Order food, buy things and ask for prices',
      'Talk about your family, home, day and free time',
      'Understand slow, clear speech about familiar things',
    ],
    moduleIds: ['a1.basics', 'a1.everyday', 'a1.living', 'a1.out'],
    color: 'a1',
    icon: '🌱',
  },
  {
    id: 'a2',
    cefr: 'A2',
    title: 'Elementary',
    tagline: 'Getting things done in German',
    description:
      'Handle appointments, travel, housing and work situations. Talk about the past and give reasons.',
    canDo: [
      'Make appointments and explain a problem at the doctor or an office',
      'Talk about what you did last weekend using the Perfekt',
      'Give reasons with weil, dass and wenn',
      'Deal with renting, banking and everyday bureaucracy',
    ],
    moduleIds: ['a2.moving', 'a2.worklife', 'a2.admin', 'a2.social'],
    color: 'a2',
    icon: '🚀',
  },
  {
    id: 'b1',
    cefr: 'B1',
    title: 'Intermediate',
    tagline: 'Opinions, work and real conversations',
    description:
      'Discuss opinions, write professional emails, follow meetings and news, and express hypotheses politely.',
    canDo: [
      'Take part in a meeting and write a formal email',
      'Give and defend an opinion with clear structure',
      'Use Konjunktiv II to be polite and hypothetical',
      'Understand articles and reports on familiar topics',
    ],
    moduleIds: ['b1.work', 'b1.debate', 'b1.life'],
    color: 'b1',
    icon: '🎯',
  },
]

export const levelOrder = ['A1', 'A2', 'B1']

export default levels
