/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './Footer'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer />, div)
})
