import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'

export class Image extends Component {
  classNames = {
    base: style({
      display: 'block',
      maxWidth: '100%',
      height: 'auto'
    })
  }

  render () {
    let { image, className, alt, ...other } = this.props
    let imageURL = !image || image.includes('http')
      ? image
      : require(`../../../assets/${image}`)
    let newClassName = `img ${className || ''} ${this.classNames.base}`
    return <img src={imageURL} className={newClassName} alt={alt} {...other} />
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
}

export default Image
