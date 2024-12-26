"use client"
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  function userDispatch() {
    dispatch(addUser(name))
  }
  return (
    <div>
      <h1>Add user</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>add</button>
    </div>
  );
};

export default AddUser;
