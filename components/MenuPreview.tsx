'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice, formatUnit, menu, type Dish } from '@/lib/menu'

/** Pulled from the real menu data so prices can never drift out of sync. */
const signatureNames = [
  'Riblja čorba',
  'Šaran',
  'Smuđ',
  'Kečiga',
  'Lignje na žaru',
  'Grill plata „Priča"',
]

const allDishes = menu.flatMap((category) => category.dishes)
const signatures = signatureNames
  .map((name) => allDishes.find((dish) => dish.name === name))
  .filter((dish): dish is Dish => Boolean(dish))

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function MenuPreview() {
  return (
    <section className="bg-gradient-to-b from-cream-50 to-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative h-80 overflow-hidden rounded-2xl shadow-2xl lg:h-full lg:min-h-[30rem]"
          >
            <Image
              src="/images/o-nama-zar.svg"
              alt="Riba na otvorenom žaru"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-600">
                Meni
              </p>
              <div className="divider-gold mb-8" />
              <h2 className="mb-6 font-display text-4xl text-danube-900 md:text-5xl">
                Sa žara, sa reke
              </h2>
              <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-danube-700">
                Rečnu ribu birate svežu i plaćate po kilogramu — onako kako se
                oduvek radilo. Ovo je nekoliko jela po kojima nas pamte.
              </p>
            </motion.div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="divide-y divide-cream-600/40 border-y border-cream-600/40"
            >
              {signatures.map((dish) => {
                const meta = formatUnit(dish.unit)
                return (
                  <motion.li key={dish.name} variants={rowVariants} className="py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-lg text-danube-900 md:text-xl">
                        {dish.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mb-1 min-w-6 flex-1 border-b border-dotted border-danube-300"
                      />
                      {meta && (
                        <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-sand-600">
                          {meta}
                        </span>
                      )}
                      <span className="shrink-0 font-display text-lg text-danube-800 md:text-xl">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                    {dish.note && (
                      <p className="mt-1 text-sm font-light italic text-danube-900/55">
                        {dish.note}
                      </p>
                    )}
                  </motion.li>
                )
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/meni" className="btn-primary text-lg">
                Ceo meni
              </Link>
              <p className="text-sm text-danube-600">
                {allDishes.length} jela i vinska karta.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
