import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/Cart/cart.selector";

import "./checkout.styles.scss";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
