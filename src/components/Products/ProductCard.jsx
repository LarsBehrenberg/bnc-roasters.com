import React from "react"
import styled from "@emotion/styled"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

const Container = styled.article`
  max-width: 300px;
  border-radius: 3em;
  border: 1px solid #333;

  figcaption {
    padding: 0 2rem;
  }

  img {
    border-radius: 3em 3em 0 0;
  }

  .price {
    padding: 0 2rem 1rem;
  }
`

export default function ProductCard({ product }) {
  const { addItem } = useShoppingCart()

  /* A helper function that turns the price into a readable format */
  const price = formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: navigator.language,
  })

  return (
    <Container>
      <figure>
        <img src={product.image} alt={`Image of ${product.name}`} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <div className="price">
        <p>{price}</p>

        {/* Adds the item to the cart */}
        <button
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to your cart`}
        >
          Add to cart
        </button>
      </div>
    </Container>
  )
}
