import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Layout } from "layout"

import { seoDescriptions } from "../../config/seo-descriptions"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  &,
  a {
    color: white;
  }
  > div {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid white;
  }
`

const LegalPage = () => (
  <Layout
    seoTitle={seoDescriptions.legal.title}
    seoDescription={seoDescriptions.legal.description}
  >
    <Container>
      <h1>特定商取引法</h1>
      <div>
        <h4>販売業者</h4>
        <p>BnC Roasters 珈琲豆</p>
      </div>
      <div>
        <h4>運営統括責任者</h4>
        <p>代表取締役　堀ちひろ</p>
      </div>
      <div>
        <h4>所在地</h4>
        <p>
          〒391-0115
          <br />
          長野県諏訪郡原村17217
        </p>
      </div>
      <div>
        <h4>お問い合わせメールアドレス</h4>
        <p>
          <a href="mailto:coffee@bearandchi.com">coffee@bearandchi.com</a>
        </p>
      </div>
      <div>
        <h4>引き渡し時期</h4>
        <p>
          5日から7日以内、又はお客様ご指定日にお届け。在庫切れの場合には、ご連絡いたします。※ご入金が確認できない場合は、ご連絡させていただきます。
        </p>
        <p>■原村、富士見町への配達をご希望のお客様へ■</p>
        <p>ご注文の商品を手渡しさせていただきます。</p>
      </div>
      <div>
        <h4>商品代金以外の必要料金</h4>
        <p>商品料金は消費税込で表示させていただいています。</p>
        <p>
          送料は地域ごとに選んでいただき、購入前に計算していただきます。
          <br />
          Google Pay 、Apple Pay、クレジットカードにかかる手数料
        </p>
      </div>
      <div>
        <h4>送料</h4>
        <p>
          豆の重量と地域により送料は異なります。ホームページの送料計算を参考にしてください。
        </p>
      </div>
      <div>
        <h4>返品期限</h4>
        <p>
          商品到着後3日以内に要連絡
          <br />
          連絡後、１週間以内に返品
        </p>
      </div>
      <div>
        <h4>不良品</h4>
        <p>
          良品と交換もしくは、ご希望により、代金返還
          <br />
          ※不良品の交換などの場合には商品と交換となりますので、不良分であっても廃棄してしまいますと、廃棄分は交換に応じられませんのでご注意ください。
        </p>
      </div>
      <div>
        <h4>取扱商品</h4>
        <p>コーヒー豆</p>
      </div>
      <div>
        <h4>販売数量</h4>
        <p>
          数量に限りのある場合は、ホームページにてご案内させていただきます。
        </p>
      </div>
      <div>
        <h4>商品価格</h4>
        <p>
          商品毎に記載（税込価格）
          <br />
          ネット販売の価格は、全て税込の価格です。
        </p>
      </div>
      <div>
        <h4>お支払い方法</h4>
        <p>
          ◎クレジットカード
          <br />
          ◎Apple Pay
        </p>
        <p>◎Google Pay</p>
      </div>
      <div>
        <h4>お支払期限</h4>
        <p>
          商品購入時
          <br />
          ※オンラインから購入の場合、お支払いはオンラインのみとなります。
        </p>
      </div>
      <div>
        <h4>注文方法</h4>
        <p>
          ホームページ <Link to="/">coffee.bearandchi.com</Link>{" "}
          からご注文できます。
        </p>
      </div>
      <div>
        <h4>消費税</h4>
        <p>表示価格中10%</p>
      </div>
      <div>
        <h4>その他手数料</h4>
        <p>
          クレジットカード（支払手数料お客様負担）
          <br />
          Apple Pay、 Google Pay支払手数料（支払手数料お客様負担）
        </p>
      </div>
      <div>
        <h4>返品・交換条件</h4>
        <p>不良品、欠品等の場合は当社負担にて対応いたします。</p>
        <p>
          上記以外はお客様のご負担となります。
          <br />
          商品をすべて返品した場合において、返品理由がお客様のご都合の場合は送料代金は請求となりますのでご注意ください。
        </p>
        <p>
          ※返品・返金にあたり必要な費用（送料・手数料等）はお客さまがご負担になること。
        </p>
        <p>
          当店より出荷した商品にてお客様のご都合（お受取拒否、ご注文者様長期不在など）により、お送りした商品が当店まで返品となる場合、発生した送料分についてご請求することがございます。
          <br />
          ご注文後、万が一長期不在となる場合は必ず当店までご連絡下さい。
        </p>
      </div>
    </Container>
  </Layout>
)

export default LegalPage
