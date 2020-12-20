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
            <p>My current skills include: </p>
            <ul>
              <li>
                {' '}
                Languages:{' '}
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  HTML, CSS, Javascript - ES6
                </span>
              </li>
              <li>
                {' '}
                Libraries:{' '}
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  React, Bootstrap, Sass
                </span>
              </li>
              <li>
                {' '}
                Tools:{' '}
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  Git, Github, VS-Code, npm, Netlify, Figma, Codepen, Sanity
                </span>
              </li>
            </ul>
            <br />
            <p>
              I am constantly trying to master these skills and eager to pick up
              new ones as well!
            </p>

            <br />
            <p>
              Here is my backstory! I have a degree in Architecture design and
              had been working as an architect for 3.5 years. I am also very
              passionate about drawing and was doing some freelance art on the
              side (
              <a
                href='https://punnecessary.netlify.app/ '
                style={{ color: 'white' }}
              >
                Website Link
              </a>
              ). I worked on custom art, portraits, caricatures, invitation
              design, flyers, comics and merchandise.{' '}
            </p>
            <br />
            <p>
              I accidentally stumbled upon coding & web development while trying
              to discuss the design for my art site and found it very
              intriguing. After a lot of contemplation, I decided to jump right
              in and pursue a career in web development. I was fortunate enough
              to be surrounded by family and friends in the same field who
              guided me through the process & helped me narrow down my interests
              and find the direction i wanted to go in.
            </p>
            <br />
            <p>
              While i found it extremely challenging at first, I am highly
              motivated to create websites and write code that I am proud of. I
              find the overall process quite rewarding.
            </p>
            <br />

            <p>My long term goals are </p>
            <ul>
              <li>learning UI-UX and some backend to tie it all together. </li>
              <li>
                create some kind of course material or guides to help beginners
                like me get into tech.
              </li>{' '}
              <li>
                Have a tech blog discussing any challenges I come across & how i
                solve them.
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
