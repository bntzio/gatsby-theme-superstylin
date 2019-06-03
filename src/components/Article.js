import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ title, path }) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Article>
      <Poster />
      <Content>
        <Title>{title}</Title>
        <Summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Summary>
      </Content>
    </Article>
  </Link>
)

const Article = styled.div`
  display: flex;
  flex-direction: column;
  height: 33.33rem;
  width: 33.33rem;
  background: white;
  word-wrap: break-word;
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(51, 51, 51, 0.25);
  margin: 1.5rem;
  align-items: center;
`

const Poster = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/assets/photo.jpg');
  background-position: center;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 1rem 2rem 3rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
`

const Title = styled.h3`
  font-size: 2rem;
  color: #222;
  margin-bottom: 1rem;
`

const Summary = styled.p`
  font-size: 1.5rem;
  color: #555;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
