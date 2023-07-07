import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// Main App component
const App = () => {
  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the Nav component */}
      <Nav />
      {/* Rendering the About component */}
      <About />
      {/* Rendering the Experience component */}
      <Experience />
      {/* Rendering the Portfolio component */}
      <Portfolio />
      {/* Rendering the Contact component */}
      <Contact />
      {/* Rendering the Footer component */}
      <Footer />
    </>
  )
}

export default App
