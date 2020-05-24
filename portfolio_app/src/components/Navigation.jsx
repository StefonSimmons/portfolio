import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: relative;
  background-color: rgb(100,150,250);
  // position: fixed;
  top: 0;
  width: 100%
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const NavItem = styled.li`
  padding: 15px;
  margin: 15px;
  transform: skewY(11deg); 
  font-family: 'Permanent Marker', cursive;

`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  letter-spacing: 3.5px;
  color: #e8eddf;
`


export default function Navigation() {

  //for the windowpath search/filter
  const linkLookup = [
    { contact: "Contact Me" },
    { projects: "Projects" },
    { resume: "Resume" },
    { about: "About Me" }
  ]

  const [tempLinkStore, setTempLink] = useState("/about")


  const [firstLink, updateLinkOne] = useState({ contact: "Contact Me" })
  const [secondLink, updateLinkTwo] = useState({ projects: "Projects" })
  const [thirdLink, updateLinkThree] = useState({ resume: "Resume" })

  useEffect(() => {
    setTempLink(window.location.pathname)
    console.log('setState in useEffect->', tempLinkStore)
  },[handleNewLink])

  function handleNewLink(command) {

    setTempLink(window.location.pathname)
    // console.log('setState top of func ->', tempLinkStore)

    let pathKey = tempLinkStore.split('').slice(1).join('')
    // console.log('1 pathkeyname created ->', pathKey)
    const linkData = linkLookup.filter(l => Object.keys(l)[0] === pathKey)
    const linkName = Object.values(linkData[0])
    // console.log('1linkname filtered', linkName)

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

  // CHANGE OBJECT NAMES BELOW TO SYMANTIC NAMES

  return (
    <>
      <Nav>
        <List>
          <NavItem><NavLink to={`/${Object.keys(firstLink)}`} onClick={(e) => handleNewLink("updateLinkOne")}>{Object.values(firstLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(secondLink)}`} onClick={(e) => handleNewLink("updateLinkTwo")}>{Object.values(secondLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(thirdLink)}`} onClick={(e) => handleNewLink("updateLinkThree")}>{Object.values(thirdLink)}</NavLink></NavItem>
        </List>
      </Nav>
      {/* {console.log('in return ->', tempLinkStore)} */}
      {/* {tempLinkStore} */}
    </>
  )
}
