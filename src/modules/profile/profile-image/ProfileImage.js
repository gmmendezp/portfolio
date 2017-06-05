import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style, media } from 'typestyle'
import { CSS } from '../../../constants'
import Image from '../../misc/image/Image'

export class ProfileImage extends Component {
  classNames = {
    base: style({
      width: '100%',
      textAlign: 'center',
      paddingTop: '15px'
    }),
    image: style(
      media({ minWidth: CSS.BREAKPOINT_SMALL }, { borderRadius: '40px' }),
      {
        width: '400px',
        maxWidth: '90%',
        border: `2px dotted ${CSS.TEXT_COLOR_PRIMARY}`,
        borderRadius: '20px',
        margin: '0 auto'
      }
    )
  }

  render () {
    return (
      <div className={this.classNames.base}>
        <Image
          image={this.props.image}
          className={this.classNames.image}
          alt='Profile image'
        />
      </div>
    )
  }
}

ProfileImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default ProfileImage
