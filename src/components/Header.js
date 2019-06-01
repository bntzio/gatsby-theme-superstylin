import React from 'react'
import styled from 'styled-components'

export default ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

const StyledHeader = styled.div`
  margin-top: 4rem;
  text-align: center;
  h1 {
    color: red;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: italic;
    border-bottom: 4px solid red;
    display: inline-flex;
    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
    a {
      transition: all 0.3s ease-in-out;
      color: red;
      text-decoration: none;
      padding: 0 8px;
      &:hover {
        color: white;
        background: red;
      }
    }
  }
  h2 {
    position: relative;
    margin: 0;
    margin-left: -1.6rem;
    margin-top: -0.8rem;
    color: #1a1a1a;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    span {
      color: red;
    }
    i {
      position: absolute;
      font-size: 1.4rem;
      margin-top: -4px;
      margin-left: 4px;
    }
  }
`
