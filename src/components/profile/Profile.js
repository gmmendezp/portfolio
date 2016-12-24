import React, { Component } from 'react'
import ProfileImage from '../profile-image/ProfileImage'
import ProfileSocial from '../profile-social/ProfileSocial'
import ProfileTitle from '../profile-title/ProfileTitle'
import Separator from '../separator/Separator'
import './Profile.sass'

class Profile extends Component {
  render () {
    return (
      <div className='profile'>
        <ProfileImage />
        <ProfileSocial />
        <Separator />
        <ProfileTitle />
      </div>
    )
  }
}

export default Profile
