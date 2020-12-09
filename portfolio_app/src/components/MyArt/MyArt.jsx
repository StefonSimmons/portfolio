import React, { useState, useEffect } from 'react'
import Music from './Music'
import Painting from './Painting'

import styled from 'styled-components'

export const ArtContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Ubuntu Condensed', sans-serif;
`

const Header = styled.h1`
  margin: 15px 0px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  line-height: 1.6;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: rgb(82,150,250)
`
const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
`
const Tab = styled.div`
  width: 50%;
  background-color: #e8eddf;
  border-left: ${({ barLeft }) => barLeft ? 'solid rgb(82,150,250) 2px' : null};
  cursor: pointer;

  &:active{
    transform: scale(.94)
  }
`


export default function MyArt({ changeRole }) {

  const [tabs, updateTabs] = useState({
    music: true,
    paint: false
  })

  useEffect(() => {
    if (window.location.pathname === '/myart') {
      changeRole('Singer')
    }
    return () => {
      changeRole('Software Engineer')
    }
  })

  const handleClick = (tabName) => {
    updateTabs({
      music: false,
      paint: false
    })
    updateTabs( prevTabs => ({
      ...prevTabs,
      [tabName]: !prevTabs[tabName]
    }))
  }

  return (
    <div>
      <ArtContainer>
        <Header>My Art</Header>
        <Tabs>
          <Tab onClick={()=> handleClick('music')}>
            <Header>Music</Header>
          </Tab>
          <Tab barLeft={true} onClick={()=> handleClick('paint')}>
            <Header>Painting</Header>
          </Tab>
        </Tabs>
        {tabs.music && <Music />}
        {tabs.paint && <Painting />}
      </ArtContainer>

    </div>
  )
}
