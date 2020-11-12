import React from "react"
import styled from "@emotion/styled"
import { useShoppingCart } from "use-shopping-cart"

const Container = styled.div`
  max-width: 260px;
  margin-left: auto;
  padding-right: 2em;
  padding-top: 1em;
  text-align: right;

  border-top: 2px solid #fff;

  button {
    display: inline-flex;
    align-items: center;
    padding: 0.5em 0.8em;
    border-radius: 10px;
    border: none;

    cursor: pointer;

    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.03);
    }

    svg {
      margin-right: 10px;
    }
  }
`

const Total = () => {
  const { totalPrice, redirectToCheckout } = useShoppingCart()
  return (
    <Container>
      <h2>{`Total: ¥${totalPrice.toLocaleString()}`}</h2>
      <button onClick={() => redirectToCheckout()}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0891 2.97619C19.1929 2.95944 19.3011 2.96322 19.408 2.99072L19.4079 2.99054C19.8289 3.09889 20.0814 3.55347 19.9761 3.98602L18.0602 11.7009C17.955 12.0481 17.6392 12.3079 17.2815 12.3079H6.92501L7.38795 14.2361H16.0186C16.4609 14.2361 16.8186 14.6044 16.8186 15.0598C16.8186 15.5153 16.4609 15.8834 16.0186 15.8834H6.77791C6.39884 15.8834 6.0831 15.6236 5.99922 15.2553L2.75791 1.64726H0.800076C0.357685 1.64726 0 1.27905 0 0.823631C0 0.368216 0.357685 0 0.800076 0H3.368C3.74706 0 4.06281 0.259866 4.14668 0.628079L6.54682 10.6615H16.692L18.1472 4.76018H11.5831C11.0689 4.76018 10.6519 4.35994 10.6519 3.86621C10.6519 3.37248 11.0689 2.97224 11.5831 2.97224L19.001 2.97226C19.0307 2.97226 19.0601 2.97359 19.0891 2.97619ZM8.27291 19.1999C8.98174 19.1999 9.55649 18.6074 9.55649 17.8777C9.55649 17.1481 8.98174 16.5555 8.27291 16.5555C7.56329 16.5555 6.98851 17.1481 6.98851 17.8777C6.98851 18.6074 7.56329 19.1999 8.27291 19.1999ZM16.187 17.8777C16.187 18.6074 15.6121 19.1999 14.9034 19.1999C14.1937 19.1999 13.619 18.6074 13.619 17.8777C13.619 17.1481 14.1937 16.5555 14.9034 16.5555C15.6121 16.5555 16.187 17.1481 16.187 17.8777Z"
            fill="#565656"
          />
        </svg>
        Proceed to checkout
      </button>
    </Container>
  )
}

export default Total
