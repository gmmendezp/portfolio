/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { ProfileImage } from './ProfileImage'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProfileImage />, div)
})
