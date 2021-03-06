import React, { useState } from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
import Card from '@material-ui/core/Card'
import {
  Container,
  ContainerLoader
} from '../styles/home'
import Search from '../components/search'
import Address from '../components/address'
import IAddress from '../models/address';

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [showSearch, setShowSearch] = useState<Boolean>(false)
  const [address, setAddress] = useState<IAddress>()
  const [cep, setCep] = useState<string>()

  const alterLoading = () => {
    setLoading(false)
    setShowSearch(false)
    setCep('')
  }

  const getAddress = () => {
    setLoading(true)
    setAddress(undefined)
    axios.get<IAddress>(`http://localhost:4000/address/${cep?.replace(/\D/g, "")}`)
      .then((response) => {
        if (response?.data?.erro) {
          setError(true)
          setLoading(false)
        } else {
          setAddress(response.data)
          setError(false)
          alterLoading()
        }
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  const clear = () => {
    setCep('')
    setError(false)
  }

  return (
    <Container>
      <Card className="container-card">
        {loading ?
          <ContainerLoader>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </ContainerLoader>
          :
          <div data-testid="container-app">
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
            {address && !showSearch ?
              <Address
                address={address}
              />
              : null}
          </div>
        }
      </Card>
    </Container>
  )
}