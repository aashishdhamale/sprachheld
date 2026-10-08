#!/usr/bin/env node
/**
 * Turns a full standalone HTML document into the fragment an Artifact publish
 * expects: drops <!doctype>, <html>, <head>, <body> and the charset/viewport
 * meta (the Artifact skeleton supplies those), keeps <title>, <style>, the
 * markup and the scripts in their original order.
 *
 *   node scripts/to-artifact-fragment.mjs tools/artikeltrainer.html dist-artifact/artikeltrainer.html
 */
import fs from 'node:fs'
import path from 'node:path'

const [src, out] = process.argv.slice(2)
if (!src || !out) {
  console.error('usage: to-artifact-fragment.mjs <input.html> <output.html>')
  process.exit(1)
}

let html = fs.readFileSync(src, 'utf8')
html = html
  .replace(/<!doctype[^>]*>/i, '')
  .replace(/<\/?html[^>]*>/gi, '')
  .replace(/<\/?head[^>]*>/gi, '')
  .replace(/<\/?body[^>]*>/gi, '')
  .replace(/<meta\s+charset[^>]*>/i, '')
  .replace(/<meta\s+name="viewport"[^>]*>/i, '')
  .trim()

if (!/^<title>/.test(html)) {
  console.error('expected the fragment to start with <title> — check the source file')
  process.exit(1)
}

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, html + '\n')
console.log(`wrote ${out} — ${(html.length / 1024).toFixed(0)} KB`)
