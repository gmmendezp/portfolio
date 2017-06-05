import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'
import { CSS } from '../../../constants'

export class Link extends Component {
  classNames = {
    base: style({
      color: CSS.TEXT_COLOR_SECONDARY,
      textDecoration: 'none',
      '&:hover': {
        color: CSS.TEXT_COLOR_TERTIARY
      }
    })
  }

  render () {
    let { className, ...others } = this.props
    let newClassName = `${className || ''} ${this.classNames.base}`
    return (
      <a className={newClassName} {...others}>
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  className: PropTypes.string
}

export default Link
