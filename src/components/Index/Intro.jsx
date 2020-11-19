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
  h1,
  h4 {
    font-family: "Neuton";
    letter-spacing: 0.1em;
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
        私たちが焙煎を始めたのは、2020年４月、長野県へ引っ越して来てからです。豊かな自然の中で生活をしていると、自分たちの手で作れるものは手作りしたいと思うようになりました。そして、そんな思いを込めて始めたのがコーヒー豆の自家焙煎です。
      </p>
      <p>
        普段から、コーヒー豆以外にも、石鹸、お茶、野菜、パン、看板作りなど、手作りに時間をかけて丁寧な生活に心がけています。ココナッツコーヒーは私たちのオリジナル作品です。ぜひ試してみてください。
      </p>
    </Container>
  )
}

export default Intro
