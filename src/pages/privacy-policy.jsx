import React from "react"
import styled from "@emotion/styled"

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

  .notice {
    border: 2px solid white;
    padding: 1rem 1rem 0;
    background: #000;
  }
`

const PrivacyPage = () => (
  <Layout
    seoTitle={seoDescriptions.privacy.title}
    seoDescription={seoDescriptions.privacy.description}
  >
    <Container>
      <div className="notice">
        <h4>個人情報の保護について</h4>
        <p>
          当サイトは、お客様の個人情報について、お客様の承諾がない限り第三者に開示、提供を一切いたしません。
          <br />
          ご提供していただき、お客様へのサービスにご利用させていただくことがあります。その目的以外には利用いたしません。
        </p>
      </div>
      <div>
        <h1>プライバシーポリシー</h1>
      </div>
      <h4>1. 個人情報の収集</h4>
      <p>
        当店でお買物いただく際には、お客様のお名前、住所、電話番号、メールアドレスなどの個人情報をお客様より提供していただきます。
        <br />
        また、ニュースレターやアンケート等のサービスの利用に関連する情報（コーヒーの飲み方、ご提案事項など）をご質問することがございますが、お客様自身の判断により、回答するかご選択下さい。
      </p>
      <h4>2. ホームページ利用時の個人情報の収集</h4>
      <p>
        当店のホームページの利用にあたり、利用状況把握のためアクセスのログ解析を行っております。
        <br />
        当店のホームページ参照における利用状況把握のため、その他インターネット技術を用いて利用状況把握を行うことがございます。
        <br />
        収集した統計情報は今後ホームページの利便性向上のため活用させていただきます。
      </p>
      <h4>3. 個人情報の利用</h4>
      <p>
        収集したお客様の個人情報は次の目的のために利用させていただきます。
        <br />
        ・商品の配送やご請求及び注文内容の確認、出荷連絡等、ご注文の対応が必要な場合
        <br />
        ・当店よりご案内をご連絡する場合
        <br />
        ・当店のホームページ閲覧状況把握のログ解析を行う場合
        <br />
        なお、第三者が利用するためのＤＭリストの提供は一切いたしませんのでご安心下さい。
      </p>
      <h4>4. 個人情報の保護</h4>
      <p>
        当店ではお客様の個人情報保護のため、インターネット上を流れるお客様の情報について暗号化技術(SSL)を使用し、情報の確実な保護を行っております。
        <br />
        どうぞ、安心してショッピングをお楽しみ下さい。
      </p>
      <h4>5. 個人情報の提供・開示</h4>
      <p>
        個人情報はご本人の同意を得た範囲でのみ使用し、ご注文のお届けにかかわる第三者への提供（商品発送のための配送業者及びご請求書送付のための郵政公社など）以外には、第三者への提供を行いません。
        <br />
        お客様ご本人により自己に関する個人情報開示の請求があった場合は、ご本人様宛に個人情報について開示することがございます。
        <br />
        ただし、次の目的のため必要と判断される場合はお客様の個人情報を開示することがございます。
        <br />
        ・公的機関（裁判所、警察など）からの個人情報の開示要請に応じるため
        <br />
        ・お客様及び当店の権利または財産を保護あるいは防御するため
      </p>
      <h4>6. 個人情報についてのお問い合わせ</h4>
      <p>
        個人情報について当店へのご質問がございましたら、下記窓口までお電話下さい。
        <br />
        個人情報の開示、削除などについても下記窓口までご連絡ください。
        <br />
        お客様相談窓口（担当：堀 ちひろ）Email:{" "}
        <a href="mailto:coffee@bearandchi.com" class="mailtoui">
          coffee@bearandchi.com
        </a>
      </p>
      <h4>
        7. 個人情報についてのお問い合わせ
        <br />
        <br />
        活動内容につきましてはホームページにて案内するとともに、お客様からの要望も受付してまいります。
        <br />
        気になる点などございましたら、下記までお気軽にご連絡下さいますようお願い申し上げます。
        <br />
        連絡先：
        <a href="mailto:coffee@bearandchi.com" class="mailtoui">
          coffee@bearandchi.com
        </a>
      </h4>
    </Container>
  </Layout>
)

export default PrivacyPage
