/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Header } from './Header'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header tag='h1' />, div)
})

test('inside text matches', () => {
  const component = shallow(<Header tag='h1'>Header</Header>)
  expect(component.text()).toEqual('Header')
})
