const React = require("react")
const { CartProvider } = require("use-shopping-cart")
const { loadStripe } = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={`https://coffee.bearandchi.com/success`}
      cancelUrl={`https://coffee.bearandchi.com/cancellation`}
      currency={"JPY"}
      allowedCountries={["JP"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
