import React from 'react'
import styled from 'styled-components'

import { paintingData } from '../../data/paintings'
import { HeaderTwo } from './Music'

const Gallery = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px;
  margin-bottom: 50px;
  
  @media(max-width: 1420px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 1100px){
    grid-template-columns: repeat(1, 1fr);
  }
`

const PaintName = styled.h3`
  font-size: 28px;
  color: #e8eddf;
  text-transform: uppercase;

  @media(max-width: 587px){
    margin: 15px;
  }
`
const Image = styled.img`
  height: 400px;
  margin: 0 15px;

  @media(max-width: 470px){
    height: 300px;
  }
`
const Details = styled.section`
  width: 100%;
  height: 100%;
  padding: 16px;
  position: absolute;
  opacity: 0;
`

const PaintContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 441px;
  border: #e8eddf solid 1px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  
  &:hover ${Details} {
    transition: all .2s ease-in;
    opacity: 1;
    background: rgba(0,0,0,.8);
  }

`

const PaintDescription = styled.p`
  margin-top: 15px;
  font-size: 24px;
  color: #e8eddf;
  line-height: 1.5;

  @media(max-width: 587px){
    margin: 15px;
  }
`

export default function Painting() {
  const paintings = paintingData.map((painting,idx)=> {
    return (
      <PaintContainer key={idx}>
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
