import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../images/logo_white.png"

const Container = styled.footer`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 2rem 0;
  &,
  a {
    color: #fff;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;

    div:nth-of-type(2) {
      padding-bottom: 1em;
      margin-bottom: 1em;
      border-bottom: 1px solid #fff;
    }
  }
`

const Copyright = styled.div`
  z-index: 1;

  img {
    width: 30px;
    margin-bottom: -6px;
    margin-right: 10px;
  }

  span {
    border-left: 1px solid #fff;
    padding-left: 10px;
  }
`

const FooterMenu = styled.div`
  display: flex;
  flex-wrap: wrap;

  text-align: center;
  & > *:not(:last-child) {
    margin-right: 3em;

    @media screen and (max-width: 500px) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  z-index: 1;

  a {
    text-decoration: none;

    :hover {
      color: #ffffff80;
    }
  }
`

const Shadow = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Footer = () => {
  return (
    <Container>
      <Copyright>
        <img src={Logo} alt="BnC Coffee Roaster" />
        <span>&copy; {new Date().getFullYear()} BnC Roasters</span>
      </Copyright>
      <FooterMenu>
        <Link to="/">ホーム</Link>
        <Link to="/legal">特定商取引に関する法律に基づく表示</Link>
        <a href="mailto:coffee@bearandchi.com" className="mailtoui">
          お問い合わせ
        </a>
      </FooterMenu>
      <Shadow />
    </Container>
  )
}

export default Footer
