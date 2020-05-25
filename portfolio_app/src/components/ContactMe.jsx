import React from 'react'
import {Header} from './AboutMe'
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;  
`
const Block = styled.div`
  margin: 15px;
`
const Icon = styled.img`
  width: 100px
` 
const Word = styled.h3`
  color: #e8eddf;
  padding-top: 15px;
`

export default function ContactMe() {
  return (
    <>
      <Header>Contact Me</Header>
      <Contact>
        <Block>
          <a href="mailto: stefonsimmons1@gmail.com" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/mDM7xNV.png" alt="email" /></a>
          <Word>Email</Word>
        </Block>
        <Block>
          <a href="https://www.linkedin.com/in/stefonsimmons/" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/hL6OLih.png" alt="linkedin" /></a>
          <Word>LinkedIn</Word>
        </Block>
      </Contact>
    </>
  )
}
