import React from 'react'
import project from '../projects.json'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: center;
`
const Prj = styled.div`
  background: rgba(3,3,3,.4); 
  width: 350px;
  padding: 15px 35px;
  margin: 0 35px;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgb(20,20,20);
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Ubuntu Condensed', sans-serif;
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
`


export default function Projects() {

  const projects = project.map((p, id) => {
    return (
      <Prj>
        <PrjName>{p.name}</PrjName>
        <Thumbnail src={p.image} alt={p.name} />
        <Description>{p.description}</Description>
      </Prj>
    )
  })

  return (
    <Main>
      {projects}
    </Main>
  )
}
