import React from 'react'
import { skills } from '../../data/skills-data.js'

export default function Skills() {
  
  const skillset = skills.map(skill => {
    return (
      skill
    )
  })

  return (
    <>
      {skillset}
    </>
  )
}
