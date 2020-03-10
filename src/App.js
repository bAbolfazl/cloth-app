import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.pages";
import ShopPage from "./pages/shop/shopPage.pages";
import SignInPage from "./pages/sigIn-signUp/singIn-signUp.pages";

import { auth } from "./firebase/firebase.utils";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = { curruntUser: null };
  }

  subscribe = null;

  componentDidMount() {
    this.subscribe = auth.onAuthStateChanged(user =>
      this.setState({ curruntUser: user })
    );
  }

  componentWillUnmount() {
    this.subscribe = null; 
  }

  render() {
    return (
      <div>
        <div></div>
        <Header component={Header} curruntUser={this.state.curruntUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/hats" component={Hat} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
