import React, { Component } from 'react'
import { style } from 'typestyle'
import { flexRoot, wrap, centerJustified } from 'csstips'
import { CSS } from '../../constants'
import ProfileImage from './profile-image/ProfileImage'
import ProfileSocial from './profile-social/ProfileSocial'
import ProfileTitle from './profile-title/ProfileTitle'
import Separator from '../misc/separator/Separator'

export class Profile extends Component {
  classNames = {
    base: style(flexRoot, wrap, centerJustified, {
      backgroundColor: CSS.BG_COLOR_FIRST,
      color: CSS.TEXT_COLOR_PRIMARY,
      padding: '70px 0 50px',
      '& hr': {
        width: '90%',
        maxWidth: '650px'
      }
    })
  }
  render () {
    let { social, info } = this.props
    return (
      <section className={this.classNames.base}>
        <ProfileImage image={info.image} />
        <ProfileSocial data={social} />
        <Separator />
        <ProfileTitle data={info} />
      </section>
    )
  }
}

Profile.propTypes = {
  info: React.PropTypes.object.isRequired,
  social: React.PropTypes.object.isRequired
}

export default Profile
