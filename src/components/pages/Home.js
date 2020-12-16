import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import Skills from '../Skills.js'

function Home() {
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <Cards />
      <Skills />
      <Footer />
    </>
  )
}

export default Home
