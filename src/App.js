import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import SinglePost from './components/pages/SinglePost'
import ScrollToTop from './components/Scroll'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route path='/post/:slug' component={SinglePost} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
