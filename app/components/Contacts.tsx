'use client'

import { FormEvent } from 'react'
import { useGlobalContext } from '../context/cotext'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight, FiAward } from 'react-icons/fi'
import Swal from 'sweetalert2'

function Contacts() {
  const { isDarkMode } = useGlobalContext()

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', 'c7432147-1056-4925-93e0-c9130350c67d')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        await Swal.fire({
          icon: 'success',
          title: 'Message sent',
          text: 'Thank you for reaching out. I will get back to you soon!',
          theme: isDarkMode ? 'dark' : 'light',
        })
        form.reset()
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Message not sent',
          text: 'There was an error sending your message. Please try again later.',
          theme: isDarkMode ? 'dark' : 'light',
        })
      }
    } catch {
      await Swal.fire({
        icon: 'error',
        title: 'Message not sent',
        text: 'Could not connect to the message service. Please try again later.',
        theme: isDarkMode ? 'dark' : 'light',
      })
    }
  }

  return (
    <section className="section-block" id="contact">
      <div className="section-container contact-grid">
        <div>
          <span className="section-kicker">Get in touch</span>
          <h2 className="section-heading">Have a project in mind?</h2>
          <p className="section-copy">
            Have a question, a proposal, or just want to say hello? I&apos;d be glad to hear from you.
          </p>

          <div className="contact-details">
            <div>
              <span className="contact-detail-label">Email</span>
              <a className="contact-detail-value" href="mailto:ale120789@gmail.com">ale120789@gmail.com</a>
            </div>
            <div>
              <span className="contact-detail-label">Phone</span>
              <a className="contact-detail-value" href="tel:+393477934906">+39 347 793 4906</a>
            </div>
            <div>
              <span className="contact-detail-label">Based in</span>
              <span className="contact-detail-value">Catania, Italy</span>
            </div>
          </div>

          <div className="social-links" aria-label="Social profiles">
            <a className="social-link" href="https://github.com/n0wherefast" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={17} />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/alessio-russo-a73720219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn size={17} />
            </a>
            <a className="social-link" href="https://www.instagram.com/n0where_fast_?igsh=dmd1N3Y0azk5dzVt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={17} />
            </a>
            <a className="social-link" href="https://wa.me/qr/ZMI6ZCYXNYHII1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={17} />
            </a>
            <a
              className="social-link"
              href="https://www.credential.net/929cd0b8-3628-41be-879d-a183fe270765#acc.ujV7KZRE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AI & DATA Specialist credential"
              title="AI & DATA Specialist credential"
            >
              <FiAward size={18} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit} name="contact">
          <label htmlFor="name">
            Name
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" placeholder="Tell me a little about your project..." required />
          </label>
          <button className="button-primary" type="submit">
            Send message <FiArrowUpRight />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
