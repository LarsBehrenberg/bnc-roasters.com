import React from "react"
import styled from "@emotion/styled"

import { useShoppingCart } from "use-shopping-cart"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  min-width: 350px;
  min-height: 250px;
  border-radius: 2em;
  text-decoration: none;

  position: relative;

  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  &,
  * {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    transform: scale(1.03);

    .product_card_content {
      color: #f9f9f980;
    }
  }

  .product_card_content {
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: white;

    * {
      margin: 0;
    }

    button {
      padding: 0.6em 0.7em 0.5em 0.6em;
      border-radius: 10px;
      border: none;

      background: #fff;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:hover {
        background: #ffffff80;
      }
    }
  }

  .product_card_background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background: #ffffff80;

    z-index: -1;

    &,
    img {
      border-radius: 2em;
    }

    img {
      /* border-radius: 3em 3em 0 0; */
      object-fit: cover;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
`

export default function ProductCard({ product }) {
  const { addItem } = useShoppingCart()

  /* A helper function that turns the price into a readable format */
  // const price = formatCurrencyString({
  //   value: product.price,
  //   currency: product.currency,
  //   language: navigator.language,
  // })

  return (
    <StyledLink to="">
      <div className="product_card_content">
        {/* Product name */}
        <h3>{product.name}</h3>
        {/* Adds product to the cart */}
        <button
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to your cart`}
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M22.3192 4.73733C21.8351 4.61525 21.3263 4.90804 21.2052 5.39634L19.1958 13.3799H7.52886L4.76869 2.07539C4.67224 1.66053 4.30913 1.36774 3.8732 1.36774H0.920089C0.411339 1.36774 0 1.7826 0 2.29571C0 2.80882 0.411339 3.22368 0.920089 3.22368H3.1716L6.89912 18.5557C6.99557 18.9705 7.35868 19.2634 7.79461 19.2634H18.4214C18.9301 19.2634 19.3415 18.8485 19.3415 18.3353C19.3415 17.8222 18.9301 17.4074 18.4214 17.4074H8.49615L7.96378 15.2348H19.8737C20.2851 15.2348 20.6483 14.9421 20.7693 14.551L22.9726 5.85872C23.0936 5.37137 22.8033 4.8592 22.3191 4.73713L22.3192 4.73733Z"
                fill="black"
              />
              <path
                d="M10.99 21.5103C10.99 22.3325 10.329 23 9.51386 23C8.6978 23 8.0368 22.3325 8.0368 21.5103C8.0368 20.6882 8.6978 20.0206 9.51386 20.0206C10.329 20.0206 10.99 20.6882 10.99 21.5103Z"
                fill="black"
              />
              <path
                d="M18.615 21.5103C18.615 22.3325 17.9539 23 17.1389 23C16.3228 23 15.6618 22.3325 15.6618 21.5103C15.6618 20.6882 16.3228 20.0206 17.1389 20.0206C17.9539 20.0206 18.615 20.6882 18.615 21.5103Z"
                fill="black"
              />
              <path
                d="M16.0014 5.85965L14.3551 7.52008V0.927973C14.3551 0.414863 13.9438 0 13.435 0C12.9263 0 12.515 0.414863 12.515 0.927973V7.52008L10.8687 5.85965C10.6994 5.68893 10.4573 5.59069 10.2152 5.59069C9.97315 5.59069 9.7557 5.68797 9.56183 5.85965C9.19871 6.22588 9.19871 6.81145 9.56183 7.15385L12.7817 10.4013C13.1202 10.7427 13.7254 10.7427 14.0649 10.4013L17.2848 7.15385C17.6479 6.78763 17.6479 6.20205 17.2848 5.85965C16.9453 5.49343 16.3647 5.49343 16.0015 5.85965H16.0014Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {/* Background image */}
      <div className="product_card_background">
        <img src={product.image} alt={`Image of ${product.name}`} />
      </div>
    </StyledLink>
  )
}
