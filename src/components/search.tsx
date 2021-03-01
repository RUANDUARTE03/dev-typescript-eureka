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

const Search: React.FC<ISearchProps> = ({
  setCep,
  error,
  value,
  clear,
  getAddress,
  showSearch,
  setShowSearch,
  setError
}) => {

  return (
    <>
      {showSearch ?
        <FormSearch
          error={error}
          setError={setError}
          value={value}
          clear={clear}
          setCep={setCep}
          getAddress={getAddress}
        />
        :
        <ContainerSearch>
          <Button
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

export default Search