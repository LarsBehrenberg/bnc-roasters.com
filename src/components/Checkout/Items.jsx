import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { useShoppingCart } from "use-shopping-cart"
import { Link } from "gatsby"

const ItemContainer = styled.article`
  margin: 0 2em 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .checkout_item_info {
    display: flex;

    > *:first-of-type {
      margin-right: 1em;
    }
    .checkout_item_image_container {
      width: 200px;

      &,
      * {
        border-radius: 10px;
      }
    }
    .checkout_item_text {
      h2 {
        margin: 0;
      }
      h5 {
        margin-bottom: 2em;
      }
      .checkout_item_select,
      button {
        cursor: pointer;
        padding: 0.4em;
        padding-right: 0;
        border-radius: 10px;
        border: none;
        background: #fff;
      }
      button {
        padding: 0.5em;
        margin-left: 0.5em;
      }
    }
  }
  .checkout_item_price {
    text-align: right;
    h2 {
      margin-bottom: 0;
    }
  }

  // Styling for mobile
  @media screen and (max-width: 600px) {
    flex-direction: column;

    margin-bottom: 1.5rem;
    align-items: initial;

    .checkout_item_info {
      flex-direction: column;

      .checkout_item_image_container {
        width: 100%;

        &,
        img {
          max-height: 200px;
        }
      }
    }
    .checkout_item_price {
      display: none;
    }
  }
`

const Placeholder = styled.h3`
  @media screen and (min-width: 600px) {
    margin-left: 1.5em;
  }

  a {
    color: #fff;
    &:hover {
      color: #ffffff80;
    }
  }
`

const Items = ({ updateShippingState }) => {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart()

  const setItem = (sku, event, state) => {
    updateShippingState(state)

    setItemQuantity(sku, event)
  }

  const remove = (sku, state) => {
    updateShippingState(state)

    removeItem(sku)
  }

  const cart = []
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    // To set value with dropdown
    const options = []
    for (let quantity = 1; quantity <= 5; ++quantity)
      options.push(
        <option key={quantity} value={quantity}>{`数量： ${quantity}`}</option>
      )

    // all of your basic product data still exists (i.e. name, image, price)
    if (cartEntry.name !== "Shipping Cost") {
      cart.push(
        <ItemContainer key={cartEntry.name}>
          <div className="checkout_item_info">
            <div className="checkout_item_image_container">
              <Img
                fluid={cartEntry.image[0].childImageSharp.fluid}
                alt={`Image of ${cartEntry.name}`}
              />
            </div>

            <div className="checkout_item_text">
              <h2>{cartEntry.name}</h2>
              <h5>{`¥${cartEntry.price.toLocaleString()} / 200g`}</h5>
              <select
                id="quantity-select"
                className="checkout_item_select"
                defaultValue={cartEntry.quantity}
                onBlur={event => {
                  setItem(sku, event.target.value, false)
                }}
                onChange={event => {
                  setItem(sku, event.target.value, false)
                }}
              >
                {options}
              </select>

              <button
                onClick={() => remove(cartEntry.sku, false)}
                aria-label={`Remove all ${cartEntry.name} from your cart`}
              >
                削除
              </button>
            </div>

            {/* What if we don't want this product at all */}
          </div>
          <div className="checkout_item_price">
            <h2>{cartEntry.formattedValue}</h2>
            <h5>{`${cartEntry.quantity} 袋`}</h5>
          </div>
        </ItemContainer>
      )
    }
  }

  return cart.length !== 0 ? (
    cart
  ) : (
    <Placeholder>
      お客様のカートに商品はありません。
      <br />
      <Link to="/">「お買い物を続ける」</Link> を押してください。
    </Placeholder>
  )
}

export default Items
