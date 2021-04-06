import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
function App({ history }) {
  const HatsPage = () => <h1>Hats Page</h1>;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>

        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
