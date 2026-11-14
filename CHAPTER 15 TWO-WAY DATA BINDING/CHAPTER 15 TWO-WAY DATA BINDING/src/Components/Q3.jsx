// 2️⃣ Intermediate Practice
// A. Login Form with Email & Password

// Concept & Logic:

// Controlled inputs for email and password

// Submit → prevent default → alert form data

// Two-way binding ensures input and state always synced

// Code: LoginForm.js

import React,{useState} from 'react'

function Q3(){
    const [loginData,setloginData]=useState({email:"",password:""});
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setloginData({...loginData,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Email:${loginData.email},Password:${loginData.password}`);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" value={loginData.email} onChange={handlechange} />
        <input type="password" name="password" value={loginData.password} onChange={handlechange} />
        <button type="Submit">Login</button>

    </form>
  )
}

export default Q3
