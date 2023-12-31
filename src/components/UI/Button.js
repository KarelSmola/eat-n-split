import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`${classes["btn-main"]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
