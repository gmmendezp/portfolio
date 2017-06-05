import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../constants'

export class Separator extends Component {
  classNames = {
    base: style({
      width: '100%',
      '& hr': {
        borderColor: CSS.TEXT_COLOR_PRIMARY
      }
    })
  }
  render () {
    let className = `${this.props.className || ''} ${this.classNames.base}`
    return (
      <div className={className}>
        <hr />
      </div>
    )
  }
}

Separator.propTypes = {
  className: React.PropTypes.string
}

export default Separator
