import React, { useState } from "react";
import Friend from "./Friend";

import classes from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={classes["friends-list"]}>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
