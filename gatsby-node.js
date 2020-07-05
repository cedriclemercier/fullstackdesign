const path = require("path")
const { create } = require("domain")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    // Create a new node field into the graphql API
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(el => {
    createPage({
      component: blogTemplate,
      path: `/blog/${el.node.slug}`,
      context: {
        slug: el.node.slug,
      },
    })
  })
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages
}
