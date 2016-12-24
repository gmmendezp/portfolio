import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './ProfileSocial.sass'

class ProfileSocial extends Component {
  render () {
    return (
      <ul className='profile-social'>
        <FontAwesome name='github' tag='a' href='https://github.com/gmmendezp' />
        <FontAwesome name='gitlab' tag='a' href='https://gitlab.com/gmmendezp' />
        <FontAwesome name='linkedin' tag='a' href='https://www.linkedin.com/in/martín-méndez-38aab22b' />
        <FontAwesome name='twitter' tag='a' href='https://twitter.com/gmmendezp' />
        <FontAwesome name='facebook' tag='a' href='https://www.facebook.com/gmmendezp' />
      </ul>
    )
  }
}

export default ProfileSocial
