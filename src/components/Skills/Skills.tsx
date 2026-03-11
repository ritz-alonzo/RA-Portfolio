import './Skills.scss'

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillsProps {
  id?: string
}

const Skills = ({ id }: SkillsProps) => {
  const skills: Skill[] = [
    // Backend & Core Technologies
    { name: 'C# Programming', level: 95, category: 'Backend' },
    { name: 'ASP.NET Core', level: 95, category: 'Backend' },
    { name: 'ASP.NET Core Web API', level: 93, category: 'Backend' },
    { name: 'Object Oriented Programming (OOP)', level: 92, category: 'Backend' },
    { name: 'Entity Framework Core', level: 90, category: 'Backend' },
    { name: 'LINQ', level: 92, category: 'Backend' },
    { name: 'MVC Pattern', level: 88, category: 'Backend' },
    
    // ERP & Business Solutions
    { name: 'Acumatica Cloud ERP', level: 98, category: 'ERP' },
    { name: 'Acumatica Customization', level: 96, category: 'ERP' },
    { name: 'Acumatica Report Designer', level: 92, category: 'ERP' },
    { name: 'REST API Integration', level: 90, category: 'ERP' },
    { name: 'ERP Systems', level: 94, category: 'ERP' },
    
    // Database
    { name: 'MS SQL Server', level: 92, category: 'Database' },
    { name: 'Database Design', level: 90, category: 'Database' },
    { name: 'T-SQL', level: 88, category: 'Database' },
    { name: 'Performance Optimization', level: 85, category: 'Database' },
    
    // Frontend
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'jQuery', level: 85, category: 'Frontend' },
    { name: 'AJAX', level: 83, category: 'Frontend' },
    { name: 'HTML5', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 88, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, category: 'Frontend' },
    { name: 'Razor Pages', level: 82, category: 'Frontend' },
    
    // Tools & Practices
    { name: 'Azure DevOps', level: 88, category: 'Tools' },
    { name: 'Git & GitHub', level: 90, category: 'Tools' },
    { name: 'Visual Studio 2022', level: 92, category: 'Tools' },
    { name: 'Postman', level: 85, category: 'Tools' },
    { name: 'AGILE Methodology', level: 87, category: 'Tools' },
    { name: 'Code Review', level: 88, category: 'Tools' }
  ]

  const categories = ['Backend', 'ERP', 'Database', 'Frontend', 'Tools']

  const getSkillsByCategory = (category: string): Skill[] => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <section className="skills section" id={id}>
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="header-accent"></div>
          <p className="section-description">
            A comprehensive toolkit for building enterprise-grade ERP solutions
          </p>
        </div>
        
        <div className="skills-categories">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3>Certifications & Learning</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h4>Acumatica Application Developer T-Series</h4>
              <p>Advanced ERP application development and customization</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📜</div>
              <h4>Acumatica REST API Integration Developer I300-Series</h4>
              <p>REST API integration and web services development</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">💻</div>
              <h4>Acumatica OData Integration Developer</h4>
              <p>OData protocol implementation and integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
