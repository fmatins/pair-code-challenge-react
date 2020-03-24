import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
})

test('enzyme', () => {
  shallow(<App />)
})
