import React from 'react'
import './About.css'

function About() {
  return (
    <div className='cards'>
      <h1>About</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <>
              <li className='cards__item'>
                <div className='cards__item__link'>HTML</div>
              </li>
              <li className='cards__item'>
                <div className='cards__item__link'>CSS</div>
              </li>
              <li className='cards__item'>
                <div className='cards__item__link'>JS - ES6</div>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
