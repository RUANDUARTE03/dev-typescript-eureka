export default class IAddress {
  constructor(
    erro: Boolean,
    cep: number,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: number,
    gia: number,
    ddd: number,
    siafi: number
  ) {
    this.erro = erro
    this.cep = cep
    this.logradouro = logradouro
    this.complemento = complemento
    this.bairro = bairro
    this.localidade = localidade
    this.uf = uf
    this.ibge = ibge
    this.gia = gia
    this.ddd = ddd
    this.siafi = siafi
  }
  erro?: Boolean
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