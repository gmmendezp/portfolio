import React, { Component } from 'react'
import './About.sass'

class About extends Component {
  render () {
    return (
      <div id='about' className='about'>
        <h3 className='about-title'>About</h3>
        {this.props.data.map(p => <p className='about-text'>{p}</p>)}
      </div>
    )
  }
}

About.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default About
