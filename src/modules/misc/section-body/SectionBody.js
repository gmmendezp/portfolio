import React, { Component } from 'react'
import { style, media } from 'typestyle'
import { CSS } from '../../../constants'

export class SectionBody extends Component {
  classNames = {
    base: style(
      media(
        { minWidth: CSS.BREAKPOINT_SMALL },
        { margin: '10px auto', width: '70%' }
      ),
      {
        width: '90%',
        margin: '6px auto',
        color: CSS.TEXT_COLOR_PRIMARY,
        lineHeight: '1.7em'
      }
    )
  }

  render () {
    let className = `${this.props.className || ''} ${this.classNames.base}`
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

SectionBody.propTypes = {
  className: React.PropTypes.string
}

export default SectionBody
