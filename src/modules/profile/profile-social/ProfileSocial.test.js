/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { ProfileSocial } from './ProfileSocial'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProfileSocial data={[]} />, div)
})
