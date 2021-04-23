import { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.components";
class App extends Component {
  // const HatsPage = () => <h1>Hats Page</h1>;

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>

          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
