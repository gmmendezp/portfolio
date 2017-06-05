import React, { Component } from 'react'
import { connect } from 'react-redux'
import { style } from 'typestyle'
import { CSS } from '../../constants'
import Menu from '../menu/Menu'
import Profile from '../profile/Profile'
import About from '../about/About'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

export class Home extends Component {
  classNames = {
    base: style({
      position: 'relative',
      maxWidth: CSS.APP_MAX_WIDTH,
      margin: '0 auto'
    })
  }
  render () {
    let { social, info, about, projects, experience } = this.props
    return (
      <div className={this.classNames.base}>
        <Menu />
        <Profile social={social} info={info} />
        <About data={about} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact info={info} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)
