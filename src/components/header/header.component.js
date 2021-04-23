import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectCartHidden } from "../../redux/Cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.components";
import { auth } from "../firebase/firebase.utils";
import "./header.component.scss";
function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="./signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
