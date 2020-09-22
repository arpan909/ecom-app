import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page:{props.match.params.id}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
