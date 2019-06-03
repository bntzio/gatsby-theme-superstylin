import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const bg = 'url(/assets/bg-circle-network.svg), linear-gradient(-135deg, #bf37ff 0, #ff6a85 50%, #fe9c5a 80%)'

const createNewPath = location => {
  if (!location || location.pathname === '/blog') {
    return '/'
  }

  return '/blog'
}

export default ({ withBg, location }) => (
  <Wrapper>
    <Link to={createNewPath(location)} style={{ textDecoration: 'none' }}>
      <Logo withBg={withBg}>
        <Title withBg={withBg}>Superstylin</Title>
        {!withBg ? (
          <Tagline>
            Where speed and design comes together{' '}
            <span role={'img'} aria-label={'zap'}>
              ⚡
            </span>
          </Tagline>
        ) : null}
      </Logo>
    </Link>
  </Wrapper>
)

const Wrapper = styled.div`
  align-self: center;
`

const Logo = styled.div`
  border: 3.7px solid white;
  padding: 2rem;
  background-image: ${props => (props.withBg ? bg : null)};
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 95%, cover;
  color: white;
`

const Title = styled.h1`
  font-size: ${props => (props.withBg ? '3rem' : '4rem')};
  font-family: 'Noto Sans', sans-serif;
  margin-top: ${props => (props.withBg ? '-0.5rem' : '-1rem')};
`

const Tagline = styled.em`
  font-size: 1.2rem;
`
