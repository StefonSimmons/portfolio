import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Ubuntu Condensed', sans-serif;
`
const AboutSection = styled.section`
  width: 600px;
  padding: 10px 15px 0 15px;
  letter-spacing: 1.5px;
  line-height: 1.5;

  @media(max-width: 620px){
    width: 500px
  }

  @media(max-width: 515px){
    width: 300px
  }
`
export const Header = styled.h1`
  margin: 15px 0px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  line-height: 1.6;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: rgb(82,150,250);

  @media(max-width: 620px){
    font-size: 28px;
  }
`
const Statement = styled.p`
  font-size: 23px;
  text-align: center;
  margin-bottom: 20px;
  color: #e8eddf;

  @media(max-width: 620px){
    font-size: 18px
  }

  @media(max-width: 515px){
    font-size: 18px
  }
`
const Code = styled.span`
  background: #e8eddf;
  color: rgb(210, 40, 90);
  font-weight: 900;
  border-radius: 5px;
  padding: 3px 6px;
  border: solid grey .5px
`
const Linked = styled(Link)`
  background: #e8eddf;
  color: rgb(0,150,250);
  text-decoration: none;
  font-weight: 900;
  border-radius: 5px;
  padding: 3px;
  border: solid grey .5px
`
const ArtLink = styled(Link)`
  background: #e8eddf;
  color: rgb(200,100,0);
  text-decoration: none;
  font-weight: 900;
  border-radius: 5px;
  padding: 3px;
  border: solid grey .5px
`
const TechSection = styled.section`
  margin: 1em 0 8em 0;
  border-radius: 10px;
  padding: 5px;
  background: #e8eddf;
`
const ToolBelt = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 35px;

  @media(max-width: 620px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 515px){
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    grid-gap: 15px;
  }
`
const Icon = styled.i`
  font-size: 3.25em;
  padding: 10px;

  &:hover{
    border-radius: 10px;
    background-image: radial-gradient(rgb(100,150,250), rgba(100,150,250,.7), rgba(100,150,250,.2225));
    box-shadow: 0px 0px 50px rgb(100,150,250);
  }
`
const Divider = styled.hr`
  margin: 15px;
  width: 8%
`

export default function AboutMe() {


  return (
    <>
      <AboutContainer>

        <AboutSection>
          <Header>About Me</Header>
          <Statement>
            Welcome to my home online! <br></br><br></br>I’m a self-motivated artist and administrator. My creativity as an <ArtLink to='/myart'>artist</ArtLink> and organizational skills as an administrator are reasons why I thrive within <br></br><Link to='/webapps'><Code>software development</Code></Link>. <br></br><br></br> People I've collaborated with say that I'm a strong problem-solver, creative and ambitious. I have an adaptive mindset for new processes and technology.<br></br><br></br>So, feel free to <Linked to='/contact'>Reach Out</Linked> so we can work together on your project / goals!
          </Statement>
        </AboutSection>
        <Divider />
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
            <Icon className="devicon-postgresql-plain-wordmark"></Icon>
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
