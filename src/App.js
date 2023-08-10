import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";

const dataFriends = [
  {
    id: 1,
    name: "Jack",
    image: "https://i.pravatar.cc/48?u=14564894",
    balance: -7,
  },
  {
    id: 2,
    name: "John",
    image: "https://i.pravatar.cc/48?u=1897",
    balance: 20,
  },
  {
    id: 3,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=96",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(dataFriends);

  const addNewFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  return (
    <div>
      <FriendsList friends={friends} />
      <AddFriendForm onAddNewFriend={addNewFriend} />
    </div>
  );
};

export default App;
