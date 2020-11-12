import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO } from "layout"
import { Description } from "components"

const Product = ({ data }) => {
  const {
    id,
    price,
    product: { name },
  } = data.productInfo

  const { image } = data.productImage

  const productInfo = {
    id,
    price,
    name,
    image,
  }

  return (
    <Layout
      backgroundImage={image[0].childImageSharp.fluid}
      backgroundClassName="product_page"
    >
      <SEO title={name} />
      <Description product={productInfo} />
    </Layout>
  )
}

export default Product

export const query = graphql`
  query productPage($pathSlug: String!) {
    productInfo: stripePrice(product: { name: { eq: $pathSlug } }) {
      id
      price: unit_amount
      product {
        name
      }
    }
    productImage: stripeProduct(name: { eq: $pathSlug }) {
      image: localFiles {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
