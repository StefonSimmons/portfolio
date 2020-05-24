import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const DiagonalBlock = styled.div`
  position: relative;
  top: -150px;
  transform: skewY(-11deg); 
  background-color: rgb(100,150,250);
  height: 40vh;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 38.5vh;
  justify-content: flex-end;
  font-family: 'Permanent Marker', cursive;
  line-height: 1.3;
  color: #333333
`
const Name = styled.h1`
  transform: skewY(11deg); 
  margin: 0 22vw;
  font-size: 48px;
  letter-spacing: 4px;
`
const Title = styled.h2`
  transform: skewY(11deg); 
  margin: 0 28vw;
  font-size: 28px;
  letter-spacing: 3.5px;
`
export default function Home() {
  return (
    <>
      <DiagonalBlock>
        <Header>
          <Name>Stefon Simmons </Name>
          <Title>Software Developer</Title>
        </Header> 
        <Navigation />  
      </DiagonalBlock>    
    </>
  )
}
