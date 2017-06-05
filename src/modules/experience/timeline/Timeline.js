import React, { Component } from 'react'
import css from './Timeline.css.js'

css()

export class Timeline extends Component {
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
    return (
      <ul className='timeline'>
        {this.props.children.map(this.renderChild)}
      </ul>
    )
  }
}

export default Timeline
