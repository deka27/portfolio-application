import React, { useRef } from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

// Contact component
const Contact = () => {
  const form = useRef();

  // Function to send the email
  const sendEmail = (e) => {
    e.preventDefault();

    // Sending the email using emailjs.sendForm()
    emailjs.sendForm("API info")

    // Resetting the form after sending the email
    e.target.reset()
  };

  return (
    <section id='contact'>
      {/* Section title */}
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact_options">

          {/* Contact option for email */}
          <article className='contact_option'>
            <MdEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>mailerdeka@gmail.com</h5>
            <a href="mailto:mailerdeka@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          {/* Contact option for phone */}
          <article className='contact_option'>
            <FaPhoneAlt className='contact_option-icon' />
            <h4>Phone</h4>
            <h5>+91-7349-223641</h5>
            <a href="tel:+917349223641" target="_blank" rel="noreferrer">Call</a>
          </article>

        </div>

        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact
