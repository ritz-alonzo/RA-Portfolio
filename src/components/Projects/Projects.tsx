import './Projects.scss'

interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  link?: string
  image: string
}

interface ProjectsProps {
  id?: string
}

const Projects = ({ id }: ProjectsProps) => {
  const projects: Project[] = [
    {
      title: 'Acumatica Cloud ERP',
      description: 'Custom Acumatica ERP implementation for a manufacturing company with 500+ users. Developed custom modules for production planning, inventory management, and quality control.',
      technologies: ['Acumatica', 'C#', 'ASP.NET', 'SQL Server', 'Web API', 'Github'],
      highlights: [
        'Reduced order processing time by 40%',
        'Automated inventory tracking and reordering',
        'Integrated with third-party logistics providers',
        'Custom reporting dashboard for executives'
      ],
      image: `${import.meta.env.BASE_URL}assets/projects/AcumaticaCloudERP.png`
    },
    {
      title: 'Acumatica Report Designer',
      description: 'Developed a comprehensive financial management solution with Acumatica customizations for accounts payable/receivable, budgeting, and multi-currency support.',
      technologies: ['Acumatica', 'C#', 'Entity Framework', 'SQL Server', 'Github'],
      highlights: [
        'Multi-currency transaction processing',
        'Automated invoice matching and approval workflows',
        'Real-time financial reporting',
        'Integration with banking APIs'
      ],
      image: `${import.meta.env.BASE_URL}assets/projects/AcumaticaReportDesigner.png`
    }
  ]

  return (
    <section className="projects section" id={id}>
      <div className="container">
        <div className="section-header">
          <h2>ERP Technologies</h2>
          <div className="header-accent"></div>
          <p className="section-description">
            Enterprise solutions that drive business transformation
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-number">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
