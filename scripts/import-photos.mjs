/**
 * Turns the raw photographs in photos-inbox/ into the web assets the site
 * expects in public/images/.
 *
 *   node scripts/import-photos.mjs
 *
 * Matching is by filename: a file whose name contains a slot key lands in
 * that slot, so `saran-2024-final.jpg` resolves to `meni-saran`. Anything
 * unmatched is reported rather than guessed at.
 *
 * Each photo is cropped to the aspect ratio its slot needs and written as
 * .webp at 2x the largest size it renders at. Originals are left untouched.
 */
import { readdir, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const inbox = join(root, 'photos-inbox')
const outDir = join(root, 'public', 'images')

/** slot -> output dimensions, sized at 2x the largest on-screen render. */
const slots = {
  'meni-riblja-corba': { w: 900, h: 600 },
  'meni-saran': { w: 900, h: 600 },
  'meni-som': { w: 900, h: 600 },
  'meni-smudj': { w: 900, h: 600 },
  'meni-lignje': { w: 900, h: 600 },
  'meni-karadjordjeva': { w: 900, h: 600 },
  'o-nama-terasa': { w: 1200, h: 800 },
  'o-nama-zar': { w: 600, h: 600 },
  'o-nama-vino': { w: 600, h: 600 },
  'galerija-obala': { w: 1200, h: 1200 },
  'galerija-ulov': { w: 700, h: 700 },
  'galerija-zalazak': { w: 700, h: 700 },
  'galerija-sto': { w: 700, h: 700 },
  'galerija-kuhinja': { w: 700, h: 700 },
  'galerija-vece': { w: 1600, h: 700 },
}

/** Longest slot key first, so `meni-saran` wins over a hypothetical `saran`. */
const slotKeys = Object.keys(slots).sort((a, b) => b.length - a.length)

/** Also accept the bare subject, e.g. `saran.jpg` for the `meni-saran` slot. */
function resolveSlot(filename) {
  const stem = basename(filename, extname(filename)).toLowerCase()
  const direct = slotKeys.find((key) => stem.includes(key))
  if (direct) return direct
  return slotKeys.find((key) => {
    const subject = key.replace(/^(meni|o-nama|galerija)-/, '')
    return stem.includes(subject)
  })
}

if (!existsSync(inbox)) {
  console.error(`No photos-inbox/ directory. Create it and add photographs first.`)
  process.exit(1)
}

await mkdir(outDir, { recursive: true })

const files = (await readdir(inbox)).filter((f) =>
  /\.(jpe?g|png|webp|tiff?|heic|avif)$/i.test(f)
)

if (files.length === 0) {
  console.log('photos-inbox/ has no images yet — nothing to do.')
  process.exit(0)
}

const claimed = new Map()
const unmatched = []

for (const file of files) {
  const slot = resolveSlot(file)
  if (!slot) {
    unmatched.push(file)
    continue
  }
  // First file to claim a slot wins; later ones are flagged, not silently dropped.
  if (claimed.has(slot)) {
    unmatched.push(`${file} (slot "${slot}" already taken by ${claimed.get(slot)})`)
    continue
  }
  claimed.set(slot, file)
}

for (const [slot, file] of claimed) {
  const { w, h } = slots[slot]
  const dest = join(outDir, `${slot}.webp`)
  await sharp(join(inbox, file))
    .rotate() // honour EXIF orientation before cropping
    .resize(w, h, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(dest)
  console.log(`  ${file}  ->  public/images/${slot}.webp  (${w}x${h})`)
}

console.log(`\nProcessed ${claimed.size} photo(s).`)

const missing = slotKeys.filter((key) => !claimed.has(key))
if (missing.length) {
  console.log(`\nStill on placeholders (${missing.length}):`)
  missing.forEach((slot) => console.log(`  ${slot}`))
}
if (unmatched.length) {
  console.log(`\nCouldn't place these — rename to include a slot name:`)
  unmatched.forEach((file) => console.log(`  ${file}`))
}
if (claimed.size) {
  console.log(`\nNote: outputs are .webp. Update the .svg src strings in`)
  console.log(`components/{MenuPreview,About,Gallery}.tsx for the slots above.`)
}
