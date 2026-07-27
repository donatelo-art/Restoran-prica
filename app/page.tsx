import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuPreview from '@/components/MenuPreview'
import Gallery from '@/components/Gallery'
import Reservations from '@/components/Reservations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <MenuPreview />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Reservations />
      </section>

      <Footer />
    </main>
  )
}
