import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: relative;
  transform: skewY(-11deg); 
  top: -19vh;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

`
const NavItems = styled.li`
  padding: 15px;
  margin: 15px;
  transform: skewY(11deg); 
  font-family: 'Permanent Marker', cursive;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  letter-spacing: 3.5px;
  color: rgb(67, 24, 120)
`


export default function Navigation() {

  // STATELY UseState for dynamic nav bar 

  //for the windowpath search/ filter
  const linkLookup = [
    { contact: "Contact Me" },
    { projects: "Projects" },
    { resume: "Resume" },
    { about: "About Me"}
  ]

  const [tempLinkStore, setTempLink] = useState(window.location.pathname)


  const [firstLink, updateLinkOne] = useState({ contact: "Contact Me" })
  const [secondLink, updateLinkTwo] = useState({ projects: "Projects" })
  const [thirdLink, updateLinkThree] = useState({ resume: "Resume" })
  
  function handleNewLink(command) {

    setTempLink(window.location.pathname)
    console.log(tempLinkStore)

    let pathKey = tempLinkStore.split('').slice(1).join('')
    console.log(pathKey)
    if (pathKey === '') {
      pathKey = 'about'
    }
    console.log('after path ->',pathKey)
    const linkData = linkLookup.filter(l => Object.keys(l)[0] === pathKey)
    const linkName = Object.values(linkData[0])
    console.log(linkName)


    if (command === "updateLinkOne") {
      // console.log({[linkKey]:linkValue})
      updateLinkOne({ [pathKey]: linkName })
    }
    else if (command === "updateLinkTwo") {
      // console.log({[pathKey]:linkName})
      updateLinkTwo({ [pathKey]: linkName })
    }
    else {
      updateLinkThree({ [pathKey]: linkName })
    }
  }


  return (
    <>
      <Nav>
        <List>
          <NavItems><NavLink to={`/${Object.keys(firstLink)}`} onClick={(e) => handleNewLink("updateLinkOne")}>{Object.values(firstLink)}</NavLink></NavItems>
          
          <NavItems><NavLink to={`/${Object.keys(secondLink)}`} onClick={(e) => handleNewLink("updateLinkTwo")}>{Object.values(secondLink)}</NavLink></NavItems>
          
          <NavItems><NavLink to={`/${Object.keys(thirdLink)}`} onClick= {(e) => handleNewLink("updateLinkThree")}>{Object.values(thirdLink)}</NavLink></NavItems>
        </List>
      </Nav>
      {tempLinkStore}
    </>
  )
}
