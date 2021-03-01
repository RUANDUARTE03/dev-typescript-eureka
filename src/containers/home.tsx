import React, { useState } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import {
  Container
} from '../styles/home'
import Search from '../components/search'

interface Address {
  erro: boolean
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

const Home: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [showSearch, setShowSearch] = useState<Boolean>(false)
  const [address, setAddress] = useState<Address>()
  const [cep, setCep] = useState<string>()

  const getAddress = () => {
    setLoading(true)
    axios.get<Address>(`http://localhost:4000/address/${cep?.replace(/\D/g, "")}`)
      .then((response) => {
        if (response?.data?.erro) {
          setError(true)
        } else {
          setAddress(response.data)
          setError(false)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }

  const clear = () => {
    setCep('')
  }

  return (
    <Container>
      <Card className="container-card">
        <Search
          error={error}
          setError={setError}
          value={cep}
          setCep={setCep}
          clear={clear}
          getAddress={getAddress}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
      </Card>
    </Container>
  )
}

export default Home