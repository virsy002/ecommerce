import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import CustomButton from "../../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/Cart/cart.action";
import { selectCartItems } from "../../redux/Cart/cart.selector";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.component.scss";

function CartDropDown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
