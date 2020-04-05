import React from "react"

import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_wfWnseqszQISbBylLwDYjr1O00OBEU7v9n"

  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Fitflex"
      billingAddress
      image="https://img.icons8.com/small/64/000000/weight-1.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
