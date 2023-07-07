import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaKaggle } from 'react-icons/fa'

// Footer component
const Footer = () => {
  return (
    <footer>
      {/* Footer logo */}
      <a href="#top" className='footer_logo'>Kaustav Deka</a>

      {/* List of permalinks */}
      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Footer social media icons */}
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/dekak/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/deka27" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.kaggle.com/kaustavdeka" target="_blank" rel="noreferrer"><FaKaggle /></a>
      </div>

      {/* Footer copyright */}
      <div className="footer_copyright">
        <small>&copy; Kaustav. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
