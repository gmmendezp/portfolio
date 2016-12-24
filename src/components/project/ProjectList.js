import React, { Component } from 'react'

class ProjectList extends Component {
  render () {
    return (
      <div id='project-list' className='project-list not-implemented'>
        ProjectList
      </div>
    )
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired
}

export default ProjectList
