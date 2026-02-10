import { Section } from '../components/Section.jsx'
import { skillGroups } from '../data/skills.js'
import { IconCode, IconPalette, IconServer } from '../components/Icons.jsx'
import { IconSparkles } from '../components/Icons.jsx'

function GroupIcon({ name }) {
  if (name === 'code') return <IconCode size={18} />
  if (name === 'server') return <IconServer size={18} />
  return <IconPalette size={18} />
}

export function Skills() {
  return (
    <Section
      id="skills"
      align="center"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconSparkles size={22} />
          </span>
          Skills
        </span>
      }
      subtitle="A focused toolkit across frontend, cybersecurity, and design tools."
    >
      <div className="gridSkills">
        {skillGroups.map((g) => (
          <div key={g.title} className="card">
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
