import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h3>Feel free to reach out!</h3>
      <div className='contact-container'>
        <div className='contact-icons'>
          <a
            href='mailto:kavya.lily@gmail.com'
            className='contact-icon-link email'
            rel='noreferrer'
            target='_blank'
            aria-label='Email'
          >
            <i className='far fa-envelope' />
          </a>
          <a
            href='https://github.com/KavyaSahithi'
            className='contact-icon-link github'
            aria-label='Github'
            rel='noreferrer'
            target='_blank'
          >
            <i className='fab fa-github' />
          </a>
          <a
            href='https://www.linkedin.com/in/kavya-sahithi-29280433/?originalSubdomain=in'
            className='contact-icon-link linkedIn'
            rel='noreferrer'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </a>
          <a
            href='https://codepen.io/kavyasahithi'
            className='contact-icon-link codepen'
            rel='noreferrer'
            target='_blank'
            aria-label='Codepen'
          >
            <i className='fab fa-codepen' />
          </a>

          <a
            href='https://www.instagram.com/kavya.sahithi/'
            className='contact-icon-link instagram'
            rel='noreferrer'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </a>
        </div>
        <button
          className='btn--contact'
          onClick={(e) => {
            e.preventDefault()
            window.open('/cv.pdf', '_blank')
          }}
        >
          CV
        </button>
      </div>
    </div>
  )
}

export default Contact
