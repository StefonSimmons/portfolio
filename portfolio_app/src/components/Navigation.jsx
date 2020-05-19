import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: relative;
  transform: skewY(-11deg); 
  top: -19vh;
  // background-color: rgba(220,220,220,.2)
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
  return (
    <>
      <Nav>
        <List>
          <NavItems><NavLink>Contact</NavLink></NavItems>
          <NavItems><NavLink>Projects</NavLink></NavItems>
          <NavItems><NavLink>Resume</NavLink></NavItems>
        </List>
      </Nav>
    </>
  )
}
