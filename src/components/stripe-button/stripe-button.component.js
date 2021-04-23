import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51IjOLhJJ904OCWU0wMrJqfgumTWtP7qCmT4Zi4bg0ceC9ZY7XdX1QfGAb3sloGOdLC2oO6KxyLXkYTQtD8DXHUuO00j46ETv2x";
  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };
  return (
    <StripeCheckout
      label="pay now"
      name="CRWN Vlothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
}

export default StripeCheckoutButton;
