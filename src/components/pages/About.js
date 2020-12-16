import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <div className='about'>
        <h1>About Me</h1>
        <div className='about-container'>
          <div className='text'>
            <p>
              I am Kavya. I have a degree in Architecture design and had been
              working as an architect for 3.5 years. I am also very passionate
              about drawing and was doing some freelance art on the side -
              https://punnecessary.netlify.app/ I worked on custom art,
              portraits, caricatures, invitation design, flyers, comics and
              merchandise.{' '}
            </p>
            <br />
            <p>
              I accidentally stumbled upon coding & web development while trying
              to discuss the design for my art site and found it very
              intriguing. After a lot of contemplation, i decided to jump right
              in and pursue a career in development. I was fortunate enough to
              be surrounded by family and friends in the same field who guided
              me through the process & helped me narrow down my interests and
              find the direction i wanted to go in.
            </p>
            <br />
            <p>
              While i found it extremely challenging at first, coming from a
              non-tech background, I am highly motivated to create websites and
              write code that I am proud of. I find the overall process quite
              rewarding and cannot wait to do the same in a more professional
              environment.{' '}
            </p>
            <br />
            <p>My current skills include </p>
            <ul>
              <li> Languages : HTML, CSS, JAVASCRIPT - ES6</li>
              <li> Libraries : REACT, BOOTSRTAP, SASS</li>
              <li>
                {' '}
                Languages : GIT/ GITHUB, VS CODE, NPM, NETLIFY, FIGMA, CODEPEN,
                SANITY
              </li>
            </ul>
            <br />
            <p>My long term goals include </p>
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
    </>
  )
}

export default About
