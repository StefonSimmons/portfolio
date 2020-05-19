import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.main`
  border: green solid 3px;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -3vh;
`
const About = styled.section`
border: orange solid 3px;

`
const Technical = styled.section`
border: blue solid 3px;

`
const Header = styled.h1`
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  text-decoration: underline;
  line-height: 1.6;
`

export default function AboutMe() {
  return (
    <>
      <AboutContainer>
        <About>
          <Header>About Me</Header>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore inventore non eius fugit qui, iusto magni nemo nisi blanditiis aperiam sequi reprehenderit minima pariatur quos ad sit accusamus aliquam voluptates.</p>
        </About>
        <Technical>
          <Header>Technical Utility Belt</Header>
        </Technical>
      </AboutContainer>
      
    </>
  )
}
