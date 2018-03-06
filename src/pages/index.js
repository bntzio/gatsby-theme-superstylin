import React from 'react'
import Link from 'gatsby-link'

import Menu from '../components/Menu'
import icon from '../assets/external-link.svg'

export default () => (
  <Menu>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li>
      <a href='https://github.com/bntzio/gatsby-starter-superstylin' target='_blank'>
        GitHub
      </a>
      <img id='external-link' src={icon} alt='External link icon' />
    </li>
  </Menu>
)
