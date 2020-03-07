import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.pages";
import ShopPage from "./pages/shop/shopPage.pages";
import SignInPage from './pages/sigIn-signUp/singIn-signUp.pages'

const Hat = () => {
  return <div>HatPage</div>;
};
const Contact = () => (
  <div>
    <h2>contact us page</h2>
  </div>
);
// const SignIn = () => <div>sign in</div>;
// const Header = () => {
//   return <div>Header Section</div>;
// };
// const ShopPage = () => {
//   return <div>ShopPage</div>;
// };

function App() {
  return (
    <div>
      <Header component={Header} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={Hat} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignInPage} />
        {/*
        <Route path="/shop/sneakers" component={HatPage} />
        <Route path="/shop/womens" component={HatPage} />
        <Route path="/shop/mens" component={HatPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
