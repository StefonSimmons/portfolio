import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const DiagonalBlock = styled.div`
  margin-bottom: 40px;
`
const Header = styled.div`
  display: flex;
  // justify-content: flex-end;
  justify-content: center;
  padding: 10px 0px;
  // font-family: 'Permanent Marker', cursive;
  // font-family: 'Montserrat', sans-serif;
  line-height: 1.3;
  color: #e8eddf;
  background-color: #111111;
`
const Const = styled.span`
  color: rgb(82,150,250)
`
const Name = styled.h1`
  font-size: 28px;
  font-weight: 200;
  letter-spacing: 4px;
`
const Title = styled.h2`
  font-size: 16px;
  letter-spacing: 3.5px;
  line-height: 1.5;
  margin: 5px 0;
`
const Span = styled.span`
  color: #e8eddf;
  font-size: 16px;
`

const Position = styled.h3`
  font-size: 16px;
  letter-spacing: 3.5px;
  color: rgb(232,106,40)
`
export default function Home() {


  const [margin, addMargin] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        addMargin(true)
      } else {
        addMargin(false)
      }
    })
  })

  return (
    <>
      <DiagonalBlock>
        <Header style={margin ? { marginBottom: "91px" } : { marginBottom: "0" }}>
          <Title>
            <Const>let</Const>
            <Name>Stefon Simmons</Name>
            <Position><Span>= {`{ `}</Span>'Software Engineer'<Span> :</Span></Position>
          </Title>
        </Header> 
        <Navigation />  

      </DiagonalBlock>    
    </>
  )
}
