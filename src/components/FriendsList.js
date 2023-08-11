import React from "react";
import Friend from "./Friend";

import classes from "./FriendsList.module.css";

const FriendsList = ({ friends, onRemoveFriend }) => {
  return (
    <ul className={classes["friends-list"]}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onRemoveFriend={onRemoveFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
