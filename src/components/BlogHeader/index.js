import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: red;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: italic;
    border-bottom: 4px solid red;
    display: inline-flex;
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: red;
      text-decoration: none;
      &:hover {
        color: white;
        background: red;
      }
    }
  }
`

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header
