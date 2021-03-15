import React from 'react'
import {
  ContainerInformation,
  TitleInformation,
  BodyInformation
} from '../styles/components/_information'

interface IInformationProps {
  information: number | string | undefined
  title: string
}

export default function Information({
  title,
  information
}: IInformationProps) {
  return (
    <>
      {information ?
        <ContainerInformation>
          <TitleInformation>{title}:</TitleInformation>
          <BodyInformation>{information}</BodyInformation>
        </ContainerInformation>
        : null
      }
    </>
  )
}