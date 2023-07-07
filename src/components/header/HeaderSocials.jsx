import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaKaggle } from 'react-icons/fa'

// Component for displaying social media icons in the header
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      {/* LinkedIn icon with a link */}
      <a href="https://www.linkedin.com/in/dekak/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      {/* GitHub icon with a link */}
      <a href="https://github.com/deka27" target="_blank" rel="noreferrer"><FaGithub /></a>
      {/* Kaggle icon with a link */}
      <a href="https://www.kaggle.com/kaustavdeka" target="_blank" rel="noreferrer"><FaKaggle /></a>
    </div>
  )
}

export default HeaderSocials
