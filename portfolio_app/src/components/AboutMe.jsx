import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import stefonProfile from '../images/stefon.jpg'

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
  // color: rgb(82,150,250);
  color:  #e8eddf;
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
  grid-template-columns: repeat(5, 1fr);
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

  const [years, setYears] = React.useState()
  React.useEffect(() => {
    
    setYears(getYear())
  }, [])

  function getYear(){
    // gets the number of years from my start date at datadog.
    const startDate = new Date('9/13/2021')
    const today = new Date()
    const timeDiff = Math.abs(today - startDate)
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    const numOfYears = dayDiff / 365
    const whole = Math.floor(numOfYears)
    const mod = numOfYears % whole
    return whole + (mod >= .5 && .5 )
  }

  return (
    <>
      <AboutContainer>
        <AboutSection>
          <Header>About Me</Header>
          <Statement>
            Welcome to my home online! <br></br><br></br>I’m a multifaceted professional with a decade-long career trajectory encompassing roles in <Link to='/webapps'><Code>website development</Code></Link>, education, and the arts. <br></br><br></br>My journey consists of 6.5 years as a Registrar at a post-secondary school for film and television, followed by a year as a Software Engineer Instructor at a distinguished software engineering bootcamp. Over the last {years} years, I’ve been a valued Web Developer on Datadog's Websites Team, leveraging my expertise in JavaScript, HTML, CSS, and API integrations.<br></br><br></br>Beyond the tech realm, I bring an artistic touch to my initiatives as a <ArtLink to='/myart'>singer, songwriter and painter</ArtLink>. This combination of technical proficiency and creative flair enables me to hone my skills in versatile problem-solving. <br></br><br></br> People I've collaborated with say that I'm a strong problem-solver, who demonstrates initiative, and pays close attention to detail. I have an adaptive mindset for new processes and love to create.<br></br><br></br>Let's <Linked to='/contact'>connect</Linked> and expand our network!
          </Statement>
        </AboutSection>
        <Divider />
        <TechSection>
          <Header style={{color: 'rgb(82,150,250)'}}>Technical Utility Belt</Header>
          <ToolBelt>
            <Icon className="devicon-javascript-plain"></Icon>
            <Icon className="devicon-python-plain-wordmark"></Icon>
            <Icon className="devicon-ruby-plain"></Icon>
            <Icon className="devicon-html5-plain-wordmark"></Icon>
            <Icon className="devicon-css3-plain-wordmark"></Icon>
            <Icon className="devicon-react-plain-wordmark"></Icon>
            <Icon className="devicon-nodejs-plain-wordmark"></Icon>
            <Icon className="devicon-express-original-wordmark"></Icon>
            <Icon className="devicon-postgresql-plain-wordmark"></Icon>
            <Icon className="devicon-visualstudio-plain-wordmark"></Icon>
          </ToolBelt>
        </TechSection>

      </AboutContainer>
    </>
  )
}
