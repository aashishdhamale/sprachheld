/**
 * Modules group consecutive lessons into a themed block.
 * Adding a lesson means adding its id here and dropping the lesson file into
 * `lessons/` — nothing else changes.
 */

export const modules = [
  /* ── A1 ────────────────────────────────────────────────────────────────── */
  {
    id: 'a1.basics',
    levelId: 'a1',
    title: 'First contact',
    icon: '👋',
    summary: 'Greet people, say who you are, and exchange basic information.',
    lessonIds: ['a1.l01', 'a1.l02'],
  },
  {
    id: 'a1.everyday',
    levelId: 'a1',
    title: 'Numbers, time and family',
    icon: '🕐',
    summary: 'Count, tell the time, talk about your family and describe your day.',
    lessonIds: ['a1.l03', 'a1.l04', 'a1.l05'],
  },
  {
    id: 'a1.living',
    levelId: 'a1',
    title: 'Food, shopping and home',
    icon: '🛒',
    summary: 'Order in a café, shop for groceries and describe where you live.',
    lessonIds: ['a1.l06', 'a1.l07', 'a1.l08'],
  },
  {
    id: 'a1.out',
    levelId: 'a1',
    title: 'Free time and getting around',
    icon: '🚌',
    summary: 'Hobbies, the weather, buying tickets and asking for directions.',
    lessonIds: ['a1.l09', 'a1.l10'],
  },

  /* ── A2 ────────────────────────────────────────────────────────────────── */
  {
    id: 'a2.moving',
    levelId: 'a2',
    title: 'Travel and appointments',
    icon: '✈️',
    summary: 'Book a trip, make appointments and describe symptoms at the doctor.',
    lessonIds: ['a2.l11', 'a2.l12'],
  },
  {
    id: 'a2.worklife',
    levelId: 'a2',
    title: 'Work and housing',
    icon: '🏢',
    summary: 'The office, colleagues, flat-hunting and dealing with a landlord.',
    lessonIds: ['a2.l13', 'a2.l14'],
  },
  {
    id: 'a2.admin',
    levelId: 'a2',
    title: 'Money and paperwork',
    icon: '🏦',
    summary: 'Banking, public offices, forms and phone calls to companies.',
    lessonIds: ['a2.l15'],
  },
  {
    id: 'a2.social',
    levelId: 'a2',
    title: 'People, plans and the past',
    icon: '🎉',
    summary: 'Invitations, telling stories about the past, plans and problems.',
    lessonIds: ['a2.l16', 'a2.l17', 'a2.l18'],
  },

  /* ── B1 ────────────────────────────────────────────────────────────────── */
  {
    id: 'b1.work',
    levelId: 'b1',
    title: 'Professional German',
    icon: '💼',
    summary: 'Meetings, presentations and writing emails that sound right.',
    lessonIds: ['b1.l19', 'b1.l20'],
  },
  {
    id: 'b1.debate',
    levelId: 'b1',
    title: 'Opinions and ideas',
    icon: '💬',
    summary: 'Argue a point, discuss technology, media, the environment and society.',
    lessonIds: ['b1.l21', 'b1.l22', 'b1.l23'],
  },
  {
    id: 'b1.life',
    levelId: 'b1',
    title: 'Life, health and plans',
    icon: '🌍',
    summary: 'Education and career, health and relationships, travel and the future.',
    lessonIds: ['b1.l24', 'b1.l25', 'b1.l26'],
  },
]

export default modules
