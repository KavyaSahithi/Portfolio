import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='acards'>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='languages' style={{ padding: '20px' }}>
          <h3 style={{ textAlign: 'center', padding: '10px' }}>LANGUAGES</h3>
          <img src='images/IMG-2499.PNG' alt='languages' className='img' />
        </div>
        <div className='frameworks' style={{ padding: '20px' }}>
          <h3 style={{ textAlign: 'center', padding: '10px' }}>
            LIBRARIES/ FRAMEWORKS
          </h3>
          <img src='images/IMG-2500.PNG' alt='frameworks' className='img' />
        </div>
        <div className='tools' style={{ padding: '20px' }}>
          <h3 style={{ textAlign: 'center', padding: '10px' }}>TOOLS</h3>
          <div className='tools-skills'>
            <img src='images/IMG-2501.PNG' alt='tools1' className='img' />
            <img src='images/IMG-2502.PNG' alt='tools2' className='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
