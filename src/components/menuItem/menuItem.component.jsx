import React from "react";

import "./menuItem.styles.css";

const MenuItem = ({ id, title, imageUrl, size }) => {
  // console.log("size", size);
  const width = size === "large" ? "48%" : "";

  // console.log(typeof width);
  return (
    <div className="menu-item" style={{width: width}}>
      <div className='menu-item--bg'
        style={{
          backgroundImage: `url(${imageUrl})`,

        }}
      ></div>
      <div className="menu-item__text">
        <h2>{title.toUpperCase()}</h2>
        <div>SHOP NOW</div>
      </div>
    </div>
  );
};

export default MenuItem;
