import React from "react";
import "./cart-icon.components.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.action";
import { selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleCartHidden} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
