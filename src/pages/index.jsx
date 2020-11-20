import React from "react"
import { graphql } from "gatsby"

import { Layout } from "layout"

import { ProductCard, ProductList, Intro } from "components"

const IndexPage = ({ data }) => {
  const productData = data.products.nodes.map(node => ({
    name: node.name,
    sku: node.id,
    // price: node.unit_amount,
    image: node.image[0],
    // currency: "JPY",
    slug: node.metadata.slug,
  }))

  return (
    <Layout>
      <Intro />
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
    products: allStripeProduct(filter: { id: { ne: "prod_IOOC16S3x0U5pB" } }) {
      nodes {
        id
        name
        metadata {
          slug
        }
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
