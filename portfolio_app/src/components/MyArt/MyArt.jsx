import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

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
  color: ${({ activeTab }) => activeTab ? '#a7a2a2' : 'rgb(82,150,250)'}
`
const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  // z-index: 0;

  @media(max-width: 470px){
    width: 300px;
  }
`
const Tab = styled.div`
  width: 50%;
  background-color: ${({ activeTab }) => activeTab ? 'grey' : '#e8eddf'};
  cursor: pointer;
  transform: ${({ activeTab }) => activeTab ? 'scale(.92)' : 'scale(1)'};
`


export default function MyArt({ changeRole }) {
  const history = useHistory();
  const [tabs, updateTabs] = useState({
    music: true,
    paint: false
  })

  useEffect(() => {
    if (window.location.pathname === '/myart') {
      changeRole('Artist')
    }
  
    return () => {
      changeRole('Software Engineer')
    }
  })

  useEffect(() => {
    if(window.location.search){
      updateTabs(() => {
        const tabName = window.location.search.match(/\?tab=(\w+)/)?.[1]
        return {
          music: false, 
          paint: false,
          [tabName]: true
        }
      }) 
    }
  }, [])

  const handleClick = (tabName) => {
    updateTabs({
      music: false,
      paint: false
    })
    updateTabs(prevTabs => ({
      ...prevTabs,
      [tabName]: !prevTabs[tabName]
    }))
    history.push(`/myart/?tab=${tabName}`)
  }

  return (
    <ArtContainer>
      <Header>My Art</Header>
      <Tabs>
        <Tab activeTab={tabs.music} onClick={() => handleClick('music')}>
          <Header activeTab={tabs.music}>Music</Header>
        </Tab>
        <Tab activeTab={tabs.paint} onClick={() => handleClick('paint')}>
          <Header activeTab={tabs.paint}>Painting</Header>
        </Tab>
      </Tabs>
      {tabs.music && <Music />}
      {tabs.paint && <Painting />}
    </ArtContainer>
  )
}
