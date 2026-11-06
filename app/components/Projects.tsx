'use client'

import {
  FiArrowUpRight,
  FiCoffee,
  FiDroplet,
  FiHome,
  FiMessageCircle,
  FiSearch,
  FiTrendingUp,
} from 'react-icons/fi'
import { projects } from '../data'

type Project = (typeof projects)[number]

function ProjectLogo({ project }: { project: Project }) {
  let mark
  switch (project.visual) {
    case 'seo':
      mark = { icon: <FiTrendingUp />, name: <>SEO <span>Agent</span></>, caption: 'AI · Search intelligence' }
      break
    case 'housing':
      mark = { icon: <FiHome />, name: <>California <span>Housing</span></>, caption: 'Machine learning · Real estate' }
      break
    case 'catering':
      mark = { icon: <FiCoffee />, name: <>Italian <span>Pizza</span></>, caption: 'Catering · Hospitality' }
      break
    case 'holiday':
      mark = { icon: <FiDroplet />, name: <>Blue <span>Wave</span></>, caption: 'Holiday house · Sicily' }
      break
    case 'real-estate':
      mark = { icon: <FiHome />, name: <>Cortese <span>Home</span></>, caption: 'Casa vacanze · Real estate' }
      break
    case 'search':
      mark = { icon: <FiSearch />, name: <>Google <span>Clone</span></>, caption: 'Search · Firebase' }
      break
    case 'chat':
      mark = { icon: <FiMessageCircle />, name: <>Next<span>Chat</span></>, caption: 'Messaging · Firebase' }
      break
    default:
      return null
  }

  return (
    <div className={`project-logo-panel logo-${project.visual}`} aria-hidden="true">
      <div className="project-logo">
        <span className="project-logo-icon">{mark.icon}</span>
        <span className="project-logo-name">{mark.name}</span>
        <span className="project-logo-caption">{mark.caption}</span>
      </div>
      <span className="project-logo-type">PROJECT / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="section-block" id="projects">
      <div className="section-container">
        <div className="projects-header">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 className="section-heading">Projects built with purpose.</h2>
            <p className="section-copy">
              A selection of web applications and products, from early concepts to production.
            </p>
          </div>
          <span className="section-kicker">{String(projects.length).padStart(2, '0')} projects</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — open project`}
            >
              <ProjectLogo project={project} />
              <div className="project-content">
                <p className="project-stack">{project.subtitle}</p>
                <h3 className="project-title">
                  {project.title}
                  <FiArrowUpRight aria-hidden="true" />
                </h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
