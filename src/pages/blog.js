import React from 'react'
import { graphql } from 'gatsby'

import PostList from '../components/PostList'
import Layout from '../components/layouts/blog'

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <PostList posts={posts} />
    </Layout>
  )
}
