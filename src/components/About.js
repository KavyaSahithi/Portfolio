import React from 'react'
import './About.css'
import AboutItem from './AboutItem'

function About() {
  return (
    <div className='acards'>
      <h1>Skills</h1>
      <div className='acards__container'>
        <div className='acards__wrapper'>
          <ul className='acards__items'>
            <AboutItem src='images/img-1.jpg' text='HTML 5' />
            <AboutItem src='images/img-2.jpg' text='CSS 3' />
            <AboutItem src='images/img-3.jpg' text='JS ES6' />
            <AboutItem src='images/img-1.jpg' text='React' />
            <AboutItem src='images/img-2.jpg' text='Bootstrap' />
            <AboutItem src='images/img-3.jpg' text='Sass' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
