import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nav = styled.nav`
  background-color: rgb(0,39,101);
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Hamburger = styled.span`
  display: none;
  color: #111111;

  @media(max-width: 700px){
    display: inline-block;
    cursor: pointer;
  }
`
const DropDownMenu = styled.div`
  display:flex;
  align-items: center;
  
  @media(max-width: 700px){
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  letter-spacing: 3.5px;

  @media(max-width: 750px){
    border-right: 2px #111111 solid;
    border-radius: 10px
  }
  @media(max-width: 700px){
    display: none;
    border-right: none;
  }
`
const NavItem = styled.li`
  padding: 10px;
  margin: 0 5px;
  color: #e8eddf;

  &:hover{
    background-color: rgb(232, 237, 220);
    color: #111111;
  }

  @media(max-width: 750px){
    &:hover{
      background-color: rgb(0,39,101);
      color: rgb(232, 237, 220);
    }
  }
`


export default function Navigation() {


  const [fixed, toggleFixed] = useState(false)
  const [menu, toggleMenu] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        toggleFixed(true)
      } else {
        toggleFixed(false)
      }
    })
  }, [])


  function toggleHamburgerMenu() {
    toggleMenu(!menu)
  }

  return (
    <>

      <Nav style={fixed ? { position: "fixed" } : { position: "" }}>
        <List>
          <DropDownMenu>
            <Hamburger onClick={toggleHamburgerMenu}>
              <i className="material-icons w3-xxxlarge">menu</i>
            </Hamburger>
            <NavLink to={`/about`} style={menu ? { display: 'block'} : { display: '' }}><NavItem>About</NavItem></NavLink>

            <NavLink to={`/contact`} style={menu ? { display: 'block'} : { display: '' }}><NavItem>Contact Me</NavItem></NavLink>

            <NavLink to={`/webapps`} style={menu ? { display: 'block'} : { display: '' }}><NavItem>My Web Apps</NavItem></NavLink>

            <NavLink to={`/resume`} style={menu ? { display: 'block'} : { display: '' }}><NavItem>Resume</NavItem></NavLink>

            <NavLink to={`/myart`} style={menu ? { display: 'block'} : { display: '' }}><NavItem>My Art</NavItem></NavLink>
          </DropDownMenu>
        </List>
      </Nav>

    </>
  )
}


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


{/* <Nav style={fixed ? { position: "fixed" } : { position: "" }}>
        <List>
          <NavItem><NavLink to={`/${Object.keys(firstLink)}`} onClick={(e) => handleNewLink("updateLinkOne")}>{Object.values(firstLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(secondLink)}`} onClick={(e) => handleNewLink("updateLinkTwo")}>{Object.values(secondLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(thirdLink)}`} onClick={(e) => handleNewLink("updateLinkThree")}>{Object.values(thirdLink)}</NavLink></NavItem>

          <NavItem><NavLink to={`/${Object.keys(fourthLink)}`} onClick={(e) => handleNewLink("updateLinkFour")}>{Object.values(fourthLink)}</NavLink></NavItem>
        </List>
      </Nav> */}