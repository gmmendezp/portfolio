import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../constants'

export class Button extends Component {
  classNames = {
    base: style({
      display: 'block',
      height: '34px',
      width: '100%',
      margin: '1px 0',
      padding: '6px 12px',
      backgroundColor: CSS.BG_COLOR_MENU,
      color: CSS.TEXT_COLOR_SECONDARY,
      border: `1px outset ${CSS.TEXT_COLOR_SECONDARY}`,
      borderRadius: '4px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: CSS.BG_COLOR_MENU_HOVER,
        color: CSS.TEXT_COLOR_TERTIARY,
        cursor: 'pointer'
      }
    })
  }

  render () {
    let className = `btn ${this.props.className || ''} ${this.classNames.base}`
    return (
      <button type={this.props.type || 'button'} className={className}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  className: React.PropTypes.string
}

export default Button
