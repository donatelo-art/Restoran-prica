# Restoran Priča — design system

## Palette

Defined in `tailwind.config.ts`. Three families, each with a full 50–900 ramp.

| Token | Hex | Role |
|---|---|---|
| `danube-900` | `#081823` | Darkest ground — footer, hero base |
| `danube-800` | `#0f2d3c` | Dark sections, primary heading colour |
| `danube-600` | `#2a5f8e` | Secondary actions on light ground |
| `danube-500` | `#3d8ac9` | Links, ambient glow |
| `sand-500` | `#d4a574` | **Primary call-to-action**, dividers, accents |
| `sand-300` | `#fad9b5` | Eyebrow text and accents on dark |
| `cream-50` | `#fffbf7` | Warm section background |
| `cream-100/200` | `#fff8f0` / `#fff0e0` | Body text on dark |

**The one rule worth stating:** sand, not blue, carries the primary action. A saturated blue button on a deep blue hero reads like a generic web app; the warm tone reads like a restaurant and echoes the grill. Blue stays for secondary actions on light backgrounds.

Contrast: `cream-100` on `danube-900` ≈ 14:1, `danube-900` on `sand-500` ≈ 8:1 — both comfortably past WCAG AA.

## Type

| | Face | Weights | Used for |
|---|---|---|---|
| Display | Playfair Display | 400–700 | `h1`–`h3`, prices, logo |
| Body | Inter | 300–700 | Everything else |

Self-hosted through `@fontsource`, importing the **`latin-ext`** subsets specifically — the default `latin` subset omits č, ć, š, ž and đ, which would break most of the copy on this site.

Sizes come from Tailwind's scale, set per-element rather than through global `h1`/`h2` rules so a heading can be sized for its context.

Two recurring patterns:

- **Eyebrow** — `text-xs uppercase tracking-[0.3em]` in `sand-600` (light ground) or `sand-300` (dark). Labels each section above its heading.
- **Gold divider** — `.divider-gold`, a 4rem sand gradient rule. Sits between eyebrow and heading.

## Layout

Sections run `py-24 md:py-32`, `px-6 md:px-12`, capped at `max-w-6xl` (prose-led) or `max-w-7xl` (grid-led).

The gallery is the only non-obvious grid — a 4-column, fixed-row-height arrangement that tiles with no gaps:

```
[ obala ][ ulov  ][zalazak]     obala spans 2×2
[ obala ][  sto  ][kuhinja]
[         vece           ]      vece spans all 4
```

It relies on `md:auto-rows-[15rem]` for a fixed row height. A `row-span-2` tile cannot resolve its height against implicit `auto` rows, which is what makes naive masonry attempts leave an orphaned tile.

## Motion

Framer Motion, animating only `transform` and `opacity` so everything stays on the compositor.

- Sections: `whileInView` with `viewport={{ once: true }}` — reveal once, never re-trigger on scroll-back.
- Easing: `[0.22, 1, 0.36, 1]` throughout. Fast out, long settle.
- Stagger: 0.07–0.18s between children depending on how many there are.
- Hover: cards lift 6–8px, images scale to 1.1 over 700ms.
- The only looping animations are the hero's ambient glow and the scroll arrow.

## Voice

Serbian, Latin script, `lang="sr-Latn"`.

Written to sound like a restaurant that is confident enough not to oversell. Concretely:

- **Name the thing.** "Šaran, som, smuđ, pastrmka, kečiga" beats "fresh river fish."
- **No luxury adjectives.** No *ekskluzivno*, *vrhunski doživljaj*, *gastronomska avantura*. The specifics do the work.
- **Short sentences, occasional fragment.** "Ne izmišljamo kuhinju. Poštujemo je."
- **Let the reader finish the thought.** "Dođite ranije — zalazak se ne čeka dvaput."

Headline is `Priča počinje na Dunavu` — plays on the restaurant's name (*priča* = story) and puts the river in the first line.

Diacritics are non-negotiable: *reka* and *rečna*, *corba* and *čorba* are different words. Copy without them looks careless to a Serbian reader.
