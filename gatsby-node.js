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
            products: allStripePrice {
              nodes {
                product {
                  slug: name
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

        const stringToSlug = text =>
          text
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")
        // create product pages
        products.forEach(({ product: { slug } }) => {
          createPage({
            path: stringToSlug(slug),
            component: productPageTemplate,
            context: {
              pathSlug: slug,
            },
          })
        })
      })
    )
  })
}
