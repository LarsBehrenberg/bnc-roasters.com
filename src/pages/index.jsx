import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO } from "layout"

import { ProductCard, ProductList } from "components"

const IndexPage = ({ data }) => {
  const productData = data.products.nodes.map(node => ({
    name: node.name,
    sku: node.id,
    // price: node.unit_amount,
    image: node.image[0],
    // currency: "JPY",
    slug: node.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-"),
  }))

  return (
    <Layout>
      <SEO title="Home" />

      {/* Renders the products */}
      <ProductList>
        {productData.map(product => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </ProductList>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    products: allStripeProduct {
      nodes {
        id
        name
        image: localFiles {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
