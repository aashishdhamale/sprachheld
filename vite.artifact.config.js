/**
 * A second build target that produces ONE self-contained HTML file with all
 * JS and CSS inlined — no separate asset files, no server, works from any
 * static origin (including a published Artifact).
 *
 * This is separate from the normal `npm run build` (which keeps chunks split
 * for better browser caching when actually hosted). Use this only for
 * artifact packaging: `npm run build:artifact`.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    target: 'esnext',
    outDir: 'dist-artifact',
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 100_000_000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
