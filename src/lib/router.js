/**
 * A hash router in 60 lines. No dependency, no build step, works from file://
 * and from any static host.
 *
 * Routes are patterns like '/lesson/:id'. useRoute() returns
 * { path, name, params, query }.
 */

import { useEffect, useState, useCallback } from 'react'

export const ROUTES = [
  { name: 'home', pattern: '/' },
  { name: 'learn', pattern: '/learn' },
  { name: 'level', pattern: '/learn/:levelId' },
  { name: 'lesson', pattern: '/lesson/:id' },
  { name: 'practice', pattern: '/practice' },
  { name: 'articles', pattern: '/articles' },
  { name: 'builder', pattern: '/builder' },
  { name: 'translate', pattern: '/translate' },
  { name: 'listening', pattern: '/listening' },
  { name: 'reading', pattern: '/reading' },
  { name: 'readingOne', pattern: '/reading/:id' },
  { name: 'drillTag', pattern: '/drill/tag/:tag' },
  { name: 'drillSkill', pattern: '/drill/skill/:skill' },
  { name: 'review', pattern: '/review' },
  { name: 'chatIndex', pattern: '/chat' },
  { name: 'chat', pattern: '/chat/:id' },
  { name: 'freechat', pattern: '/freechat' },
  { name: 'vocab', pattern: '/vocab' },
  { name: 'grammar', pattern: '/grammar' },
  { name: 'grammarOne', pattern: '/grammar/:id' },
  { name: 'progress', pattern: '/progress' },
  { name: 'settings', pattern: '/settings' },
]

function currentHash() {
  const h = window.location.hash || '#/'
  return h.startsWith('#') ? h.slice(1) : h
}

export function parse(hash) {
  const [rawPath, rawQuery = ''] = hash.split('?')
  const path = rawPath || '/'
  const query = Object.fromEntries(new URLSearchParams(rawQuery))
  for (const r of ROUTES) {
    const params = matchPattern(r.pattern, path)
    if (params) return { name: r.name, path, params, query }
  }
  return { name: 'notfound', path, params: {}, query }
}

function matchPattern(pattern, path) {
  const p = pattern.split('/').filter(Boolean)
  const a = path.split('/').filter(Boolean)
  if (p.length !== a.length) return null
  const params = {}
  for (let i = 0; i < p.length; i++) {
    if (p[i].startsWith(':')) params[p[i].slice(1)] = decodeURIComponent(a[i])
    else if (p[i] !== a[i]) return null
  }
  return params
}

export function useRoute() {
  const [route, setRoute] = useState(() => parse(currentHash()))
  useEffect(() => {
    const onChange = () => setRoute(parse(currentHash()))
    window.addEventListener('hashchange', onChange)
    if (!window.location.hash) window.location.replace('#/')
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function navigate(to, { replace = false } = {}) {
  const target = to.startsWith('#') ? to : '#' + (to.startsWith('/') ? to : '/' + to)
  if (replace) window.location.replace(target)
  else window.location.hash = target.slice(1)
}

export function back() {
  if (window.history.length > 1) window.history.back()
  else navigate('/')
}

/** Scroll to the top whenever the route changes — mobile browsers do not. */
export function useScrollTop(dep) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [dep])
}

export function useNavigate() {
  return useCallback(navigate, [])
}

export function href(path) {
  return '#' + path
}
