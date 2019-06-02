import React, { useState } from 'react'
import styled from 'styled-components'
import PrismCode from 'react-prism'

import Nav from './Nav'
import Modal from './Modal'

const links = [
  {
    id: 1,
    name: 'About',
    url: '/about'
  },
  {
    id: 2,
    name: 'Blog',
    url: '/blog'
  }
]

export default () => {
  const [modal, setModal] = useState(false)

  return (
    <Hero>
      <Nav links={links} setModal={setModal} />
      {modal ? <Modal open={setModal} /> : null}
      <Logo>
        <Title>Superstylin</Title>
        <Tagline>
          Where speed and design comes together{' '}
          <span role={'img'} aria-label={'zap'}>
            ⚡
          </span>
        </Tagline>
      </Logo>
      <Content>
        <Description>
          A Gatsby Starter with styled-components{' '}
          <span role={'img'} aria-label={'zap'}>
            💅
          </span>
        </Description>
        <Text>Build blazing fast websites with astonish design.</Text>
        <Install>{`~ gatsby new my-awesome-site https://github.com/bntzio/gatsby-starter-superstylin`}</Install>
        <InstallDesktop>
          <PrismCode component={'pre'} className={'language-bash'}>
            {`~ gatsby new my-awesome-site https://github.com/bntzio/gatsby-starter-superstylin`}
          </PrismCode>
        </InstallDesktop>
      </Content>
    </Hero>
  )
}

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  padding: 5rem 6rem;
  background-image: url(/assets/bg-circle-network.svg), linear-gradient(-135deg, #bf37ff 0, #ff6a85 50%, #fe9c5a 80%);
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 95%, cover;
  box-sizing: border-box;
  color: #fff;
  padding-top: 8rem;

  @media (min-width: 768px) {
    padding: 10rem 12rem;
    background-position: center;
  }
`

const Logo = styled.div`
  border: 3.7px solid white;
  align-self: center;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Noto Sans', sans-serif;
  margin-top: -1rem;
`

const Tagline = styled.em`
  font-size: 1.2rem;
`

const Content = styled.div`
  margin-top: 8rem;
`

const Description = styled.h2`
  font-size: 2.8rem;
  text-align: center;

  span {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3.4rem;

    span {
      font-size: 3.4rem;
    }
  }
`

const Text = styled.p`
  font-size: 1.8rem;
  margin-top: 0.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const Install = styled.div`
  margin-top: 5rem;
  font-size: 1.6rem;
  background: #272721;
  color: whitesmoke;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);
  font-family: 'Roboto Mono', monospace;

  @media (min-width: 768px) {
    display: none;
  }
`

const InstallDesktop = styled.div`
  display: none;
  justify-content: center;

  pre {
    display: inline-flex;
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
    box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    display: flex;
  }

  @media (min-width: 1024px) {
    pre {
      font-size: 1.4rem;
    }
  }
`
