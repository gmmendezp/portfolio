import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'typestyle'
import { flexRoot, wrap } from 'csstips'
import { CSS } from '../../constants'
import SectionTitle from '../misc/section-title/SectionTitle'
import SectionBody from '../misc/section-body/SectionBody'
import Project from './project/Project'

export class Projects extends Component {
  classNames = {
    base: style({
      padding: '50px 0',
      backgroundColor: CSS.BG_COLOR_THIRD
    }),
    body: style(flexRoot, wrap, {
      justifyContent: 'space-between'
    })
  }

  render () {
    return (
      <section id='portfolio' className={this.classNames.base}>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionBody className={this.classNames.body}>
          {(this.props.projects || [])
            .map(project => <Project key={project.title} project={project} />)}
        </SectionBody>
      </section>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects
