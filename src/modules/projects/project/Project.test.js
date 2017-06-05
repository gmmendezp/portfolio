/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Project } from './Project'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Project />, div)
})
