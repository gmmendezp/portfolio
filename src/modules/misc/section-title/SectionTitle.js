import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style, media } from 'typestyle'
import { CSS } from '../../../constants'
import Header from '../header/Header'

export class SectionTitle extends Component {
  classNames = {
    base: style(
      media(
        { minWidth: CSS.BREAKPOINT_SMALL },
        { marginBottom: '15px', width: '70%' }
      ),
      {
        width: '90%',
        margin: '0 auto 20px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }
    )
  }

  render () {
    let className = `${this.props.className || ''} ${this.classNames.base}`
    return <Header tag='h3' className={className}>{this.props.children}</Header>
  }
}

SectionTitle.propTypes = {
  className: PropTypes.string
}

export default SectionTitle
