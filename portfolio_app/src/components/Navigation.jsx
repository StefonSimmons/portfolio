import React from 'react'
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


  return (
    <>
      <Nav>
        <List>
          <NavItems><NavLink to='/contact-me'>Contact Me</NavLink></NavItems>
          <NavItems><NavLink to='/projects'>Projects</NavLink></NavItems>
          <NavItems><NavLink to='/'>Resume</NavLink></NavItems>
        </List>
      </Nav>
    </>
  )
}
