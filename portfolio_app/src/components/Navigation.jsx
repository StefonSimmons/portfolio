import React, { useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`
const NavItem = styled.li`
  padding: 10px;
  margin: 5px;
  // transform: skewY(11deg); 
  font-family: 'Permanent Marker', cursive;

`
const Nav = styled.nav`
  background-color: rgb(0,139,201);
  top: 0;
  width: 100%;
  margin-bottom: 0px

`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  letter-spacing: 3.5px;
  color: #e8eddf;
`


export default function Navigation() {

  // ====DELETE LATER ====//
  const navRef = useRef(null)
  // console.log('this here=>',navRef.current)
  // ====DELETE LATER ====//
  

  //for sticky header

  const [fixed, toggleFixed] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        toggleFixed(true)
      } else {
        toggleFixed(false)
      }
      console.log("use ->", fixed)
    })
  })

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
    // console.log('setState in useEffect->', tempLinkStore)
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
        {console.log(navRef)}

      <Nav ref= {navRef} style= {fixed ? { position: "fixed" } : { position: "" }}>
        {console.log("render", fixed)}

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
