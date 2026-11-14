import { useEffect, useState } from 'react'
import React from 'react'

function Timing(){
    const [time,settime]=useState(0);
    const [running,setrunning]=useState(false);

    useEffect(()=>{
        let interval;

        if(running){
            interval=setInterval(() => {
                settime((prev)=>prev+1)
                
            }, 1000);
        
        }
        return()=>clearInterval(interval);
    },[running]);
  return (
    <div>
        <h2>Time:{time}</h2>
        <button onClick={()=>setrunning(true)}>start</button>
        <button onClick={()=>setrunning(false)}>Stop</button>
      
    </div>
  );
}

export default Timing


// 🧠 Key Concept
// setTime(prev => prev + 1)


// ➡️ Previous state safe update

// 🌍 Real World Use

// OTP timer

// Workout timer

// Exam countdown
