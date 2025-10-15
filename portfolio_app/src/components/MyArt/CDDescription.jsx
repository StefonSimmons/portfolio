import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  color: #e8eddf;
  

  @media(max-width: 415px){
    justify-content: center;
  }
`
const Listing = styled.li`
  padding: 10px 0px;
  
  @media(max-width: 415px){
    text-align: center;
  }

`
export default function CDDescription({sound}) {
  return (
    sound ? 
    <Description>
      <p style={{width: '300px', lineHeight: '30px'}}>A One-Man Acappella project. Interpreted and presented in all of its imperfections by SOUND (me).
      </p>
    </Description>
    :
    <Description>
      <ol>
        <Listing>1. Holding You</Listing>
        <Listing>2. Queen</Listing>
        <Listing>3. Distant Love</Listing>
        <Listing>4. Hey Ladies</Listing>
        <Listing>5. Portrait of a Man</Listing>
        <Listing>6. Magic (Introducing Kira Finn)</Listing>
      </ol>
    </Description>
  )
}
