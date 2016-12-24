import React, { Component } from 'react'
import Project from './Project'
import './ProjectList.sass'

class ProjectList extends Component {
  render () {
    return (
      <section id='portfolio' className='portfolio'>
        <h3 className='section-title'>Portfolio</h3>
        <div className='section-body'>
          {this.props.projects.map(project => <Project key={project.title} project={project} />)}
        </div>
      </section>
    )
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired
}

export default ProjectList
