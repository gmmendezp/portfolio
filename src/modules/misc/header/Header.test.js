/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Header } from './Header'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})

test('inside text matches', () => {
  const component = shallow(<Header>Header</Header>)
  expect(component.text()).toEqual('Header')
})
