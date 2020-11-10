import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Background = () => {
  const data = useStaticQuery(query)

  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      className="background_image"
      backgroundColor={`#040e18`}
    />
  )
}

export default Background

const query = graphql`
  query Background {
    file(relativePath: { eq: "coffee-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
