import { useState,useEffect } from "react";

import React from 'react'

function TaskManager(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
        console.log("Tasks updated:",tasks);
    },[tasks]);

    function addTask(){
        if(!task.trim()) return;
        setTasks([...tasks,task]);
        setTask("");
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i!==index));

    }
  return (
    <div>
        <h1>TASK MANAGER</h1>
        <input value={tasks} onChange={(e)=>setTask(e.target.value)} />

        <button onClick={addTask}>Add</button>

        <ul>
                {tasks.map((t,i)=>(
                    <li key={i}>
                    {t}
                    <button onClick={()=>deleteTask(i)}>Delete</button>
            </li>

               
            ))}
        </ul>

      
    </div>
  )
}

export default TaskManager
