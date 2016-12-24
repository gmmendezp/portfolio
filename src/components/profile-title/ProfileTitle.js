import React, { Component } from 'react'
import './ProfileTitle.sass'

class ProfileTitle extends Component {
  render () {
    return (
      <div className='profile-title-container'>
        <h1 className='profile-name'>Martin Méndez</h1>
        <h2 className='profile-title'>Full Stack Developer</h2>
      </div>
    )
  }
}

export default ProfileTitle
