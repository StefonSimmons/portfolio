import React from 'react'
import { DetailsHeader } from './Resume'
import { Block, Dates, FlexBlock, List, Phrase } from './Experience'
import educationData from '../../data/education-data.json'

const Location = Dates

export default function Education() {

  const education = educationData.map((ed, id) => {
    return (
      <Block key={id}>
        <FlexBlock>
          <DetailsHeader>{ed.institution}</DetailsHeader>
          {ed.location ? <Location>{ed.location}</Location> :
            null
          }
        </FlexBlock>
        <List>
          <Phrase>{ed.major} | {ed.award}, {ed.conferralDate}</Phrase>
          {ed.major2 ? <Phrase>{ed.major2} | {ed.award2}, {ed.conferralDate2}</Phrase> :
            null
          }
          {ed.major3 ? <Phrase>{ed.major3} | {ed.award3}, {ed.conferralDate3}</Phrase> :
            null
          }
          {ed.major4 ? <Phrase>{ed.major4} | {ed.award4}, {ed.conferralDate4}</Phrase> :
            null
          }

          {ed.GPA ?
            <Phrase>{ed.GPA}</Phrase> :
            null
          }
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
