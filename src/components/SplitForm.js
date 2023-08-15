import React, { useState } from "react";

import Button from "./UI/Button";
import classes from "./SplitForm.module.css";

const SplitForm = ({ friend, onCalculatedData }) => {
  const [bill, setBill] = useState("");
  const [myPart, setMyPart] = useState("");
  const [whoPay, setWhoPay] = useState("me");

  const friendsPart = bill - myPart;

  const submitHandler = (e) => {
    e.preventDefault();
    const splitBalance = whoPay === "me" ? myPart - bill : bill - myPart;

    onCalculatedData(splitBalance);
  };

  return (
    <div className={classes["split-form-wrapper"]}>
      <h1>Split bill with {friend.name}</h1>
      <form className={classes["split-form"]} onSubmit={submitHandler}>
        <div className={classes["label-box"]}>
          <label className={classes.label} htmlFor="bill">
            Bill value
          </label>
          <input
            className={classes.input}
            type="text"
            id="bill"
            value={bill}
            onChange={(e) => {
              setBill(Number(e.target.value));
            }}
          />
        </div>
        <div className={classes["label-box"]}>
          <label className={classes.label} htmlFor="my-part">
            My part
          </label>
          <input
            className={classes.input}
            type="text"
            id="my-part"
            value={myPart}
            onChange={(e) => {
              setMyPart(Number(e.target.value));
            }}
          />
        </div>
        <div className={classes["label-box"]}>
          <label className={classes.label} htmlFor="friends-part">
            Friend's part
          </label>
          <input
            className={classes.input}
            type="text"
            id="friends-part"
            disabled
            value={friendsPart}
          />
        </div>
        <div className={classes["label-box"]}>
          <label className={classes.label}>Who pay</label>
          <select
            className={classes.input}
            value={whoPay}
            onChange={(e) => {
              setWhoPay(e.target.value);
            }}
          >
            <option value="me">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>
        <Button className={classes["calc-btn"]}>Calculate</Button>
      </form>
    </div>
  );
};

export default SplitForm;
