'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Почетна', href: '#hero' },
    { label: 'О нама', href: '#about' },
    { label: 'Мени', href: '#menu' },
    { label: 'Галерија', href: '#gallery' },
    { label: 'Контакт', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-danube-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-danube-500 to-sand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">Р</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-semibold text-danube-900 text-lg">Priča</h1>
              <p className="text-xs text-danube-600">Данубе Ривер Дининг</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ color: '#3d8ac9' }}
                className="text-danube-800 font-medium transition-colors hover:text-danube-600"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 md:px-8 md:py-3 bg-danube-600 text-white font-semibold rounded-lg hover:bg-danube-700 transition-colors text-sm md:text-base"
            >
              Резервишите
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-danube-900 rounded-full"
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-danube-900 rounded-full"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-danube-900 rounded-full"
              ></motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white"
        >
          <div className="py-4 space-y-4 flex flex-col px-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-danube-800 font-medium hover:text-danube-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-danube-600 text-white font-semibold rounded-lg hover:bg-danube-700 transition-colors">
              Резервишите
            </button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
