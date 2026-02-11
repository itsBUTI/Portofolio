import { getProfile } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'
import { Container } from './Container.jsx'
import { SocialIcon } from './Icons.jsx'

export function Footer() {
  const { lang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  return (
    <footer className="footer">
      <Container className="footerInner">
        <p className="muted">
          © {new Date().getFullYear()} {profile.fullName}. {t('footer.rights')}
        </p>
        <ul className="footerLinks" aria-label={t('footer.socialAria')}>
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
