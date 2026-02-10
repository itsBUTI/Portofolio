import { Section } from '../components/Section.jsx'
import { ContactForm } from '../components/ContactForm.jsx'
import { profile } from '../data/profile.js'
import { IconMail, SocialIcon } from '../components/Icons.jsx'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <span className="titleWithIcon">
          <span className="titleIcon" aria-hidden="true">
            <IconMail size={22} />
          </span>
          Get in touch
        </span>
      }
      subtitle="Share a short brief and I’ll reply with clear next steps."
    >
      <div className="contactGrid">
        <div className="card">
          <h3 className="cardTitle">Contact channels</h3>
          <p className="muted">
            Best via email or LinkedIn. If this is a project inquiry, include scope, timeline, and
            any relevant links.
          </p>

          <ul className="contactLinks">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="contactLink"
                >
                  <span className="contactIcon" aria-hidden="true">
                    <SocialIcon name={s.icon} size={18} />
                  </span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="cardTitle">Message</h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
