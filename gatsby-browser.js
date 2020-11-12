import MailtoUI from "./node_modules/mailtoui/dist/mailtoui-min.js"
const React = require("react")
const { CartProvider } = require("use-shopping-cart")
const { loadStripe } = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={`http://localhost:8000/`}
      cancelUrl={`http://localhost:8000`}
      currency={"JPY"}
      allowedCountries={["JP"]}
      billingAddressCollection={true}
      mode={"client-only"}
    >
      {element}
    </CartProvider>
  )
}

export const onRouteUpdate = () => {
  MailtoUI.run({
    title: "問い合わせ",
    buttonText1: "Gmailを開く",
    buttonText2: "Outlookを開く",
    buttonText3: "Yahooを開く",
    buttonText4: "デフォルトのメールアプリを開く",
    buttonTextCopy: "コピー",
    buttonTextCopyAction: "コピーしました！",
  })
}
