import React from "react";

import classes from "./Friend.module.css";

const Friend = ({ friend }) => {
  return (
    <li className={classes.friend}>
      <img src={friend.image} alt={`${friend.name} pic`} />
      <p>{friend.name}</p>
      <p>{friend.balance}</p>
      <button>Select</button>
    </li>
  );
};

export default Friend;
