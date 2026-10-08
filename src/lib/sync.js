/**
 * Sync through a secret GitHub Gist in the learner's own account.
 *
 * No server of ours is involved: the page talks to api.github.com directly
 * with a personal access token that has only the "gist" scope. The token is
 * kept in its own localStorage key — never inside the progress state, so it
 * is never exported, imported or uploaded. The Anthropic key is stripped
 * from everything that leaves the device.
 */

import { load, save, remove } from './storage.js'

const API = 'https://api.github.com'
const FILE = 'sprachheld-progress.json'
const DESCRIPTION = 'Sprachheld progress sync — written by the app, safe to delete'
const CONFIG_KEY = 'sprachheld.sync'

export const TOKEN_URL = 'https://github.com/settings/tokens/new?scopes=gist&description=Sprachheld%20sync'

export function loadSyncConfig() {
  const c = load(CONFIG_KEY, null)
  return c?.token ? c : null
}

export function saveSyncConfig(c) {
  save(CONFIG_KEY, c)
}

export function clearSyncConfig() {
  remove(CONFIG_KEY)
}

async function gh(token, path, opts = {}) {
  let res
  try {
    res = await fetch(API + path, {
      ...opts,
      cache: 'no-store',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
      },
    })
  } catch {
    throw new Error('Could not reach GitHub — check your connection.')
  }
  if (res.status === 401) throw new Error('GitHub rejected the token. It may have expired or been revoked — create a new one.')
  if (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0') throw new Error('GitHub rate limit reached — try again in a few minutes.')
  if (res.status === 403 || res.status === 404) throw new Error('This token cannot read or write Gists. Create one with the “gist” scope ticked.')
  if (!res.ok) throw new Error(`GitHub error ${res.status}.`)
  return res.status === 204 ? null : res.json()
}

/** Check the token and find the sync gist if a previous device created one. */
export async function connect(token) {
  const t = String(token || '').trim()
  if (!t) throw new Error('Paste a token first.')
  const user = await gh(t, '/user')
  let gistId = null
  for (let page = 1; page <= 5 && !gistId; page++) {
    const gists = await gh(t, `/gists?per_page=100&page=${page}`)
    gistId = gists.find((g) => g.files?.[FILE])?.id || null
    if (gists.length < 100) break
  }
  return { token: t, login: user.login, gistId, lastSyncAt: null }
}

/**
 * The synced progress.
 * @returns {{ state: object|null, missing: boolean }}  missing = the gist was deleted on github.com
 */
export async function pull({ token, gistId }) {
  if (!gistId) return { state: null, missing: false }
  let g
  try {
    g = await gh(token, `/gists/${gistId}`)
  } catch (e) {
    if (/cannot read or write/.test(e.message)) return { state: null, missing: true }
    throw e
  }
  const f = g.files?.[FILE]
  if (!f) return { state: null, missing: false }
  let text = f.content
  if (f.truncated && f.raw_url) {
    const r = await fetch(f.raw_url, { cache: 'no-store' })
    text = await r.text()
  }
  try {
    return { state: JSON.parse(text), missing: false }
  } catch {
    throw new Error('The synced file on GitHub is not valid — delete the “Sprachheld progress sync” gist and sync again.')
  }
}

/** Upload progress; creates the secret gist the first time. Returns its id. */
export async function push({ token, gistId }, state) {
  // eslint-disable-next-line no-unused-vars
  const { aiKey, ...settings } = state.settings || {}
  const body = {
    description: DESCRIPTION,
    files: { [FILE]: { content: JSON.stringify({ ...state, settings }) } },
  }
  if (gistId) {
    await gh(token, `/gists/${gistId}`, { method: 'PATCH', body: JSON.stringify(body) })
    return gistId
  }
  const g = await gh(token, '/gists', { method: 'POST', body: JSON.stringify({ ...body, public: false }) })
  return g.id
}

export function gistUrl(config) {
  return config?.gistId ? `https://gist.github.com/${config.login}/${config.gistId}` : null
}
