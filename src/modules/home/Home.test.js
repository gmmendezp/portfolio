/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

test('renders without crashing', () => {
  const component = shallow(
    <Home social={[]} info={{}} about={[]} projects={[]} experience={[]} />
  )
  expect(component.exists())
})
