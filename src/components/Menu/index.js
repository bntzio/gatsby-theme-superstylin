import React from 'react'
import styled from 'styled-components'

export default ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>
}

const StyledMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  li {
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 600;
    &:nth-child(even) {
      margin: 0.6rem 0;
    }
    &:last-child {
      margin-left: 10px;
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
    img#external-link {
      color: red;
      width: 11px;
      height: 11px;
      display: inline-block;
      margin-bottom: 6px;
      margin-left: 4px;
    }
  }
  a {
    color: red;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
