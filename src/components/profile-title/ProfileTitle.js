import React, { Component } from 'react'
import './ProfileTitle.sass'

class ProfileTitle extends Component {
  render () {
    let { firstName, lastName, label } = this.props.data
    return (
      <div className='profile-title-container'>
        <h1 className='profile-name'>{firstName} {lastName}</h1>
        <h2 className='profile-title'>{label}</h2>
      </div>
    )
  }
}

ProfileTitle.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default ProfileTitle
