import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {
  ContainerActions
} from '../styles/components/_formSearch'

let regexCEP = /(\d{2}).(\d{3})-(\d{3})/
interface IFormSearchProps {
  setCep: React.Dispatch<React.SetStateAction<string | undefined>>
  error: Boolean
  value: string | undefined
  clear: () => void
  getAddress: () => void
  setError: React.Dispatch<React.SetStateAction<Boolean>>
}

export default function FormSearch({
  setCep,
  error,
  value,
  clear,
  getAddress,
  setError
}: IFormSearchProps) {
  
  const handleCep = (e: any) => {
    const currentValue = e?.target?.value
    setCep(currentValue
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{3})(\d{2})/, "$1.$2-$3")
      .replace(/(-\d{3})\d+?$/, "$1")
    )
    setError(false)
  }

  return (
    <>
      <TextField
        data-testid='input-add-cep'
        fullWidth
        label="Digite o CEP"
        error={error ? true : false}
        helperText={
          error && String(value)?.length > 0 ?
            `Ocorreu um erro ao pesquisar pelo cep ${value}.`
            : error && String(value)?.length === 0 ?
              "O CEP não pode ser vazio."
              : ""
        }
        value={value}
        onChange={(e: any) => { handleCep(e) }}
      />
      <ContainerActions>
        <Button
          data-testid="btn-clear"
          variant="contained"
          color="secondary"
          onClick={clear}
          disabled={value?.length === 0 || value?.length === undefined}
        >
          Limpar
        </Button>
        <Button
          data-testid="btn-search"
          style={{ marginLeft: 20 }}
          variant="contained"
          color="primary"
          onClick={getAddress}
          disabled={!regexCEP.test(String(value))}
        >
          Pesquisar
        </Button>
      </ContainerActions>
    </>
  )
}