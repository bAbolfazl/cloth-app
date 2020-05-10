import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions'
import { selectUserCurrent } from './redux/user/user.selectors'

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.pages";
import ShopPage from "./pages/shop/shopPage.pages";
import SignInPage from "./pages/sigIn-signUp/singIn-signUp.pages";
import CheckOutPage from './pages/checkout/checkoutPage.component'


const Hat = () => {
  return <div>HatPage</div>;
};
const Contact = () => (
  <div>
    <h2>contact us page</h2>
  </div>
);
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { currentUser: null };
  // }

  subscribe = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.subscribe = auth.onAuthStateChanged(async user => {
      console.log('auth state changed')
      if (user) {
        const userRef = await createUserProfileDoc(user)
        userRef.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          })
        })
        // this.setState({ currentUser: await (await userRef.get()).id })
      } else {
        setCurrentUser(null)
      }
      // console.log('user', this.state.currentUser) 
    });
  }


  componentWillUnmount() {
    this.subscribe = null;
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route path="/shop/hats" render={Hat} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/signin" component={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent
})

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {
      return dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
