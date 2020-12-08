import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
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
              src='images/Budget app.png'
              text='Keep track of income-expenditure ratio to calculate net savings'
              label='Vanilla JS DOM manipulation, CSS'
              live='https://kavyasahithi.github.io/Budget-App/'
              code='https://github.com/KavyaSahithi/Budget-App'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/dice game.png'
              text='2 player dice game with beginner and pro version'
              label='Vannila JS, CSS'
              live='https://kavyasahithi.github.io/Dice-Game'
              code='https://github.com/KavyaSahithi/Dice-Game'
            />

            <CardItem
              src='images/covid tracker.png'
              text='Covid tracker with stats and data'
              label='React context, axios'
              live='https://github-finder-kavya.netlify.app/'
              code='https://github.com/KavyaSahithi/Github-Finder'
            />
            <CardItem
              src='images/trivia quiz.png'
              text='Trivia quiz with various categories to chose from'
              label='React hooks and context'
              live='https://github-finder-kavya.netlify.app/'
              code='https://github.com/KavyaSahithi/Github-Finder'
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
              text='To-do List'
              label='React'
              live='https://task-list-1.netlify.app/'
              code='https://github.com/KavyaSahithi/Todo-list'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
