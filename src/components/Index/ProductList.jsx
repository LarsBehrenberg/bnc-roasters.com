import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;

  @media screen and (min-width: 550px) {
    & > *:first-of-type {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    & > *:first-of-type {
      margin-bottom: 2rem;
    }
  }
`

const ProductList = ({ children }) => <Container>{children}</Container>

export default ProductList
