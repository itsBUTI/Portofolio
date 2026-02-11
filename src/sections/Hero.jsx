import { getProfile } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'
import { Container } from '../components/Container.jsx'
import {
  IconArrowRight,
  IconBriefcase,
  IconCalendar,
  IconLocation,
  SocialIcon,
} from '../components/Icons.jsx'

export function Hero() {
  const { lang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  return (
    <section id="top" className="hero" aria-label={t('hero.aria')}>
      <Container>
        <div className="heroGrid">
          <div className="heroInner">
            <p className="kicker">
              {t('hero.kicker')} <span className="accent">{profile.fullName}</span>
            </p>
            <h1 className="heroTitle">{profile.role}</h1>
            <p className="heroSubtitle">{profile.summary}</p>

            <div className="heroActions">
              <a className="btn btnWatch" href="#projects">
                {t('hero.actions.projects')}
              </a>
              <a className="btn btnGhost" href="#skills">
                <span className="btnIcon" aria-hidden="true">
                  <IconArrowRight size={18} />
                </span>
                {t('hero.actions.skills')}
              </a>
            </div>

            <div className="heroLinks" aria-label={t('hero.linksAria')}>
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="iconLink"
                  aria-label={s.label}
                  title={s.label}
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <aside className="heroPanel" aria-label={t('hero.factsAria')}>
            <ul className="facts">
              <li className="fact">
                <span className="factIcon" aria-hidden="true"><IconLocation size={18} /></span>
                <span className="factLabel">{t('hero.facts.location')}</span>
                <span className="factValue">{profile.location}</span>
              </li>
              {profile.age ? (
                <li className="fact">
                  <span className="factIcon" aria-hidden="true"><IconCalendar size={18} /></span>
                  <span className="factLabel">{t('hero.facts.age')}</span>
                  <span className="factValue">{profile.age}</span>
                </li>
              ) : null}
              <li className="fact">
                <span className="factIcon" aria-hidden="true"><IconBriefcase size={18} /></span>
                <span className="factLabel">{t('hero.facts.role')}</span>
                <span className="factValue">{profile.role}</span>
              </li>
              {profile.experienceYears ? (
                <li className="fact">
                  <span className="factIcon" aria-hidden="true"><IconCalendar size={18} /></span>
                  <span className="factLabel">{t('hero.facts.experience')}</span>
                  <span className="factValue">
                    {t('hero.facts.experienceValue', { years: profile.experienceYears })}
                  </span>
                </li>
              ) : null}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  )
}
