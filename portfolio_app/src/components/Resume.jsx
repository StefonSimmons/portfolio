import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  background-color: lightblue;
  height: 50vh;
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
        <PDF src="https://www.docdroid.net/a3CUuk8/stefon-simmons-resume-2020-532020v-pdf" type="application/pdf"/>
      </PDFContainer>
    </Border>
  )
}
