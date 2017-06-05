/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { SectionTitle } from './SectionTitle'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SectionTitle />, div)
})

test('inside text matches', () => {
  const component = mount(<SectionTitle>SectionTitle</SectionTitle>)
  expect(component.text()).toEqual('SectionTitle')
})
