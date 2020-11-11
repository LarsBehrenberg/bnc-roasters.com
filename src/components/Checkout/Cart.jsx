import React from "react"
import Items from "./Items"
import Total from "./Total"
import styled from "@emotion/styled"

const CartContainer = styled.section`
  color: #fff;
  .checkout_title {
    font-size: 2.5em;
    margin-bottom: 0;

    margin-left: 0.8em;
  }

  .checkout_table_price_header {
    padding-bottom: 0.67em;
    text-align: right;
    border-bottom: 2px solid #fff;

    span {
      margin-right: 2em;
    }
  }
`

const Cart = () => {
  return (
    <CartContainer>
      <h1 className="checkout_title">Your current cart:</h1>
      <p className="checkout_table_price_header">
        <span>Price</span>
      </p>
      <Items />
      <Total />
    </CartContainer>
  )
}

export default Cart
