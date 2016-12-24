import React, { Component } from 'react'
import './Experience.sass'

class Experience extends Component {
  renderExperience (exp, index) {
    return (
      <li key={exp.title + index} className='experience-item'>
        <div className='experience-info'>
          <p className='title'>{exp.title}</p>
          <p className='company'>{exp.company}</p>
          <p className='dates'>{exp.startDate} - {exp.endDate}</p>
          <p className='summary'>{exp.summary}</p>
        </div>
      </li>
    )
  }
  render () {
    return (
      <section id='experience' className='experience'>
        <h3 className='experience-title section-title'>Experience</h3>
        <div className='timeline section-body'>
          <ul className='experience-list'>
            {this.props.experience.map(this.renderExperience)}
          </ul>
        </div>
      </section>
    )
  }
}

Experience.propTypes = {
  experience: React.PropTypes.array.isRequired
}

export default Experience
