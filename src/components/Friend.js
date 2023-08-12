import React from "react";

import classes from "./Friend.module.css";

const Friend = ({ friend, onSelectFriend, onRemoveFriend }) => {
  return (
    <li className={classes.friend}>
      <img src={friend.image} alt={`${friend.name} pic`} />
      <p>{friend.name}</p>
      <p>{friend.balance}</p>
      <button
        onClick={() => {
          onSelectFriend(friend);
        }}
      >
        Select
      </button>
      <button
        onClick={() => {
          onRemoveFriend(friend.id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Friend;
