import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style, media } from 'typestyle'
import { flexRoot, wrap, endJustified, selfStart } from 'csstips'
import { CSS } from '../../../constants'
import Button from '../../misc/button/Button'
import Image from '../../misc/image/Image'
import Link from '../../misc/link/Link'

export class Project extends Component {
  classNames = {
    base: style(
      flexRoot,
      wrap,
      endJustified,
      media({ minWidth: CSS.BREAKPOINT_MEDIUM }, { width: '45%' }),
      {
        width: '100%',
        margin: '20px 0',
        alignContent: 'flex-start'
      }
    ),
    button: style(
      media(
        { minWidth: CSS.BREAKPOINT_SMALL },
        { marginLeft: '5px !important', width: '80px !important' }
      )
    ),
    link: style(media({ maxWidth: CSS.BREAKPOINT_SMALL }, { width: '100%' })),
    item: style({
      width: '100%',
      margin: 0,
      padding: 0
    }),
    image: style(selfStart, {
      width: '100%',
      marginBottom: '15px',
      border: `2px solid ${CSS.TEXT_COLOR_SECONDARY}`,
      borderRadius: '4px'
    }),
    title: style({
      fontWeight: 'bold',
      fontSize: '1.2em'
    }),
    summary: style({
      fontSize: '0.8em',
      margin: '3px 0 10px'
    })
  }

  click (url) {
    window.location = url
  }

  renderTxt (project, propertyName) {
    let className = `${this.classNames[propertyName]} ${this.classNames.item}`
    return <p className={className}>{project[propertyName]}</p>
  }

  renderBtn (url, value) {
    return url
      ? <Link href={url} className={this.classNames.link}>
        <Button className={this.classNames.button}>{value}</Button>
      </Link>
      : ''
  }

  render () {
    let project = this.props.project
    return (
      <div className={this.classNames.base}>
        <Image
          image={project.image}
          className={this.classNames.image}
          alt='project image'
        />
        {this.renderTxt(project, 'title')}
        {this.renderTxt(project, 'summary')}
        {this.renderBtn(project.demoURL, 'Demo')}
        {this.renderBtn(project.codeURL, 'Code')}
      </div>
    )
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project
