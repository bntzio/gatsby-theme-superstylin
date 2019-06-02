import React from 'react'
import styled from 'styled-components'

import icon from '../assets/x-circle.svg'

export default ({ open }) => {
  return (
    <Modal>
      <Close onClick={() => open(false)}>
        <Icon icon={icon} />
      </Close>
      <Title>
        What is Superstylin?{' '}
        <span role={'img'} aria-label={'thinking'}>
          🤔
        </span>{' '}
      </Title>
      <Body>
        Superstylin is a Gatsby starter designed to get you up and running with styled-components{' '}
        <span role={'img'} aria-label={'nail_care'}>
          💅
        </span>{' '}
        Think of this starter as a step-stone for your next badass static site, and feel free to explore the project
        structure to tweak it for your own needs{' '}
        <span role={'img'} aria-label={'wink'}>
          😉
        </span>{' '}
      </Body>
      <List>
        <Text>Right now, Superstylin uses the following:</Text>
        <Item>Gatsby (of course)</Item>
        <Item>Styled Components (for styling)</Item>
        <Item>GraphQL (to fetch data)</Item>
        <Item>React Spring (for animations)</Item>
        <Item>React Helmet (to change the head dynamically)</Item>
        <Item>Prism (to highlight blocks of code)</Item>
        <Item>Prettier + Standard (for linting and formatting)</Item>
      </List>
    </Modal>
  )
}

const Modal = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  right: 5%;
  background: white;
  color: #666;
  padding: 3rem 4rem;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);

  @media (min-width: 768px) {
    top: 28%;
    left: 10%;
    right: 10%;
  }

  @media (min-width: 1024px) {
    top: 28%;
    left: 25%;
    right: 25%;
  }
`

const Title = styled.h5`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 2.4rem;

  span {
    font-size: 2.4rem;
  }
`

const Body = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  span {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const List = styled.div`
  margin-top: 2rem;
`

const Text = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const Item = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  &:last-child {
    margin: 0;
  }
`

const Close = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: ${props => `url(${props.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
