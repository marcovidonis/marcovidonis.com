const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const projectResult = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const articleResult = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  projectResult.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-description.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })

  articleResult.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article-description.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })

}
