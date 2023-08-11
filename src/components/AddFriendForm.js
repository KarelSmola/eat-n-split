import React, { useState } from "react";

const AddFriendForm = ({ onAddNewFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [showForm, setShowForm] = useState(null);

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
      {showForm && (
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
            <input type="text" id="image" defaultValue={imgValue} />
          </div>
          <button>Add user</button>
        </form>
      )}
      <button
        onClick={() => {
          setShowForm((prevState) => !prevState);
        }}
      >
        {!showForm ? "Add user form" : "Close form"}
      </button>
    </>
  );
};

export default AddFriendForm;
