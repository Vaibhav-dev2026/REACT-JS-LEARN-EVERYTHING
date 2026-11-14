import { useState, useEffect } from "react";

function UsernameInput() {
    const [username,setusername] = useState("");
    useEffect(()=>{
        const savedName = localStorage.getitem("username");
        if(savedName){
            setusername(savedName);
        }
    })
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Enter your username"
      />
    </div>  
  )
}

export default UsernameInput;
