import React from "react";

import classes from "./Friend.module.css";

const Friend = ({ friend, onSelectFriend, onRemoveFriend, friendSelected }) => {
  const isSelected = friend.id === friendSelected?.id;

  return (
    <li
      className={
        isSelected ? `${classes.friend} ${classes.selected}` : classes.friend
      }
    >
      <img src={friend.image} alt={`${friend.name} pic`} />
      <p>{friend.name}</p>
      {friend.balance === 0 && (
        <p className={classes["balance-even"]}>{friend.name} and me are even</p>
      )}
      {friend.balance < 0 && (
        <p className={classes["balance-negative"]}>
          {friend.name} owe me {friend.balance} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className={classes["balance-positive"]}>
          I owe {friend.name} {friend.balance} $
        </p>
      )}

      <button
        onClick={() => {
          onSelectFriend(friend);
        }}
      >
        {isSelected ? "Close" : "Select"}
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
