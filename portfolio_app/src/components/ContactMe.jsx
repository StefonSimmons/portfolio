import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`
const Icon = styled.img`
  width: 100px
` 
const Header = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  text-decoration: underline;
  line-height: 1.6;
  color: black
`

export default function ContactMe() {
  return (
    <>
      <Header>Contact Me</Header>
      <Contact>
        <a href="mailto: stefonsimmons1@gmail.com" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/mDM7xNV.png" alt="email"/></a>
        <a href="https://www.linkedin.com/in/stefonsimmons/" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/hL6OLih.png" alt="linkedin" /></a>
      </Contact>
    </>
  )
}
