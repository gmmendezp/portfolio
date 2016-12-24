import React, { Component } from 'react'
import profileImage from '../../assets/profile.jpg'
import './ProfileImage.sass'

class ProfileImage extends Component {
  render () {
    return (
      <div className='profile-img-container'>
        <img src={profileImage} className='profile-img' alt="Martin's profile image" />
      </div>
    )
  }
}

export default ProfileImage
