import { useEffect, useState } from 'react'
import Preloader from './components/Preloader.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import ParticleCanvas from './components/ParticleCanvas.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Marquee from './components/Marquee.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <Preloader done={!loading} />
      <CursorGlow />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Marquee />
        <Projects />
        <Education />
      </main>
      <Contact />
      <BackToTop />
    </>
  )
}
