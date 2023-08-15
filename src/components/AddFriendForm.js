import React, { useState } from "react";

import Button from "./UI/Button";
import classes from "./AddFriendForm.module.css";

const AddFriendForm = ({ onAddNewFriend, onShowForm, showForm }) => {
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
    <div className={classes["add-form-container"]}>
      {showForm && (
        <form
          data-lpignore={true}
          className={classes["add-form"]}
          onSubmit={submitHandler}
        >
          <div className={classes["label-box"]}>
            <label className={classes.label} htmlFor="friend-name">
              User name
            </label>
            <input
              className={classes.input}
              type="text"
              id="friend-name"
              value={friendName}
              onChange={(e) => {
                setFriendName(e.target.value);
              }}
            />
          </div>
          <div className={classes["label-box"]}>
            <label lassName={classes.label} htmlFor="image">
              User image
            </label>
            <input
              className={classes.input}
              type="text"
              id="image"
              defaultValue={imgValue}
            />
          </div>
          <Button className={classes["add-user-btn"]}>Add user</Button>
        </form>
      )}
      <Button
        className={
          !showForm
            ? classes["show-form-btn"]
            : `${classes["show-form-btn-active"]} `
        }
        onClick={onShowForm}
      >
        {!showForm ? "Add user form" : "Close form"}
      </Button>
    </div>
  );
};

export default AddFriendForm;
