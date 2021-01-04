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
                src='images/Green Seat.png'
                text='E-commerce Site For Buying Furniture From Different Brands'
                label='React context, Hooks, Axios'
                live='https://green-seat-co.netlify.app/'
                code='https://github.com/KavyaSahithi/Green-Seat.-Co'
              />
              <CardItem
                src='images/Github finder.png'
                text='Search Github Users, Display Their Profile Info & Repos'
                label='React Hooks, Router, Context, Axios & Custom CSS '
                live='https://github-finder-kavya.netlify.app/'
                code='https://github.com/KavyaSahithi/Github-Finder'
              ></CardItem>
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='images/Budget app.png'
                text='Keep Track Of Income-Expenditure Ratio & Calculate Net Savings'
                label='Vanilla JS, DOM manipulation, CSS'
                live='https://kavyasahithi.github.io/Budget-App/'
                code='https://github.com/KavyaSahithi/Budget-App'
              />
              <CardItem
                src='images/malinis kitchen.png'
                text='Website For A Home-Kitchen Service In Bangalore, India'
                label='HTML, CSS, JavaScript'
                live='https://mailinis-kitchen.netlify.app/'
                code='https://github.com/KavyaSahithi/Malini-s-Kitchen'
              />
              <CardItem
                src='images/dice game.png'
                text='2 Player Dice Game (With Beginner & Pro Levels)'
                label='Vannila JS, CSS'
                live='https://kavyasahithi.github.io/Dice-Game'
                code='https://github.com/KavyaSahithi/Dice-Game'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='images/meme generator.png'
                text='Meme Generator'
                label='React, API call'
                live='https://meme-generator-kavya.netlify.app/'
                code='https://github.com/KavyaSahithi/Meme-generator'
              />
              <CardItem
                src='images/weather app.png'
                text='Weather Monitor App'
                label='JavaScript, API call'
                live='https://weather-monitor-app.netlify.app'
                code='https://github.com/KavyaSahithi/Weather-monitor'
              />
              <CardItem
                src='images/bootstrap site.png'
                text='Gifting Service Website With Shipping Form'
                label='HTML, CSS, Bootstrap'
                live='https://unicorn-favours.netlify.app'
                code='https://github.com/KavyaSahithi/Bootstrap-gifting-website'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/Todo list.png'
                text='Simple Task List'
                label='React'
                live='https://task-list-1.netlify.app/'
                code='https://github.com/KavyaSahithi/Todo-list'
              />
              <CardItem
                src='images/animation.png'
                text='Animation landing page'
                label='CSS, Gsap'
                live='https://landing-page-animation.netlify.app/'
                code='https://github.com/KavyaSahithi/Landing-page-animation'
              />
              <CardItem
                src='images/bakes.png'
                text='Bakery Website'
                label='HTML, CSS, Flexbox'
                live='https://kavyasahithi.github.io/Rosea-bakes/'
                code='https://github.com/KavyaSahithi/Rosea-bakes'
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
