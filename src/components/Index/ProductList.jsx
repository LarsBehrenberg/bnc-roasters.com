import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 800px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`

const ProductList = ({ children }) => <Container>{children}</Container>

export default ProductList
