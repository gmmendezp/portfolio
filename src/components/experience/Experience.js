import React, { Component } from 'react'
import Timeline from '../timeline/Timeline'
import './Experience.sass'

class Experience extends Component {
  renderExperience (exp, index) {
    return (
      <div className='experience-info' key={exp.title + index}>
        <p className='title'>{exp.title}</p>
        <p className='company'>{exp.company}</p>
        <p className='dates'>{exp.startDate} - {exp.endDate}</p>
        <p className='summary'>{exp.summary}</p>
      </div>
    )
  }
  render () {
    return (
      <section id='experience' className='experience'>
        <h3 className='experience-title section-title'>Experience</h3>
        <Timeline className='experience-list'>
          {this.props.experience.map(this.renderExperience)}
        </Timeline>
      </section>
    )
  }
}

Experience.propTypes = {
  experience: React.PropTypes.array.isRequired
}

export default Experience
