import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ links }) => (
  <Nav>
    {links.map(link => (
      <StyledLink key={link.id} to={link.url}>
        {link.name}
      </StyledLink>
    ))}
  </Nav>
)

const Nav = styled.nav`
  position: absolute;
  top: 3rem;
  right: 3rem;
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  margin: 0 3rem;
  font-weight: 700;

  &:last-child {
    margin: 0;
  }
`
