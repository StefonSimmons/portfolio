import React from 'react'
import Jobs from '../../data/experience-data'



export default function Experience() {

  const experience = Jobs.map(job => {
    const phrasesArray = job.phrases.split('.')
    console.log(phrasesArray)
    return (
      <>
      <h1>{job.title}</h1>
      <div>
        <h2>{job.business}</h2>
          <h2>{job.startDate} - {job.endDate}</h2>
          <ul>
            {/* {job.phrases.map(phrase =>
              <li>{phrase}</li>
            )} */}
          </ul>
      </div>
      </>
    )
  })

  return (
    <>
      {experience}
      {console.log(typeof experience, Object.values(Jobs))}
    </>
  )
}
