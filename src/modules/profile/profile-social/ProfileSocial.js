import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style, media } from 'typestyle'
import { flexRoot, aroundJustified } from 'csstips'
import FontAwesome from 'react-fontawesome'
import { CSS } from '../../../constants'

export class ProfileSocial extends Component {
  classNames = {
    base: style(
      flexRoot,
      aroundJustified,
      media({ minWidth: CSS.BREAKPOINT_SMALL }, { width: '300px' }),
      {
        width: '200px',
        textAlign: 'center',
        listStyle: 'none',
        padding: 0,
        '& a': {
          fontSize: '0.9em',
          color: CSS.TEXT_COLOR_PRIMARY
        }
      }
    )
  }

  render () {
    return (
      <ul className={this.classNames.base}>
        {(this.props.data || [])
          .map(profile =>
            <FontAwesome
              key={profile.name}
              name={profile.name}
              tag='a'
              href={profile.url}
            />
          )}
      </ul>
    )
  }
}

ProfileSocial.propTypes = {
  data: PropTypes.array.isRequired
}

export default ProfileSocial
