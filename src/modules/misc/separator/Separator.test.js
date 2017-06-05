/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Separator } from './Separator'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Separator />, div)
})
