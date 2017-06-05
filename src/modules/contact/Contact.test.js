/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { Contact } from './Contact'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contact info={{ email: '' }} />, div)
})
