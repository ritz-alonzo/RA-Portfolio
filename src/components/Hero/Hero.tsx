import './Hero.scss'

interface HeroProps {
  id?: string
}

const Hero = ({ id }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const downloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}assets/Alonzo CV 2026.pdf`, '_blank')
  }

  return (
    <section className="hero" id={id}>
      <div className="hero-grid-bg"></div>
      <div className="hero-gradient"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for Opportunities</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Ritz O. Alonzo</span>
            <span className="title-line">
              <span className="title-highlight">ASP.NET Developer</span>
            </span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="code-tag">&lt;</span>
            <span className="subtitle-text">Acumatica Cloud ERP Specialist</span>
            <span className="code-tag">/&gt;</span>
          </div>
          
          <p className="hero-description">
            Software Developer with 4+ years of experience in designing and developing ERP systems. 
            Building enterprise-grade solutions with <code>C#</code>, <code>ASP.NET Core</code>, 
            and <code>Acumatica Cloud ERP</code>. Proven ability in optimizing web functionality that 
            improves data retrieval and workflow efficiencies.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-outline" onClick={downloadResume}>
              Download Resume
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Skills</div>
              <div className="stat-bar"></div>
            </div>
          </div>
          
          <div className="hero-tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-tags">
              <span className="tech-tag">C#</span>
              <span className="tech-tag">ASP.NET Core</span>
              <span className="tech-tag">Acumatica</span>
              <span className="tech-tag">SQL Server</span>
              <span className="tech-tag">Github</span>
              <span className="tech-tag">Web API</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}

export default Hero
