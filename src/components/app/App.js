import React, { Component } from 'react'
import data from '../../data'
import Profile from '../profile/Profile'
import About from '../about/About'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import ProjectList from '../project/ProjectList'
import './App.sass'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Menu />
        <Profile data={data} />
        <About data={data.about} />
        <ProjectList />
        <Experience data={data.experience} />
        <Contact data={data.info} />
        <Footer />
      </div>
    )
  }
}

export default App
