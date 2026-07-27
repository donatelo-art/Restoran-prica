/**
 * The menu, transcribed from photographs of the printed card.
 *
 * ⚠️ PRICES NEED VERIFYING. The source photographs were taken roughly two
 * years ago, and several prices on them had already been re-stickered by
 * hand (Karađorđeva, mešano meso, Cezar salata, riblja čorba) — so they
 * were out of date even in the photo. Check every figure against the
 * current card before this goes live.
 *
 * Prices are plain numbers in RSD; `formatPrice` handles presentation.
 */

export type Unit = 'kg' | 'portion' | 'liter'

export interface Dish {
  name: string
  /** The smaller line under the name — usually what comes with it. */
  note?: string
  price: number
  /** Omitted for the usual case of a plated portion at a flat price. */
  unit?: Unit
}

export interface MenuCategory {
  id: string
  title: string
  /** Shown under the category heading, e.g. what a dish is served with. */
  note?: string
  dishes: Dish[]
}

export interface Wine {
  name: string
  producer?: string
  /** Bottle size in liters. */
  volume: number
  price: number
}

export interface WineGroup {
  title: string
  wines: Wine[]
}

/** Ordered as a meal reads, not as the printed card happens to be bound. */
export const menu: MenuCategory[] = [
  {
    id: 'recna-riba',
    title: 'Rečna riba',
    note: 'Uz ribu ide krompir salata ili krompir-blitva.',
    dishes: [
      { name: 'Šaran', price: 2600, unit: 'kg' },
      { name: 'Som', price: 2800, unit: 'kg' },
      { name: 'Smuđ', price: 3100, unit: 'kg' },
      { name: 'Pastrmka', price: 2400, unit: 'kg' },
      { name: 'Kečiga', price: 3800, unit: 'kg' },
      { name: 'Dimljeni šaran', price: 2900, unit: 'kg' },
      { name: 'Smuđ šnicle', price: 1300, unit: 'portion' },
      { name: 'Dimljena pastrmka', price: 1200, unit: 'portion' },
      { name: 'Orli', note: 'tartar sos', price: 950, unit: 'portion' },
    ],
  },
  {
    id: 'morska-riba',
    title: 'Morska riba',
    dishes: [
      { name: 'Lignje na žaru', note: 'krompir-blitva', price: 1300 },
      { name: 'Lignje pohovane', note: 'tartar sos', price: 1300 },
    ],
  },
  {
    id: 'corbe',
    title: 'Čorbe i supe',
    dishes: [
      { name: 'Riblja čorba', price: 400 },
      { name: 'Riblji paprikaš', price: 750 },
      { name: 'Teleća čorba', price: 300 },
      { name: 'Bela krem čorba', price: 250 },
    ],
  },
  {
    id: 'topla-predjela',
    title: 'Topla predjela',
    dishes: [
      {
        name: 'Šampinjoni na žaru',
        note: 'šampinjoni, pirinač, zelena salata',
        price: 350,
      },
      { name: 'Grilovano povrće', note: 'patlidžan, tikvice, šampinjoni', price: 350 },
      { name: 'Pohovane masline', note: 'masline, zelena salata, sir', price: 400 },
      { name: 'Pohovani kačkavalj', note: 'tartar sos', price: 400 },
      { name: 'Grilovani miročki sir', price: 500 },
    ],
  },
  {
    id: 'hladna-predjela',
    title: 'Hladna predjela',
    dishes: [
      { name: 'Grčka salata', price: 400 },
      { name: 'Cezar salata', price: 780 },
      { name: 'Tanjir meze', note: 'suhomesnato, sir, masline', price: 800 },
    ],
  },
  {
    id: 'jela-od-mesa',
    title: 'Jela od mesa',
    note: 'Uz meso ide pomfrit.',
    dishes: [
      { name: 'Grill plata „Priča"', note: '800 g', price: 2000 },
      { name: 'Mešano meso', note: '600 g', price: 1350 },
      { name: 'Karađorđeva', price: 1250 },
      { name: 'Karađorđeva pileća', price: 1000 },
      { name: 'Dimljena vešalica', price: 1100 },
      { name: 'Bečka šnicla', price: 950 },
      { name: 'Kobasica sa sirom', price: 950 },
      { name: 'Ćevapčići', price: 900 },
      { name: 'Pljeskavica', price: 900 },
      { name: 'Natur šnicla', price: 900 },
      { name: 'Domaća kobasica', price: 900 },
      { name: 'Grilovano pileće meso', price: 900 },
      { name: 'Ražnjići', price: 850 },
    ],
  },
  {
    id: 'salate',
    title: 'Salate',
    dishes: [
      { name: 'Zeleni mix', price: 310 },
      { name: 'Šopska', price: 290 },
      { name: 'Srpska', price: 280 },
      { name: 'Bašta salata', note: 'za dve osobe', price: 300 },
      { name: 'Kiseli kupus', price: 300 },
      { name: 'Paradajz', price: 230 },
      { name: 'Krastavac', price: 230 },
      { name: 'Zelena', price: 200 },
      { name: 'Kupus', price: 190 },
      { name: 'Pečena paprika u ulju', price: 150 },
    ],
  },
  {
    id: 'dorucak',
    title: 'Doručak',
    dishes: [
      {
        name: 'Doručak „Priča"',
        note: 'kobasica, pileće belo, feta, tartar sos',
        price: 490,
      },
      { name: 'Prženice', note: 'ajvar, kajmak, suhomesnato', price: 400 },
      { name: 'Omlet po želji', price: 380 },
    ],
  },
]

/** Grouped by producer — the way a wine list is normally read. */
export const wines: WineGroup[] = [
  {
    title: 'Vinarija Matalj',
    wines: [
      { name: 'Belo', volume: 1, price: 1500 },
      { name: 'Roze', volume: 1, price: 1500 },
      { name: 'Crveno', volume: 1, price: 1500 },
    ],
  },
  {
    title: 'Deurić',
    wines: [
      { name: 'Sauvignon', volume: 0.7, price: 2400 },
      { name: 'Traminac', volume: 0.7, price: 2400 },
      { name: 'Pinot noir', volume: 0.7, price: 2400 },
      { name: 'Chardonnay', volume: 0.7, price: 2400 },
      { name: 'Chardonnay barrique', volume: 0.7, price: 3000 },
    ],
  },
  {
    title: 'Kovačević',
    wines: [
      { name: 'Aurelius', volume: 0.7, price: 2900 },
      { name: 'Chardonnay', volume: 0.7, price: 2700 },
    ],
  },
  {
    title: 'Ostala vina',
    wines: [
      { name: 'Trijumf', producer: 'belo', volume: 0.7, price: 3000 },
      { name: 'Tamjanika', producer: 'Spasić', volume: 0.7, price: 2500 },
      { name: 'Delena', producer: 'roze', volume: 0.7, price: 1800 },
    ],
  },
  {
    title: 'Na čašu',
    wines: [
      { name: 'Kuvano vino', volume: 0.2, price: 320 },
      { name: 'Špricer', volume: 0.2, price: 170 },
    ],
  },
]

/** Serbian convention: period groups thousands. 2600 -> "2.600". */
export function formatPrice(value: number): string {
  return value.toLocaleString('sr-RS')
}

export function formatUnit(unit?: Unit): string | null {
  if (unit === 'kg') return 'po kg'
  if (unit === 'portion') return 'porcija'
  return null
}

/** Bottle sizes read better as "1 l" and "0,7 l" than as raw numbers. */
export function formatVolume(volume: number): string {
  return `${volume.toString().replace('.', ',')} l`
}
