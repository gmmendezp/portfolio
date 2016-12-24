import React, { Component } from 'react'
import './image.sass'

class ProfileImage extends Component {
  render () {
    let { image, className, ...other } = this.props
    image = require(`../../assets/${this.props.image}`)
    className = `img ${className}`
    console.log(other)
    return (
      <img src={image} className={className} {...other} />
    )
  }
}

ProfileImage.propTypes = {
  image: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default ProfileImage
