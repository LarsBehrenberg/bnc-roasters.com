import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const BackgroundShadow = styled.div`
  position: fixed !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background: #00000060;
`

const Background = ({ image }) => {
  const data = useStaticQuery(query)

  const imageData = image || data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      className="background_image"
      backgroundColor={`#040e18`}
    >
      <BackgroundShadow />
    </BackgroundImage>
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
