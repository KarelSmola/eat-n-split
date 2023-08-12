import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import SplitForm from "./components/SplitForm";

const dataFriends = [
  {
    id: "1",
    name: "Jack",
    image: "https://i.pravatar.cc/48?u=14564894",
    balance: -7,
  },
  {
    id: "2",
    name: "John",
    image: "https://i.pravatar.cc/48?u=1897",
    balance: 20,
  },
  {
    id: "3",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=96",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(dataFriends);
  const [friendSelected, setFriendSelected] = useState("");

  const addNewFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  const deleteFriend = (id) => {
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== id)
    );
  };

  const selectedFriend = (friend) => {
    setFriendSelected(friend);
  };

  const calcData = (data) => {
    console.log(data);
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === friendSelected.id
          ? { ...friendSelected, balance: friend.balance + data }
          : friend
      )
    );
  };

  return (
    <div>
      <FriendsList
        friends={friends}
        onSelectFriend={selectedFriend}
        onRemoveFriend={deleteFriend}
      />
      <AddFriendForm onAddNewFriend={addNewFriend} />
      {friendSelected && (
        <SplitForm friend={friendSelected} onCalculatedData={calcData} />
      )}
    </div>
  );
};

export default App;
