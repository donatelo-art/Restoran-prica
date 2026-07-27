# Restoran Priča

Website for Restoran Priča — a fish and seafood restaurant on the Danube in Novi Banovci, Vojvodina, Serbia. Built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## ⚠️ Before this goes live

Two things in this repo are placeholders and **must** be replaced:

**1. Contact details — `lib/contact.ts`**

Every value in that file is invented: phone, email, opening hours, capacity, social links. They are all funnelled through one module so there is exactly one place to fix. Publishing a wrong phone number for a real business is worse than publishing none.

**2. Photography — `public/images/`**

The images are generated abstract gradients in the brand palette, not photographs. They exist so the layout renders without depending on an external image host. Replace them with the restaurant's real photography, keeping the same filenames — no code changes needed.

```
meni-*.svg        menu cards        (≈3:2, landscape)
o-nama-terasa.svg about, feature    (3:2, landscape)
o-nama-*.svg      about, small pair (1:1, square)
galerija-obala.svg / galerija-vece.svg   gallery, landscape
galerija-*.svg    gallery tiles     (1:1, square)
```

Swapping to `.jpg`/`.webp` means updating the `src` strings in `components/MenuPreview.tsx`, `components/About.tsx` and `components/Gallery.tsx`.

Menu prices in `components/MenuPreview.tsx` are also illustrative.

## Structure

```
app/
  layout.tsx          metadata, fonts, <html lang="sr-Latn">
  page.tsx            section order and anchor ids
  globals.css         Tailwind layers, self-hosted fonts, shared classes
components/
  Navigation.tsx      fixed header, transparent over the hero
  Hero.tsx            full-viewport opener
  About.tsx           story + three feature cards
  MenuPreview.tsx     six-dish cross-section of the kitchen
  Gallery.tsx         4-column tiled grid
  Reservations.tsx    booking call-to-action
  Footer.tsx
lib/contact.ts        ← all contact details live here
scripts/
  generate-placeholders.mjs   regenerates public/images
```

## Design

Full rationale in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). Short version:

- **Palette** — deep Danube blues for depth, a warm sand tone for accents and primary calls-to-action, cream for text on dark. Defined in `tailwind.config.ts` as `danube`, `sand`, `cream`.
- **Type** — Playfair Display for headings, Inter for everything else. Both self-hosted via `@fontsource`, `latin-ext` subsets, so the Serbian diacritics (č, ć, š, ž, đ) render and there is no third-party request on load.
- **Motion** — Framer Motion, transform/opacity only. Sections reveal once on scroll with a short stagger; nothing loops except the ambient hero glow.

## Language

The site is in Serbian, Latin script — the norm for hospitality in Vojvodina and readable to both locals and visitors. `lang="sr-Latn"`.

## Notes

- Fully static: every route prerenders, no server runtime needed.
- Deploys as-is to Vercel, Netlify, or any static host.
- No analytics, cookies, or third-party requests are wired up. If you add them, the site currently sets no cookies, which is worth keeping in mind for the consent banner you'd otherwise need.
