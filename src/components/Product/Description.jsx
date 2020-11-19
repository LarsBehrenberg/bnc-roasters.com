import React from "react"
import styled from "@emotion/styled"

import { useShoppingCart } from "use-shopping-cart"
import { navigate } from "gatsby"

import { BackButton } from "components"

const Container = styled.div`
  max-width: 550px;
  margin-left: auto;
  margin-top: 2rem;
  color: #fff;
  min-height: 64vh;

  h1 {
    margin-bottom: 0;
  }

  p {
    line-height: 24px;

    @media screen and (min-width: 600px) {
      margin-right: 4rem;
    }
  }
`

const AddToCartButton = styled.button`
  padding: 0.8em;
  border-radius: 10px;
  border: none;
  color: #565656;
  background: #e6e6e6;
  cursor: pointer;

  display: inline-flex;
  align-items: center;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.03);
  }

  span {
    margin-left: 10px;
  }
`

const Description = ({ product }) => {
  const { addItem, cartDetails } = useShoppingCart()

  const item = {
    name: product.name,
    sku: product.id, // price id
    price: product.price,
    currency: "JPY",
    image: product.image,
    slug: product.slug,
  }

  const addItemAndProceed = item => {
    if (!cartDetails[product.id]) {
      addItem(item)
    }
    navigate("/checkout")
  }

  return (
    <Container>
      <BackButton />
      <h1>{product.name}</h1>
      <h5>{`¥${product.price} / 200g`}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi, eu
        fringilla diam fringilla phasellus dignissim. Tempus scelerisque felis
        et sit sagittis in integer. Urna dui ornare imperdiet facilisis sem
        aliquet justo. Justo, morbi eu laoreet egestas semper.
      </p>
      <p>
        t sit sagittis in integer. Urna dui ornare imperdiet facilisis sem
        aliquet justo. Justo, morbi eu laoreet egestas semper.
      </p>
      <p>
        Urna dui ornare imperdiet facilisis sem aliquet justo. Justo, morbi eu
        laoreet egestas semper
      </p>
      <AddToCartButton onClick={() => addItemAndProceed(item)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M19.408 4.11941C18.987 4.01326 18.5446 4.26785 18.4393 4.69246L16.692 11.6347H6.54683L4.14668 1.80468C4.06282 1.44393 3.74707 1.18933 3.368 1.18933H0.800078C0.357686 1.18933 0 1.55008 0 1.99626C0 2.44245 0.357686 2.8032 0.800078 2.8032H2.75792L5.99923 16.1354C6.08311 16.4961 6.39885 16.7508 6.77793 16.7508H16.0186C16.4609 16.7508 16.8187 16.39 16.8187 15.9438C16.8187 15.4976 16.4609 15.1369 16.0186 15.1369H7.38796L6.92503 13.2477H17.2815C17.6393 13.2477 17.955 12.9931 18.0603 12.653L19.9762 5.09453C20.0814 4.67075 19.8289 4.22539 19.4079 4.11924L19.408 4.11941Z"
              fill="#565656"
            />
            <path
              d="M9.5565 18.7046C9.5565 19.4195 8.98175 20 8.27293 20C7.5633 20 6.98853 19.4195 6.98853 18.7046C6.98853 17.9898 7.5633 17.4092 8.27293 17.4092C8.98175 17.4092 9.5565 17.9898 9.5565 18.7046Z"
              fill="#565656"
            />
            <path
              d="M16.1871 18.7046C16.1871 19.4195 15.6123 20 14.9036 20C14.1939 20 13.6191 19.4195 13.6191 18.7046C13.6191 17.9898 14.1939 17.4092 14.9036 17.4092C15.6123 17.4092 16.1871 17.9898 16.1871 18.7046Z"
              fill="#565656"
            />
            <path
              d="M13.9144 5.09535L12.4828 6.5392V0.806933C12.4828 0.360751 12.1251 0 11.6827 0C11.2404 0 10.8827 0.360751 10.8827 0.806933V6.5392L9.45112 5.09535C9.30387 4.9469 9.09337 4.86147 8.88287 4.86147C8.67237 4.86147 8.48328 4.94606 8.3147 5.09535C7.99894 5.41381 7.99894 5.923 8.3147 6.22074L11.1146 9.04458C11.4089 9.3415 11.9352 9.3415 12.2304 9.04458L15.0303 6.22074C15.346 5.90228 15.346 5.39308 15.0303 5.09535C14.7351 4.77689 14.2302 4.77689 13.9144 5.09535H13.9144Z"
              fill="#565656"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Add to cart</span>
      </AddToCartButton>
    </Container>
  )
}

export default Description
