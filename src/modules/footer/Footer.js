import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../constants'

export class Footer extends Component {
  classNames = {
    base: style({
      backgroundColor: CSS.BG_COLOR_MENU,
      color: CSS.TEXT_COLOR_SECONDARY,
      fontSize: '0.7em',
      textAlign: 'center',
      padding: '15px'
    })
  }

  render () {
    return (
      <section className={this.classNames.base}>
        <div>
          © 2016 Martin Mendez. All rights reserved
        </div>
      </section>
    )
  }
}

export default Footer
