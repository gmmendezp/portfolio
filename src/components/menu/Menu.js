import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './Menu.sass'

class Menu extends Component {
  constructor () {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      showMenu: false
    }
  }

  toggle () {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    return (
      <section className='menu-container'>
        <nav className={this.state.showMenu ? 'menu show' : 'menu'}>
          <a href='#about'>About</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </nav>
        <div className='menu-toggle'>
          <a className='menu-btn' type='button' onClick={this.toggle}>
            Menu
            <FontAwesome name='arrow-down' />
          </a>
        </div>
      </section>
    )
  }
}

export default Menu
