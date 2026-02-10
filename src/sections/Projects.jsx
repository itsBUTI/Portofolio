import { Section } from '../components/Section.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { IconSparkles } from '../components/Icons.jsx'

export function Projects() {
  return (
    <Section
      id="projects"
      align="center"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconSparkles size={22} />
          </span>
          My Latest Projects
        </span>
      }
      subtitle="Real-world builds with modern UX, clean architecture, and production discipline."
    >
      <div className="gridCards">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
