import React from 'react'
import { DetailsHeader} from './Resume'
import { Block, Dates, FlexBlock, List, Phrase } from './Experience'
import styled from 'styled-components'
import educationData from '../../data/education-data.json'

const Location = Dates

const Confer = styled.h2`
  text-transform: none;
  padding-left: 5px
`
export default function Education() {

  const education = educationData.map(( ed, id ) => {
    return (
      <Block key={id}>
        <FlexBlock>
          <DetailsHeader>{ed.institution},</DetailsHeader>
          <Location>{ed.location}</Location>
        </FlexBlock>
      <List>
        <Phrase>{ed.major}</Phrase>
          {ed.GPA ?
            <Phrase>{ed.GPA}</Phrase> :
            null
          }
        <FlexBlock>
          <Phrase>{ed.award},</Phrase>
          <Confer>{ed.conferralDate}</Confer>
        </FlexBlock>
      </List>
    </Block>
    )
  })

  return (
    <>
      {education}
    </>
  )
}
