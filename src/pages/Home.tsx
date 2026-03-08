import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm a Rocco Ali</h1>
            <p className="hero-subtitle">
              I create beautiful, functional web applications using modern technologies
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-skills">
        <div className="container">
          <h2 className="section-title text-center">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend</h3>
              <p>React, TypeScript, Tailwind CSS, Responsive Design</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB, PostgreSQL</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>DevOps</h3>
              <p>Docker, AWS, CI/CD, Git</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Mobile</h3>
              <p>React Native, Cross-platform Development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title text-center">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">📅</div>
              <h3>Calendar App</h3>
              <p>Feature-rich calendar application with event scheduling, reminders, and synchronization across devices.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">🚀</div>
              <h3>Gold Rush</h3>
              <p>This game is called Gold Rush and it is a 2D platformer game where the player has to collect gold and to avoid the enemies that are in their path in order to beat the final boss and get the treasure.</p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Game Physics</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">💻</div>
              <h3>LeetCode Daily Challenges</h3>
              <p>A sampling of questions from the LeetCode daily challenges using Python</p>
              <div className="project-tags">
                <span className="tag">Python</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container text-center">
          <h2>Ready to work together?</h2>
          <p>Let's create something amazing together. Get in touch today!</p>
          <Link to="/contact" className="btn btn-light">Contact Me</Link>
        </div>
      </section>
    </div>
  )
}
