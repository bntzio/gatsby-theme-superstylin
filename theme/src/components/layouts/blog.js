import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import Logo from '../Logo'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
`

export default ({ children, location }) => (
  <Main>
    <Helmet>
      <title>Superstylin | Gatsby + styled-components articles</title>
      <link
        rel={'stylesheet'}
        href={
          'https://fonts.googleapis.com/css?family=Lato:400|700|Noto+Sans:700|Roboto+Mono:500&display=swap'
        }
      />
    </Helmet>
    <GlobalStyle />
    <LogoContainer>
      <Logo withBg location={location} />
    </LogoContainer>
    {children}
  </Main>
)

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(
    -135deg,
    #bf37ff 0,
    #ff6a85 50%,
    #fe9c5a 80%
  );
  padding: 3rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`
