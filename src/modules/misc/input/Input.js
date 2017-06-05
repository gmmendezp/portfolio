import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../constants'

export class Input extends Component {
  classNames = {
    base: style({
      display: 'block',
      width: '100%',
      height: '23px',
      padding: '6px 12px',
      margin: '7px 0',
      border: `1px solid ${CSS.TEXT_COLOR_SECONDARY}`,
      borderRadius: '4px',
      fontFamily: CSS.FONT_PRIMARY,
      fontSize: '15px'
    })
  }

  render () {
    let className = `${this.props.className || ''} ${this.classNames.base}`
    return (
      <input
        className={className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
      >
        {this.props.children}
      </input>
    )
  }
}

Input.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string
}

export default Input
