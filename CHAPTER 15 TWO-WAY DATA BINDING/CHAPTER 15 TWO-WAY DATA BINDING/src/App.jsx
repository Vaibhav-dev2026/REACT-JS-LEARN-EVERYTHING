// Chapter 15: Two-Way Data Binding in React
// 1️⃣ Definition

// Two-way data binding ka matlab hai:

// Jab hum user input (UI) ko React state ke saath connect karte hain aur state change hone par UI bhi automatically update hota hai.

// React mein:

// State (data) aur UI (input fields, text, etc.) ke beech automatic synchronization.

// User changes → state update

// State changes → UI update

// ⚠️ Note: React strictly one-way data binding follow karta hai (top-down: parent → child).
// Two-way binding achieve karte hain using state + event handlers.

// 2️⃣ Concepts / Internal Logic
// React ka internal working:

// React maintains state inside components (useState hook for functional components).

// User inputs trigger events (onChange, onClick).

// Event handler updates state.

// State update triggers re-render, aur UI automatically sync ho jata hai.

// 💡 Analogy:

// State = source of truth

// UI = mirror

// Input event = user changing mirror reflection

// Mirror updates only when state changes


// import React from 'react'
// import Twowayinput from './Components/Twowayinput'
// import Userform from './Components/Userform'
// import Q1 from './Components/Q1'
// import Q2 from './Components/Q2'
// import Q3 from './Components/Q3'
// import Q4 from './Components/Q4'

// function App(){
//   return (
//     <div>
//       <Twowayinput />
//       <Userform />
//       <Q1 />
//       <Q2 />
//       <Q3 />
//       <Q4 />
      
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import ProfileForm from "./Components/ProfileForm";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const [profile, setProfile] = useState({ name: "", email: "", bio: "" });

  return (
    <div>
      <ProfileForm profile={profile} setProfile={setProfile} />
      <ProfileCard profile={profile} />
    </div>
  );
}

export default App;

