import React from 'react'
import { Header } from './AboutMe'
import project from '../data/projects.json'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 60px
`
const Prj = styled.div`
  background: #e8eddf; 
  width: 350px;
  padding: 15px 35px;
  margin: 0px 35px 50px 35px;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgb(20,20,20);
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Ubuntu Condensed', sans-serif;
  box-shadow: 0px 0px 15px rgb(250,150,0);
  // background-image: radial-gradient(rgb(250,150,0), rgba(250,150,0,.723445), rgba(250,150,0,.2225));
`
const PrjName = styled.h1`
  font-size: 24px;
`
const Thumbnail = styled.img`
  width: 350px;
  margin: 15px 0
`
const Description = styled.p`
  font-size: 18px;
  text-align: left;
  line-height: 1.5;
  margin-bottom: 15px
`
const List = styled.ul`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 9px
`
const HeaderTools = styled.h6`
  font-size: 18px;
  text-align: left;
  font-weight: 900;
  text-decoration: underline;
  margin-bottom: 10px;

`
const Tech = styled.li`
  line-height: 1.5;
  font-size: 16px;
`
export default function Projects() {

  const projects = project.map((p, id) => {
    return (
      <Prj key={id}>
        <PrjName>{p.name}</PrjName>
        <Thumbnail src={p.image} alt={p.name} />
        <Description>{p.description}</Description>
        <hr />
        <HeaderTools>Tech</HeaderTools>
        <List>
          {p.tech.map(tech =>
            <Tech>{tech}</Tech>
          )}
        </List>
        <hr />
        <a href={p.deployedURL}>Live</a>
        <a href={p.ghRepoURL}>GH</a>
      </Prj>
    )
  })

  return (
    <>
      <Header>My Projects</Header>
      <Main>
        {projects}
      </Main>
    </>
  )
}
