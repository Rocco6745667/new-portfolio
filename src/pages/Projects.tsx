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
    title: 'Calendar App',
    description: 'Feature-rich calendar application with event scheduling, reminders, and synchronization across devices.',
    image: '📅',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Gold Rush',
    description: 'This game is called Gold Rush and it is a 2D platformer game where the player has to collect gold and to avoid the enemies that are in their path in order to beat the final boss and get the treasure.',
    image: '🚀',
    tags: ['JavaScript', 'Game Physics'],
    link: '#',
    category: 'game'
  },
  {
    id: 3,
    title: '2048',
    description: 'Engaging version of the popular 2048 puzzle game with smooth animations and responsive design.',
    image: '🎮',
    tags: ['React', 'Phaser', 'WebGL'],
    link: '#',
    category: 'game'
  },
  {
    id: 4,
    title: 'LeetCode Daily Challenges',
    description: 'A sampling of questions from the LeetCode daily challenges using Python',
    image: '💻',
    tags: ['Python'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'E-Commerce Store',
    description: 'Full-featured online shopping platform with product catalog, user authentication, and Stripe payments.',
    image: '🛒',
    tags: ['React', 'Express', 'PostgreSQL', 'Stripe API'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'Data Analytics Dashboard',
    description: 'This assignment combines web development with an in-depth evaluation of ChatGPT’s efficiency across various domains..',
    image: '📊',
    tags: ['React', 'D3.js', 'Chart.js', 'Node.js', 'MongoDB'],
    link: '#',
    category: 'fullstack'
  },
  {
    id: 7,
    title: 'Developer Portfolio',
    description: 'Modern responsive portfolio website showcasing projects, skills, and work experience with smooth animations.',
    image: '🎨',
    tags: ['React', 'TypeScript', 'Vite', 'CSS3'],
    link: '#',
    category: 'frontend'
  },
  {
    id: 8,
    title: ' Family Guy Epic Adventure Remastered',
    description: 'A DATT 2335 Project based on Family Guy’s Season 2 Episode 18 E. Peterbus Unum. The game is also a loose remaster of an old video game I created using pygame in my Grade 11 ICS3U, Introduction to Computer Science course.',
    image: '🎨',
    tags: ['C#', 'Unity'],
    link: '#',
    category: 'game'
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const categories = ['all', 'frontend', 'fullstack', 'game']

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
