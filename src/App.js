import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import SplitForm from "./components/SplitForm";

import MainWrapper from "./components/UI/MainWrapper";

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
  const [friendSelected, setFriendSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addNewFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  const deleteFriend = (id) => {
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== id)
    );
  };

  const selectedFriend = (friend) => {
    setFriendSelected((prevFriend) =>
      prevFriend?.id === friend?.id ? null : friend
    );
    setShowForm(false);
  };

  const showAddForm = () => {
    setShowForm((prevShow) => !prevShow);
    setFriendSelected(null);
  };

  const calcData = (splitFriend) => {
    console.log(splitFriend);
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === friendSelected.id
          ? { ...friendSelected, balance: friend.balance + splitFriend }
          : friend
      )
    );
  };

  return (
    <MainWrapper>
      <FriendsList
        friends={friends}
        onSelectFriend={selectedFriend}
        onRemoveFriend={deleteFriend}
        friendSelected={friendSelected}
      />

      <AddFriendForm
        onAddNewFriend={addNewFriend}
        onShowForm={showAddForm}
        showForm={showForm}
      />

      {friendSelected && (
        <SplitForm friend={friendSelected} onCalculatedData={calcData} />
      )}
    </MainWrapper>
  );
};

export default App;
