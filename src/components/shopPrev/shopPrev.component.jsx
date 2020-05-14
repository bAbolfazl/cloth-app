import React from "react";

import ShopItem from "../shopItem/shopItem.component";

import "./shopPrev.styles.css";

const ShopPrev = ({ items, title }) => {


  // console.log("shopPrev props", this.props);

  return (
    <div>
      <h2 className="shop-prev__header">{title}</h2>
      <div className="shop-prev">
        {items
          .filter((item, index) => index < 4)
          .map(shopItem => {
            return (
              <div className="shop-item-container">
                <ShopItem
                  key={shopItem.id}
                  item={shopItem}
                />
              </div>
            );
          })}
      </div>
    </div>
  );

}

export default ShopPrev;
