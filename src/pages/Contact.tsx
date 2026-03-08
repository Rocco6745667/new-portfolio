import { useState, FormEvent } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Reset message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="subtitle">I'd love to hear from you. Let's connect!</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out using the contact form or through any of these channels:</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:Rocco22477@gmail.com">Rocco22477@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Toronto, Canada</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🔗</div>
                  <div className="info-content">
                    <h3>Connect With Me</h3>
                    <div className="social-links">
                      <a href="https://github.com/Rocco6745667" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href="https://www.linkedin.com/in/rocco-ali-432116261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your typical response time?</h3>
              <p>I try to respond to all inquiries within 24-48 hours. For urgent matters, please mention it in your message.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer freelance work?</h3>
              <p>Yes! I'm available for contract work, freelance projects, and consulting. Let's discuss your needs.</p>
            </div>

            <div className="faq-item">
              <h3>What's your hourly rate?</h3>
              <p>Rates vary depending on project scope and complexity. I offer competitive pricing and flexible arrangements.</p>
            </div>

            <div className="faq-item">
              <h3>Can you work in different time zones?</h3>
              <p>Absolutely! I'm flexible with scheduling and can accommodate different time zones for collaboration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
