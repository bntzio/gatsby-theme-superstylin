import React from 'react'
import styled from 'styled-components'

import gif from '../assets/404.gif'

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 2rem;
    font-size: 1.1rem;
    font-family: 'Poppin', sans-serif;
    font-weight: 600;
    color: #1d1d1d;
    @media (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
  img {
    width: 38rem;
    border: 4px solid #FEC83E;
    border-radius: 4px;
    margin-bottom: 2rem;
    width: 50%;
    max-width: 30rem;
    min-width: 15rem;
  }
`

export default () => (
  <Styled404>
    <p>Yikes! This page doesn't exist! 😬</p>
    <img src={gif} />
  </Styled404>
)
