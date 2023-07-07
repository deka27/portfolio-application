import React from 'react'
import './about.css'
import BUCKET from '../../assets/data.jpg'
import { GiWhiteBook } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'

// About component
const About = () => {
  return (
    <>
    <section id='about'>
      {/* Section title */}
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            {/* Displaying an image */}
            <img src={BUCKET} alt="Bucket Img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            {/* Card for experience */}
            <article className='about_card'>
              <GiWhiteBook className='about_icon' />
              <h5>Experience</h5>
              <small>3 Years of Experience</small>
            </article>

            {/* Card for projects */}
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            {/* About me description */}
            <p>I am a skilled Web Developer, Graphics designer & Product Analyst with a diverse background in agile software development, SaaS product management, and project implementation. With 4 successful implementation projects under their belt, I bring a wealth of experience in managing and delivering complex software products.<br />As a Certified Scrum Product Owner (CSPO), I am well-versed in Agile principles and practices, enabling myself to effectively collaborate with development teams and stakeholders to deliver high-quality products that meet customer needs.<br />With my diverse skill set and experience, I am well-positioned to drive success in delivering innovative solutions that meet customer needs and exceed business goals.</p>

            {/* "Let's Talk" button */}
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default About
