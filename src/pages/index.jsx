import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO } from "layout"

import { ProductCard, ProductList } from "components"

const IndexPage = ({ data }) => {
  const productData = data.products.nodes.map(node => ({
    name: node.product.name,
    sku: node.id,
    price: node.unit_amount,
    image: node.product.images[0],
    currency: "JPY",
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
    products: allStripePrice {
      nodes {
        unit_amount
        id
        product {
          name
          description
          images
        }
      }
    }
  }
`
