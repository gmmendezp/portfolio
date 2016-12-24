import React, { Component } from 'react'
import './image.sass'

class ProfileImage extends Component {
  render () {
    let { image, className, ...other } = this.props
    let imageURL = image.includes('http') ? image : require(`../../assets/${image}`)
    let newClassName = `img ${className}`
    return (
      <img src={imageURL} className={newClassName} {...other} />
    )
  }
}

ProfileImage.propTypes = {
  image: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default ProfileImage
