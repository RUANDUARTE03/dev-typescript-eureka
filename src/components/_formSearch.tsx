import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {
  ContainerActions
} from '../styles/components/_formSearch'

interface IFormSearchProps {
  setCep: React.Dispatch<React.SetStateAction<string | undefined>>
  error: Boolean
  value: string | undefined
  clear: () => void
  getAddress: () => void
  setError: React.Dispatch<React.SetStateAction<Boolean>>
}

const FormSearch: React.FC<IFormSearchProps> = ({
  setCep,
  error,
  value,
  clear,
  getAddress,
  setError
}) => {
  return (
    <>
      <TextField
        fullWidth
        label="Digite o CEP"
        error={error ? true : false}
        helperText={error ? `Ocorreu um erro ao pesquisar pelo cep ${value}` : ""}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCep(e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{3})(\d{2})/, "$1.$2-$3")
            .replace(/(-\d{3})\d+?$/, "$1")
          );
          setError(false)
        }}
      />
      <ContainerActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={clear}
        >
          Limpar
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="primary"
          onClick={getAddress}
        >
          Pesquisar
        </Button>
      </ContainerActions>
    </>
  )
}

export default FormSearch