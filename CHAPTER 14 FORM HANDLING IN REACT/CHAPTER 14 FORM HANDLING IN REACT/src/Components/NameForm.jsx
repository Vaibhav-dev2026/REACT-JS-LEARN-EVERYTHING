import React from 'react'
import { useState } from 'react'

function NameForm(){
    const[name,setName]=useState("");

    function handlechange(e){
        setName(e.target.value);

    }
  return (
    <div>
        <h2>Your Name:{name}</h2>
        <input 
        type="text"
        value={name}
        onChange={handlechange}
        placeholder='Enter Name'
         />
      
    </div>
  )
}

export default NameForm


// 🧠 Line-by-line Logic

// useState("") → input ka data store

// value={name} → input controlled

// onChange → har typing pe state update

// e.target.value → user ka likha hua text


// 🌍 Real World Use

// Search box

// Username input

// Filters

// 🧩 3️⃣ Form Submit Handling
// ❗ Important Concept

// React me form submit pe:

// e.preventDefault()


// warna page reload ho jaayega ❌


