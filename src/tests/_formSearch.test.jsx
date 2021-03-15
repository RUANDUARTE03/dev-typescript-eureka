import { render } from '@testing-library/react'
import FormSearch from '../components/_formSearch'
import Home from '../containers/home'

it('should disbale button search when input is empty', () => {
  var wrapper = render(
    <FormSearch />
  )
  var buttonSearch = wrapper.getByTestId('btn-search')
  expect(buttonSearch.hasAttribute('disabled')).toBeTruthy()
})

it('should enable button search when input is not empty', () => {
  var wrapper = render(
    <FormSearch
      value={"99.999-999"}
    />
  )
  var buttonSearch = wrapper.getByTestId('btn-search')
  expect(buttonSearch.hasAttribute('disabled')).toBeFalsy()
})

it('should disable button clear when input is empty', () => {
  var wrapper = render(
    <FormSearch />
  )
  var buttonClear = wrapper.getByTestId('btn-search')
  expect(buttonClear.hasAttribute('disabled')).toBeTruthy()
})

it('should enable button clear when input is not empty', () => {
  var wrapper = render(
    <FormSearch
      setCep={jest.fn()}
      setError={jest.fn()}
      value={"99.999-999"}
    />
  )
  var buttonClear = wrapper.getByTestId('btn-search')
  expect(buttonClear.hasAttribute('disabled')).toBeFalsy()
})

it('should receive string in input', () => {
  var wrapper = render(
    <FormSearch
      setCep={jest.fn()}
      setError={jest.fn()}
    />
  )
  var buttonClear = wrapper.getByTestId('btn-search')
  expect(buttonClear.hasAttribute('disabled')).toBeTruthy()
})