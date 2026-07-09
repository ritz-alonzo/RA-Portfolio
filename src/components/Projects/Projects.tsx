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
      description: 'Customized Standard Acumatica ERP implementation for Financing, Real Estate, Manufacturing and Agriculture companies. Implemented custom modules, workflows, and business logic layers to meet specific client requirements.',
      technologies: ['Acumatica', 'C#', 'ASP.NET', 'SQL Server', 'Web API', 'Github'],
      highlights: [
        'Customized multiple Acumatica modules including Financials, Inventory, and CRM',
        'Created new modules using Acumatica Framework to handle unique business processes',
        'Integrated with third-party applications',
        'Custom Generic Inquiries & Dashboard creation for real-time data insights and integrate via OData and REST API'
      ],
      link: 'https://www.acumatica.com/',
      image: `${import.meta.env.BASE_URL}assets/projects/AcumaticaCloudERP.png`
    },
    {
      title: 'Acumatica Report Designer',
      description: 'Developed a comprehensive financial management reporting with Acumatica customizations for accounts payable/receivable, budgeting.',
      technologies: ['Acumatica', 'C#', 'Entity Framework', 'SQL Server', 'Github'],
      highlights: [
        'Multi-currency transaction processing',
        'Automated invoice matching and approval workflows',
        'Real-time financial reporting'
      ],
      link: 'https://www.acumatica.com/',
      image: `${import.meta.env.BASE_URL}assets/projects/AcumaticaReportDesigner.png`
    },
    {
      title: 'RAerp',
      description: 'ERP application (currently work in progress) using ASP.NET Core 8, Entity Framework Core, and SQL Server.',
      technologies: ['C#', 'ASP.NET Core', 'ASP.NET Core Web API', 'SQL Server', 'Entity Framework Core', 'JavaScript', 'HTML', 'CSS', 'AJAX', 'JQuery', 'Github', 'MVC'],
      highlights: [
        'Modular based Application',
        'Created new modules using Acumatica Framework to handle unique business processes',
        'Integrated with third-party applications',
        'Custom Generic Inquiries & Dashboard creation for real-time data insights and integrate via OData and REST API'
      ],
      link: 'https://raerpv1.runasp.net/',
      image: `${import.meta.env.BASE_URL}assets/projects/raerpv1-monsterasp.png`
    },
    {
      title: 'RAerp Angular v20 App',
      description: 'Ecommerce Angular App (currently work in progress) using ASP.NET Core 8.0 Web API, Entity Framework Core, and SQL Server.',
      technologies: ['Angular v20', 'Typescript', 'ASP.NET Core Web API', 'SQL Server', 'JavaScript', 'HTML', 'CSS', 'JQuery', 'Github'],
      highlights: [
        'Ecommerce web application',
        'Created new modules using Acumatica Framework to handle unique business processes',
        'Integrated with third-party applications',
        'Custom Generic Inquiries & Dashboard creation for real-time data insights and integrate via OData and REST API'
      ],
      link: 'https://raerpv1-app.netlify.app/',
      image: `${import.meta.env.BASE_URL}assets/projects/raerpv1-angular-app-netlify.png`
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
