import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import BlogHeader from '../BlogHeader'

const Main = styled.main`
  padding: 0 1rem;
`

const TemplateWrapper = ({ children, location }) => (
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
    <BlogHeader>
      <h1>
        <Link to={location.pathname === '/blog' ? '/' : '/blog'}>Superstylin'</Link>
      </h1>
    </BlogHeader>

    {children}
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
