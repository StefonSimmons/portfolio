import React from 'react'
import Jobs from '../../data/experience-data'
import {DetailsHeader} from './Resume'
import styled from 'styled-components'

export const Block = styled.div`
  margin-top: 20px
`
export const FlexBlock = styled.div`
  display: flex;
`
const Business = styled.h2`
  text-transform: uppercase;
  padding-right: 5px
`
export const Dates = styled.h2`
  text-transform: uppercase;
  padding-left: 5px
`
export const List = styled.ul`
  margin-left: 18px;
  line-height: 1.4
`
export const Phrase = styled.li`
  list-style-type: disc;
`

export default function Experience() {

  const experience = Jobs.map((job, idx) => {
    const phrasesArray = job.phrases.split(';')
    return (
      <>
      <Block keyid={`${1}${idx}`}>
        <DetailsHeader>{job.title}</DetailsHeader>
        <FlexBlock>
          <Business>{job.business}</Business>
            |
          <Dates>{job.startDate} - {job.endDate}</Dates>
        </FlexBlock>
        <List>
          {phrasesArray.map((phrase,id) =>
            <Phrase key={id}>{phrase}</Phrase>
          )}
        </List>
      </Block>

      </>
    )
  })

  return (
    <>
      {experience}
    </>
  )
}
