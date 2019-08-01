module.exports = {
  siteMetadata: {
    title: 'Superstylin',
    description: 'A Gatsby Theme with styled-components'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}
