import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import GitHubButton from 'react-github-btn'

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

export default ({ children }) => (
  <>
    <Helmet>
      <title>{`Superstylin | A Gatsby Theme with styled-components`}</title>
      <link
        rel={'stylesheet'}
        href={
          'https://fonts.googleapis.com/css?family=Lato:400|700|Noto+Sans:700|Roboto+Mono:500&display=swap'
        }
      />
    </Helmet>
    <GlobalStyle />
    {children}
    <GitHub>
      <GitHubButton
        href={'https://github.com/bntzio/gatsby-theme-superstylin'}
        data-size={'large'}
        data-show-count={'true'}
        aria-label={'Star bntzio/gatsby-theme-superstylin on GitHub'}
      >
        Star
      </GitHubButton>
    </GitHub>
  </>
)

const GitHub = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`
