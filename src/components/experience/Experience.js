import React, { Component } from 'react'
import './Experience.sass'

class Experience extends Component {
  toEvent (exp){
    return {
      date: new Date(exp.dates.split('-')[0]),
      title: exp.title,
      text: exp.company
    }
  }
  renderExperience (exp, index) {
    return (
      <li key={exp.title + index} className='experience-item'>
        <div className='experience-info'>
          <p className='title'>{exp.title}</p>
          <p className='company'>{exp.company}</p>
          <p className='dates'>{exp.dates}</p>
          <p className='description'>{exp.description}</p>
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
            {this.props.data.map(this.renderExperience)}
          </ul>
        </div>
      </section>
    )
  }
}

Experience.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Experience
