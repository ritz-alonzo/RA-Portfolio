import './Experience.scss'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

interface ExperienceProps {
  id?: string
}

const Experience = ({ id }: ExperienceProps) => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Lead Business Application Developer',
      company: 'Current Company',
      period: 'July 2025 - Present',
      location: 'Philippines',
      responsibilities: [
        'Lead development team in designing and implementing enterprise ERP solutions',
        'Architect and oversee Acumatica Cloud ERP customizations for enterprise clients',
        'Mentor and train junior developers on best practices and coding standards',
        'Drive technical decisions and establish development guidelines',
        'Collaborate with stakeholders to translate business requirements into technical solutions'
      ],
      technologies: ['C#', 'ASP.NET Core', 'Acumatica Cloud ERP', 'SQL Server', 'Azure DevOps', 'REST APIs']
    },
    {
      title: 'Software Developer',
      company: 'Infosoft Consulting Corp.',
      period: 'April 2023 - June 2025',
      location: 'Philippines',
      responsibilities: [
        'Developed Acumatica Cloud ERP applications and customizations per client requirements',
        'Implemented standard coding techniques based on Acumatica coding policies',
        'Integrated REST APIs for seamless third-party system connectivity',
        'Updated code changes for every Acumatica ERP version upgrade',
        'Designed database structures for new features using AGILE methodology',
        'Customized reports using Acumatica Report Designer',
        'Performed code reviews to maintain clean, optimized code',
        'Provided deployment and upgrade support to clients',
        'Trained client developers on customization, report designing, and dashboards'
      ],
      technologies: ['Acumatica Cloud ERP', 'C#', 'ASP.NET Core', 'Web API', 'SQL Server', 'Azure DevOps', 'Postman']
    },
    {
      title: 'Jr. Software Developer',
      company: 'ScaleUp Solutions Inc.',
      period: 'Oct 2021 - March 2023',
      location: 'Philippines',
      responsibilities: [
        'Built high-quality reusable code following best practices',
        'Troubleshot and debugged applications efficiently',
        'Communicated issues and fixes to team members and clients',
        'Documented code changes for proper version control tracking',
        'Implemented code review updates and stayed current with best practices',
        'Developed new features using AGILE methodology',
        'Designed database structures for application features',
        'Implemented UI/UX designs for enhanced user experience'
      ],
      technologies: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'HTML5', 'CSS', 'Git']
    },
    {
      title: 'Quality Assurance Intern',
      company: 'ScaleUp Solutions Inc.',
      period: 'May 2021 - August 2021',
      location: 'Philippines',
      responsibilities: [
        'Performed rigorous testing on EGS software products to ensure high quality standards',
        'Supervised testing activities and submitted detailed written reports on issues',
        'Coordinated with programmers to identify and implement solutions',
        'Prepared comprehensive test cases for various software modules',
        'Contributed to quality improvement initiatives'
      ],
      technologies: ['Manual Testing', 'Test Case Design', 'Bug Tracking', 'Quality Assurance']
    }
  ]

  return (
    <section className="experience section" id={id}>
      <div className="container">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <div className="header-accent"></div>
          <p className="section-description">
            Building enterprise solutions with proven expertise
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
