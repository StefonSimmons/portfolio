import React from 'react'
import { skills } from '../../data/skills-data.js'
import styled from 'styled-components'

const SkillsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin-top: 15px
`
const Skill = styled.h4`
  padding: 5px;
  font-size: 14px;
`

export default function Skills() {

  const skillset = skills.map(skill => {
    return (
      <Skill>{ skill }</Skill>
    )
  })

  return (
    <>
      <SkillsTable>
        {skillset}
      </SkillsTable>
    </>
  )
}
