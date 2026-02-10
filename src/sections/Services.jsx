import { Section } from '../components/Section.jsx'
import { services } from '../data/services.js'
import {
  IconBolt,
  IconCode,
  IconDatabase,
  IconExternal,
  IconPalette,
  IconSearch,
  IconServer,
  IconSparkles,
} from '../components/Icons.jsx'

function ServiceIcon({ name }) {
  if (name === 'code') return <IconCode size={18} />
  if (name === 'server') return <IconServer size={18} />
  if (name === 'palette') return <IconPalette size={18} />
  if (name === 'database') return <IconDatabase size={18} />
  if (name === 'search') return <IconSearch size={18} />
  if (name === 'bolt') return <IconBolt size={18} />
  if (name === 'external') return <IconExternal size={18} />
  return <IconSparkles size={18} />
}

export function Services() {
  return (
    <Section
      id="services"
      align="center"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconSparkles size={22} />
          </span>
          Services
        </span>
      }
      subtitle="What I can deliver with senior-level quality and discipline."
    >
      <div className="gridServices">
        {services.map((s) => (
          <div key={s.title} className="card serviceCard">
            <div className="serviceIcon" aria-hidden="true">
              <ServiceIcon name={s.icon} />
            </div>
            <div className="serviceBody">
              <p className="serviceTitle">{s.title}</p>
              <p className="serviceDesc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
