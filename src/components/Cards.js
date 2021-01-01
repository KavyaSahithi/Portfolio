import React, { useRef, useEffect } from 'react'
import './Cards.css'
import CardItem from './CardItem'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

function Cards() {
  const myRef = useRef(null)
  const location = useLocation()
  useEffect(() => {
    if (location.hash === '#projects') {
      myRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }, [location])

  return (
    <>
      <div className='cards' ref={myRef}>
        <h1>Recent Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Github finder.png'
                text='Search github users and display their profile info & repos'
                label='React Hooks, router, context, axios & custom CSS '
                live='https://github-finder-kavya.netlify.app/'
                code='https://github.com/KavyaSahithi/Github-Finder'
              ></CardItem>
              <CardItem
                src='images/Green Seat.png'
                text='E-commerce site for buying furniture from different brands'
                label='React context,Hooks,axios'
                live='https://green-seat-co.netlify.app/'
                code='https://github.com/KavyaSahithi/Green-Seat.-Co'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='images/Budget app.png'
                text='Keep track of income-expenditure ratio & calculate net savings'
                label='Vanilla JS, DOM manipulation, CSS'
                live='https://kavyasahithi.github.io/Budget-App/'
                code='https://github.com/KavyaSahithi/Budget-App'
              />
              <CardItem
                src='images/malinis kitchen.png'
                text='Website for a home-kitchen service in Bangalore, India'
                label='HTML,CSS & JS'
                live='https://mailinis-kitchen.netlify.app/'
                code='https://github.com/KavyaSahithi/Malini-s-Kitchen'
              />
              <CardItem
                src='images/dice game.png'
                text='2 player dice game (with beginner and pro versions)'
                label='Vannila JS, CSS'
                live='https://kavyasahithi.github.io/Dice-Game'
                code='https://github.com/KavyaSahithi/Dice-Game'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='images/meme generator.png'
                text='Meme generator'
                label='React & API call'
                live='https://meme-generator-kavya.netlify.app/'
                code='https://github.com/KavyaSahithi/Meme-generator'
              />
              <CardItem
                src='images/bakes.png'
                text='Bakery website'
                label='HTML, CSS & flexbox'
                live='https://kavyasahithi.github.io/Rosea-bakes/'
                code='https://github.com/KavyaSahithi/Rosea-bakes'
              />
              <CardItem
                src='images/Todo list.png'
                text='Simple Task List'
                label='React'
                live='https://task-list-1.netlify.app/'
                code='https://github.com/KavyaSahithi/Todo-list'
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Cards
