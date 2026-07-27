import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuPreview from '@/components/MenuPreview'
import Gallery from '@/components/Gallery'
import Reservations from '@/components/Reservations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <section id="o-nama" className="scroll-mt-24">
          <About />
        </section>

        <section id="meni" className="scroll-mt-24">
          <MenuPreview />
        </section>

        <section id="galerija" className="scroll-mt-24">
          <Gallery />
        </section>

        <section id="kontakt" className="scroll-mt-24">
          <Reservations />
        </section>
      </main>
      <Footer />
    </>
  )
}
