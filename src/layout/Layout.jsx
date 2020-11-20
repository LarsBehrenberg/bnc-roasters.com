import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Background from "./Background"
import Footer from "./Footer"
import SEO from "./SEO"
import "normalize.css"
import "../styles/index.css"

import { seoDescriptions } from "../../config/seo-descriptions"

const Layout = ({
  children,
  backgroundImage,
  backgroundClassName,
  seoTitle = seoDescriptions.index.title,
  seoDescription = seoDescriptions.index.description,
}) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Header siteTitle={`BnC Roasters`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0 1.0875rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
      <Background image={backgroundImage} className={backgroundClassName} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
