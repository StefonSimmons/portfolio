import React from 'react'
import axios from 'axios'
import { Header } from './AboutMe'
import styled from 'styled-components'
import { useEffect,useState } from 'react'


const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px
`
const Apps = styled.div`
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
  padding: 0px;
  margin: 0px 35px 50px 35px;
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Ubuntu Condensed', sans-serif;
  
  @media(max-width: 455px){
    width: 319px;
    padding: 15px 0px;
  }
`
const PrjName = styled.h1`
  font-size: 24px;
`
const Thumbnail = styled.img`
  width: 100%;
  height: 250px;
  margin: 0 0 15px 0;

  @media(max-width: 455px){
    width: 319px;
  }
`
const Description = styled.p`
  font-size: 18px;
  text-align: left;
  line-height: 1.5;
  margin: 0 35px;

  @media(max-width: 455px){
    padding: 10px;
  }
`
const List = styled.ul`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 9px;
  margin: 0 35px 15px 35px;

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
  background: black;
  margin: 15px;

  @media(max-width: 455px){
    width: 300px;
    margin: 0 auto;
  }
`
const FilterContainer = styled.section`
  width: 75vw;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, 1fr);
  margin-bottom: 32px
`
const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`
const Label = styled.label`
  font-family: 'Ubuntu Condensed', sans-serif;
  text-transform: uppercase;
  color: #e8eddf;
  padding-right: 8px;
  cursor: pointer
`
  const Checkbox = styled.input`
  cursor: pointer;
  &:checked{
    appearance: none;
    height: 13px;
    width: 13px;
    border-radius: 2px;
    border: 1px solid #e8eddf;
    background-color: rgb(82,150,250);
  }
`
const ClearBtn = styled.button`
  font-family: 'Ubuntu Condensed', sans-serif;
  border-radius: 4px;
  margin-top: 4px;
  border: 1px solid #e8eddf;
  background-color: #e8eddf; 
  transition: all .2s;
  &:hover{
    background-color: rgb(0,39,101);
    border: 1px solid rgb(0,39,101) ;
    color: #e8eddf;
  }
`
export default function Projects() {

  const [airProjects, updateAirProjects] = useState(null)
  const [queriedProjects, updateQueriedProjects] = useState(null)
  const [airTech, updateAirTech] = useState(null)
  const [isChecked, updateChecked] = useState(null)

  useEffect(() => {
    const getProjects = async () => {
      const config = {
        headers:{
          "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      }
      const projRes = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/projects`, config)
      updateAirProjects(projRes.data.records)
      
      const techRes = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/tech`, config)
      updateAirTech(techRes.data.records)      
    }
    getProjects()
  }, [])

  useEffect(() => {
    if(airTech){
      clearFilters()
    }
  }, [airTech])

  useEffect(() => {
    if(isChecked){
      const chosenTech = Object.entries(isChecked).reduce((acc, curr) => {
        if(curr[1]){acc.push(curr[0])}
        return acc
      }, [])

      const chosenProjects = airProjects.filter(prj => {
        const everArr = chosenTech.every((tech) => {
          return prj.fields?.tech.split(';').includes(tech)
        })
        if(everArr){
          return prj
        }
      })

      updateQueriedProjects(chosenProjects.length && chosenProjects)
    }
  }, [isChecked])

  const handleChange = (techName) => {
    updateChecked(prevChecked => ({
      ...prevChecked,
      [techName]: !prevChecked[techName]
    }))
  }

  function clearFilters () {
    const techEntries = airTech?.map(tech => [tech.fields.name, false])
    const techObj = Object.fromEntries(techEntries)
    updateChecked(techObj)
  }

  const technologiesJSX = airTech?.map((tech, idx) => {
    const techName = tech.fields?.name
    return(
      <Option key={idx}>
        <Label htmlFor={`tech-${idx}`}>{techName}</Label>
        <Checkbox 
          type="checkbox" 
          name={techName} 
          id={`tech-${idx}`} 
          checked={isChecked && isChecked[techName]}
          onChange={() => handleChange(techName)}
          />
      </Option>
    )})

  const projectsJSX = (queriedProjects || airProjects)?.map((project, id) => {
    return (
      project.fields.isLive && <Prj key={id}>
        <a href={project.fields.deployedURL} target='_blank' rel="noopener noreferrer">
          <Thumbnail src={project.fields.image} alt={project.fields.name} />
        </a>
        <PrjName>{project.fields.name}</PrjName>
        <SiteContainer>
          {project.fields.deployedURL ?
            <Site href={project.fields.deployedURL} target='_blank' rel="noopener noreferrer">Live</Site>
            :
            null
          }
          <Site href={project.fields.ghRepoURL} target='_blank' rel="noopener noreferrer">Github</Site>
        </SiteContainer>
        <Divider />
        <Description>{project.fields.description}</Description>
        <Divider />
        <HeaderTools>Tech</HeaderTools>
        <List>
          {project.fields.tech?.split(';').map((tech,idx) =>
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
        <FilterContainer>
          {technologiesJSX}
          <ClearBtn onClick={clearFilters}>Clear All</ClearBtn>
        </FilterContainer>
        <Apps>
          {projectsJSX}
        </Apps>
      </Main>
    </>
  )
}
