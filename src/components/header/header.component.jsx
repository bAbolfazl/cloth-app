import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux'

import "./header.styles.css";

const Header = ({ currentUser }) => (
  <div className="header">
    {/* {console.log(currentUser)} */}
    <Link to="/">
      <div className="header__logo">LOGO</div>
    </Link>
    <div className="header__menu">
      <Link to="/contact">
        <div className="header__menu__item">CONTACT</div>
      </Link>
      <Link to="/shop">
        <div className="header__menu__item">SHOP</div>
      </Link>
      {currentUser ? (
        <div
          className="header__menu__item"
          style={{ cursor: "pointer" }}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
          <Link to="/signin">
            <div className="header__menu__item">Sign In</div>
          </Link>
        )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
