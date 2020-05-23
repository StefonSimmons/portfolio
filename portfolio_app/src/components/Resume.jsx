import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightblue;
`
const Page = styled.main`
  width: 816px; 
  margin: 25px 96px;
  padding: 48px; 
  background-color: white;

`
// const PDFContainer = styled.div`
//   display: flex;
//   justify-content: center
// `
// const PDF = styled.embed`
//   height: 50vh;
//   width: 50vw
// `



export default function Resume() {
  return (
    <>
      <Border >
        <Page>  
          ndnfjsnjjjnj
        </Page>
      </Border>
    </>



    // <Border >
    //   <PDFContainer>
    //     {/* <PDF src="https://docdro.id/KUStH4b" type="application/pdf"/> */}
    //   </PDFContainer>
    // </Border>
  )
}
