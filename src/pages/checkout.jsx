import React from "react"

import { Layout, SEO } from "layout"
import { Cart } from "components"

const Checkout = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <Cart />
    </Layout>
  )
}

export default Checkout
