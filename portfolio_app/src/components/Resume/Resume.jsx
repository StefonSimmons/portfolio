import React, { useState } from 'react'
import Skills from './Skills'
import BrandStatement from './BrandStatement'
import Experience from './Experience'
import Education from './Education'
import { Phrase, List, Block } from './Experience'
import { Header } from '../AboutMe'
import styled from 'styled-components'

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
  @media(max-width: 700px){
    margin: 25px 40px;
    padding: 28px; 
  }

  @media(max-width: 550px){
    margin: 25px 5px;
    padding: 10px; 
  }
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
`
const Arrow = styled.span`
  border-bottom: black solid 2px;
`
const Embed = styled.span`
  color: rgb(82,150,250);
  font-size: 72px;
  font-family: 'Permanent Marker', cursive;
  margin-left: 48px;

  @media(max-width: 550px){
    margin-left: 24px;
    font-size: 48px;
  }

  @media(max-width: 350px){
    margin-left: 24px;
    font-size: 32px;
  }
`
const EmbedBttm = styled(Embed)`
  margin-bottom: 50px;
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
  margin-bottom: 5px;
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
            <Download href="https://docs.google.com/document/d/e/2PACX-1vSvbZ-StlnP1y2xOn_JGw3WhErcAfwlaEXpsmP0z7TDtBpVmjxMS35ePotYHvjZ8yB3DDqz-7KkE5m8/pub" target="_blank" rel="noopener noreferrer">
              Download my Resume <Arrow>⬇</Arrow>
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
            <SectionHeader>
              Skills & Abilities
            </SectionHeader>
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

  )
}
