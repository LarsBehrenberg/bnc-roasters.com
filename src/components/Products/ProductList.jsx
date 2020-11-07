import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  display: flex;
  gap: 1rem;
`

const ProductList = ({ children }) => <Container>{children}</Container>

export default ProductList
