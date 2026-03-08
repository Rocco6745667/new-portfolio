import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>Full-stack developer passionate about building beautiful and functional web applications.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Follow</h3>
            <div className="social-links">
              <a href="https://github.com/Rocco6745667" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rocco-ali-432116261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rocco Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
