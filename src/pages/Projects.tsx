import { useState } from 'react'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard with interactive charts and metrics tracking.',
    image: '📊',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with product catalog, cart, and Stripe payment integration.',
    image: '🛒',
    tags: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 3,
    title: 'Chat Application',
    description: 'Real-time messaging app with WebSocket support and user authentication.',
    image: '💬',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Beautiful weather application with location-based forecasts and weather alerts.',
    image: '🌤️',
    tags: ['React', 'TypeScript', 'REST API', 'Tailwind'],
    link: '#',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Task Manager',
    description: 'Collaborative task management tool with real-time updates and team features.',
    image: '✓',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    link: '#',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Blog CMS',
    description: 'Headless CMS for managing blog content with Markdown support and SEO optimization.',
    image: '📝',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'MDX'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 7,
    title: 'API Gateway',
    description: 'Scalable API gateway with rate limiting, authentication, and request routing.',
    image: '🔌',
    tags: ['Node.js', 'Express', 'Redis', 'JWT'],
    link: '#',
    category: 'backend'
  },
  {
    id: 8,
    title: 'Portfolio Generator',
    description: 'Tool to generate beautiful portfolio websites with customizable templates.',
    image: '🎨',
    tags: ['React', 'Next.js', 'Tailwind', 'Deployment'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 9,
    title: 'Video Streaming',
    description: 'Video streaming platform with adaptive bitrate and progressive download.',
    image: '🎥',
    tags: ['React', 'ffmpeg', 'Node.js', 'AWS S3'],
    link: '#',
    category: 'fullstack'
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const categories = ['all', 'frontend', 'backend', 'fullstack']

  return (
    <div className="projects">
      <section className="hero-section">
        <div className="container">
          <h1>My Projects</h1>
          <p className="subtitle">Showcasing my work and expertise</p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container text-center">
          <h2>Interested in my work?</h2>
          <p>Let's discuss your next project or collaboration opportunity</p>
          <a href="/contact" className="btn btn-light">Get In Touch</a>
        </div>
      </section>
    </div>
  )
}
