import React, { Component } from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import ProjectList from '../project/ProjectList'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import data from '../../data'
import './App.sass'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Menu />
        <Profile data={data} />
        <About />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
