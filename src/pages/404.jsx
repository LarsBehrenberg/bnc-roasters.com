import React from "react"
import styled from "@emotion/styled"
import { Layout } from "layout"
import { Link } from "gatsby"

const Container = styled.div`
  min-height: 68vh;
  width: 100%;

  margin: 0 auto;

  &,
  a {
    color: #fff;
  }

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout
    seoTitle="何かお探しですか？"
    seoDescription="残念ですが、このページ今見つけられなかったです。"
  >
    <Container>
      <h1>何かお探しですか？</h1>
      <p>入力したURLが当サイトのページと一致しません</p>
      <Link to="/">BnC Roasters トップページ</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
