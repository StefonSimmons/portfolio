import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: start;
  color: #e8eddf;
  flex-direction: column;
  

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
      <p style={{width: '300px', lineHeight: '30px'}}>A One-Man Acappella project. Interpreted and presented in all of its imperfections by SOUND (me). Listen to this project and more of my earlier works on <a href="https://stefonsimmons.bandcamp.com/album/a-sound-project-the-covers" style={{color: "rgb(82,150,250)", textDecoration: "none"}}>bandcamp</a>.
      </p>
    </Description>
    :
    <Description>
      <p style={{marginBottom: "5px"}}>Click the logo of your preferred platform below to listen to "Appreciated".</p>
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
