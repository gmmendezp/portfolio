import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'
import { flexRoot, vertical, wrap } from 'csstips'
import { CSS } from '../../constants'
import SectionTitle from '../misc/section-title/SectionTitle'
import Timeline from './timeline/Timeline'

export class Experience extends Component {
  classNames = {
    base: style(flexRoot, vertical, wrap, {
      justifyContent: 'center',
      backgroundColor: CSS.BG_COLOR_FOURTH,
      width: '100%',
      padding: '50px 0'
    }),
    title: style({
      fontSize: '1.3em',
      fontWeight: 'bold',
      margin: '1px 10px'
    }),
    company: style({
      fontSize: '1.1em',
      marginBottom: 0,
      margin: '1px 10px'
    }),
    dates: style({
      marginTop: 0,
      fontSize: '0.8em',
      margin: '1px 10px'
    }),
    summary: style({
      fontSize: '0.7em',
      letterSpacing: '0.04em',
      lineHeight: '1.4em',
      margin: '1px 10px'
    })
  }

  renderExperience (exp, index) {
    return (
      <div className='experience-info' key={exp.title + index}>
        <p className={this.classNames.title}>{exp.title}</p>
        <p className={this.classNames.company}>{exp.company}</p>
        <p className={this.classNames.dates}>{exp.startDate} - {exp.endDate}</p>
        <p className={this.classNames.summary}>{exp.summary}</p>
      </div>
    )
  }
  render () {
    return (
      <section id='experience' className={this.classNames.base}>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>
          {(this.props.experience || []).map(this.renderExperience.bind(this))}
        </Timeline>
      </section>
    )
  }
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired
}

export default Experience
