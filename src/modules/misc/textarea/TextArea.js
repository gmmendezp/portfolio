import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'
import { CSS } from '../../../constants'

export class TextArea extends Component {
  classNames = {
    base: style({
      display: 'block',
      width: '100%',
      padding: '6px 10px',
      margin: '7px 0',
      border: `1px solid ${CSS.TEXT_COLOR_SECONDARY}`,
      borderRadius: '4px',
      fontFamily: CSS.FONT_PRIMARY,
      fontSize: '14px',
      resize: 'none'
    })
  }

  render () {
    let className = `${this.props.className || ''} ${this.classNames.base}`
    return (
      <textarea
        className={className}
        name={this.props.name}
        placeholder={this.props.placeholder}
        rows={this.props.rows}
      >
        {this.props.children}
      </textarea>
    )
  }
}

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string
}

export default TextArea
