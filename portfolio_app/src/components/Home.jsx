import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'
import styled from 'styled-components'

const Temporary= styled(Link)`
  text-decoration: none;
  color: black
`

const Diagonal = styled.div`
  position: relative;
  top: -150px;
  transform: skewY(-11deg); 
  background-color: lightblue;
  height: 55vh;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: flex-end;
  font-family: 'Permanent Marker', cursive;
  letter-spacing: 3.5px;
  line-height: 1.4;
`
const Name= styled.h1`
  transform: skewY(11deg); 
  margin: 0 28vw;
  font-size: 48px;
`
const Title = styled.h2`
  transform: skewY(11deg); 
  margin: 0 28vw;
  font-size: 28px;
`

export default function Home() {
  return (
    <>
      <Diagonal>
        <Header>
          <Temporary to='/'><Name>Stefon Simmons </Name></Temporary>
          <Title>Software Developer</Title>
        </Header> 
      </Diagonal>

      <Navigation />
      
    </>
  )
}
