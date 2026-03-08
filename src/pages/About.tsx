import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="hero-section">
        <div className="container">
          <h1>About Me</h1>
          <p className="subtitle">Passionate developer with 2+ years of experience</p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who I Am</h2>
              <p>
                I'm a full-stack software developer with a passion for creating elegant solutions to complex problems. With over 5 years of experience in web development, I've had the privilege of working with talented teams on diverse projects ranging from startups to enterprise applications.
              </p>
              <p>
                My journey in tech began with a curiosity about how things work. I taught myself to code, and that passion has only grown stronger over the years. I believe in writing clean, maintainable code and continuously learning new technologies.
              </p>
              <p>
                Outside of coding, I enjoy contributing to open-source projects, writing technical blogs, and mentoring junior developers. I'm always open to collaborating on interesting projects and solving meaningful problems.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>2+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>10+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise">
        <div className="container">
          <h2 className="section-title text-center">Technical Expertise</h2>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Frontend Development</h3>
              <ul>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS & Material-UI</li>
                <li>Redux & State Management</li>
                <li>REST APIs & GraphQL</li>
                <li>Web Performance</li>
              </ul>
            </div>

            <div className="expertise-card">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>PostgreSQL & MongoDB</li>
                <li>Authentication & Security</li>
                <li>API Design</li>
                <li>Database Optimization</li>
              </ul>
            </div>

            <div className="expertise-card">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Kubernetes</li>
                <li>AWS & Cloud Services</li>
                <li>CI/CD Pipelines</li>
                <li>Testing (Jest, Cypress)</li>
                <li>VS Code & Dev Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline">
        <div className="container">
          <h2 className="section-title text-center">Work Experience</h2>
          
          <div className="timeline-content">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <h3>Senior Designer</h3>
                <p className="company">Nexeya Canada (2021 - Present)</p>
                <p>Worked with the application engineering group and the customer service group to verify test program functionality. Working with application enginerring group to devlop an mobile and desktop application for our clients. Built a calendar app to all for people to track there travels and days off</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <h3>Dev Ops Devloper Intern</h3>
                <p className="company">Nexeya Canada (2024)</p>
                <p>Worked with the application engineering group and the customer service group to verify test program functionality.
Also converted customer testing programs from old version of software to current version of software using SQL. Conversion included new script and subscript changes for updated characters and symbols.
Helped to develop a conversion tool that captured a significant amount of program changes automatically and then only had to work on the outliers for investigation.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <h3>Software Desinger</h3>
                <p className="company">WinWithHoneyComb (2022 - Present)</p>
                <p>Enhanced the Web site design, to improve functionality and appearance.  Also enhanced user experience by changing radio buttons and drop down menus.
Worked and improved the database structure to improve the search and retrieval capabilities for the user.  Increased the accuracy of the search to improve the results of retrieved documents.
Performed test cases and recorded results to ensure searches did perform in the manner design.  All errors were corrected with coding adjustments and database analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
