// 🔵 MEDIUM PRACTICE
// ✅ 3️⃣ Counter with Limit
// 🧠 Concept Used

// useState

// Conditional logic

// 🧩 Logic

// Count 0 se start

// Max limit fix

// Limit cross na ho


import { useState } from "react";

import React from 'react'

function Limit(){
    const [count,setCount] = useState(0);
    const limit=5;

    function increase(){
        if(count<limit){
            setCount(count+1)
        }
    }
    function decrease(){
        if(count>0){
            setCount(count-1);
        }
    }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      
    </div>
  )
}

export default Limit

// 🧠 Important Logic
// if (count < limit)


// ➡️ Validation before state update

// 🌍 Real World Use

// Product quantity

// Seat booking

// Rating system
