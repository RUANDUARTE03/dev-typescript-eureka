import { render } from '@testing-library/react'
import Home from '../containers/home'

it('should init application with loading false', () => {
  var wrapper = render(<Home />)
  var containerApp = wrapper.getByTestId('container-app')
  expect(containerApp).toBeInTheDocument
})
