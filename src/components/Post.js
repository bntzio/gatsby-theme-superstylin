import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export default ({ postData }) => {
  const { html, frontmatter } = postData
  const m = moment(frontmatter.date, 'YYYY MM DD')

  return (
    <Post>
      <Title>{frontmatter.title}</Title>
      <PostDate>Published on {m.format('MMM Do YYYY')}</PostDate>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  )
}

const Post = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-bottom: 10rem;
  width: 100%;
  box-sizing: border-box;
  background: white;
  max-width: 1200px;
  align-self: center;
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(51, 51, 51, 0.25);
`

const Title = styled.h1`
  margin-top: 1rem;
  color: #444;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 2.4rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const PostDate = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: #999;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const Body = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: 3rem;

  p {
    color: #666;
    font-size: 1.7rem;
    line-height: 3.2rem;
  }

  @media (min-width: 768px) {
    width: 80%;

    p {
      font-size: 2rem;
      line-height: 3.8rem;
    }
  }

  @media (min-width: 1024px) {
    width: 60%;

    p {
      font-size: 2rem;
      line-height: 3.6rem;
    }
  }
`
