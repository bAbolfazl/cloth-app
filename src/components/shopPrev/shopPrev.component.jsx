import React from "react";

import ShopItem from "../shopItem/shopItem.component";

import "./shopPrev.styles.css";

class ShopPrev extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log("shopPrev props", this.props);

    return (
      <div>
        <h2 className="shop-prev__header">{this.props.title}</h2>
        <div className="shop-prev">
          {this.props.items
            .filter((item, index) => index < 4)
            // .map((item, i) => {
            //   if (i < 4) {
            //     return item;
            //   }
            // })
            .map(shopItem => {
              return (
                <div class="shop-item-container">
                  <ShopItem
                    key={shopItem.id}
                    name={shopItem.name}
                    imageUrl={shopItem.imageUrl}
                    price={shopItem.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ShopPrev;
