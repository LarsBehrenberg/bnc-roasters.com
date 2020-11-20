import React from "react"
import { graphql } from "gatsby"

import { Layout } from "layout"
import { Description } from "components"

import { seoDescriptions } from "../../config/seo-descriptions"

const Product = ({ data }) => {
  const {
    id,
    price,
    product: { name, metadata },
  } = data.productInfo

  const { image } = data.productImage

  const productInfo = {
    id,
    price,
    name,
    image,
    slug: metadata.slug,
    roast: metadata.roast,
  }

  return (
    <Layout
      backgroundImage={image[0].childImageSharp.fluid}
      backgroundClassName="product_page"
      seoTitle={seoDescriptions[metadata.slug].title}
      seoDescription={seoDescriptions[metadata.slug].description}
    >
      <Description product={productInfo} />
    </Layout>
  )
}

export default Product

export const query = graphql`
  query productPage($pathSlug: String!) {
    productInfo: stripePrice(
      product: { metadata: { slug: { eq: $pathSlug } } }
    ) {
      id
      price: unit_amount
      product {
        name
        metadata {
          slug
          roast
        }
      }
    }
    productImage: stripeProduct(metadata: { slug: { eq: $pathSlug } }) {
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
