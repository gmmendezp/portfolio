import React, { Component } from 'react'
import Image from '../image/Image'
import './Project.sass'

class ProjectList extends Component {
  render () {
    let project = this.props.project
    return (
      <div className='project'>
        <Image image={project.image} className='project-img' />
        <p className='project-title project-item'>{project.title}</p>
        <p className='project-summary project-item'>{project.summary}</p>
        <button href={project.demoURL} className='btn'>Demo</button>
        <button href={project.codeURL} className='btn'>Code</button>
      </div>
    )
  }
}

ProjectList.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectList
