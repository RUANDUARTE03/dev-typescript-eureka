import { render } from '@testing-library/react'
import Search from '../components/search'

it('should call the search', () => {
  var fnShowSeach = jest.fn()
  var wrapper = render(
    <Search
      setShowSearch={fnShowSeach}
    />
  )
  wrapper.getByTestId('btn-search-cep').click()
  expect(fnShowSeach).toHaveBeenCalledTimes(1)
})

it('shoul show form when showSearch true', () => {

  var wrapper = render(
    <Search
      showSearch={true}
    />
  )
  wrapper.getByTestId('container-form')
})