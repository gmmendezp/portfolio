import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './ProfileSocial.sass'

class ProfileSocial extends Component {
  render () {
    return (
      <ul className='profile-social'>
        {
          this.props.data.map(profile => <FontAwesome key={profile.name}
            name={profile.name} tag='a' href={profile.url} />)
        }
      </ul>
    )
  }
}

ProfileSocial.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default ProfileSocial
