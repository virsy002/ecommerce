import { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth } from "./components/firebase/firebase.utils";
class App extends Component {
  // const HatsPage = () => <h1>Hats Page</h1>;
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>

          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
