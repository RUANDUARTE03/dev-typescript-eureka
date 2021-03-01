import React from 'react'
import Information from '../components/_information'
import {
  Container
} from '../styles/address'

interface IAddress {
  cep: number
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: number
  gia: number
  ddd: number
  siafi: number
}

interface IAddressProps {
  address: IAddress | undefined
}

const Address: React.FC<IAddressProps> = ({
  address
}) => {
  return (
    <Container>
      <Information
        title="CEP"
        information={address?.cep}
      />
      <Information
        title="Logradouro"
        information={address?.logradouro}
      />
      <Information
        title="Complemento"
        information={address?.complemento}
      />
      <Information
        title="Bairro"
        information={address?.bairro}
      />
      <Information
        title="Localidade"
        information={address?.localidade}
      />
      <Information
        title="UF"
        information={address?.uf}
      />
      <Information
        title="IBGE"
        information={address?.ibge}
      />
      <Information
        title="GIA"
        information={address?.gia}
      />
      <Information
        title="DDD"
        information={address?.ddd}
      />
      <Information
      title="SIAFI"
      information={address?.siafi}
    />
    </Container>
  )
}

export default Address