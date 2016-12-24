import React, { Component } from 'react'
import './Timeline.sass'

class Experience extends Component {
  renderChild (child, index) {
    return (
      <li className='timeline-item' key={index}>
        <div className='timeline-item-info'>
          {child}
        </div>
      </li>
    )
  }

  render () {
    let className = `timeline ${this.props.className}`
    return (
      <ul className={className}>
        {this.props.children.map(this.renderChild)}
      </ul>
    )
  }
}

export default Experience
