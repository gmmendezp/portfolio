import React, { Component } from 'react'
import { style } from 'typestyle'
import { flexRoot, vertical, wrap, centerJustified } from 'csstips'
import { CSS } from '../../constants'
import SectionTitle from '../misc/section-title/SectionTitle'
import SectionBody from '../misc/section-body/SectionBody'

export class About extends Component {
  classNames = {
    base: style(flexRoot, vertical, wrap, centerJustified, {
      backgroundColor: CSS.BG_COLOR_SECOND,
      width: '100%',
      padding: '50px 0'
    })
  }

  render () {
    return (
      <section id='about' className={this.classNames.base}>
        <SectionTitle>About</SectionTitle>
        <SectionBody>
          {this.props.data.map((p, index) =>
            <p className='about-text' key={index}>{p}</p>
          )}
        </SectionBody>
      </section>
    )
  }
}

About.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default About
