import React from 'react'
import {Header} from './AboutMe'
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;  
`
const Block = styled.div`
  margin: 30px 45px;
`
const Icon = styled.img`
  width: 100px;
  background-image: radial-gradient(rgb(0,150,250), rgba(0,150,250,.7445), rgba(0,150,250,.2225));
  box-shadow: 0px 0px 50px rgb(0,150,250);
  padding: 10px;

  &:hover{
    box-shadow: 0px 0px 60px rgb(250,150,0);
    background-image: radial-gradient(rgb(250,150,0), rgba(250,150,0,.723445), rgba(250,150,0,.2225));
  }
` 
const Word = styled.h3`
  color: #e8eddf;
  padding-top: 15px;
  letter-spacing: 2px;
  font-family: 'Ubuntu Condensed', sans-serif;
`

export default function ContactMe() {
  return (
    <>
      <Header>Contact Me</Header>

      <Contact>
        <Block>
          <a href="mailto: stefonsimmons1@gmail.com" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/tZFVFMn.png" alt="email" /></a>
          <Word>Email</Word>
        </Block>
        <Block>
          <a href="https://www.linkedin.com/in/stefonsimmons/" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/GRoNllq.png" alt="linkedin" /></a>
          <Word>LinkedIn</Word>
        </Block>
        <Block>
          <a href="https://github.com/StefonSimmons" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/YOf43Nb.png" alt="github" /></a>
          <Word>Github</Word>
        </Block>
      </Contact>
    </>

// https://imgur.com/hL6OLih.png
  )
}
