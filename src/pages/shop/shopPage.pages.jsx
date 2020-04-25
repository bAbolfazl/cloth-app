import React from "react";

import ShopPrev from "../../components/shopPrev/shopPrev.component";

import Shop_Data from "./shopPage.data";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = Shop_Data;
  }

  render() {
    console.log("state", this.state);

    return (
      <div className="shop-page">
        {this.state.map(shop => {
          return (
            <div>
              {console.log(shop.id)}
              <ShopPrev
                key={shop.id}
                title={shop.title}
                routeName={shop.routeName}
                items={shop.items}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
