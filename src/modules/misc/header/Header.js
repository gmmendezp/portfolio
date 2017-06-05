import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style, media } from 'typestyle'
import { CSS } from '../../../constants'

export class Header extends Component {
  classNames = {
    h1: style(media({ minWidth: CSS.BREAKPOINT_SMALL }, { fontSize: '3em' }), {
      fontSize: '2em',
      color: CSS.TEXT_COLOR_H1
    }),
    h2: style(
      media({ minWidth: CSS.BREAKPOINT_SMALL }, { fontSize: '1.2em' }),
      {
        fontSize: '1em',
        color: CSS.TEXT_COLOR_H2
      }
    ),
    h3: style(
      media({ minWidth: CSS.BREAKPOINT_SMALL }, { fontSize: '1.6em' }),
      {
        fontSize: '1.1em',
        color: CSS.TEXT_COLOR_H3
      }
    )
  }

  render () {
    let { className, tag, ...others } = this.props
    let Tag = tag
    let newClassName = `${className || ''} ${this.classNames[tag]}`
    return (
      <Tag className={newClassName} {...others}>
        {this.props.children}
      </Tag>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired
}

export default Header
