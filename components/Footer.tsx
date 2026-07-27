'use client'

import { CONTACT } from '@/lib/contact'

const linkGroups = [
  {
    title: 'Restoran',
    links: [
      { label: 'O nama', href: '#o-nama' },
      { label: 'Meni', href: '#meni' },
      { label: 'Galerija', href: '#galerija' },
    ],
  },
  {
    title: 'Kuhinja',
    links: [
      { label: 'Rečna riba', href: '#meni' },
      { label: 'Morski plodovi', href: '#meni' },
      { label: 'Jela sa žara', href: '#meni' },
      { label: 'Vinska karta', href: '#meni' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: CONTACT.instagram },
  { label: 'Facebook', href: CONTACT.facebook },
  { label: 'TripAdvisor', href: CONTACT.tripadvisor },
]

export default function Footer() {
  return (
    <footer className="bg-danube-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sand-500 font-display text-xl font-bold text-danube-900">
                P
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-tight text-white">
                  Restoran Priča
                </span>
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-sand-300">
                  Novi Banovci
                </span>
              </span>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-cream-200">
              Rečna riba sa žara i sto na samoj obali Dunava. Dođite ranije —
              zalazak se ne čeka dvaput.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-display text-base text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-cream-200 transition-colors hover:text-sand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          <address className="space-y-2 text-sm not-italic text-cream-200">
            <p>{CONTACT.addressFull}</p>
            <p>
              <a href={`tel:${CONTACT.phoneHref}`} className="transition-colors hover:text-sand-300">
                {CONTACT.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-sand-300">
                {CONTACT.email}
              </a>
            </p>
            <p className="text-cream-300">{CONTACT.hours}</p>
          </address>

          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cream-200 transition-colors hover:text-sand-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-xs text-cream-300">
          <p>&copy; {new Date().getFullYear()} Restoran Priča. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
