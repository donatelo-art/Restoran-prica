'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-danube-900 via-danube-800 to-danube-700">
      {/* Ambient light, suggesting late sun over the water */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-20 right-0 h-[32rem] w-[32rem] rounded-full bg-danube-500 opacity-20 blur-3xl animate-float" />
        <div
          className="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-sand-500 opacity-10 blur-3xl animate-float"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-sand-300 md:text-sm"
          >
            Novi Banovci &middot; na obali Dunava
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl"
          >
            Priča počinje
            <span className="block text-sand-300">na Dunavu</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="divider-gold" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-cream-200 md:text-2xl"
          >
            Sveža rečna riba sa žara, vina domaćih vinarija i sto tik uz vodu.
            Ostalo prepustite reci.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <a
              href="#kontakt"
              className="rounded-lg bg-sand-500 px-8 py-4 text-lg font-semibold text-danube-900 transition-all duration-300 hover:bg-sand-400 hover:shadow-xl active:scale-95"
            >
              Rezervišite sto
            </a>
            <a
              href="#meni"
              className="rounded-lg border-2 border-cream-200/60 px-8 py-4 text-lg font-semibold text-cream-100 transition-all duration-300 hover:border-cream-200 hover:bg-white/10 active:scale-95"
            >
              Pogledajte meni
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#o-nama"
        aria-label="Pređite na sledeći odeljak"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-cream-200/70 transition-colors hover:text-cream-100"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  )
}
