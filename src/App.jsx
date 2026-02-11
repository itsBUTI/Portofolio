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

import { useLanguage, useT } from './i18n/i18n.js'
import { getProfile } from './i18n/content.js'

function App() {
  const { lang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  useEffect(() => {
    document.documentElement.classList.add('js')
  }, [])

  useEffect(() => {
    document.title = t('meta.title', { name: profile.fullName, role: profile.role })
  }, [lang, profile.fullName, profile.role, t])

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

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
      ?.matches

    const items = Array.from(document.querySelectorAll('[data-aos]'))
    if (!items.length) return

    if (reduceMotion) {
      items.forEach((el) => el.classList.add('aosIn'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('aosIn')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -12% 0px' },
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
