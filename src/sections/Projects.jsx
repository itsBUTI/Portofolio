import { Section } from '../components/Section.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { IconSparkles } from '../components/Icons.jsx'
import { getProjects } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'

export function Projects() {
  const { lang } = useLanguage()
  const t = useT()
  const projects = getProjects(lang)

  return (
    <Section
      id="projects"
      align="center"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconSparkles size={22} />
          </span>
          {t('sections.projects.title')}
        </span>
      }
      subtitle={t('sections.projects.subtitle')}
    >
      <div className="gridCards">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
