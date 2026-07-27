'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuItem {
  id: number
  name: string
  category: string
  description: string
  image: string
  price?: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Сваље на жару',
    category: 'Рачна раба',
    description: 'Свежа шаран из Дунава, печенa на отвореном огњу са лимоном и травама',
    image: 'https://images.unsplash.com/photo-1547632537-c03588a17d23?w=600&h=400&fit=crop',
    price: '2,490 дин',
  },
  {
    id: 2,
    name: 'Сум на жару',
    category: 'Рачна раба',
    description: 'Дивља речна раба са деликатним месом, печена са свежим зачинима',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    price: '2,890 дин',
  },
  {
    id: 3,
    name: 'Лигње на жару',
    category: 'Морска раба',
    description: 'Нежни лигњи из Адријатског мора, печени са белим вином и лимоном',
    image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=600&h=400&fit=crop',
    price: '1,890 дин',
  },
  {
    id: 4,
    name: 'Карађорђева шницла',
    category: 'Јела од меса',
    description: 'Класична, фина пачетина са белимсиром и мајонезом, печена на масти',
    image: 'https://images.unsplash.com/photo-1508270115619-a25917ba3287?w=600&h=400&fit=crop',
    price: '1,490 дин',
  },
  {
    id: 5,
    name: 'Ћевапи са подвараком',
    category: 'Јела од меса',
    description: 'Аутентични српски ћевапи, печени на жару, послужени са подвараком',
    image: 'https://images.unsplash.com/photo-1529042410759-822a6a4ad537?w=600&h=400&fit=crop',
    price: '1,290 дин',
  },
  {
    id: 6,
    name: 'Рибља чорба Приче',
    category: 'Чорбе',
    description: 'Позната чорба од свеже речне рибе са кромпиром, паприком и зачинима',
    image: 'https://images.unsplash.com/photo-1547521868-14cbbf04dd13?w=600&h=400&fit=crop',
    price: '490 дин',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function MenuPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="divider-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-danube-900 mb-6">
            Наша Кухња
          </h2>
          <p className="text-lg md:text-xl text-danube-700 max-w-2xl mx-auto">
            Откријте селекцију наших сигнатурних јела, припремљених са најсвежијим ингредијентима из Дунава и изван.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-danube-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                {/* Category Tag */}
                <span className="inline-block text-xs font-semibold text-danube-600 bg-danube-50 px-4 py-2 rounded-full mb-4 uppercase letter-spacing">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-display text-danube-900 mb-3 group-hover:text-danube-600 transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-danube-700 text-sm md:text-base mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex justify-between items-center">
                  {item.price && (
                    <span className="text-lg font-semibold text-sand-600">
                      {item.price}
                    </span>
                  )}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-danube-600 font-semibold text-sm hover:text-danube-700 transition-colors flex items-center gap-2"
                  >
                    Детаљи
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <button className="btn-primary text-lg">
            Видите весе мени
          </button>
        </motion.div>
      </div>
    </section>
  )
}
