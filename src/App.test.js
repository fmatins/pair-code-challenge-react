import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'

describe('check all', () => {
  it('is indeterminate when some items are selected', () => {
    const { getByDisplayValue } = render(<App />)

    fireEvent.click(getByDisplayValue('item1'))

    expect(getByDisplayValue('all').indeterminate).toBe(true)
  })
})

test('enzyme', () => {
  shallow(<App />)
})
