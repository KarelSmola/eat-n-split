import React from "react";
import Friend from "./Friend";

import classes from "./FriendsList.module.css";

const FriendsList = ({
  friends,
  onSelectFriend,
  onRemoveFriend,
  friendSelected,
}) => {
  return (
    <ul className={classes["friends-list"]}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          onRemoveFriend={onRemoveFriend}
          friendSelected={friendSelected}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
