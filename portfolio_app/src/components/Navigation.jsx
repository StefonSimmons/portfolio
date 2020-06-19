import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const NavItem = styled.li`
  padding: 10px;
  margin: 0 5px;
  color: #e8eddf;

  &:hover{
    background: rgb(232, 237, 220);
    color: #111111;
  }
`
const Nav = styled.nav`
  background-color: rgb(0,39,101);
  top: 0;
  width: 100%;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  letter-spacing: 3.5px;
`


export default function Navigation() {


  const [fixed, toggleFixed] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        toggleFixed(true)
      } else {
        toggleFixed(false)
      }
    })
  }, [])

  // DYNAMIC NAVIGATION FUNCTIONALITY
  // const linkLookup = [
  //   { contact: "Contact Me" },
  //   { webapps: "Web Apps" },
  //   { resume: "Resume" },
  //   { about: "About Me" },
  //   { myart: "My Art" }
  // ]

  // const [tempLinkStore, setTempLink] = useState(window.location.pathname)

  // const [firstLink, updateLinkOne] = useState({ contact: "Contact Me" })
  // const [secondLink, updateLinkTwo] = useState({ webapps: "Web Apps" })
  // const [thirdLink, updateLinkThree] = useState({ resume: "Resume" })
  // const [fourthLink, updateLinkFour] = useState({ myart: "My Art" })

  // useEffect(() => {
  //   setTempLink(window.location.pathname)
  // }, [handleNewLink])

  // function handleNewLink(updateLink) {

  //   setTempLink(window.location.pathname)

  //   let pathKey = tempLinkStore.split('').slice(1).join('')
  //   const linkData = linkLookup.filter(l => Object.keys(l)[0] === pathKey)
  //   const linkName = Object.values(linkData[0])

  //   if (updateLink === "updateLinkOne") {
  //     updateLinkOne({ [pathKey]: linkName })
  //   }
  //   else if (updateLink === "updateLinkTwo") {
  //     updateLinkTwo({ [pathKey]: linkName })
  //   }
  //   else if (updateLink === "updateLinkThree") {
  //     updateLinkThree({ [pathKey]: linkName })
  //   }
  //   else {
  //     updateLinkFour({ [pathKey]: linkName })
  //   }
  // }
  // DYNAMIC NAVIGATION FUNCTIONALITY

  return (
    <>

      {/* <Nav style={fixed ? { position: "fixed" } : { position: "" }}>
        <List>
          <NavItem><NavLink to={`/${Object.keys(firstLink)}`} onClick={(e) => handleNewLink("updateLinkOne")}>{Object.values(firstLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(secondLink)}`} onClick={(e) => handleNewLink("updateLinkTwo")}>{Object.values(secondLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(thirdLink)}`} onClick={(e) => handleNewLink("updateLinkThree")}>{Object.values(thirdLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(fourthLink)}`} onClick={(e) => handleNewLink("updateLinkFour")}>{Object.values(fourthLink)}</NavLink></NavItem>
        </List>
      </Nav> */}

      <Nav style={fixed ? { position: "fixed" } : { position: "" }}>
        <List>
          <NavLink to={`/about`}><NavItem>About</NavItem></NavLink>

          <NavLink to={`/contact`}><NavItem>Contact Me</NavItem></NavLink>

          <NavLink to={`/webapps`}><NavItem>My Web Apps</NavItem></NavLink>

          <NavLink to={`/resume`}><NavItem>Resume</NavItem></NavLink>

          <NavLink to={`/myart`}><NavItem>My Art</NavItem></NavLink>
        </List>
      </Nav>

    </>
  )
}
