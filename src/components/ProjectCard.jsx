import { IconExternal, IconGitHub } from './Icons.jsx'

export function ProjectCard({ project }) {
  const hasLive = Boolean(project.liveUrl)
  const hasRepo = Boolean(project.repoUrl)

  return (
    <article className="card cardProject">
      <div className="cardMedia">
        {project.imageSrc ? (
          <img
            className="cardMediaImg"
            src={project.imageSrc}
            alt={project.imageAlt || project.title}
            loading="lazy"
          />
        ) : (
          <div className="cardMediaPlaceholder" />
        )}

        {hasLive || hasRepo ? (
          <div className="mediaActions" aria-label="Project links">
            {hasLive ? (
              <a
                className="iconBtn"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo`}
                title="Live demo"
              >
                <IconExternal size={18} />
              </a>
            ) : null}
            {hasRepo ? (
              <a
                className="iconBtn"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} repository`}
                title="Repository"
              >
                <IconGitHub size={18} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="cardProjectTop">
        <h3 className="cardTitle cardTitleBig">{project.title}</h3>
        <p className="cardDesc">{project.description}</p>
      </div>

      {project.details?.length ? (
        <div className="metaLines" aria-label="Project notes">
          {project.details.map((line) => (
            <p key={line} className="metaLine">
              {line}
            </p>
          ))}
        </div>
      ) : null}

      <div className="pillRow" aria-label="Tech stack">
        {project.stack.map((s) => (
          <span key={s} className="pill pillSmall">
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}
