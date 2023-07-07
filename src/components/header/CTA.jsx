import React from 'react'
import CV from '../../assets/Resume.pdf'

// Call to Action component
export const CTA = () => {
  return (
    <div className='cta'>
      {/* Download CV button */}
      <a href={CV} download className='btn'>Download CV</a>
      {/* Contact Me button */}
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
