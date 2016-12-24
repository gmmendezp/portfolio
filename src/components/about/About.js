import React, { Component } from 'react'
import './About.sass'

class About extends Component {
  render () {
    return (
      <section id='about' className='about'>
        <h3 className='about-title section-title'>About</h3>
        <div className='section-body'>
          {this.props.data.map(p => <p className='about-text'>{p}</p>)}
        </div>
      </section>
    )
  }
}

About.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default About
