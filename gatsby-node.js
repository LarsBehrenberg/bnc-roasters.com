const path = require("path")

// Allow named imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// Create product pages programatically
exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve("src/templates/product.jsx")

    resolve(
      graphql(
        `
          query {
            products: allStripePrice(
              filter: { product: { id: { ne: "prod_IOOC16S3x0U5pB" } } }
            ) {
              nodes {
                product {
                  metadata {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        const products = result.data.products.nodes

        // create product pages
        products.forEach(
          ({
            product: {
              metadata: { slug },
            },
          }) => {
            createPage({
              path: slug,
              component: productPageTemplate,
              context: {
                pathSlug: slug,
              },
            })
          }
        )
      })
    )
  })
}
