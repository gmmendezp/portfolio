/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Timeline } from './Timeline'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Timeline projects={[]} />, div)
})
