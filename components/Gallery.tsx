'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
  className: string
}

/**
 * Tiles a 4-column grid with no gaps: one 2x2 feature, four 1x1s filling the
 * two columns beside it, and a full-width band underneath.
 *
 *   [ obala ][ ulov  ][zalazak]
 *   [ obala ][  sto  ][kuhinja]
 *   [        vece            ]
 */
const galleryImages: GalleryImage[] = [
  {
    id: 'obala',
    src: '/images/galerija-obala.svg',
    alt: 'Pogled na Dunav sa terase restorana',
    caption: 'Obala pred restoranom',
    className: 'h-64 md:col-span-2 md:row-span-2 md:h-auto',
  },
  {
    id: 'ulov',
    src: '/images/galerija-ulov.svg',
    alt: 'Sveža rečna riba iz jutarnjeg ulova',
    caption: 'Jutarnji ulov',
    className: 'h-64 md:h-auto',
  },
  {
    id: 'zalazak',
    src: '/images/galerija-zalazak.svg',
    alt: 'Zalazak sunca nad Dunavom',
    caption: 'Zalazak nad rekom',
    className: 'h-64 md:h-auto',
  },
  {
    id: 'sto',
    src: '/images/galerija-sto.svg',
    alt: 'Postavljen sto na terasi kraj vode',
    caption: 'Sto kraj vode',
    className: 'h-64 md:h-auto',
  },
  {
    id: 'kuhinja',
    src: '/images/galerija-kuhinja.svg',
    alt: 'Priprema ribe u kuhinji restorana',
    caption: 'Iz kuhinje',
    className: 'h-64 md:h-auto',
  },
  {
    id: 'vece',
    src: '/images/galerija-vece.svg',
    alt: 'Večernja atmosfera u restoranu',
    caption: 'Veče u Priči',
    className: 'h-64 md:col-span-4 md:h-72',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Gallery() {
  return (
    <section className="bg-cream-50 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sand-600">
            Galerija
          </p>
          <div className="mb-8 flex justify-center">
            <div className="divider-gold" />
          </div>
          <h2 className="mb-6 font-display text-4xl text-danube-900 md:text-5xl lg:text-6xl">
            Kako to kod nas izgleda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-danube-700 md:text-xl">
            Reka, žar i sto koji čeka. Najviše fotografija objavljujemo na Instagramu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 md:auto-rows-[15rem] md:grid-cols-4 md:gap-6"
        >
          {galleryImages.map((image) => (
            <motion.figure
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-danube-900/80 via-danube-900/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-1 p-6 text-cream-100 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-lg">{image.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg"
          >
            Pratite nas na Instagramu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
