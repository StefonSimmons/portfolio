import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
`
const Bottom = styled.div`
// background-color: rgb(0,139,201);
background-color: rgb(0,39,101);
padding: 10px 0; 
`
const Text = styled.h6`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 16px;
  color: #e8eddf;
`

export default function Footer() {
  return (
    <>
      <Foot>
        <Bottom>
          <Text>&copy; Stefon Simmons | Built in React.js</Text>
        </Bottom>
      </Foot>
    </>
  )
}
