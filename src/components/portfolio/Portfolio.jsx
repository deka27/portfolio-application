import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'
import IMG7 from '../../assets/IMG7.jpg'

// Array containing project data
const data = [
  {
    id: 1,
    image: IMG7,
    title: 'Elate Unisex Salon',
    demo: 'https://elate.salon'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Albertvei Music Academy',
    demo: 'https://albertvei.com/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Portfolio',
    demo: 'https://www.kaustavdeka.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Document Management System'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Vendor Management System'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Logistics System'
  }
]

// Component for displaying portfolio section
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {/* Rendering portfolio items */}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>

              <div className="portfolio_item-cta">
                {/* <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a> */}
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
