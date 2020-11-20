import React from "react"
import styled from "@emotion/styled"
import { Layout } from "layout"

const Container = styled.div`
  min-height: 68vh;
  width: 100%;

  margin: 0 auto;

  color: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout
    seoTitle="404: Not Found"
    seoDescription="残念ですが、このページ今見つけられなかったです。"
  >
    <Container>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
