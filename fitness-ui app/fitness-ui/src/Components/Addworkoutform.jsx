// ✅ Step 7: Add Workout Form (useState + Form Handling)

// 📍 AddWorkoutForm.jsx

import React from 'react'
import { useState } from 'react'

function Addworkoutform({addworkout}){
    const [name,setname]=useState("");
    const [calories,setcalories]=useState("");

    const handleSubmit=(e)=>{
        e.preventdefault();

        const newworkout={
            id:Date.now(),
            name,
            calories:Number(calories),
        };

        addworkout(newworkout);

        setname("");
        setcalories("");


    }
  return (
    <form action="" className='form' onSubmit={handleSubmit}>
        <h2>➕ Add Workout</h2>

        <input type="text"
        placeholder='Workout name'
        value={name}
        onChange={(e)=>setname(e.target.value)}
        
        />

        <input type="number"
        placeholder="Calories Burned"
        value={calories}
        onChange={(e) => setcalories(e.target.value)}
        />

        <button type="submit">Add</button>


    </form>
  )
}

export default Addworkoutform
