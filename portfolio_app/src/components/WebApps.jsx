import React from 'react'
import { Header } from './AboutMe'
import project from '../data/projects.json'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px
`
const Prj = styled.div`
  display: flex;
  flex-direction: column;
  jusitfy-content: flex-end;
  background: #e8eddf;
  width: 450px;
  padding: 15px 35px;
  margin: 0px 35px 50px 35px;
  border-radius: 10px;
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Ubuntu Condensed', sans-serif;
  box-shadow: 0px 0px 15px rgb(250,150,0);
  
  @media(max-width: 455px){
    width: 319px;
    padding: 15px 0px;
  }
`
const PrjName = styled.h1`
  font-size: 24px;
`
const Thumbnail = styled.img`
  width: 350px;
  margin: 15px 0;

  @media(max-width: 455px){
    width: 319px;
  }
`
const Description = styled.p`
  font-size: 18px;
  text-align: left;
  line-height: 1.5;

  @media(max-width: 455px){
    padding: 10px;
  }
`
const List = styled.ul`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 9px;

  @media(max-width: 455px){
    padding: 10px;
    grid-template-columns: repeat(1, auto);
    row-gap: 15px;
    column-gap: 5px;
    text-align: center;
  }
`
const HeaderTools = styled.h6`
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  text-decoration: underline;
  margin-bottom: 10px;

  @media(max-width: 455px){
    margin: 10px 0;
  }
`
const Tech = styled.li`
  line-height: 1.5;
  font-size: 16px;

`
const SiteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto 0

`
const Site = styled.a`
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  color: black;
  background: #d7dcce;  
  border: solid 1px grey;
  border-radius: 5px;
  padding: 5px 15px;
  align-self: flex-end;
  margin: 35px;

  &:hover{
    background: #c6cbbd;  
  }
`
const Divider = styled.hr`
  background:black;
  margin: 15px;
  width: 100%;

  @media(max-width: 455px){
    width: 300px;
    margin: 0 auto;
  }
`
export default function Projects() {

  const projects = project.map((p, id) => {
    return (
      <Prj key={id}>
        <PrjName>{p.name}</PrjName>
        <a href={p.deployedURL} target='_blank' rel="noopener noreferrer">
          <Thumbnail src={p.image} alt={p.name} />
        </a>
        <SiteContainer>
          {p.deployedURL ?
            <Site href={p.deployedURL} target='_blank' rel="noopener noreferrer">Live</Site>
            :
            null
          }
          <Site href={p.ghRepoURL} target='_blank' rel="noopener noreferrer">Github</Site>
        </SiteContainer>
        <Divider />
        <Description>{p.description}</Description>
        <Divider />
        <HeaderTools>Tech</HeaderTools>
        <List>
          {p.tech.map((tech,idx) =>
            <Tech key={idx}>{tech}</Tech>
          )}
        </List>
      </Prj>
    )
  })

  return (
    <>
      <Header>My Web Apps</Header>
      <Main>
        {projects}
      </Main>
    </>
  )
}
