import React, { useState } from "react";

const AddFriendForm = ({ onAddNewFriend }) => {
  const [friendName, setFriendName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      image: `${imgValue}${friendName}`,
      balance: 0,
    };

    onAddNewFriend(newFriend);
  };

  const imgValue = "https://i.pravatar.cc/48?u=";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">User name</label>
          <input
            type="text"
            id="name"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">User image</label>
          <input type="text" id="image" value={imgValue} />
        </div>
        <button>Add user</button>
      </form>
      <button>Add user form</button>
    </>
  );
};

export default AddFriendForm;
