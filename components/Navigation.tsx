'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CONTACT } from '@/lib/contact'

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Meni', href: '#meni' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // The header starts transparent over the hero and picks up a solid
  // background once the user scrolls past it.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = isScrolled || isOpen

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-cream-600/30 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex h-20 items-center justify-between md:h-24">
          <a href="#" className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-lg font-display text-xl font-bold transition-colors ${
                solid ? 'bg-danube-800 text-cream-100' : 'bg-cream-100/15 text-cream-100 backdrop-blur-sm'
              }`}
            >
              P
            </span>
            <span className="hidden sm:block">
              <span
                className={`block font-display text-lg font-semibold leading-tight transition-colors ${
                  solid ? 'text-danube-900' : 'text-white'
                }`}
              >
                Priča
              </span>
              <span
                className={`block text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                  solid ? 'text-sand-600' : 'text-cream-200/80'
                }`}
              >
                Novi Banovci
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  solid ? 'text-danube-800 hover:text-danube-500' : 'text-cream-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className={`hidden rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 md:block ${
                solid
                  ? 'bg-danube-600 text-white hover:bg-danube-700'
                  : 'bg-cream-100 text-danube-900 hover:bg-white'
              }`}
            >
              Rezervišite
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Zatvorite meni' : 'Otvorite meni'}
              className="flex flex-col gap-1.5 p-2 lg:hidden"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-0.5 w-6 rounded-full transition-colors ${
                    solid ? 'bg-danube-900' : 'bg-cream-100'
                  }`}
                />
              ))}
            </button>
          </div>
        </div>

        <motion.nav
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="flex flex-col gap-1 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 font-medium text-danube-800 transition-colors hover:text-danube-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-3 rounded-lg bg-danube-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-danube-700"
            >
              Rezervišite
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
