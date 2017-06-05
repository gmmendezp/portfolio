/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Profile } from './Profile'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Profile info={{ image: 'profile.jpg' }} social={[]} />, div)
})
