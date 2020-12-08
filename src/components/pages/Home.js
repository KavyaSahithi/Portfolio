import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import About from '../About.js'

function Home() {
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <Cards />
      <About />
      <Footer />
    </>
  )
}

export default Home
