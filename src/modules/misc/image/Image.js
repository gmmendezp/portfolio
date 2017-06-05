import React, { Component } from 'react'
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
    let imageURL = image.includes('http')
      ? image
      : require(`../../../assets/${image}`)
    let newClassName = `img ${className || ''} ${this.classNames.base}`
    return <img src={imageURL} className={newClassName} alt={alt} {...other} />
  }
}

Image.propTypes = {
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  className: React.PropTypes.string
}

export default Image
