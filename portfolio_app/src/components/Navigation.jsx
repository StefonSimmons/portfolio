import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: relative;
  transform: skewY(-11deg); 
  top: -20vh;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

`
const NavItems = styled.li`
  padding: 15px;
  transform: skewY(11deg); 

`


export default function Navigation() {
  return (
    <>
      <Nav>
        <List>
          <NavItems><Link>Contact</Link></NavItems>
          <NavItems><Link>Projects</Link></NavItems>
          <NavItems><Link>Resume</Link></NavItems>
        </List>
      </Nav>
    </>
  )
}
