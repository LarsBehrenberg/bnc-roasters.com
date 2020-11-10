import React from "react"
import { useShoppingCart } from "use-shopping-cart"

import { Layout, SEO } from "layout"
import { CartItems } from "components"

const Checkout = () => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <Layout>
      <SEO title="Checkout" />

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: ¥{totalPrice}</p>
      <CartItems />

      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </Layout>
  )
}

export default Checkout
