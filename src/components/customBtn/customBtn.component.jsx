import React from "react";

import "./customBtn.styles.css";

const CustomBtn = ({children, ...otherProps}) => {
  return (
  <button {...otherProps}>{children}</button>
  );
};

export default CustomBtn;
