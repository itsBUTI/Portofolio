import { useEffect } from 'react'
import './App.css'

import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { SkipLink } from './components/SkipLink.jsx'

import { Hero } from './sections/Hero.jsx'
import { Projects } from './sections/Projects.jsx'
import { Skills } from './sections/Skills.jsx'
import { Services } from './sections/Services.jsx'
import { Contact } from './sections/Contact.jsx'

import { profile } from './data/profile.js'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('js')
  }, [])

  useEffect(() => {
    document.title = `${profile.fullName} — ${profile.role}`
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
      ?.matches

    const items = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!items.length) return

    if (reduceMotion) {
      items.forEach((el) => el.classList.add('revealIn'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('revealIn')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <SkipLink />
      <Navbar />

      <main id="content" className="main" role="main">
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
