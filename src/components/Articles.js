import React from 'react'
import styled from 'styled-components'

import Article from './Article'

export default ({ articles }) => {
  return (
    <Articles>
      <Title>
        Gatsby + Styled Components ={' '}
        <span role={'img'} aria-label={'sparkling_heart'}>
          💖
        </span>
      </Title>
      <Content>
        {articles.map(({ node: article }) => {
          return <Article key={article.id} title={article.frontmatter.title} path={article.frontmatter.path} />
        })}
      </Content>
    </Articles>
  )
}

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 1300px;
`

const Content = styled.section`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    margin-top: 5.5rem;
  }
`

const Title = styled.h5`
  margin: 5rem;
  margin-top: 7rem;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-family: 'Noto Sans', sans-serif;

  span {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;

    span {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 4rem;

    span {
      font-size: 4rem;
    }
  }
`
