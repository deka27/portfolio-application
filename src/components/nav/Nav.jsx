import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { MdContacts } from 'react-icons/md'
import { useState } from 'react'

// Component for the navigation menu
const Nav = () => {
  // State for managing the active navigation item
  const [activeNav, setActiveNav] = useState('#top')

  return (
    <nav>
      {/* Navigation links */}
      <a href="#top" onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsStack /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts /></a>
    </nav>
  )
}

export default Nav
