#!/usr/bin/env node
/**
 * Sync merges two devices' progress with no server and no shared history, so
 * the merge rules ARE the sync. This proves they never lose work, never count
 * anything twice, and settle (merging again changes nothing).
 *
 *   node scripts/check-sync.mjs
 */

import { mergeStates, syncFingerprint } from '../src/engine/merge.js'

let failed = 0
let passed = 0
const ok = (label, cond, detail = '') => {
  if (cond) passed++
  else {
    failed++
    console.log(`  ✗ ${label}${detail ? `\n      ${detail}` : ''}`)
  }
}

const TODAY = '2026-10-08'
const base = () => ({
  v: 1,
  profile: { name: 'Alex', startedAt: '2026-09-01', level: 'A1', dailyGoalMin: 15, onboarded: true },
  xp: 100,
  badges: ['first-lesson'],
  streak: { count: 2, best: 5, lastDay: '2026-10-06' },
  days: { '2026-10-05': { xp: 40, minutes: 10, answers: 20, correct: 15 }, '2026-10-06': { xp: 60, minutes: 12, answers: 25, correct: 20 } },
  lessons: { 'a1.l01': { status: 'done', stepIndex: 4, bestScore: 0.8, runs: 1, completedAt: 1000 } },
  srs: { 'v:haus': { ease: 2.5, int: 3, due: 20400, reps: 2, lapses: 0, seen: 20397 } },
  skills: { vocabulary: { correct: 10, total: 14, ema: 0.6 } },
  tagStats: { artikel: { correct: 4, total: 6 } },
  mistakes: [{ ts: 100, exId: 'e1', given: 'der Haus', expected: 'das Haus' }],
  vocab: {},
  scenariosDone: {},
  numbers: {},
  exams: [],
  settings: { theme: 'auto', rate: 0.95, aiKey: '' },
})

// Phone: finished lesson 2 yesterday, reviewed "Haus" again, did a numbers round.
const phone = base()
phone.xp = 160
phone.days['2026-10-07'] = { xp: 60, minutes: 15, answers: 30, correct: 22 }
phone.streak = { count: 3, best: 5, lastDay: '2026-10-07' }
phone.lessons['a1.l02'] = { status: 'done', stepIndex: 5, bestScore: 0.9, runs: 1, completedAt: 2000 }
phone.srs['v:haus'] = { ease: 2.6, int: 7, due: 20406, reps: 3, lapses: 0, seen: 20399 }
phone.skills.vocabulary = { correct: 25, total: 32, ema: 0.7 }
phone.numbers = { uhrzeit: { band: 3, rounds: 4, best: 0.9, lastAt: 5000 } }
phone.mistakes = [{ ts: 300, exId: 'e9', given: 'halb sieben', expected: 'halb acht' }, ...phone.mistakes]
phone.settings = { theme: 'dark', rate: 1.1, aiKey: '' }

// Laptop: today, a mock exam section and a new word; also re-ran lesson 1 with a better score.
const laptop = base()
laptop.xp = 130
laptop.days[TODAY] = { xp: 30, minutes: 20, answers: 15, correct: 9 }
laptop.streak = { count: 1, best: 5, lastDay: TODAY }
laptop.lessons['a1.l01'] = { status: 'done', stepIndex: 4, bestScore: 0.95, runs: 2, completedAt: 3000, lastScore: 0.95 }
laptop.srs['v:tisch'] = { ease: 2.5, int: 1, due: 20403, reps: 1, lapses: 0, seen: 20402 }
laptop.exams = [{ id: 'exam.a1.1:1', examId: 'exam.a1.1', at: 4000, sections: { hoeren: { points: 20 } } }]
laptop.settings = { theme: 'light', rate: 0.9, aiKey: 'sk-ant-secret' }

const m = mergeStates(laptop, phone, TODAY)

/* ── Nothing is lost ── */
ok('both lessons kept', m.lessons['a1.l01'] && m.lessons['a1.l02'])
ok('best score wins', m.lessons['a1.l01'].bestScore === 0.95 && m.lessons['a1.l01'].runs === 2)
ok('newer card copy wins', m.srs['v:haus'].seen === 20399 && m.srs['v:haus'].int === 7)
ok('cards from both devices', !!m.srs['v:tisch'])
ok('numbers progress kept', m.numbers.uhrzeit?.rounds === 4)
ok('exam attempt kept', m.exams.length === 1)
ok('mistakes unioned, newest first', m.mistakes.length === 2 && m.mistakes[0].ts === 300)
ok('skill record with more answers', m.skills.vocabulary.total === 32)

/* ── Nothing is counted twice ── */
ok('shared days not doubled', m.days['2026-10-05'].xp === 40 && m.days['2026-10-06'].xp === 60)
ok('xp covers every merged day', m.xp === 40 + 60 + 60 + 30, `xp ${m.xp}`)

/* ── Streak recomputed across devices ── */
ok('streak spans both devices', m.streak.count === 4 && m.streak.lastDay === TODAY, JSON.stringify(m.streak))
const lapsed = mergeStates(base(), base(), '2026-10-20')
ok('streak lapses when the last day is old', lapsed.streak.count === 0 && lapsed.streak.best === 5)

/* ── Device-local preferences ── */
ok('this device keeps its own settings', m.settings.theme === 'light' && m.settings.rate === 0.9)
ok('API key never comes from the other side', m.settings.aiKey === 'sk-ant-secret')
const fresh = { ...base(), profile: { name: '', onboarded: false }, settings: { theme: 'auto', aiKey: 'sk-mine' }, xp: 0, days: {}, lessons: {}, srs: {} }
const adopted = mergeStates(fresh, phone, TODAY)
ok('new device adopts profile', adopted.profile.onboarded && adopted.profile.name === 'Alex')
ok('new device adopts settings but keeps its key', adopted.settings.theme === 'dark' && adopted.settings.aiKey === 'sk-mine')

/* ── Settles ── */
const fp = syncFingerprint(m)
ok('merging again with the phone changes nothing', syncFingerprint(mergeStates(m, phone, TODAY)) === fp)
ok('merging again with the laptop changes nothing', syncFingerprint(mergeStates(m, laptop, TODAY)) === fp)
ok('order does not matter', syncFingerprint(mergeStates(phone, laptop, TODAY)) === fp)
ok('merging with itself changes nothing', syncFingerprint(mergeStates(m, m, TODAY)) === fp)
ok('missing remote → local unchanged', mergeStates(laptop, null) === laptop)
ok('fingerprint ignores settings', syncFingerprint({ ...m, settings: { theme: 'x' } }) === fp)

console.log()
if (failed) {
  console.log(`  ✗ ${failed} sync check(s) failed, ${passed} passed`)
  process.exit(1)
}
console.log(`  ✓ all ${passed} sync merge checks passed`)
