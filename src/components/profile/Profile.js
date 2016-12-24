import React, { Component } from 'react'
import ProfileImage from '../profile-image/ProfileImage'
import ProfileSocial from '../profile-social/ProfileSocial'
import ProfileTitle from '../profile-title/ProfileTitle'
import Separator from '../separator/Separator'
import './Profile.sass'

class Profile extends Component {
  render () {
    let { social, info } = this.props.data
    return (
      <section className='profile'>
        <ProfileImage />
        <ProfileSocial data={social} />
        <Separator />
        <ProfileTitle data={info} />
      </section>
    )
  }
}

Profile.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Profile
