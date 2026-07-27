'use client'

import { motion } from 'framer-motion'

export default function Reservations() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-r from-danube-800 to-danube-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sand-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-danube-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Accent */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-16 bg-gradient-to-r from-sand-300 via-sand-500 to-sand-300 rounded-full"
            ></motion.div>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
            Резервишите вашу вечер
          </h2>

          {/* Subheading */}
          <p className="text-cream-200 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Искусите магију Дунава кроз нашу премијумну куларију. Сваки сто је прилика за причу коју ћете памтити заувек.
          </p>

          {/* CTA Text */}
          <p className="text-cream-100 text-base md:text-lg font-light mb-8 max-w-xl mx-auto">
            Позовите нас на <span className="font-semibold text-sand-300">+381 22 456 789</span> или пошаљите имејл
          </p>

          {/* Contact Email */}
          <motion.a
            href="mailto:info@restoranprica.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-sand-300 font-semibold text-lg hover:text-sand-200 transition-colors mb-12 underline underline-offset-4"
          >
            info@restoranprica.com
          </motion.a>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-8 py-4 bg-sand-500 text-white font-semibold rounded-lg hover:bg-sand-600 transition-all duration-300 hover:shadow-lg text-lg">
              Резервишите на интернету
            </button>
            <button className="px-8 py-4 border-2 border-cream-200 text-cream-200 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg">
              Позовите нас
            </button>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Адреса', value: 'Нови Бановци, Река Дунав' },
              { label: 'Радно време', value: 'Утораком - недеља 11-23' },
              { label: 'Капацитет', value: 'До 120 особа' },
              { label: 'Резерве', value: 'Препоручено' },
            ].map((info, index) => (
              <div key={index} className="text-center">
                <p className="text-cream-300 text-sm font-semibold uppercase mb-2">
                  {info.label}
                </p>
                <p className="text-white text-base md:text-lg font-light">
                  {info.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
