import React, { Component } from 'react'
import './Contact.sass'

class Contact extends Component {
  render () {
    let action = `https://formspree.io/${this.props.info.email}`
    return (
      <section id='contact' className='contact'>
        <h3 className='section-title'>Contact</h3>
        <form action={action} method='POST' className='section-body'>
          <input className='form-input' type='email' placeholder='Your email' name='email' />
          <textarea name='name' placeholder='Your message' rows='6' />
          <button className='btn right' type='submit'>Send</button>
        </form>
      </section>
    )
  }
}

Contact.propTypes = {
  info: React.PropTypes.object.isRequired
}

export default Contact
