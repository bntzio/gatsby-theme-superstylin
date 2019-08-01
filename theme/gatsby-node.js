exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/blog/)) {
      page.layout = 'blog'

      createPage(page)
    }

    resolve()
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        layout: 'blog'
      })
    })
  })
}
