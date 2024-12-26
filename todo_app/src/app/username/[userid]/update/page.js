"use client";

import React, { useState, useEffect } from "react";

const UpdateData = ({ params }) => {
//   const id = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
// show data
  useEffect(() => {
    getUserData(params.userId);
  }, []);
  async function getUserData (id){
    const res = await fetch(`http://localhost:3000/api/${id}`)
     resData = await res.json();
     setName(resData.result.name)
     setAge(resData.result.age)
     setEmail(resData.result.email)
}

//   update data
const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "Put",
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
    <>
      <div>
        <h1>update User</h1>
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
    </>
  );
};

export default UpdateData;
