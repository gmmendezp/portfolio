import React, { Component } from 'react'
import { style, media } from 'typestyle'
import {
  flexRoot,
  vertical,
  wrap,
  centerJustified,
  endJustified
} from 'csstips'
import { CSS } from '../../constants'
import SectionTitle from '../misc/section-title/SectionTitle'
import SectionBody from '../misc/section-body/SectionBody'
import Button from '../misc/button/Button'
import Input from '../misc/input/Input'
import TextArea from '../misc/textarea/TextArea'

export class Contact extends Component {
  classNames = {
    base: style(flexRoot, vertical, wrap, centerJustified, {
      width: '100%',
      backgroundColor: CSS.BG_COLOR_FIFTH,
      padding: '50px 0'
    }),
    form: style(flexRoot, wrap, endJustified, {
      width: '100%',
      margin: '0'
    }),
    button: style(
      media(
        { minWidth: CSS.BREAKPOINT_SMALL, maxWidth: CSS.BREAKPOINT_MEDIUM },
        { maxWidth: '120px' }
      ),
      media({ minWidth: CSS.BREAKPOINT_MEDIUM }, { maxWidth: '150px' })
    )
  }

  render () {
    let action = `https://formspree.io/${this.props.info.email}`
    return (
      <section id='contact' className={this.classNames.base}>
        <SectionTitle>Contact</SectionTitle>
        <SectionBody>
          <form action={action} method='POST' className={this.classNames.form}>
            <Input
              className='form-input'
              type='email'
              placeholder='Your email'
              name='email'
            />
            <TextArea name='name' placeholder='Your message' rows='6' />
            <Button type='submit' className={this.classNames.button}>
              Send
            </Button>
          </form>
        </SectionBody>
      </section>
    )
  }
}

Contact.propTypes = {
  info: React.PropTypes.object.isRequired
}

export default Contact
