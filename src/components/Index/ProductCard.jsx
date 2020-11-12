import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  min-height: 250px;
  flex-grow: 1;
  flex-basis: 0;
  border-radius: 2em;
  text-decoration: none;

  position: relative;

  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);

  &,
  * {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);

    .product_card_link {
      background: #ffffff80;
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

    @media screen and (max-width: 550px) {
      margin-top: auto;
      position: absolute;
      bottom: 0;
    }

    * {
      margin: 0;
    }

    span {
      margin-bottom: -0.4em;
      padding: 0.6em 0.7em 0.5em 0.6em;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-out;
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
  return (
    <StyledLink to={`/${product.slug}`}>
      <div className="product_card_content">
        {/* Product name */}
        <h3>{product.name}</h3>
        {/* Adds product to the cart */}
        <span className="product_card_link" to={`/${product.slug}`}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.28156 12.15H19.2816"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2816 5.15001L19.2816 12.15L12.2816 19.15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Background image */}
      <div className="product_card_background">
        <Img
          fluid={product.image.childImageSharp.fluid}
          alt={`Image of ${product.name}`}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        {/* <img src={product.image} alt={`Image of ${product.name}`} /> */}
      </div>
    </StyledLink>
  )
}
