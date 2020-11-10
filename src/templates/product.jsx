import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO } from "layout"

const Product = ({ data }) => {
  const {
    id,
    price,
    product: { name, description },
  } = data.productInfo

  const { image } = data.productImage

  console.log(image)

  return (
    <Layout backgroundImage={image[0].childImageSharp.fluid}>
      <SEO title={name} />
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
        description
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
