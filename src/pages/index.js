import React from 'react'
import { Link } from 'gatsby'

import Menu from '../components/Menu'
import icon from '../assets/external-link.svg'
import Layout from '../components/Layouts'

export default () => (
  <Layout>
    <Menu>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li>
        <a href={'https://github.com/bntzio/gatsby-starter-superstylin'} target={'_blank'}>
          GitHub
        </a>
        <img id={'external-link'} src={icon} alt={'External link icon'} />
      </li>
    </Menu>
  </Layout>
)
