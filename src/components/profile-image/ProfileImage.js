import React, { Component } from 'react'
import Image from '../image/Image'
import './ProfileImage.sass'

class ProfileImage extends Component {
  render () {
    return (
      <div className='profile-img-container'>
        <Image image={this.props.image} className='profile-img' alt='Profile image' />
      </div>
    )
  }
}

ProfileImage.propTypes = {
  image: React.PropTypes.string.isRequired
}

export default ProfileImage
