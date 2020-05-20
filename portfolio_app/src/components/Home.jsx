import React from 'react'
import {Redirect} from 'react-router-dom'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Redirect to='/about'/>
    </div>
  )
}
