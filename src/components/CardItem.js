import React from 'react'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='Project' src={props.src} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <br />
            <div className='small'>
              <button
                className='smallB'
                type='button'
                onClick={(e) => {
                  e.preventDefault()
                  window.open(props.live, '_blank')
                }}
              >
                Live
              </button>
              <button
                className='smallB'
                type='button'
                onClick={(e) => {
                  e.preventDefault()
                  window.open(props.code, '_blank')
                }}
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem
