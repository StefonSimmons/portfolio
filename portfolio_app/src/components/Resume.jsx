import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  background-color: lightblue;
  height: 50vh;
  position: relative;
  top: -5vh;
`
const PDFContainer = styled.div`
  display: flex;
  justify-content: center
`
const PDF = styled.embed`
  height: 50vh;
  width: 50vw
`

export default function Resume() {
  return (
    <Border >
      <PDFContainer>
        <PDF src="https://docdro.id/KUStH4b" type="application/pdf"/>
      </PDFContainer>
    </Border>
  )
}
