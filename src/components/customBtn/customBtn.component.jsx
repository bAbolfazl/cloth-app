import React from "react";

import "./customBtn.styles.css";

const CustomBtn = (props) => {
  return (
  <button onClick={(e)=>e.preventDefault}>{props.children}</button>
  );
};

export default CustomBtn;
