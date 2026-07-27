'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Sveža rečna riba',
    description:
      'Šaran, som, smuđ, pastrmka i kečiga — biramo ih svakog jutra, pre nego što se otvore vrata.',
  },
  {
    title: 'Vina koja biramo sami',
    description:
      'Matalj, Deurić i Kovačević — podrumi kojima verujemo, i po koja flaša koju čuvamo za posebne goste.',
  },
  {
    title: 'Sto tik uz vodu',
    description:
      'Terasa na samoj obali. Leti se večera uz zalazak, zimi uz staklo i vatru sa žara.',
  },
]

export default function About() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-600">
              O nama
            </p>
            <div className="divider-gold mb-8" />
            <h2 className="mb-8 font-display text-4xl text-danube-900 md:text-5xl lg:text-6xl">
              Reka nam je pred vratima
            </h2>

            <div className="space-y-6 text-danube-800">
              <p className="text-lg font-light leading-relaxed md:text-xl">
                Restoran Priča stoji tamo gde se Dunav najlepše otvara — u Novim
                Banovcima, na samoj obali. Nismo daleko od Beograda, a dovoljno
                smo daleko da se čuje samo voda.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                Naša priča počinje rano ujutru, kada stigne riba. Šaran, som,
                smuđ, pastrmka, kečiga. Od tog trenutka sve je pitanje vatre,
                strpljenja i mere — riba ide na žar cela, a riblja čorba se
                krčka onako kako se oduvek krčkala, bez prečica.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                Ne izmišljamo kuhinju. Poštujemo je. A ono što se pamti obično se
                ne desi na tanjiru — desi se za stolom, dok sunce zalazi iza
                reke i niko ne žuri kući.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl shadow-2xl md:h-80">
              <Image
                src="/images/o-nama-terasa.svg"
                alt="Terasa restorana Priča na obali Dunava"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl shadow-lg md:h-48">
              <Image
                src="/images/o-nama-zar.svg"
                alt="Riba na otvorenom žaru"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl shadow-lg md:h-48">
              <Image
                src="/images/o-nama-vino.svg"
                alt="Izbor vina domaćih vinarija"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-6 md:mt-28 md:grid-cols-3 md:gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-cream-600/30 bg-cream-50 p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-5 h-px w-10 bg-sand-500" />
              <h3 className="mb-3 font-display text-xl text-danube-900">{feature.title}</h3>
              <p className="text-base leading-relaxed text-danube-700">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
