"use client";
import React from "react";
import { useState } from "react";

const Practise = () => {
  // state to show mom name in componanent
  const [momName, setMomName] = useState("");
  const showMotherName = () => {
    setMomName("sayra pathan");
  };
  // common function to show name on click
  const showName = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>Learn props</h1>
      {/* send data by props in componanent*/}
      <ComonComp name="imran" age="33" />
      <ComonComp name="farhat" age="34" />

      {/* send name by function */}
      <h4>show name on popup by click</h4>
      <button onClick={() => showName("Altaf")}>click</button>
      <br></br>
      <button onClick={() => showName("Ranu")}>click</button>
      <br></br>
      <hr></hr>

      {/* send Name by state */}
      <h4>show name on click by using state</h4>
      <button onClick={showMotherName}>show name</button>
      <h2>my mother name is {momName}</h2>
    </div>
  );
};

export default Practise;

// its common componanat it show name and age
const ComonComp = (props) => {
  return (
    <div>
      <h1>
        Name:{props.name},<span>Age: {props.age}</span>
      </h1>
    </div>
  );
};
