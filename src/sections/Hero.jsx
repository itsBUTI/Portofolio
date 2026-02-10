import { profile } from '../data/profile.js'
import { Container } from '../components/Container.jsx'
import {
  IconArrowRight,
  IconBriefcase,
  IconCalendar,
  IconDownload,
  IconLocation,
  SocialIcon,
} from '../components/Icons.jsx'

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Hero">
      <Container>
        <div className="heroGrid">
          <div className="heroInner">
            <p className="kicker">Hi, I’m <span className="accent">{profile.fullName}</span></p>
            <h1 className="heroTitle">{profile.role}</h1>
            <p className="heroSubtitle">{profile.summary}</p>

            <div className="heroActions">
              <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer noopener">
                <span className="btnIcon" aria-hidden="true"><IconDownload size={18} /></span>
                Get CV
              </a>
              <a className="btn btnGhost" href="#projects">
                <span className="btnIcon" aria-hidden="true"><IconArrowRight size={18} /></span>
                View Projects
              </a>
              <a className="btn btnGhost" href="#skills">
                <span className="btnIcon" aria-hidden="true"><IconArrowRight size={18} /></span>
                Skills
              </a>
            </div>

            <div className="heroLinks" aria-label="Professional links">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="iconLink"
                  aria-label={s.label}
                  title={s.label}
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <aside className="heroPanel" aria-label="Quick facts">
            <ul className="facts">
              <li className="fact">
                <span className="factIcon" aria-hidden="true"><IconLocation size={18} /></span>
                <span className="factLabel">Based</span>
                <span className="factValue">{profile.location}</span>
              </li>
              {profile.age ? (
                <li className="fact">
                  <span className="factIcon" aria-hidden="true"><IconCalendar size={18} /></span>
                  <span className="factLabel">Age</span>
                  <span className="factValue">{profile.age}</span>
                </li>
              ) : null}
              <li className="fact">
                <span className="factIcon" aria-hidden="true"><IconBriefcase size={18} /></span>
                <span className="factLabel">Role</span>
                <span className="factValue">Full Stack Developer</span>
              </li>
              {profile.experienceYears ? (
                <li className="fact">
                  <span className="factIcon" aria-hidden="true"><IconCalendar size={18} /></span>
                  <span className="factLabel">Experience</span>
                  <span className="factValue">{profile.experienceYears}+ years</span>
                </li>
              ) : null}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  )
}
