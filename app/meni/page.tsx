import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MenuCategoryBlock, WineGroupBlock } from '@/components/MenuList'
import { menu, wines } from '@/lib/menu'
import { CONTACT } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Meni — Restoran Priča | Novi Banovci',
  description:
    'Rečna riba po kilogramu — šaran, som, smuđ, pastrmka, kečiga. Riblja čorba, jela sa žara i vina domaćih vinarija. Ceo meni Restorana Priča.',
}

export default function MenuPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* The header band gives the fixed nav something dark to sit on, the
            same way the hero does on the home page. */}
        <header className="bg-gradient-to-b from-danube-900 to-danube-800 px-6 pb-20 pt-40 md:px-12 md:pb-24 md:pt-48">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-sand-300">
              Restoran Priča
            </p>
            <h1 className="font-display text-5xl text-white md:text-6xl lg:text-7xl">Meni</h1>
            <div className="mx-auto my-8 h-px w-16 bg-sand-500" />
            <p className="text-lg font-light leading-relaxed text-cream-200">
              Rečna riba se meri i pečena naplaćuje po kilogramu — birate je
              svežu, pred vama. Sve ostalo dolazi u porcijama.
            </p>
          </div>
        </header>

        <div className="bg-white px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-5xl">
            {/* CSS columns balance the categories without hand-splitting them
                into two arrays; break-inside-avoid keeps each one whole. */}
            <div className="lg:columns-2 lg:gap-16 [&>*]:mb-16">
              {menu.map((category) => (
                <MenuCategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cream-50 px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-600">
                Vinska karta
              </p>
              <h2 className="font-display text-4xl text-danube-900 md:text-5xl">Vina</h2>
              <div className="mx-auto my-6 h-px w-12 bg-sand-500" />
              <p className="mx-auto max-w-xl text-base font-light text-danube-700">
                Podrumi kojima verujemo — Matalj sa Negotinske krajine, Deurić i
                Kovačević sa Fruške gore.
              </p>
            </div>

            <div className="lg:columns-2 lg:gap-16 [&>*]:mb-16">
              {wines.map((group) => (
                <WineGroupBlock key={group.title} group={group} />
              ))}
            </div>
          </div>
        </div>

        <section className="bg-danube-900 px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 text-sm font-light text-cream-300">
              Sve cene su izražene u dinarima (RSD). Ponuda zavisi od dnevnog
              ulova i sezone — za trenutnu dostupnost nas pozovite.
            </p>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="inline-block rounded-lg bg-sand-500 px-8 py-4 text-lg font-semibold text-danube-900 transition-all duration-300 hover:bg-sand-400 hover:shadow-xl active:scale-95"
            >
              Rezervišite sto
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
