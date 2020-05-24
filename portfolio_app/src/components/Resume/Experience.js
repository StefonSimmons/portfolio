import React from 'react'
import Jobs from '../../data/experience-data'
import styled from 'styled-components'

const JobBlock = styled.div`
  margin-top: 20px
`
const JobTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`
const LongevityBlock = styled.div`
  display: flex;
`
const Business = styled.h2`
  text-transform: uppercase;
  padding-right: 5px
`
const Dates = styled.h2`
  text-transform: uppercase;
  padding-left: 5px
`
const List = styled.ul`
  margin-left: 18px;
  line-height: 1.4
`
const Phrase = styled.li`
  list-style-type: disc;
`

export default function Experience() {

  const experience = Jobs.map(job => {
    const phrasesArray = job.phrases.split(';')
    console.log(phrasesArray)
    return (
      <>
      <JobBlock>
        <JobTitle>{job.title}</JobTitle>
        <LongevityBlock>
          <Business>{job.business}</Business>
            |
          <Dates>{job.startDate} - {job.endDate}</Dates>
        </LongevityBlock>
        <List>
          {phrasesArray.map(phrase =>
            <Phrase>{phrase}</Phrase>
          )}
        </List>
      </JobBlock>

      </>
    )
  })

  return (
    <>
      {experience}
    </>
  )
}
