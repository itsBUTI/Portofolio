import { useCallback, useEffect, useRef, useState } from 'react'

import { getProfile } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { Container } from './Container.jsx'

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  const navItems = [
    { id: 'top', label: t('nav.items.home') },
    { id: 'projects', label: t('nav.items.projects') },
    { id: 'skills', label: t('nav.items.skills') },
    { id: 'services', label: t('nav.items.services') },
  ]

  const activeId = useActiveSection(navItems.map((i) => i.id))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuButtonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const menuPanelRef = useRef(null)
  const previousBodyOverflow = useRef('')

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'sq' ? 'en' : 'sq'))
  }, [setLang])

  const closeMenuAndFocusButton = useCallback(() => {
    closeMenu()
    requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [closeMenu])

  useEffect(() => {
    if (!isMenuOpen) return

    previousBodyOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return
      e.preventDefault()
      closeMenuAndFocusButton()
    }

    window.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(() => firstLinkRef.current?.focus())

    const onPointerDown = (e) => {
      const target = e.target
      if (!(target instanceof Node)) return

      if (menuPanelRef.current?.contains(target)) return
      if (menuButtonRef.current?.contains(target)) return
      closeMenuAndFocusButton()
    }

    document.addEventListener('pointerdown', onPointerDown, { capture: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown, {
        capture: true,
      })
      document.body.style.overflow = previousBodyOverflow.current
    }
  }, [closeMenuAndFocusButton, isMenuOpen])

  return (
    <header className="nav">
      <Container className="navInner">
        <a className="brand" href="#top" aria-label={t('nav.brandAria')}>
          <span className="brandMark" aria-hidden="true" />
          <span className="brandText">{profile.fullName}</span>
        </a>

        <nav
          id="primary-navigation"
          aria-label={t('nav.primaryAria')}
          className={`navMenu ${isMenuOpen ? 'navMenuOpen' : ''}`.trim()}
        >
          <div className="navMenuPanel" ref={menuPanelRef}>
            <ul className="navList">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                const isFirst = item.id === navItems[0].id
                return (
                  <li key={item.id}>
                    <a
                      className={`navLink ${isActive ? 'navLinkActive' : ''}`.trim()}
                      href={`#${item.id}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={closeMenu}
                      ref={isFirst ? firstLinkRef : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}

              <li className="navMobileContact">
                <a className="btn" href="#contact" onClick={closeMenu}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <button
          type="button"
          className="btn btnGhost btnSmall"
          onClick={toggleLanguage}
          aria-label={t('nav.languageToggleAria')}
        >
          {lang === 'en' ? 'SQ' : 'EN'}
        </button>

        <a className="btn btnSmall navCta" href="#contact">
          {t('nav.contact')}
        </a>

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'hamburgerOpen' : ''}`.trim()}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          ref={menuButtonRef}
        >
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
        </button>
      </Container>

      <div
        className={`navBackdrop ${isMenuOpen ? 'navBackdropOpen' : ''}`.trim()}
        onClick={closeMenuAndFocusButton}
        aria-hidden="true"
      />
    </header>
  )
}
