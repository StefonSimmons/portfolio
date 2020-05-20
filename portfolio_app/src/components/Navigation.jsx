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
  // const [link, updateLink] = useState([
  //   { contact: "Contact Me" },
  //   { projects: "Projects" },
  //   { resume: "Resume" },
  //   { about: "About Me"}

  // ])

  // i click on project and it shows project and changes to the name of the page I was just on
  // HOW?
  //click on project. Apply a onClick on each Link. ** DONE
  // HOW DO I change the state of the specific link
  //update state to window.location.pathname to grab the pathname(/about)which excludes the '/ on path'

  const [firstLink, updateLinkOne] = useState({ contact: "Contact Me" })
  const [secondLink, updateLinkTwo] = useState({ projects: "Projects" })
  const [thirdLink, updateLinkThree] = useState({ resume: "Resume" })
  const [tempLinkStore, setTempLink] = useState(window.location.pathname)
  
  function handleNewLink(num, key, value) {
    // console.log(value[0])
    const linkKey = key[0]
    // console.log(linkKey)
    const linkValue = value[0]
    // console.log(linkValue)
    // const updateLink = 'updateLink' + num
    // console.log(updateLink)
    updateLinkOne({ [linkKey]: linkValue})

    console.log(firstLink)
    // setTempLink(window.location.pathname)
  }



  return (
    <>
      <Nav>
        <List>
          <NavItems><NavLink to={`/${Object.keys(firstLink)}`} value={Object.values(firstLink)} onClick={(e) => handleNewLink("One", Object.keys(firstLink),Object.values(firstLink ))}>{Object.values(firstLink)}</NavLink></NavItems>
          
          <NavItems><NavLink to={`/${Object.keys(secondLink)}`} value={Object.values(secondLink)} onClick={(e) => handleNewLink("Two", Object.keys(secondLink),Object.values(secondLink))}>{Object.values(secondLink)}</NavLink></NavItems>
          
          <NavItems><NavLink to={`/${Object.keys(thirdLink)}`} value= {Object.values(thirdLink)} onClick= {(e) => handleNewLink("Three", Object.keys(thirdLink),Object.values(thirdLink))}>{Object.values(thirdLink)}</NavLink></NavItems>
        </List>
      </Nav>
      {tempLinkStore}
    </>
  )
}
