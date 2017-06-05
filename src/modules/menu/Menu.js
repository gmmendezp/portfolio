import React, { Component } from 'react'
import { style, media } from 'typestyle'
import { flexRoot, wrap, endJustified } from 'csstips'
import FontAwesome from 'react-fontawesome'
import { CSS } from '../../constants'
import Link from '../misc/link/Link'

export class Menu extends Component {
  classNames = {
    base: style(
      flexRoot,
      wrap,
      endJustified,
      media({ maxWidth: CSS.BREAKPOINT_MEDIUM }, { top: '50px' }),
      {
        position: 'fixed',
        zIndex: 20,
        width: '100%',
        maxWidth: CSS.APP_MAX_WIDTH,
        backgroundColor: CSS.BG_COLOR_MENU,
        marginTop: 0,
        padding: 0,
        listStyle: 'none'
      }
    ),
    notShow: style(
      media(
        { maxWidth: CSS.BREAKPOINT_MEDIUM },
        {
          transform: 'translateY(-100%)',
          transition: '0.5s ease-in-out'
        }
      )
    ),
    show: style(
      media(
        { maxWidth: CSS.BREAKPOINT_MEDIUM },
        {
          transform: 'translateY(1px)',
          transition: '0.5s ease-in-out',
          borderTop: `1px solid ${CSS.TEXT_COLOR_SECONDARY}`
        }
      )
    ),
    option: style(
      media({ maxWidth: CSS.BREAKPOINT_MEDIUM }, { width: '100%' }),
      {
        padding: '15px',
        textTransform: 'lowercase',
        '&:hover': {
          backgroundColor: CSS.BG_COLOR_MENU_HOVER
        },
        '&:last-child': {
          marginRight: '50px'
        }
      }
    ),
    toggle: style(
      media({ maxWidth: CSS.BREAKPOINT_MEDIUM }, flexRoot, endJustified),
      {
        position: 'fixed',
        zIndex: 30,
        width: '100%',
        backgroundColor: CSS.BG_COLOR_MENU,
        display: 'none'
      }
    ),
    button: style({
      width: '80px',
      margin: '5px',
      padding: '10px',
      fontWeight: 'bold',
      border: '1px solid white',
      borderRadius: '4px',
      textTransform: 'lowercase',
      '& span': {
        float: 'right'
      }
    })
  }

  sections = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

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
      <section>
        <nav
          className={`${this.classNames.base} ${this.state.showMenu
            ? this.classNames.show
            : this.classNames.notShow}`}
        >
          {this.sections.map(section =>
            <Link
              className={this.classNames.option}
              key={section.name}
              href={section.href}
            >
              {section.name}
            </Link>
          )}
        </nav>
        <div className={this.classNames.toggle}>
          <Link className={this.classNames.button} onClick={this.toggle}>
            Menu
            <FontAwesome name='arrow-down' />
          </Link>
        </div>
      </section>
    )
  }
}
export default Menu
