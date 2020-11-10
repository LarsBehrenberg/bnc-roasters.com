import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Background from "./Background"
import "normalize.css"
import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Header siteTitle={`BnC Roasters`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <Background />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
