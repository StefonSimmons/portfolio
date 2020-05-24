import React from 'react'
import Skills from './Skills'
import BrandStatement from './BrandStatement'
import Experience from './Experience'
import Education from './Education'
import { Phrase, List, Block } from './Experience'
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
  text-align: left;
  background-color: white;
  font-family: 'Fira Sans', sans-serif;
`
const Header = styled.header`
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`
const Name = styled.h1`
  font-weight: 700;
  font-size: 32x;
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
`
const Divider = styled.hr`
  background-color: #E86A28;
  border-color: #E86A28;
  height: 1.5px;
  margin-top: 5px;
`
const Section = styled.div`
  margin-top: 25px;

`
export const DetailsHeader = styled.h4`
font-weight: 700;
font-size: 16px;
text-transform: uppercase;

`
const SectionHeader = styled.h3`
  color: #E86A28;
  font-size: 18px;
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

          <Header>
            <Name>
              Stefon Simmons
            </Name>
            <Title>
              Software Engineer
            </Title>
          </Header>
          <Divider></Divider>

          <Section>
            <BrandStatement />
          </Section>

          <Section>
            <DetailsHeader>
              Skills & Abilities
            </DetailsHeader>
            <Skills />
          </Section>

          <Section>
            <SectionHeader>
              Experience
            </SectionHeader>
            <Experience />
          </Section>

          <Section>
            <SectionHeader>
              Education
            </SectionHeader>
            <Education />
          </Section>

          <Section>
            <SectionHeader>
              Personal Interests
            </SectionHeader>
            <Block>
              <List>
                <Phrase>Singer, Songwriter, Performer, Recording Artist</Phrase>
                <Phrase>Painter</Phrase>
                <Phrase>Theater Photography</Phrase>
              </List>
            </Block>
          </Section>

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
