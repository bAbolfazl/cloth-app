import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => (
  <div className="header">
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
      <Link to="/shop">
        <div className="header__menu__item">HOME</div>
      </Link>
    </div>
  </div>
);

export default Header;
