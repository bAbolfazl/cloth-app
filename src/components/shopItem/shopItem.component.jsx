import React from "react";

import "./shopItem.style.css";

const ShopItem = ({ name, imageUrl, price }) => {
  console.log("shopItem props", name);
  return (
    <div className="shop-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='shop-item__btn-container'>
        <button className='shop-item__btn'>
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

export default ShopItem;
