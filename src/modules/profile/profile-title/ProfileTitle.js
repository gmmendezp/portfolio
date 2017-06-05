import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'
import { CSS } from '../../../constants'
import Header from '../../misc/header/Header'

export class ProfileTitle extends Component {
  classNames = {
    base: style({
      width: '100%',
      marginTop: '15px',
      textAlign: 'center',
      fontFamily: CSS.FONT_SPECIAL
    }),
    name: style({
      width: '100%',
      margin: 0,
      fontWeight: 400,
      textTransform: 'capitalize'
    }),
    title: style({
      width: '100%',
      margin: '0 0 15px',
      fontWeight: 700,
      textTransform: 'capitalize'
    })
  }

  render () {
    let { firstName, lastName, label } = this.props.data
    return (
      <div className={this.classNames.base}>
        <Header tag='h1' className={this.classNames.name}>
          {firstName} {lastName}
        </Header>
        <Header tag='h2' className={this.classNames.title}>{label}</Header>
      </div>
    )
  }
}

ProfileTitle.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProfileTitle
