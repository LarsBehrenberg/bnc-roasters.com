import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/logo_white.png"

import { useShoppingCart } from "use-shopping-cart"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  * {
    margin: 0;
  }
`

const CheckoutLink = styled(Link)`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 0.5em;
  border-radius: 10px;

  transition: all 0.4s ease-out;

  text-decoration: none;

  span {
    font-size: 25px;
    margin-left: 10px;
  }

  &:hover {
    background: #ffffff80;
  }

  &:focus {
    outline: none;
  }
`

const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.2em;

  @media screen and (max-width: 450px) {
    display: none;
  }
`

const LogoContainer = styled(Link)`
  img {
    max-width: 100px;
  }
`

const Header = ({ siteTitle }) => {
  const { redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <header>
      <Wrapper>
        <LogoContainer to="/">
          <img src={Logo} alt="BnC Roasters" />
        </LogoContainer>
        <Title>{siteTitle}</Title>
        <CheckoutLink to="/checkout">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.6337 5.06429C28.7894 5.03917 28.9518 5.04484 29.112 5.08609L29.1119 5.08582C29.7434 5.24835 30.1221 5.93021 29.9642 6.57904L27.0904 18.1514C26.9325 18.6721 26.4589 19.0619 25.9223 19.0619H10.3875L11.0819 21.9542H24.0279C24.6914 21.9542 25.228 22.5066 25.228 23.1898C25.228 23.8729 24.6914 24.4252 24.0279 24.4252H10.1669C9.59827 24.4252 9.12466 24.0354 8.99885 23.483L4.13687 3.0709H1.20012C0.536529 3.0709 0 2.51858 0 1.83545C0 1.15233 0.536529 0.600006 1.20012 0.600006H5.052C5.6206 0.600006 6.09422 0.989806 6.22002 1.54213L9.82025 16.5923H25.038L27.2209 7.74028H17.3748C16.6034 7.74028 15.9779 7.13992 15.9779 6.39933C15.9779 5.65874 16.6034 5.05837 17.3748 5.05837L28.5015 5.0584C28.5461 5.0584 28.5902 5.06039 28.6337 5.06429ZM12.4094 29.3999C13.4726 29.3999 14.3348 28.5112 14.3348 27.4166C14.3348 26.3221 13.4726 25.4333 12.4094 25.4333C11.345 25.4333 10.4828 26.3221 10.4828 27.4166C10.4828 28.5112 11.345 29.3999 12.4094 29.3999ZM24.2805 27.4166C24.2805 28.5112 23.4182 29.3999 22.3551 29.3999C21.2906 29.3999 20.4285 28.5112 20.4285 27.4166C20.4285 26.3221 21.2906 25.4333 22.3551 25.4333C23.4182 25.4333 24.2805 26.3221 24.2805 27.4166Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>{cartCount}</span>
        </CheckoutLink>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
