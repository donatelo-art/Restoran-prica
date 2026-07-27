'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="divider-gold mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-display text-danube-900 mb-8">
                О нама
              </h2>
            </div>

            <div className="space-y-6 text-danube-800">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                На обалама Дунава, у срцу Новог Бановца, Restoran Priča живи као симбол аутентичности и луксуза. Не само да служимо храну, ми делимо причу – причу о Дунаву, традицији и страсти которa превише траде генерације наших кулинара.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                Свака шаран, сом, смуђ и пастрмка која се печи на нашем отвореном огњу прави приповедност о чистоћи воде, о аутентичности вкуса. Наш избор рибе и морских плодова није само квалитета – то је наша обавеза према вас и према Дунаву.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                Комбинујемо традиционалне српске рецепте са модерним техникама припреме, стварајући искуство које је истовремено познато и неочекивано, топло и софистицирано.
              </p>

              <div className="pt-4">
                <button className="btn-ghost">
                  Прочитајте нашу причу
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[32rem]"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main large image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 relative">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561f1d?w=800&h=600&fit=crop"
                  alt="Danube River Restaurant"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small images */}
              <div className="rounded-xl overflow-hidden shadow-lg h-32 relative">
                <Image
                  src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop"
                  alt="Grilled Fish"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg h-32 relative">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
                  alt="Fine Dining"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 md:mt-28"
        >
          {[
            {
              title: 'Свежа раба',
              description: 'Дневна достава свежих ловова из Дунава и Адријатског мора',
              icon: '🐟',
            },
            {
              title: 'Премијумна вина',
              description: 'Куратирана избор вина од водећих српских винарија',
              icon: '🍷',
            },
            {
              title: 'Отворена кухиња',
              description: 'Гледајте како наши шефови припремају вашу храну са страшћу',
              icon: '👨‍🍳',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-cream-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display text-danube-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-danube-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
