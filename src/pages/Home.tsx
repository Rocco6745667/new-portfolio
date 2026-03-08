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
              <div className="project-image">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Real-time data visualization dashboard built with React and D3.js</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">D3.js</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">🛒</div>
              <h3>E-Commerce Platform</h3>
              <p>Full-stack e-commerce solution with payment integration</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Express</span>
                <span className="tag">Stripe</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">💬</div>
              <h3>Chat Application</h3>
              <p>Real-time chat app with WebSocket and user authentication</p>
              <div className="project-tags">
                <span className="tag">Socket.io</span>
                <span className="tag">React</span>
                <span className="tag">MongoDB</span>
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
