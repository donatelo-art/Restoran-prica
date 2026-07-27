/**
 * Generates local placeholder imagery in the Priča brand palette.
 *
 * These exist so the layout renders correctly without depending on an
 * external image CDN. Replace everything in /public/images with the
 * restaurant's real photography before launch — the filenames are stable,
 * so swapping them requires no code changes.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
mkdirSync(outDir, { recursive: true })

// Tonal pairs drawn from the Danube / sand / cream palette.
const palettes = {
  riverDeep: ['#081823', '#1d4660'],
  riverDusk: ['#0f2d3c', '#2a5f8e'],
  emberWarm: ['#3d2817', '#a87d4f'],
  emberGlow: ['#5a4229', '#d4a574'],
  slateSoft: ['#132b38', '#3d8ac9'],
  sandStone: ['#7c5a38', '#f8c896'],
}

/** Deterministic pseudo-random so regenerating produces identical files. */
function makeRandom(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function wavePath(rand, width, height, yBase, amplitude) {
  const steps = 6
  const dx = width / steps
  let d = `M ${-width * 0.1} ${yBase}`
  for (let i = 0; i < steps; i++) {
    const x1 = i * dx + dx * 0.35
    const x2 = i * dx + dx * 0.65
    const x = (i + 1) * dx
    const y1 = yBase + (rand() - 0.5) * amplitude
    const y2 = yBase + (rand() - 0.5) * amplitude
    d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x} ${yBase}`
  }
  return `${d} L ${width * 1.1} ${height * 1.1} L ${-width * 0.1} ${height * 1.1} Z`
}

function buildSvg({ width, height, palette, seed }) {
  const [dark, light] = palettes[palette]
  const rand = makeRandom(seed)

  const waves = [0.55, 0.68, 0.82]
    .map((ratio, i) => {
      const d = wavePath(rand, width, height, height * ratio, height * 0.09)
      return `<path d="${d}" fill="${light}" opacity="${0.1 + i * 0.05}"/>`
    })
    .join('\n    ')

  // Scattered soft highlights add depth so tiles don't read as flat blocks.
  const motes = Array.from({ length: 14 }, () => {
    const cx = rand() * width
    const cy = rand() * height * 0.7
    const r = 2 + rand() * 5
    return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(1)}" fill="${light}" opacity="${(0.05 + rand() * 0.12).toFixed(2)}"/>`
  }).join('\n    ')

  // Deliberately untitled: every tile is already labelled by the surrounding
  // UI, so baking text into the image would only duplicate it.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${dark}"/>
      <stop offset="100%" stop-color="${light}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.32" cy="0.28" r="0.75">
      <stop offset="0%" stop-color="#f5e6d3" stop-opacity="0.24"/>
      <stop offset="100%" stop-color="#f5e6d3" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <g>
    ${waves}
  </g>
  <g>
    ${motes}
  </g>
</svg>
`
}

const assets = [
  // Menu tiles
  { file: 'meni-riblja-corba.svg', w: 900, h: 640, palette: 'emberGlow', label: 'Riblja čorba' },
  { file: 'meni-saran.svg', w: 900, h: 640, palette: 'riverDusk', label: 'Šaran na žaru' },
  { file: 'meni-som.svg', w: 900, h: 640, palette: 'riverDeep', label: 'Som na žaru' },
  { file: 'meni-smudj.svg', w: 900, h: 640, palette: 'slateSoft', label: 'Smuđ' },
  { file: 'meni-lignje.svg', w: 900, h: 640, palette: 'sandStone', label: 'Lignje na žaru' },
  { file: 'meni-karadjordjeva.svg', w: 900, h: 640, palette: 'emberWarm', label: 'Karađorđeva' },

  // About
  { file: 'o-nama-terasa.svg', w: 1200, h: 800, palette: 'riverDusk', label: 'Terasa na Dunavu' },
  { file: 'o-nama-zar.svg', w: 600, h: 600, palette: 'emberWarm', label: 'Žar' },
  { file: 'o-nama-vino.svg', w: 600, h: 600, palette: 'sandStone', label: 'Vinska karta' },

  // Gallery
  { file: 'galerija-obala.svg', w: 1200, h: 900, palette: 'riverDeep', label: 'Obala' },
  { file: 'galerija-ulov.svg', w: 800, h: 800, palette: 'slateSoft', label: 'Jutarnji ulov' },
  { file: 'galerija-zalazak.svg', w: 800, h: 800, palette: 'emberGlow', label: 'Zalazak' },
  { file: 'galerija-sto.svg', w: 800, h: 800, palette: 'sandStone', label: 'Sto kraj vode' },
  { file: 'galerija-kuhinja.svg', w: 800, h: 800, palette: 'emberWarm', label: 'Kuhinja' },
  { file: 'galerija-vece.svg', w: 1200, h: 900, palette: 'riverDusk', label: 'Veče u Priči' },
]

assets.forEach((asset, index) => {
  const svg = buildSvg({
    width: asset.w,
    height: asset.h,
    palette: asset.palette,
    seed: 1337 + index * 977,
  })
  writeFileSync(join(outDir, asset.file), svg, 'utf8')
})

console.log(`Generated ${assets.length} placeholder images in public/images`)
