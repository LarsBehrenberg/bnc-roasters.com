import React from "react"
import styled from "@emotion/styled"
import { Layout } from "layout"
import { Link } from "gatsby"

import { seoDescriptions } from "../../config/seo-descriptions"

const Container = styled.div`
  min-height: 68vh;
  width: 100%;

  margin: 0 auto;

  &,
  a {
    color: #fff;
  }

  h1,
  h4 {
    text-align: center;
  }

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

const SuccessPage = () => (
  <Layout
    seoTitle={seoDescriptions.success.title}
    seoDescription={seoDescriptions.success.description}
  >
    <Container>
      <h1>
        ありがとうございます！
        <br />
        お支払いが確認できました。
      </h1>
      <h4>配送の準備が完了しましたら、ご連絡いたします。</h4>
      <Link to="/">BnC Roasters トップページ</Link>
    </Container>
  </Layout>
)

export default SuccessPage
