import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu Condensed', sans-serif;
  height: 80vh;
`
const AboutSection = styled.section`
  margin: 0px 25px;
  width: 300px;
  padding: 10px 15px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`
export const Header = styled.h1`
  margin: 15px 0px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  line-height: 1.6;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: rgb(82,150,250)
`
const Statement = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #e8eddf
`
const Code = styled.span`
  background: #e8eddf;
  color: rgb(210, 40, 90);
  font-weight: 900;
  border-radius: 5px;
  padding: 3px;
  border: solid grey .5px
`
const TechSection = styled.section`
  margin: 0 35px;
  border-radius: 10px;
  padding: 5px;
  background: #e8eddf;
  z-index: 1
`
const ToolBelt = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`
const Icon = styled.i`
  font-size: 4.5em;
  padding: 10px;

  &:hover{
    border-radius: 10px;
    background-image: radial-gradient(rgb(100,150,250), rgba(100,150,250,.7), rgba(100,150,250,.2225));
    box-shadow: 0px 0px 50px rgb(100,150,250);
  }
`
export default function AboutMe() {


  return (
    <>
      <AboutContainer>

        <AboutSection>
          <Header>About Me</Header>
          <Statement>
            Welcome to my home online! <br></br><br></br>I’m a self-motivated artist and administrator. My creativity as an artist and organization as an administrator feed greatly into my passion for <Code>software development</Code>. <br></br><br></br> I consistently contribute strong problem-solving and interpersonal skills as well as an adaptive mindset for new processes and technology that improves productivity.
          </Statement>
        </AboutSection>

        <TechSection>
          <Header>Technical Utility Belt</Header>  
          <ToolBelt>
            <Icon className="devicon-react-plain-wordmark"></Icon>
            <Icon className="devicon-javascript-plain"></Icon>
            <Icon className="devicon-python-plain-wordmark"></Icon>
            <Icon className="devicon-html5-plain-wordmark"></Icon>
            <Icon className="devicon-css3-plain-wordmark"></Icon>
            <Icon className="devicon-nodejs-plain-wordmark"></Icon>
            <Icon className="devicon-express-original-wordmark"></Icon>
            <Icon className="devicon-mysql-plain-wordmark"></Icon>
            <Icon className="devicon-mongodb-plain-wordmark"></Icon>
            <Icon className="devicon-visualstudio-plain-wordmark"></Icon>
            <Icon className="devicon-git-plain-wordmark"></Icon>
            <Icon className="devicon-github-plain-wordmark"></Icon>
          </ToolBelt>
        </TechSection>

      </AboutContainer>
    </>
  )
}
