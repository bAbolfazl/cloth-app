import React from "react";
import { withRouter } from "react-router-dom";

import "./menuItem.styles.css";

// const linkHat = () => {

// };

const MenuItem = ({ title, imageUrl, size, location, history, linkUrl }) => {
  // console.log("history", history);
  // console.log("location", location);
  // console.log("size", size);
  const width = size === "large" ? "48%" : "";

  // console.log(typeof width);
  return (
    // <Link to='/s'>
    <div
      onClick={() => history.push(`${location.pathname}${linkUrl}`)}
      className="menu-item"
      style={{ width: width }}
    >
      <div
        className="menu-item--bg"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="menu-item__text">
        <h2>{title.toUpperCase()}</h2>
        <div>SHOP NOW</div>
      </div>
    </div>
    // </Link>
  );
};

export default withRouter(MenuItem);
