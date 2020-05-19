import React from 'react'
import styled from 'styled-components'


const AboutContainer = styled.main`
  border: green solid 3px;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -3vh;
  font-family: 'Ubuntu Condensed', sans-serif;

`
const AboutSection = styled.section`
  border: orange solid 3px;
  margin: 0 25px;
  width: 300px;
  padding: 15px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`

const Statement = styled.p`

`
const TechSection = styled.section`
  border: blue solid 3px;
  margin: 0 25px;
  padding: 15px;

`
const Header = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  text-decoration: underline;
  line-height: 1.6;
`

export default function AboutMe() {
  return (
    <>
      <AboutContainer>

        <AboutSection>
          <Header>About Me</Header>
          <Statement>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore inventore non eius fugit qui, iusto magni nemo nisi blanditiis aperiam sequi reprehenderit minima pariatur quos ad sit accusamus aliquam voluptates.</Statement>
        </AboutSection>

        <TechSection>
          <Header>Technical Utility Belt</Header>        
        </TechSection>

      </AboutContainer>
      
    </>
  )
}
