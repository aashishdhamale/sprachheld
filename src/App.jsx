import { Suspense, lazy, useEffect } from 'react'
import { useRoute, useScrollTop, href } from './lib/router.js'
import { useProgress } from './store/progress.jsx'
import { overview } from './engine/planner.js'
import { dueCount } from './engine/srs.js'

import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import Lesson from './pages/Lesson.jsx'
import Practice from './pages/Practice.jsx'
import Articles from './pages/Articles.jsx'
import Builder from './pages/Builder.jsx'
import Translate from './pages/Translate.jsx'
import ListeningHub from './pages/ListeningHub.jsx'
import ReadingHub from './pages/ReadingHub.jsx'
import Drill from './pages/Drill.jsx'
import Review from './pages/Review.jsx'
import ChatIndex from './pages/ChatIndex.jsx'
import ChatPage from './pages/ChatPage.jsx'
import FreeChat from './pages/FreeChat.jsx'
import Vocabulary from './pages/Vocabulary.jsx'
import GrammarHub from './pages/GrammarHub.jsx'
import GrammarTopic from './pages/GrammarTopic.jsx'
import Progress from './pages/Progress.jsx'
import Settings from './pages/Settings.jsx'
import Onboarding from './pages/Onboarding.jsx'

const TABS = [
  { path: '/', name: 'home', label: 'Home', icon: '🏠' },
  { path: '/learn', name: 'learn', label: 'Learn', icon: '📚' },
  { path: '/practice', name: 'practice', label: 'Practice', icon: '🎯' },
  { path: '/chat', name: 'chat', label: 'Speak', icon: '💬' },
  { path: '/vocab', name: 'vocab', label: 'Words', icon: '🗂' },
  { path: '/progress', name: 'progress', label: 'Progress', icon: '📈' },
]

// Routes that own the whole screen (no chrome).
const FULLSCREEN = new Set(['lesson'])

export default function App() {
  const route = useRoute()
  const { state } = useProgress()
  useScrollTop(route.path)

  useEffect(() => {
    document.title = titleFor(route)
  }, [route])

  if (!state.profile.onboarded) return <Onboarding />

  if (FULLSCREEN.has(route.name)) {
    return <Page route={route} />
  }

  return (
    <div className="app">
      <TopBar route={route} />
      <main className={`main ${route.name === 'vocab' ? 'wide' : ''}`}>
        <Page route={route} />
      </main>
      <TabBar route={route} />
    </div>
  )
}

function Page({ route }) {
  const { params } = route
  switch (route.name) {
    case 'home':
      return <Home />
    case 'learn':
      return <Learn />
    case 'level':
      return <Learn levelId={params.levelId} />
    case 'lesson':
      return <Lesson id={params.id} />
    case 'practice':
      return <Practice />
    case 'articles':
      return <Articles />
    case 'builder':
      return <Builder />
    case 'translate':
      return <Translate />
    case 'listening':
      return <ListeningHub />
    case 'reading':
      return <ReadingHub />
    case 'readingOne':
      return <ReadingHub id={params.id} />
    case 'drillTag':
      return <Drill kind="tag" value={params.tag} />
    case 'drillSkill':
      return <Drill kind="skill" value={params.skill} />
    case 'review':
      return <Review />
    case 'chatIndex':
      return <ChatIndex />
    case 'chat':
      return <ChatPage id={params.id} />
    case 'freechat':
      return <FreeChat />
    case 'vocab':
      return <Vocabulary />
    case 'grammar':
      return <GrammarHub />
    case 'grammarOne':
      return <GrammarTopic id={params.id} />
    case 'progress':
      return <Progress />
    case 'settings':
      return <Settings />
    default:
      return <NotFound path={route.path} />
  }
}

function TopBar({ route }) {
  const { state } = useProgress()
  const ov = overview(state)
  const due = dueCount(state.srs)

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href={href('/')}>
          <span className="brand-mark" aria-hidden />
          <span>Sprachheld</span>
        </a>

        <nav className="topnav">
          {TABS.map((t) => (
            <a key={t.path} href={href(t.path)} className={isActive(route, t) ? 'active' : ''}>
              {t.label}
            </a>
          ))}
          <a href={href('/grammar')} className={route.name.startsWith('grammar') ? 'active' : ''}>
            Grammar
          </a>
        </nav>

        <div className="grow" />

        {due > 0 && (
          <a
            href={href('/review')}
            className="pill pill-warn"
            title={`${due} items due for review`}
            style={{ textDecoration: 'none' }}
          >
            🔄 {due}
          </a>
        )}
        <span className="streak-badge" title="Daily streak">
          🔥 {state.streak.count}
        </span>
        <span className="xp-badge" title="Total XP">
          ⚡ {state.xp}
        </span>
        <a
          href={href('/settings')}
          className="btn btn-ghost btn-icon"
          aria-label="Settings"
          title="Settings"
        >
          ⚙
        </a>
      </div>
    </header>
  )
}

function TabBar({ route }) {
  return (
    <nav className="tabbar" aria-label="Main">
      {TABS.map((t) => (
        <a key={t.path} href={href(t.path)} className={isActive(route, t) ? 'active' : ''}>
          <span className="tab-icon" aria-hidden>
            {t.icon}
          </span>
          <span>{t.label}</span>
        </a>
      ))}
    </nav>
  )
}

function isActive(route, tab) {
  if (tab.name === 'home') return route.name === 'home'
  if (tab.name === 'learn') return ['learn', 'level', 'lesson'].includes(route.name)
  if (tab.name === 'chat') return ['chat', 'chatIndex', 'freechat'].includes(route.name)
  if (tab.name === 'practice')
    return ['practice', 'articles', 'builder', 'translate', 'drillTag', 'drillSkill', 'review', 'listening', 'reading', 'readingOne'].includes(route.name)
  return route.name === tab.name
}

function NotFound({ path }) {
  return (
    <div className="empty">
      <div className="empty-icon">🧭</div>
      <div className="bold">Nichts gefunden</div>
      <p className="small dim">There is no page at {path}.</p>
      <a className="btn btn-primary" href={href('/')} style={{ marginTop: 'var(--s4)' }}>
        Back home
      </a>
    </div>
  )
}

function titleFor(route) {
  const base = 'Sprachheld'
  const names = {
    home: 'Home',
    learn: 'Learn',
    lesson: 'Lesson',
    practice: 'Practice',
    articles: 'Article trainer',
    builder: 'Sentence builder',
    translate: 'Translation',
    listening: 'Listening',
    reading: 'Reading',
    review: 'Review',
    chat: 'Conversation',
    chatIndex: 'Conversations',
    freechat: 'Free conversation',
    vocab: 'Vocabulary',
    grammar: 'Grammar',
    grammarOne: 'Grammar',
    progress: 'Progress',
    settings: 'Settings',
  }
  const n = names[route.name]
  return n ? `${n} · ${base}` : base
}
