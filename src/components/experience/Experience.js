import React, { Component } from 'react'
import './Experience.sass'

class Experience extends Component {
  render () {
    return (
      <div id='about' className='experience not-implemented'>
        Experience
      </div>
    )
  }
}

Experience.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Experience
