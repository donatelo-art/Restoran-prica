'use client'

import { motion } from 'framer-motion'
import {
  formatPrice,
  formatUnit,
  formatVolume,
  type MenuCategory,
  type WineGroup,
} from '@/lib/menu'

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/**
 * A single line of the menu. The dotted leader between name and price is the
 * one piece of ornament here — it's what makes a list of dishes read as a
 * menu rather than as a table.
 */
function Row({
  name,
  note,
  meta,
  price,
}: {
  name: string
  note?: string
  meta?: string | null
  price: number
}) {
  return (
    <motion.li variants={rowVariants} className="py-3.5">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-lg text-danube-900 md:text-xl">{name}</span>
        <span
          aria-hidden="true"
          className="mb-1 min-w-6 flex-1 border-b border-dotted border-danube-300"
        />
        {meta && (
          <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-sand-600">
            {meta}
          </span>
        )}
        <span className="shrink-0 font-display text-lg text-danube-800 md:text-xl">
          {formatPrice(price)}
        </span>
      </div>
      {note && (
        <p className="mt-1 max-w-md text-sm font-light italic text-danube-900/55">{note}</p>
      )}
    </motion.li>
  )
}

function Heading({ title, note }: { title: string; note?: string }) {
  return (
    <header className="mb-2">
      <h3 className="font-display text-2xl text-danube-900 md:text-3xl">{title}</h3>
      <div className="mt-3 h-px w-12 bg-sand-500" />
      {note && <p className="mt-4 text-sm font-light text-danube-900/55">{note}</p>}
    </header>
  )
}

export function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <motion.section
      id={category.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={listVariants}
      className="scroll-mt-28 break-inside-avoid"
    >
      <Heading title={category.title} note={category.note} />
      <ul className="mt-4 divide-y divide-cream-600/30">
        {category.dishes.map((dish) => (
          <Row
            key={dish.name}
            name={dish.name}
            note={dish.note}
            meta={formatUnit(dish.unit)}
            price={dish.price}
          />
        ))}
      </ul>
    </motion.section>
  )
}

export function WineGroupBlock({ group }: { group: WineGroup }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={listVariants}
      className="break-inside-avoid"
    >
      <Heading title={group.title} />
      <ul className="mt-4 divide-y divide-cream-600/30">
        {group.wines.map((wine) => (
          <Row
            key={`${group.title}-${wine.name}`}
            name={wine.name}
            note={wine.producer}
            meta={formatVolume(wine.volume)}
            price={wine.price}
          />
        ))}
      </ul>
    </motion.section>
  )
}
