import React from 'react'
import FormSearch from './_formSearch'
import Button from '@material-ui/core/Button'
import {
  ContainerSearch
} from '../styles/components/search'

interface ISearchProps {
  error: Boolean;
  value: string | undefined
  clear: () => void
  getAddress: () => void
  setCep: React.Dispatch<React.SetStateAction<string | undefined>>
  showSearch: Boolean
  setShowSearch: React.Dispatch<React.SetStateAction<Boolean>>
  setError: React.Dispatch<React.SetStateAction<Boolean>>
}

export default function Search({
  setCep,
  error,
  value,
  clear,
  getAddress,
  showSearch,
  setShowSearch,
  setError
}: ISearchProps) {
  return (
    <>
      {showSearch ?
        <div data-testid="container-form">
          <FormSearch
            error={error}
            setError={setError}
            value={value}
            clear={clear}
            setCep={setCep}
            getAddress={getAddress}
          />
        </div>
        :
        <ContainerSearch>
          <Button
            data-testid="btn-search-cep"
            style={{ marginLeft: 20 }}
            variant="contained"
            color="primary"
            onClick={() => { setShowSearch(true) }}
          >
            Pesquisar CEP
          </Button>
        </ContainerSearch>
      }
    </>
  )
}