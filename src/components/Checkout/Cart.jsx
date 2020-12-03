import React, { useState } from "react"
import Items from "./Items"
import Total from "./Total"
import styled from "@emotion/styled"

const CartContainer = styled.section`
  color: #fff;
  min-height: 54vh;
  .checkout_title {
    font-size: 2.5em;
    /* margin-bottom: .5r; */

    @media screen and (min-width: 600px) {
      margin-left: 0.8em;
    }
  }

  .grinded-beans-info {
    margin-bottom: 0;
    a {
      color: #fff;
      &:hover {
        color: #ffffff80;
      }
    }
    @media screen and (min-width: 600px) {
      margin-left: 2em;
    }
  }

  .checkout_table_price_header {
    padding-bottom: 0.67em;
    text-align: right;
    border-bottom: 2px solid #fff;

    span {
      margin-right: 2em;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
`

const Cart = () => {
  const [shippingState, setShippingState] = useState(false)

  return (
    <CartContainer>
      <h1 className="checkout_title">ショッピングカート</h1>
      <p className="grinded-beans-info">
        豆の状態は「豆のまま」の他に「中挽き（コーヒーメーカー用）」または「粉挽き（ペーパードリップ用）」をお選びいただけます。
        「粉挽き」または「中挽き」をご希望の方は、Email:{" "}
        <a href="mailto:coffee@bearandchi.com" className="mailtoui">
          coffee@bearandchi.com
        </a>{" "}
        までご連絡ください。{" "}
      </p>
      <p className="checkout_table_price_header">
        <span>価格</span>
      </p>
      <Items updateShippingState={state => setShippingState(state)} />
      <Total
        updateShippingState={state => setShippingState(state)}
        currentShippingState={shippingState}
      />
    </CartContainer>
  )
}

export default Cart
