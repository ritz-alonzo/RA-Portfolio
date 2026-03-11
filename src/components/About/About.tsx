import './About.scss'

interface AboutProps {
  id?: string
}

const About = ({ id }: AboutProps) => {
  return (
    <section className="about section" id={id}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2>Building Enterprise Solutions</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <div className="about-card">
              <h3 className="about-title">
                <span className="title-bracket">{'{'}</span>
                Passionate ERP Developer
                <span className="title-bracket">{'}'}</span>
              </h3>
              <p className="about-text">
                Software Developer with 4+ years of experience in designing and developing systems, 
                testing, debugging, and training staff within Enterprise Resource Planning (ERP) technologies. 
                Proven ability in optimizing web functionality that improves data retrieval and workflow efficiencies.
              </p>
              <p className="about-text">
                Specialized in Acumatica Cloud ERP customization with expertise in C#, ASP.NET Core, and 
                database design. I build high-quality, reusable code following AGILE methodology, implementing 
                REST API integrations, and training client developers on customization best practices.
              </p>
            </div>
            
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16"/>
                  </svg>
                </div>
                <h4>ERP Architecture</h4>
                <p>Custom Acumatica modules, workflows, and business logic layers</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4>API Development</h4>
                <p>RESTful APIs, microservices, and system integrations</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <h4>Cloud Solutions</h4>
                <p>Azure deployment, DevOps, and cloud-native applications</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h4>Performance</h4>
                <p>Query optimization, caching strategies, and scalability</p>
              </div>
            </div>
          </div>
          
          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/assets/Corporate-RitzAlonzo.png" alt="Profile" />
                {/* <div className="profile-overlay">
                  <span className="status-indicator"></span>
                </div> */}
              </div>
              
              <div className="profile-info">
                <h3>Ritz O. Alonzo</h3>
                <p className="profile-role">Lead Business Application Developer</p>
              </div>
              
              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="stat-value">4+</span>
                  <span className="stat-name">Years</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">20+</span>
                  <span className="stat-name">Skills</span>
                </div>
              </div>
            </div>
            
            <div className="certifications-card">
              <h4>Certifications</h4>
              <div className="cert-list">
                <div className="cert-item">
                  <span className="cert-check">✓</span>
                  <span className="cert-name">Acumatica Application Developer T-Series</span>
                </div>
                <div className="cert-item">
                  <span className="cert-check">✓</span>
                  <span className="cert-name">Acumatica REST API Integration I300-Series</span>
                </div>
                <div className="cert-item">
                  <span className="cert-check">✓</span>
                  <span className="cert-name">Acumatica OData Integration Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
