import React, { Component } from 'react'
import Image from '../image/Image'
import './Project.sass'

class ProjectList extends Component {

  click (url) {
    window.location = url
  }

  renderTxt (project, propertyName) {
    let className = `project-${propertyName} project-item`
    return (<p className={className}>{project[propertyName]}</p>)
  }

  renderBtn (url, value) {
    return url ? <button onClick={
      () => this.click(url)
    } className='btn' >{value}</button> : ''
  }

  render () {
    let project = this.props.project
    return (
      <div className='project'>
        <Image image={project.image} className='project-img' />
        {this.renderTxt(project, 'title')}
        {this.renderTxt(project, 'summary')}
        {this.renderBtn(project.demoURL, 'Demo')}
        {this.renderBtn(project.codeURL, 'Code')}
      </div>
    )
  }
}

ProjectList.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectList
