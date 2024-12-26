// add user by post method by using api

"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    const data = await response.json();
    if (data.success) {
      alert("suceefull");
    } else {
      alert("error");
    }
    // console.log(data)
  };
  return (
    <div>
      <h1>AddUser</h1>
      <input
        type="text"
        placeholder="yourname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default AddUser;
