import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Post from '../components/Post'
import Layout from '../components/layouts/blog'

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

export default ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <Helmet title={post.frontmatter.title} />
      <Post postData={post} />
    </Layout>
  )
}
