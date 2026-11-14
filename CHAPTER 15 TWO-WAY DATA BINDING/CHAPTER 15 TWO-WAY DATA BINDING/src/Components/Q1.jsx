// 1️⃣ Beginner Practice
// A. Controlled Input Field – Username

// Concept & Logic:

// Controlled input = input value comes from React state.

// User typing → updates state → state reflected in UI.

// Folder Structure:
// We can keep it simple:

// src/
//  ├─ components/
//  │   └─ UsernameInput.js
//  └─ App.js

import React, { useState } from "react";

function Q1(){
  const [username, setUsername] = useState("");

  const handlechange =(e)=>{
    setUsername(e.target.value);
  }

  return (
    <div>
      <h3>Enter your username:</h3>
      <input type="text"
       value={username}
       onChange={handlechange}
       placeholder="Type Username"
       />

       <p>Username live:{username}</p>
      
    </div>
  )
}

export default Q1
