'use client'

import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/contact'

const details = [
  { label: 'Adresa', value: CONTACT.address },
  { label: 'Radno vreme', value: CONTACT.hours },
  { label: 'Kapacitet', value: CONTACT.capacity },
  { label: 'Rezervacije', value: 'Preporučujemo, posebno vikendom' },
]

export default function Reservations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-danube-900 via-danube-800 to-danube-900 px-6 py-24 md:px-12 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-sand-500 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-96 w-96 rounded-full bg-danube-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-300">
            Rezervacije
          </p>
          <div className="mb-8 flex justify-center">
            <div className="divider-gold" />
          </div>

          <h2 className="mb-8 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            Sačuvajmo vam sto
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-cream-200 md:text-xl">
            Najlepši stolovi su oni uz samu vodu, i njih je najmanje. Javite se
            dan ranije i biće vaši.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="rounded-lg bg-sand-500 px-8 py-4 text-lg font-semibold text-danube-900 transition-all duration-300 hover:bg-sand-400 hover:shadow-lg active:scale-95"
            >
              Pozovite {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg border-2 border-cream-200/60 px-8 py-4 text-lg font-semibold text-cream-100 transition-all duration-300 hover:border-cream-200 hover:bg-white/10 active:scale-95"
            >
              Pišite nam
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-12 md:grid-cols-4">
            {details.map((detail) => (
              <div key={detail.label} className="text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-sand-300">
                  {detail.label}
                </p>
                <p className="text-base font-light text-cream-100">{detail.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
