import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

// Header component
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* Displaying a heading */}
        <h5>Hello I'm</h5>
        <h1>Kaustav Deka</h1>
        <h5 className="text-light">Web Developer, Graphics Designer & Product Analyst</h5>
        {/* Rendering a Call to Action component */}
        <CTA />
        {/* Rendering the HeaderSocials component */}
        <HeaderSocials />

        {/* Displaying an image */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* Scroll Down link */}
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
