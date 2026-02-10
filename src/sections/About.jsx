import { Section } from '../components/Section.jsx'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Senior-level execution, without the noise."
      subtitle="I’m deliberate about quality: clean architecture, accessible UX, and performance-first delivery."
    >
      <div className="prose">
        <p>
          I build web applications the way production teams expect them to be built: reusable
          components, thoughtful state and error handling, and a UI that communicates clearly.
          My default is disciplined—predictable structure, small surfaces, and stable patterns.
        </p>
        <p>
          I care about details users feel (speed, clarity, responsiveness) and details teams
          maintain (consistency, naming, separation of concerns, and reliable build tooling).
          The result is software that looks premium and scales without chaos.
        </p>
      </div>
    </Section>
  )
}
