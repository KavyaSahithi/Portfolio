import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import Cards from './components/Cards.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Cards} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </Router>
    </>
  )
}

export default App
