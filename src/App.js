import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.actions'
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.pages";
import ShopPage from "./pages/shop/shopPage.pages";
import SignInPage from "./pages/sigIn-signUp/singIn-signUp.pages";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";


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
    this.state = { currentUser: null };
  }

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
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/hats" component={Hat} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => {
    return dispatch(setCurrentUser(user))
  }
}
)

export default connect(null, mapDispatchToProps)(App);
