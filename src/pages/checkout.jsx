import React from "react"

import { Layout } from "layout"
import { Cart, BackButton } from "components"

import { seoDescriptions } from "../../config/seo-descriptions"

const Checkout = () => {
  return (
    <Layout
      seoTitle={seoDescriptions.checkout.title}
      seoDescription={seoDescriptions.checkout.description}
    >
      <div style={{ height: "40px" }} />
      <BackButton />
      <Cart />
    </Layout>
  )
}

export default Checkout
