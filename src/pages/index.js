import React from "react"
import { graphql } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { CartItems, ProductCard, ProductList } from "components"

const IndexPage = ({ data }) => {
  const productData = data.products.nodes.map(node => ({
    name: node.product.name,
    sku: node.id,
    price: node.unit_amount,
    image: node.product.images[0],
    currency: "JPY",
  }))

  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <Layout>
      <SEO title="Home" />

      {/* Renders the products */}
      <ProductList>
        {productData.map(product => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </ProductList>

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: ¥{totalPrice}</p>
      <CartItems />

      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>
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
