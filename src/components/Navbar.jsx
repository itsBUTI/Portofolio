import { profile } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { Container } from './Container.jsx'

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const activeId = useActiveSection(navItems.map((i) => i.id))

  return (
    <header className="nav">
      <Container className="navInner">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brandMark" aria-hidden="true" />
          <span className="brandText">{profile.fullName}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="navList">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    className={`navLink ${isActive ? 'navLinkActive' : ''}`.trim()}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a className="btn btnSmall" href="#contact">
          Contact
        </a>
      </Container>
    </header>
  )
}
