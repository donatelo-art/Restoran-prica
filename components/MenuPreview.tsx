'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuItem {
  id: string
  name: string
  category: string
  description: string
  image: string
  price: string
}

/**
 * A cross-section of the kitchen rather than a full menu: one signature soup,
 * three river fish, one from the sea, one from the grill.
 */
const menuItems: MenuItem[] = [
  {
    id: 'riblja-corba',
    name: 'Riblja čorba',
    category: 'Čorbe',
    description:
      'Ono po čemu nas pamte. Od tri vrste rečne ribe, krčkana satima, sa domaćom aleva paprikom.',
    image: '/images/meni-riblja-corba.svg',
    price: '590 RSD',
  },
  {
    id: 'saran',
    name: 'Šaran na žaru',
    category: 'Rečna riba',
    description:
      'Dunavski šaran, cela riba na otvorenoj vatri, sa limunom i domaćim začinskim biljem.',
    image: '/images/meni-saran.svg',
    price: '2.490 RSD',
  },
  {
    id: 'som',
    name: 'Som na žaru',
    category: 'Rečna riba',
    description:
      'Mesnati fileti soma, blago dimljeni na žaru, uz pečeni krompir i mladi beli luk.',
    image: '/images/meni-som.svg',
    price: '2.290 RSD',
  },
  {
    id: 'smudj',
    name: 'Smuđ u maslinovom ulju',
    category: 'Rečna riba',
    description:
      'Najfiniji filet naše reke — kratko na tiganju, sa maslinovim uljem, belim lukom i peršunom.',
    image: '/images/meni-smudj.svg',
    price: '2.890 RSD',
  },
  {
    id: 'lignje',
    name: 'Lignje na žaru',
    category: 'Morski plodovi',
    description:
      'Nežne lignje sa Jadrana, sa žara, uz blitvu na dalmatinski način i krišku limuna.',
    image: '/images/meni-lignje.svg',
    price: '1.890 RSD',
  },
  {
    id: 'karadjordjeva',
    name: 'Karađorđeva šnicla',
    category: 'Jela od mesa',
    description:
      'Klasik, bez kompromisa. Punjena kajmakom, pohovana do zlatne boje, uz domaći tartar sos.',
    image: '/images/meni-karadjordjeva.svg',
    price: '1.590 RSD',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function MenuPreview() {
  return (
    <section className="bg-gradient-to-b from-cream-50 to-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-600">Meni</p>
          <div className="mb-8 flex justify-center">
            <div className="divider-gold" />
          </div>
          <h2 className="mb-6 font-display text-4xl text-danube-900 md:text-5xl lg:text-6xl">
            Sa žara, sa reke
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-danube-700 md:text-xl">
            Kratak izbor iz kuhinje. Puna karta menja se sa sezonom i sa onim što
            tog jutra stigne sa vode.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10"
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden bg-danube-100 md:h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <span className="mb-4 inline-block rounded-full bg-danube-50 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-danube-600">
                  {item.category}
                </span>

                <h3 className="mb-3 font-display text-2xl text-danube-900 transition-colors group-hover:text-danube-600">
                  {item.name}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-danube-700">{item.description}</p>

                <div className="flex items-center justify-between border-t border-cream-600/30 pt-5">
                  <span className="font-display text-lg text-sand-600">{item.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4 md:mt-20"
        >
          <a href="#kontakt" className="btn-primary text-lg">
            Zatražite celu kartu
          </a>
          <p className="text-sm text-danube-600">
            Za veće grupe i proslave pripremamo poseban meni.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
