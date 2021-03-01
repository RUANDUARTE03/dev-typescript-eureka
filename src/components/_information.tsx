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

const Information: React.FC<IInformationProps> = ({
  title,
  information,
}) => {
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

export default Information