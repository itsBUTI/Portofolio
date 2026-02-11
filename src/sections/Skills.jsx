import { Section } from '../components/Section.jsx'
import { IconCode, IconPalette, IconServer } from '../components/Icons.jsx'
import { IconSparkles } from '../components/Icons.jsx'
import { getSkillGroups } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'

function GroupIcon({ name }) {
  if (name === 'code') return <IconCode size={18} />
  if (name === 'server') return <IconServer size={18} />
  return <IconPalette size={18} />
}

export function Skills() {
  const { lang } = useLanguage()
  const t = useT()
  const skillGroups = getSkillGroups(lang)

  return (
    <Section
      id="skills"
      align="center"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconSparkles size={22} />
          </span>
          {t('sections.skills.title')}
        </span>
      }
      subtitle={t('sections.skills.subtitle')}
    >
      <div className="gridSkills">
        {skillGroups.map((g, idx) => (
          <div
            key={g.title}
            className="card"
            data-aos="fade-up"
            style={{ '--aos-delay': `${50 + idx * 100}ms`, '--aos-duration': '1150ms' }}
          >
            <div className="skillGroupHeader">
              <span className="skillGroupIcon" aria-hidden="true">
                <GroupIcon name={g.icon} />
              </span>
              <h3 className="skillGroupTitle">{g.title}</h3>
            </div>
            <div className="pillRow">
              {g.skills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
