import React from "react";
import { connect } from 'react-redux'

import { addProductToCart } from '../../redux/cart/cart.actions'

import "./shopItem.style.css";


const ShopItem = ({ item, addProductToCart }) => {
  const { id, name, imageUrl, price } = item
  return (
    <div className="shop-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='shop-item__btn-container'>
        <button className='shop-item__btn' onClick={() => addProductToCart(item)}>
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
    addProductToCart: id => dispatch(addProductToCart(id))
  }
}


export default connect(null, mapDispatchToProps)(ShopItem);
