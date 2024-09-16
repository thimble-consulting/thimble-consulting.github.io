const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const clientPageTemplate = path.resolve(`src/templates/clientPage.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query PastClients {
      allPastClientsJson {
        edges {
          node {
            name
            slug
            heroText
            logoSrc {
              id
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
            sections {
              title
              parallaxLayers {
                content
                parallaxParams {
                  stickyStart
                  stickyEnd
                }
              }
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allPastClientsJson.edges.forEach(edge => {
      createPage({
        path: `clients/${edge.node.slug}`,
        component: clientPageTemplate,
        context: {
          client: edge.node
        },
      })
    })
  })
}
