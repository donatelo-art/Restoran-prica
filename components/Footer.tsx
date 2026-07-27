'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'О Нама',
      links: ['Прича Приче', 'Шеф', 'Тим'],
    },
    {
      title: 'Мени',
      links: ['Рречна раба', 'Морска раба', 'Јела од меса', 'Вина'],
    },
    {
      title: 'Контакт',
      links: ['Резервише', 'Позови нас', 'Имејл', 'Адреса'],
    },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📱', href: '#' },
    { name: 'Facebook', icon: '👥', href: '#' },
    { name: 'TripAdvisor', icon: '⭐', href: '#' },
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-danube-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sand-400 to-sand-600 rounded-lg flex items-center justify-center">
                <span className="text-danube-900 font-display font-bold text-xl">Р</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">Priča</h3>
                <p className="text-xs text-sand-300">Данубе Дининг</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-200">
              Премијумни ресторан на обали Дунава у Новом Бановцу. Искусите луксуз аутентичне куларије.
            </p>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-display font-semibold text-white mb-4 text-lg">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-cream-200 hover:text-sand-300 transition-colors text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <p className="text-cream-200 mb-2">
                📞 <span className="font-semibold">+381 22 456 789</span>
              </p>
              <p className="text-cream-200">
                📧 <span className="font-semibold">info@restoranprica.com</span>
              </p>
              <p className="text-cream-300 text-sm mt-3">
                📍 Нови Бановци, Река Дунав, Војводина, Србија
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-2xl hover:text-sand-300 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-300">
            <p>© {currentYear} Restoran Priča. Сва права су резервисана.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sand-300 transition-colors">
                Приватност
              </a>
              <a href="#" className="hover:text-sand-300 transition-colors">
                Услови
              </a>
              <a href="#" className="hover:text-sand-300 transition-colors">
                Колачи
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
