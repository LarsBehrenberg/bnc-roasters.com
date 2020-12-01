import React, { useState } from "react"
import styled from "@emotion/styled"
import Modal from "react-modal"
import { Link } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"
import { shippingOptions, allShippingIds } from "./shipping"

const customStyles = {
  content: {
    top: "26%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    opacity: "1 !important",
  },
}

Modal.setAppElement("#___gatsby")

const Container = styled.div`
  margin-left: auto;
  padding-right: 2em;
  text-align: right;

  .total_divider {
    width: 100%;
    max-width: 280px;
    height: 1px;
    border-top: 2px solid #fff;
    margin: 0 0 1em 0;
    margin-left: auto;
  }
  select,
  button {
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background: #fff;
  }

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

  select {
    margin-right: 0.5em;
    padding: 0.2em 0.3em;
    padding-right: 0;

    outline: none;
  }

  .shipping_price_textbox {
    margin: 1em 0;
    line-height: 1.5em;
  }
`

const Total = ({ updateShippingState, currentShippingState }) => {
  const {
    totalPrice,
    addItem,
    removeItem,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()

  const [area, setArea] = useState(Object.keys(shippingOptions)[0])
  const [price, setPrice] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const removeExisistingShippingFee = () => {
    for (let x = 0; x < allShippingIds.length; x++) {
      if (cartDetails[allShippingIds[x]] !== undefined) {
        removeItem(allShippingIds[x])
      }
    }
  }

  const setCorrectCountForShipping = () => {
    let count = 0
    if (cartCount >= 11) {
      count = 10
    } else if (cartCount >= 6) {
      count = 5
    } else if (cartCount >= 4) {
      count = 3
    } else {
      count = 2
    }
    return count
  }

  const newTotalPrice = () => {
    for (let x = 0; x < allShippingIds.length; x++) {
      if (cartDetails[allShippingIds[x]] !== undefined) {
        return totalPrice - cartDetails[allShippingIds[x]].price
      }
    }
    return totalPrice
  }

  const addShippingFee = selectArea => {
    const currentArea = selectArea || area
    const currentCount = setCorrectCountForShipping()
    removeExisistingShippingFee()
    updateShippingState(true)
    if (
      currentArea !==
      Object.keys(shippingOptions)[Object.keys(shippingOptions).length - 1]
    ) {
      setPrice(shippingOptions[currentArea][currentCount].price)
      addItem({
        name: "Shipping Cost",
        sku: shippingOptions[currentArea][currentCount].id, // use sku here instead
        price: shippingOptions[currentArea][currentCount].price,
        currency: "JPY",
        image: "https://my-image.com/banana.jpg",
      })
    } else if (
      currentArea ===
      Object.keys(shippingOptions)[Object.keys(shippingOptions).length - 1]
    ) {
    }
  }

  const toCheckout = () => {
    if (currentShippingState === true) {
      redirectToCheckout()
    } else {
      setIsOpen(true)
    }
  }

  return (
    <Container>
      {/* TOTAL PRICE */}
      <div className="total_divider" />
      <h2>{`小計 (税込) : ¥${newTotalPrice().toLocaleString()}`}</h2>
      {/* SHIPPING CALCULATION */}
      <select
        name="shipping-select"
        id="shipping-select"
        defaultValue={Object.keys(shippingOptions)[0]}
        onBlur={event => {
          setArea(event.target.value)
          updateShippingState(false)
        }}
        onChange={event => {
          setArea(event.target.value)
          updateShippingState(false)
        }}
      >
        {Object.entries(shippingOptions).map(([key, value]) => {
          return <option key={key} value={key}>{`${value.name}`}</option>
        })}
      </select>
      <button onClick={() => addShippingFee()}>計算</button>
      <div className="shipping_price_textbox">
        {currentShippingState ? (
          area !==
          Object.keys(shippingOptions)[
            Object.keys(shippingOptions).length - 1
          ] ? (
            <>
              <p style={{ textDecoration: "underline" }}>
                送料: ¥{price.toLocaleString()}
              </p>
              <p>
                ご注文後、焙煎しますので、
                <br />
                5日から7日以内に、お届け{" "}
                <span role="img" aria-label="package">
                  📦
                </span>
              </p>
            </>
          ) : (
            <p>
              原村・富士見への配達は無料で行います{" "}
              <span role="img" aria-label="delivery">
                🚚
              </span>
              <br />
              <a href="mailto:bearandgirl@gmail.com" style={{ color: "white" }}>
                coffee@bearandchi.com
              </a>{" "}
              までお問い合わせください
            </p>
          )
        ) : (
          <>
            <p>
              送料を先に計算してください{" "}
              <span role="img" aria-label="calculate">
                🧮
              </span>
              <br />
              配送料について詳しくは
              <Link to="/shipping" style={{ color: "#fff" }}>
                こちら
              </Link>
            </p>
          </>
        )}
      </div>
      {/* PROCEED TO CHECKOUT BUTTON */}
      <button onClick={() => toCheckout()}>
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
        ご購入手続きへ進む
      </button>
      {/* INVISIBLE MODAL */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>
          ちょっと待って{" "}
          <span role="img" aria-label="wait">
            🙋🏻‍♀️
          </span>
        </h2>
        <div>
          <p>
            送料を計算し忘れないで{" "}
            <span role="img" aria-label="calculate">
              🧮
            </span>
            <br />
            購入前に、<b>「計算」</b>のボタンを押して下さい！
          </p>
        </div>
        <button className="modal_close_button" onClick={() => setIsOpen(false)}>
          戻る
        </button>
      </Modal>
    </Container>
  )
}

export default Total
