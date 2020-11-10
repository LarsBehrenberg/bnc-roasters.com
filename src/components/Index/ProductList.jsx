import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  display: flex;
  gap: 1rem;
`

const Spacer = styled.div`
  width: 100%;
  height: 40vh;
`

const ProductList = ({ children }) => (
  <>
    <Spacer />
    <Container>{children}</Container>
  </>
)

export default ProductList
