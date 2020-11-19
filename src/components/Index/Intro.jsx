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
        「僕は、僕の願い事について考えていたのだ」小さい黒いウサギがいいました。
        ５月１０日月曜日の午後３時に東京駅八重洲中央口で待ち合わせをしていただけませんか。
        これが探していたものだ」と彼は叫んだ。 彼は約束を破った。
      </p>
      <p>
        ９時半の電車に乗れば、何時に秋田につきますか。
        ＡＢＣ社のガードナー氏は、２月２０日から２７日までマリオットホテルに滞在中で、ぜひあなたに会いたいとのことです。
        今日はとても暑い。 ６ヵ月靴を買っていない。新しいのを買ってよい頃だ。
      </p>
    </Container>
  )
}

export default Intro
