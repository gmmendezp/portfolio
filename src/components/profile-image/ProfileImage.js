import React, { Component } from 'react'
import './ProfileImage.sass'

class ProfileImage extends Component {
  render () {
    let image = require(`../../assets/${this.props.image}`)
    return (
      <div className='profile-img-container'>
        <img src={image} className='profile-img' alt='Profile image' />
      </div>
    )
  }
}

ProfileImage.propTypes = {
  image: React.PropTypes.string.isRequired
}

export default ProfileImage
