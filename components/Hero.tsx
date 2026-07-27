'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-danube-900 via-danube-800 to-danube-700">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-20 w-96 h-96 bg-danube-500 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-sand-400 opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Accent line above headline */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="divider-gold"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          >
            Priča Danube
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-cream-200 text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Где се река среће са кулинарском страстју. Свежа морска раба, традиција и луксуз у сваком оброку.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-cream-100 text-base md:text-lg font-light mb-12 max-w-xl mx-auto opacity-90"
          >
            Искусите премијумну куларију на обали Дунава у Новом Бановцу. Свака манја причајe причу о Дунаву, свежини и страсти.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary text-lg">
              Резервишите сто
            </button>
            <button className="btn-secondary text-lg">
              Истраживајте мени
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-6 h-6 text-cream-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
