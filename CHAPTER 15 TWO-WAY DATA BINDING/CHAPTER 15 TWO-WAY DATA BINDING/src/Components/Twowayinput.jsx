// Example 1: Simple Input Field

import React, { useState } from 'react'

function Twowayinput(){
    const [name,setname]=useState("");

    const handlechange=(e)=>{
        setname(e.target.value);
    }
  return (
    <div>
        <h2>TWO WAY DATA BINDING</h2>
        <input 
        type="text"
        value={name}
        onChange={handlechange}
        placeholder='Enter your name'

         />
         <p>Your name is : {name}</p>
      
    </div>
  )
}

export default Twowayinput


// Explanation:

// useState maintains state.

// value={name} → ensures UI always reflects state.

// onChange={handleChange} → updates state when user types.

// <p>{name}</p> → automatic re-render and display.

// ✅ This is React way of two-way data binding.

