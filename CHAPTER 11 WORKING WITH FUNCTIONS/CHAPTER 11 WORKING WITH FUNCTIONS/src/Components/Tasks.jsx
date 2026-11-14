import React from "react";
import { useState } from "react";

function Tasks(){
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);

    function addTask(){
        if(task.trim()==="") return;
        setTasks([...tasks,task])
        setTask("");
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i !==index));
    }
    return(
        <div>
            <h1>Task Manager</h1>

            <input value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((t,i)=>(
                    <li key={i}>
                        {t}
                        <button onClick={()=>deleteTask(i)}>❌</button>

                    </li>
                ))}
            </ul>

        </div>
    );
}
export default Tasks;