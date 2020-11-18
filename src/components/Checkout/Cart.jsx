import React, { useState } from "react"
import Items from "./Items"
import Total from "./Total"
import styled from "@emotion/styled"

const CartContainer = styled.section`
  color: #fff;
  min-height: 54vh;
  .checkout_title {
    font-size: 2.5em;
    margin-bottom: 0;

    @media screen and (min-width: 600px) {
      margin-left: 0.8em;
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
      <h1 className="checkout_title">Your current cart:</h1>
      <p className="checkout_table_price_header">
        <span>Price</span>
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
