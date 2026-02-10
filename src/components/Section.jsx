import { Container } from './Container.jsx'

export function Section({ id, eyebrow, title, subtitle, align = 'left', children }) {
  const headerClassName = `sectionHeader ${align === 'center' ? 'sectionHeaderCentered' : ''}`.trim()

  return (
    <section
      id={id}
      className="section reveal"
      data-reveal
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <header className={headerClassName}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="sectionTitle">
            {title}
          </h2>
          {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  )
}
