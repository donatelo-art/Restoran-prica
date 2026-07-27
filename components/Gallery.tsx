'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  span?: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
    alt: 'Luxury dining setup',
    category: 'Амбијенс',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop',
    alt: 'Grilled fish',
    category: 'Рречна раба',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    alt: 'River view',
    category: 'Приказ',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1583521214271-7a7a0ee3c4b5?w=600&h=600&fit=crop',
    alt: 'Fresh seafood platter',
    category: 'Морска раба',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504674900152-b8b27e98b25e?w=600&h=600&fit=crop',
    alt: 'Chef preparation',
    category: 'Припрема',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1588195538326-c5b1e6f3bf41?w=800&h=600&fit=crop',
    alt: 'Evening ambiance',
    category: 'Амбијенс',
    span: 'md:col-span-2',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="divider-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-danube-900 mb-6">
            Галерија
          </h2>
          <p className="text-lg md:text-xl text-danube-700 max-w-2xl mx-auto">
            Откријте липоту амбијенса и деликатност наших јела кроз нашу фотографију.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-80 ${
                image.span || ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-sm font-semibold text-sand-300 mb-2 uppercase">
                  {image.category}
                </p>
                <p className="text-lg font-display">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <button className="btn-primary text-lg">
            Видите више на Инстаграму
          </button>
        </motion.div>
      </div>
    </section>
  )
}
