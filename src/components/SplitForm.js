import React, { useState } from "react";

import classes from "./SplitForm.module.css";

const SplitForm = ({ friend, onCalculatedData }) => {
  const [bill, setBill] = useState("");
  const [myPart, setMyPart] = useState("");
  const [whoPay, setWhoPay] = useState("me");
  console.log(whoPay);
  const friendsPart = bill - myPart;

  const submitHandler = (e) => {
    e.preventDefault();
    const splitBalance = whoPay === "me" ? myPart - bill : bill - myPart;
    console.log(splitBalance);
    onCalculatedData(splitBalance);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>{friend.name}</h1>
      <div>
        <label htmlFor="bill">Bill</label>
        <input
          type="text"
          id="bill"
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="my-part">My part</label>
        <input
          type="text"
          id="my-part"
          value={myPart}
          onChange={(e) => {
            setMyPart(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="friends-part">Friend's part</label>
        <input type="text" id="friends-part" disabled value={friendsPart} />
      </div>
      <div>
        <label>Who pay</label>
        <select
          value={whoPay}
          onChange={(e) => {
            setWhoPay(e.target.value);
          }}
        >
          <option value="me">You</option>
          <option value="friend">{friend.name}</option>
        </select>
      </div>
      <button>Calculate</button>
    </form>
  );
};

export default SplitForm;
