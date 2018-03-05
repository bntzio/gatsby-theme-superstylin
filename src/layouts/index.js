import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Header = () => (
  <div style={{ background: 'rebeccapurple', marginBottom: '1.45rem' }}>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem' }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Gatsby</Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
