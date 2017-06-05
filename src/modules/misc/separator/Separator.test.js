/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Separator } from './Separator'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Separator />, div)
})

test('inside text matches', () => {
  const component = shallow(<Separator />)
  expect(component.text()).toEqual('Separator')
})
