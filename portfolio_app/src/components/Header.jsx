import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const DiagonalBlock = styled.div`
`
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px;
  font-family: 'Permanent Marker', cursive;
  line-height: 1.3;
  color: #e8eddf;
  background-color: #111111;

`
const Const = styled.span`
  color: rgb(82,150,250)
`
const Name = styled.h1`
  margin: 0 30px;
  font-size: 28px;
  letter-spacing: 4px;
`
const Title = styled.h2`
  font-size: 20px;
  letter-spacing: 3.5px;
`
export default function Home() {
  return (
    <>
      <DiagonalBlock>
        <Header>
          <Title>
            <Const>const</Const>
            <Name>Stefon Simmons</Name>
            = "Software Developer"
          </Title>
          {/* <Name>Stefon Simmons </Name> */}
        </Header> 
        <Navigation />  

      </DiagonalBlock>    
    </>
  )
}
