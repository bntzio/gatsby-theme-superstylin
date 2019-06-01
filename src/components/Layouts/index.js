import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'

const TemplateWrapper = ({ children }) => (
  <Main>
    <Helmet
      title={'Superstylin | A Gatsby Starter with Style 🕶️'}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <Header>
      <h1>
        <Link to={'/'}>Superstylin'</Link>
      </h1>
      <h2>
        A <span>Gatsby Starter</span> with <span>Style</span>{' '}
        <span role={'img'} aria-label={'sunglasses'}>
          ️️🕶️
        </span>
      </h2>
    </Header>

    {children}

    <Footer>
      <p>
        Made by{' '}
        <a href={'https://twitter.com/bntzio'} target={'_blank'}>
          @bntzio
        </a>{' '}
        with{' '}
        <span role={'img'} aria-label={'heart'}>
          ❤️
        </span>
      </p>
    </Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

const Main = styled.main`
  padding: 0 1rem;
`

export default TemplateWrapper
