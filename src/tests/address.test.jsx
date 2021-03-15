import { render } from '@testing-library/react'
import Address from '../components/address'

it('should receive an object and show screen', () => {
  var mock = {
    cep: 60767750,
    logradouro: 'Gabriel Pires Ribeiro',
    complemento: '',
    bairro: 'Mondumbim',
    localidade: '',
  }
  var wrapper = render(
    <Address
      address={mock}
    />
  )
  wrapper.getByText(mock.cep)
})