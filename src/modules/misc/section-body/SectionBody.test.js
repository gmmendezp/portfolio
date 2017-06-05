/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { SectionBody } from './SectionBody'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SectionBody />, div)
})

test('inside text matches', () => {
  const component = shallow(<SectionBody>SectionBody</SectionBody>)
  expect(component.text()).toEqual('SectionBody')
})
