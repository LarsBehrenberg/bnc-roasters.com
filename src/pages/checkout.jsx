import React from "react"

import { Layout, SEO } from "layout"
import { Cart, BackButton } from "components"

const Checkout = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <div style={{ height: "40px" }} />
      <BackButton />
      <Cart />
    </Layout>
  )
}

export default Checkout
