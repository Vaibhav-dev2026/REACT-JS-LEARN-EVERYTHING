// ✅ 2️⃣ Input Text Show Live
// 🧠 Concept Used

// Controlled component

// useState

// onChange

// 🧩 Approach

// Input value ko state me store

// Typing ke sath UI update

// 📁 components/LiveInput.jsx


import { useState } from 'react'
import React from 'react'

function Liveinput(){
    const [text,settext]=useState("");
  return (
    <div>
        <input type="text" placeholder='Type here' onChange={(e)=>settext(e.target.value)}/>
        <h3>
            you typed:{text}
        </h3>
      
    </div>
  );
}

export default Liveinput


// 🧠 Logic
// e.target.value


// ➡️ Input ka current text

// 🌍 Real World Use

// Search bar

// Form validation

// Live preview

