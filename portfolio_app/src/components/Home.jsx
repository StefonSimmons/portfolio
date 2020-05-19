import React from 'react'
import AboutMe from './AboutMe'
import styled from 'styled-components'


const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  font-family: 'Permanent Marker', cursive;
  letter-spacing: 3.5px;
  line-height: 1.2;
`
const Name= styled.h1`
  transform: skewY(11deg); 
  margin: 0 auto;
  font-size: 48px;

`
const Title = styled.h2`
  transform: skewY(11deg); 
  margin: 0 auto;  
  font-size: 32px;

`

const Diagonal = styled.div`
  position: relative;
  top: -60px;
  transform: skewY(-11deg); 
  background-color: lightblue;
  height: 50vh;
`

export default function Home() {
  return (
    <div>
      <Diagonal>
        <Header>
          <Name>Stefon Simmons </Name>
          <Title>Software Developer</Title>
        </Header> 
      </Diagonal>
      <AboutMe/>
    </div>
  )
}
