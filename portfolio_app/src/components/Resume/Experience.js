import React from 'react'
import Jobs from '../../data/experience-data'


export default function Experience() {
  return (
    <div>
      {Object.values(Jobs[1])}
      {console.log(typeof Object.values(Jobs))}
    </div>
  )
}
