import React from 'react'
import {Header} from './AboutMe'
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`
const Icon = styled.img`
  width: 100px
` 

export default function ContactMe() {
  return (
    <>
      <Header>Contact Me</Header>
      <Contact>
        <div>
          <a href="mailto: stefonsimmons1@gmail.com" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/mDM7xNV.png" alt="email" /></a>
          Email
        </div>
        <div>
          <a href="https://www.linkedin.com/in/stefonsimmons/" target='_blank' rel="noopener noreferrer"><Icon src="https://imgur.com/hL6OLih.png" alt="linkedin" /></a>
          LinkedIn
        </div>
      </Contact>
    </>
  )
}
