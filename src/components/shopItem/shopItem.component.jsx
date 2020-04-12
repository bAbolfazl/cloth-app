import React from "react";
import { connect } from 'react-redux'

import {addProductToCart} from '../../redux/cart-dropdown/cartDropdown.actions'

import "./shopItem.style.css";


const ShopItem = ({ name, imageUrl, price,addProductToCart }) => {
  console.log("shopItem props", name);
  return (
    <div className="shop-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='shop-item__btn-container'>
        <button className='shop-item__btn' onClick={() => addProductToCart(name)}>
          SHOP NOW!
        </button>
      </div>
      <div className='shop-item__sub'>
        <div>{name}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (name) => {
      return dispatch(addProductToCart(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(ShopItem);
