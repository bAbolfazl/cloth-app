import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import "./header.styles.css";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cartDropdown.component'



const Header = ({ currentUser, cartDropdownDisplay }) => (
  <div className="header">
    {/* {console.log(currentUser)} */}


    <Link to="/">
      <div className="header__logo"><Logo /></div>
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
      <div className="header__menu__item"><CartIcon>1</CartIcon></div>
    </div>
    {cartDropdownDisplay === true ? <CartDropdown /> : null}

  </div>
);

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cartDropdownDisplay: cart.show
})


export default connect(mapStateToProps)(Header);
