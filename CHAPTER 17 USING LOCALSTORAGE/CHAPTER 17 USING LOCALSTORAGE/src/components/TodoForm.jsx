import { useState } from "react"


function TodoForm({addtodo}) {
    const[task,settask]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        addtodo({
            id:Date.now(),
            text:task
        });
        settask("");
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e)=>settask(e.target.value)} placeholder="Add task"/>
        <button>Add</button>
        </form>

  )
}

export default TodoForm
