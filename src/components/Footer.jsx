import { profile } from '../data/profile.js'
import { Container } from './Container.jsx'
import { SocialIcon } from './Icons.jsx'

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footerInner">
        <p className="muted">© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        <ul className="footerLinks" aria-label="Social links">
          {profile.socials
            .filter((s) => s.label !== 'Email')
            .map((s) => (
              <li key={s.label}>
                <a
                  className="iconLink"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              </li>
            ))}
        </ul>
      </Container>
    </footer>
  )
}
