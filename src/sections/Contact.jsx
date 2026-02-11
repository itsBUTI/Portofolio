import { Section } from '../components/Section.jsx'
import { ContactForm } from '../components/ContactForm.jsx'
import { IconMail, SocialIcon } from '../components/Icons.jsx'
import { getProfile } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'

export function Contact() {
  const { lang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  return (
    <Section
      id="contact"
      eyebrow={t('sections.contact.eyebrow')}
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconMail size={22} />
          </span>
          {t('sections.contact.title')}
        </span>
      }
      subtitle={t('sections.contact.subtitle')}
    >
      <div className="contactGrid">
        <div className="card">
          <h3 className="cardTitle">{t('sections.contact.channelsTitle')}</h3>
          <p className="muted">
            {t('sections.contact.channelsHint')}
          </p>

          <ul className="contactLinks">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="contactLink"
                >
                  <span className="contactIcon" aria-hidden="true">
                    <SocialIcon name={s.icon} size={18} />
                  </span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="cardTitle">{t('sections.contact.messageTitle')}</h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
