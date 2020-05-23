import React from 'react'
import Skills from './Skills'
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
  text-align: center;
  background-color: white;
  font-family: 'Fira Sans', sans-serif;
`
const Header = styled.header`
  letter-spacing: 1px;
  line-height: 1.5;
`
const Name = styled.h1`
  font-weight: 700;
  font-size: 28px;
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
`
const Divider = styled.hr`
  background-color: #F09609;
  border-color: #FFF09609;
  height: 1.5px;
  margin-top: 5px;
`
const SkillsSection = styled.div`
  text-align: left;
  margin-top: 25px;
`
const BrandStatement = styled.p`
  text-align: left
`

const SkillsHeader = styled.h1`
font-weight: 700;
font-size: 16px;
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

          <BrandStatement>
            I’m a self-motivated creator with over 6 years of experience working within higher education administration as a College Registrar and 15 years as a recording artist. My creativity as an artist and organization as an administrator feed greatly into my passion for software development. Currently, I am seeking to work with people and companies who, like myself, are determined to learn and develop others and their products/services. I consistently contribute strong problem-solving and interpersonal skills as well as an ad/aptive mindset for new processes and technology that may increase productivity.
          </BrandStatement>

          <SkillsSection>

            <SkillsHeader>
              Skills & Abilities
            </SkillsHeader>

            <Skills />

          </SkillsSection>

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
