import React, { useState } from 'react'
import Skills from './Skills'
import BrandStatement from './BrandStatement'
import Experience from './Experience'
import Education from './Education'
import { Phrase, List, Block } from './Experience'
import { Header } from '../AboutMe'
import styled, {keyframes} from 'styled-components'

const Border = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Page = styled.main`
  margin: 25px 96px;
  padding: 48px; 
  text-align: left;
  background-color: #e8eddf;
  border-radius: 15px;
  font-family: 'Ubuntu Condensed', sans-serif;
  &:hover{
    background: rgba(232, 237, 223, .6);

  }
`

const DwnldShake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg)}
  10% { transform: translate(-1px, -2px) rotate(-1deg)}
  20% { transform: translate(-3px, 0px) rotate(1deg)}
  30% { transform: translate(3px, 2px) rotate(0deg)}
  40% { transform: translate(1px, -1px) rotate(1deg)}
  50% { transform: translate(-1px, 2px) rotate(-1deg)}
  60% { transform: translate(-3px, 1px) rotate(0deg)}
  70% { transform: translate(3px, 1px) rotate(-1deg)}
  80% { transform: translate(-1px, -1px) rotate(1deg)}
  90% { transform: translate(1px, 2px) rotate(0deg)}
  100% { transform: translate(1px, -2px) rotate(-1deg)}
`

const Download = styled.a`
  position: static;
  text-decoration: none;
  font-size: 18px;
  background-color: #e8eddf;
  color: black;
  border: 2px #E86A28 solid;
  border-radius: 15px;
  padding: 5px 15px;
  font-family: 'Permanent Marker', cursive;

  &:hover{
    animation: ${DwnldShake} .5s;
    animation-iteration-count: 1;
  }
`
const Arrow = styled.span`
  border-bottom: black solid 2px;
`
const Embed = styled.span`
  color: rgb(82,150,250);
  font-size: 72px;
  // font-family: 'Ubuntu Condensed', sans-serif;
  // font-family: 'Montserrat', sans-serif;
  font-family: 'Permanent Marker', cursive;
  margin-left: 48px;
`
const EmbedBttm = styled(Embed)`
  margin-bottom: 50px
`
const ResumeHeader = styled.header`
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`
const Name = styled.h1`
  font-weight: 700;
  font-size: 32px;
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
const Src = styled.span`
  color: rgb(0,139,201)
`
const Span = styled.span`
  color: #e8eddf;
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

  const [display, updateDisplay] = useState(false)

  return (
    <>
      <Border >
        <Header> My Resume </Header>
        <Embed>{`<${display ? 'Download ' : 'embed '}`}
          <Src>src</Src>
          <Span>=</Span>
        </Embed>

        <Page
          onMouseEnter={() => updateDisplay(true)}
          onMouseLeave={() => updateDisplay(false)}
        >
          {display ? 
          <Download href="https://www.docdroid.net/KUStH4b/stefon-simmons-resume-2020-pdf" target="_blank" rel="noopener noreferrer">
              Download my Resume <Arrow>⬇</Arrow>
              {/* <img src="https://imgur.com/qbXZwZz.png" alt="download-icon"></img>   */}
          </Download>
            : ''
          }
          <ResumeHeader>
            <Name>
              Stefon Simmons
            </Name>
            <Title>
              Software Engineer
            </Title>
          </ResumeHeader>
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
        <EmbedBttm>{`/>`}</EmbedBttm>

      </Border>
    </>



    // <Border >
    //   <PDFContainer>
    // {/* <PDF src="https://docdro.id/KUStH4b" type="application/pdf"/> */}
    //   </PDFContainer>
    // </Border>
  )
}
