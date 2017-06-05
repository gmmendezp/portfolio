/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Projects } from './Projects'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Projects />, div)
})
