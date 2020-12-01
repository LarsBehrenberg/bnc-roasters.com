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

const CancelPage = () => (
  <Layout
    seoTitle={seoDescriptions.success.title}
    seoDescription={seoDescriptions.success.description}
  >
    <Container>
      <h1>ご注文の確認ができませんでした。</h1>
      <h4>
        申し訳ありませんが、もう一度ホームページからアクセスしてください。再度ご注文できなかった場合は、こちらに（
        <a href="mailto:coffee@bearandchi.com" class="mailtoui">
          coffee@bearandchi.com
        </a>
        ）ご連絡ください。
      </h4>
      <Link to="/">BnC Roasters トップページ</Link>
    </Container>
  </Layout>
)

export default CancelPage
