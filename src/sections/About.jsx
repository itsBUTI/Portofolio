import { Section } from '../components/Section.jsx'
import { useT } from '../i18n/i18n.js'

export function About() {
  const t = useT()

  return (
    <Section
      id="about"
      eyebrow={t('sections.about.eyebrow')}
      title={t('sections.about.title')}
      subtitle={t('sections.about.subtitle')}
    >
      <div className="prose">
        <p>
          {t('sections.about.p1')}
        </p>
        <p>
          {t('sections.about.p2')}
        </p>
      </div>
    </Section>
  )
}
