import React from 'react'
import './Footer.css'
/*import { Button } from './Button'
import { Link } from 'react-router-dom'*/

function Footer() {
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>Get in touch</p>
        <p className='footer-subscription-text'>Get in touch</p>
        <div className='input-areas'>
          <form>
            <textarea
              className='footer-input'
              name='message'
              type='text area'
              placeholder='Message'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Kavya Sahithi
            </Link>
          </div>
          <small className='website-rights'>
            copyright Kavya Sahithi © 2020
          </small>*/}
      <>.</>
      <div className='social-icons'>
        <a
          href='https://github.com/KavyaSahithi'
          className='social-icon-link github'
          aria-label='Github'
          rel='noreferrer'
          target='_blank'
        >
          <i className='fab fa-github' />
        </a>
        <a
          href='https://www.linkedin.com/in/kavya-sahithi-29280433/?originalSubdomain=in'
          className='social-icon-link linkedIn'
          rel='noreferrer'
          target='_blank'
          aria-label='LinkedIn'
        >
          <i className='fab fa-linkedin' />
        </a>
        <a
          href='https://codepen.io/kavyasahithi'
          className='social-icon-link codepen'
          rel='noreferrer'
          target='_blank'
          aria-label='Codepen'
        >
          <i className='fab fa-codepen' />
        </a>
        <a
          href='mailto:kavya.lily@gmail.com'
          className='social-icon-link email'
          rel='noreferrer'
          target='_blank'
          aria-label='Email'
        >
          <i className='far fa-envelope' />
        </a>

        <a
          href='https://www.instagram.com/kavya.sahithi/'
          className='social-icon-link instagram'
          rel='noreferrer'
          target='_blank'
          aria-label='Instagram'
        >
          <i className='fab fa-instagram' />
        </a>
      </div>
      <button
        className='btn--cv'
        onClick={(e) => {
          e.preventDefault()
          window.open('/KavyaSahithi.pdf', '_blank')
        }}
      >
        CV
      </button>
    </div>
  )
}

export default Footer
