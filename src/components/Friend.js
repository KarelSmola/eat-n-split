import React from "react";

import Button from "./UI/Button";
import classes from "./Friend.module.css";

const Friend = ({ friend, onSelectFriend, onRemoveFriend, friendSelected }) => {
  const isSelected = friend.id === friendSelected?.id;

  return (
    <li
      className={
        isSelected ? `${classes.friend} ${classes.selected}` : classes.friend
      }
    >
      <img
        className={classes["user-img"]}
        src={friend.image}
        alt={`${friend.name} pic`}
      />
      <div className={classes["friend-box"]}>
        <p>{friend.name}</p>
        {friend.balance === 0 && (
          <p className={classes["balance-even"]}>
            {friend.name} and me are even
          </p>
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
      </div>
      <div className={classes["btn-box"]}>
        <Button
          className={classes["select-user-btn"]}
          onClick={() => {
            onSelectFriend(friend);
          }}
        >
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button
          className={classes["remove-user-btn"]}
          onClick={() => {
            onRemoveFriend(friend.id);
          }}
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default Friend;
