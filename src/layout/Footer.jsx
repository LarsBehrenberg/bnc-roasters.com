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

  @media screen and (max-width: 400px) {
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
  gap: 3em;
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
        <span>&copy; 2020 BnC Roasters</span>
      </Copyright>
      <FooterMenu>
        <Link to="/">Home</Link>
        <Link to="/legal">Legal</Link>
        <a href="mailto:info@larsbehrenberg.com" className="mailtoui">
          Contact
        </a>
      </FooterMenu>
      <Shadow />
    </Container>
  )
}

export default Footer
