// 🔴 CHALLENGE (REAL WORLD)
// ✅ 5️⃣ Theme Switcher (Dark / Light)
// 🧠 Concept Used

// useState

// Conditional CSS

// 📁 components/ThemeSwitcher.jsx


import { useState } from "react";

import React from 'react'

function Theme(){
    const[dark,setdark]=useState(false);
  return (
    <div style={{
        background:dark ? "#000" : "#fff",
        color:dark ? "#fff" : "#000",
        padding:"20px"
    }}>
    <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setdark(!dark)}>
        Switch Theme
      </button>

      
    </div>
  )
}

export default Theme

// 🌍 Real World Use

// Instagram

// YouTube

// Developer tools
