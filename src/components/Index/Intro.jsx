import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;

  color: white;

  h1 {
    margin-bottom: 0;
    font-size: 2.5em;
  }

  p {
    line-height: 23px;
  }
`

const Intro = () => {
  return (
    <Container>
      <h1>Welcome to BnC Roasters</h1>
      <h4>est. since 2020</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi, eu
        fringilla diam fringilla phasellus dignissim. Tempus scelerisque felis
        et sit sagittis in integer. Urna dui ornare imperdiet facilisis sem
        aliquet justo. Justo, morbi eu laoreet egestas semper.
      </p>
      <p>
        Tempus scelerisque felis et sit sagittis in integer. Urna dui ornare
        imperdiet facilisis sem aliquet justo. Justo, morbi eu laoreet egestas
        semper.
      </p>
    </Container>
  )
}

export default Intro
