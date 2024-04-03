import React from 'react'
import './About.css'

import Footer from '../Footer'

function About() {
  return (
    <>
      <div className='about'>
        <h1>About Me</h1>
        <div className='about-container'>
          <img
            src={'images/profile.jpg'}
            alt='profile'
            className='profilePic'
          />
          <div className='textAbout'>
            <p>Hey! I am Kavya. I am a front end developer based in Berlin.</p>
            <br />
            <p>I would describe myself as a dynamic and results-oriented Front End Developer with a proven track record of successfully transforming standalone applications into integrated solutions within merchant portals. Expertise in frontend ecosystem and building user-friendly interfaces, onboarding portals, and internal back-office systems. </p>
     
     
       
            <br />
            <p>I currently work at Banxware GmbH, Berlin, which is a fintech-startup as the first engineer and worked as the sole frontend engineer in a 3 person engineering team until it grew into a mid sized company. Built 4 complete fintech products from architecture to launch during this tenure. </p>
          < br/>
          <p>My most recent projects include:</p>
          <ul>
            <li>Led the ideation, architecture, and planning for a whitelabel product catering to merchant cash advance loan applications for SMEs, from inception to launch.</li>
<li>Developed industry-specific product offerings and pricing structures optimizing application flows and features.</li>
<li>Engineered a Merchant portal tool for comprehensive loan tracking and management.</li>
<li>Spearheaded transition of white label standalone product application to an embedded lending tool within merchant portals of partner platforms. Built a loan application with a CDN-delivered frontend while monitoring and resolving production bugs.</li>
<li>Created a user-friendly Next.js onboarding portal for new merchants, incorporating Auth0 authentication for enhanced security.</li>
<li>Developed a procedure-oriented internal back-office system for risk assessment, automating 3 different manual processes through integration with external tools and consolidation of user data. Integrated HubSpot, chatbot, and Codat for real-time revenue data collection, enhancing risk assessment capabilities.</li>
</ul></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
