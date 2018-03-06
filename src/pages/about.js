import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  p {
    margin: 0;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: red;
      text-decoration: none;
    }
  }
`

export default () => (
  <StyledAbout>
    <p>
      Superstylin is a <a href='https://www.gatsbyjs.org' target='_blank'>Gatsby</a> starter designed to get you up and running with <a href='https://www.styled-components.com' target='_blank'>styled-components</a> 💅<br />
      You can think of this starter as a super simple boilerplate for your next static site.<br />
      Feel free to explore the structure of this starter and tweak it for your own needs.
    </p>
  </StyledAbout>
)
