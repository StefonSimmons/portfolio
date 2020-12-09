import React from 'react'
import styled from 'styled-components'

import { paintingData } from '../../data/paintings'
import { HeaderTwo } from './Music'

const Gallery = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
`

const PaintContainer = styled.div`
  display: flex;
  
`
const PaintName = styled.h3`
  font-size: 28px;
  color: #e8eddf;
  text-transform: uppercase;
`
const Image = styled.img`
  height: 400px;
  margin: 0 15px;
`
const Details = styled.section`

`
const PaintDescription = styled.p`
  margin-top: 15px;
  font-size: 24px;
  color: #e8eddf;
  line-height: 1.5;
`

export default function Painting() {
  const paintings = paintingData.map(painting => {
    return (
      <PaintContainer>
        <Image src={painting.image} alt={painting.name} />
        <Details>
          <PaintName>{painting.name}</PaintName>
          <PaintDescription>{painting.about}</PaintDescription>
        </Details>
      </PaintContainer>
    )
  })
  return (
    <>
      <HeaderTwo>Here's my Paint Gallery</HeaderTwo>
      <Gallery>
        {paintings}
      </Gallery>
    </>
  )
}
