import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Post from '../components/Post'

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Helmet title={post.frontmatter.title} />
      <Post postData={post} />
    </div>
  )
}
