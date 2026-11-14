// Step 2: Real-World Mini Project – Live Profile Editor
// Concept & Logic

// Goal: User edits profile → live preview

// Two-way binding: input ↔ state ↔ preview

// Submit: send to console/API

// Folder Structure
// src/
//  ├─ components/
//  │   ├─ ProfileForm.js
//  │   └─ ProfileCard.js
//  ├─ App.js
//  └─ index.js

import React from "react";

function ProfileForm({profile,setProfile}){
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setProfile({...profile,[name]:value});
    }
  return (
    <div>
        <h2>EDIT PROFILE</h2>
        <input type="text" name='name' value={profile.name} onChange={handlechange} placeholder='Name' />
        <input type="email" name="email" value={profile.email} onChange={handlechange} placeholder='Email'/>
        <textarea name="bio" id="" value={profile.bio} onChange={handlechange} placeholder='Bio'></textarea>
        <button onClick={()=>console.log(profile)}>Save</button>
      
    </div>
  )
}

export default ProfileForm
