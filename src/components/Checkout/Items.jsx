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
    gap: 1em;
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

    /* justify-content: center; */
    gap: 1rem;
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

  const cart = []
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    // To set value with dropdown
    const options = []
    for (let quantity = 1; quantity <= 5; ++quantity)
      options.push(
        <option
          key={quantity}
          value={quantity}
        >{`Quantity: ${quantity}`}</option>
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
              <h5>{`¥${cartEntry.price} / 200g`}</h5>
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
                onClick={() => removeItem(cartEntry.sku)}
                aria-label={`Remove all ${cartEntry.name} from your cart`}
              >
                Remove
              </button>
            </div>

            {/* What if we don't want this product at all */}
          </div>
          <div className="checkout_item_price">
            <h2>{cartEntry.formattedValue}</h2>
            <h5>{`${cartEntry.quantity} x 200g package`}</h5>
          </div>
        </ItemContainer>
      )
    }
  }

  return cart.length !== 0 ? (
    cart
  ) : (
    <Placeholder>
      You currently have no items in your cart. <br /> Click{" "}
      <Link to="/">here</Link> to shop more.
    </Placeholder>
  )
}

export default Items
