#!/usr/bin/env node
/**
 * Turns the vite-plugin-singlefile output (a full HTML document) into the
 * fragment an Artifact publish expects: no <!doctype>/<html>/<head>/<body>
 * wrapper — just <title>, <style>, the app's markup, and its <script> at the
 * end. The Artifact tool wraps this in its own skeleton at publish time.
 */
import fs from 'node:fs'
import path from 'node:path'

const SRC = path.resolve('dist-artifact/index.html')
const OUT = path.resolve('dist-artifact/artifact.html')

const html = fs.readFileSync(SRC, 'utf8')

function between(src, open, close, fromIndex = 0) {
  const s = src.indexOf(open, fromIndex)
  if (s === -1) throw new Error(`could not find "${open}"`)
  const contentStart = s + open.length
  const e = src.indexOf(close, contentStart)
  if (e === -1) throw new Error(`could not find "${close}" after "${open}"`)
  return { content: src.slice(contentStart, e), start: s, end: e + close.length }
}

// Title — hardcode the trimmed name (no "· German A1 → B1" explainer; that
// belongs in the publish `description`, per the artifact title rule).
const title = 'Sprachheld'

// The single <style> tag vite-plugin-singlefile inlines.
const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/)
if (!styleMatch) throw new Error('no <style> tag found in the build output')
const css = styleMatch[1]

// The single big <script type="module" ...> tag holding the whole app.
const scriptMatch = html.match(/<script type="module"[^>]*>([\s\S]*?)<\/script>/)
if (!scriptMatch) throw new Error('no <script type="module"> tag found in the build output')
const js = scriptMatch[1]

// The body's own markup (just the mount point — vite emits <div id="root"></div>).
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)
if (!bodyMatch) throw new Error('no <body> tag found in the build output')
const bodyInner = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, '').trim()

const out = `<title>${title}</title>
<style>
${css}
</style>
${bodyInner}
<script type="module">
${js}
</script>
`

fs.writeFileSync(OUT, out)
console.log(`wrote ${OUT} — ${(out.length / 1024).toFixed(0)} KB`)
console.log(`  title: ${title}`)
console.log(`  css:   ${(css.length / 1024).toFixed(0)} KB`)
console.log(`  js:    ${(js.length / 1024).toFixed(0)} KB`)
console.log(`  body:  ${JSON.stringify(bodyInner)}`)
