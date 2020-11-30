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
      <h1>Mhh, something went wrong.</h1>
      <h4>
        Please try again and if that didn't help, notify us directly at:{" "}
        <a href="mailto:coffee@bearandchi.com" class="mailtoui">
          coffee@bearandchi.com
        </a>
      </h4>
      <Link to="/">BnC Roasters トップページ</Link>
    </Container>
  </Layout>
)

export default CancelPage
