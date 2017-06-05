/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { ProfileTitle } from './ProfileTitle'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProfileTitle />, div)
})
