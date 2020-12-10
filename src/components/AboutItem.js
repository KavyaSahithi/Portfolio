import React from 'react'

function AboutItem(props) {
  return (
    <>
      <li className='acards__item'>
        <div className='acards__item__link'>
          <figure className='acards__item__pic-wrap'>
            <img className='acards__item__img' alt='Project' src={props.src} />
          </figure>
          <div className='acards__item__info'>
            <h5 className='acards__item__text'>{props.text}</h5>
            <br />
          </div>
        </div>
      </li>
    </>
  )
}

export default AboutItem
