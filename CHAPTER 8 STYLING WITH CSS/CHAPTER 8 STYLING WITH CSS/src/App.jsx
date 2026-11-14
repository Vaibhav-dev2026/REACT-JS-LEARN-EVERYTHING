// 🟦 CHAPTER 8: STYLING WITH CSS (REACT)
// ❓ React me CSS alag kyu hoti hai?

// React me:

// Component-based structure hota hai

// Har component ka apna style ho sakta hai

// CSS ko scoped rakhna important hota hai


// 1️⃣ Normal CSS (Global CSS) – BASIC

// src/
//  ├─ App.jsx
//  ├─ App.css

// import "./App.css";

// function App() {
//   return <h1 className="title">Hello React</h1>;
// }

// export default App;

// ✅ Use when:

// ✔ Small projects
// ✔ Common styles (body, h1, button)

// ❌ Problem:

// CSS global hoti hai

// Class name clash ho sakta hai


// 🔹 2️⃣ Component Level CSS (Best Practice)
// 📁 Structure
// components/
//  ├─ Navbar.jsx
//  ├─ Navbar.css


// import React from "react";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

// ✅ Industry me MOST USED

// ✔ Clean
// ✔ Component based
// ✔ Easy to maintain


// 🔹 3️⃣ Inline CSS (JS ke andar)


// function Box(){
//   return(
//     <div style={{color:"blue",fontSize:"20px"}}>
//       Inlines STYLING
//     </div>
//   )
// }
// export default Box


// ⚠️ Rules:

// Object format

// camelCase properties

// ❌ Avoid for big projects

// ✔ Quick testing
// ❌ Not reusable
// ❌ Messy code


// 🔹 4️⃣ CSS Modules (Professional Level)

//  import React from 'react'
//  import Button from './Components/button'
//  function App(){
//    return (
//      <div>
//       <Button />
       
//      </div>
//    )
//  }
 
//  export default App

// 🔥 Benefits

// ✔ No class conflict
// ✔ Scoped CSS
// ✔ Industry standard
 

// 🔹 5️⃣ Conditional Styling (VERY IMPORTANT)
// import React from "react";
// import "./App.css";

// function Status({isOnline}){
//   return(
//     <p className={isOnline ? "Online":"Offline"}>
//        {isOnline ? "Online" : "Offline"}
//     </p>

//   );
// };

// export default Status

// 👉 Real-world use:

// Active / inactive

// Login / logout

// Error / success



// 🟢 MINI REAL-WORLD PROJECT

// 🎯 Project: Product Card (Styled)

// import React from "react";
// import ProductCard from "./Components/ProductCard";

// function App() {
//   return (
//     <div>
//       <ProductCard 
//         name="Bulb" 
//         price="₹200" 
//         category="Electric" 
//       />
//     </div>
//   );
// }

// export default App;


// Level--	CSS Type
// Beginner--	Normal CSS
// Intermediate--	Component CSS
// Advanced	CSS--- Modules
// Pro---	Tailwind / Styled Components

// 🏁 Chapter Summary (EXAM READY)

// ✔ React me CSS alag file me hoti hai
// ✔ className use hota hai
// ✔ CSS Modules safest hote hain
// ✔ Responsive design zaroori hai


// PRACTICE QUESTION 
// 1️⃣ Header Component Banao
// 🧠 Concept

// React me:

// UI = Components

// Har component ka apna JSX + CSS

// 📁 Structure
// Components/
//  ├─ Header.jsx
//  ├─ Header.css


// import Header from "./Components/Header";

// function App() {
//   return <Header />;
// }

// export default App;


// 🔵 MEDIUM PRACTICE
// 4️⃣ Button Hover Effect
// 🧠 Concept

// CSS pseudo-class:

// import React from 'react'
// import Button1 from './Components/Button1'

// function App(){


//   return (
//     <Button1 />
//   )
// }

// export default App


// 👉 Hover pe color change = real website feel

// 5️⃣ Active / Inactive Class
// 🧠 Concept

// CSS classes conditionally lagti hain

// Real apps: login status, availability


// import React from 'react'
// import Status from './Components/Status'

// function App(){
//   return (
//     <div>
//         <Status isActive={true} />
//         <Status isActive={false} />
// </div>


//   )
// }

// export default App



// 🔴 CHALLENGE (REAL WORLD LEVEL)
// 6️⃣ Responsive Card Layout (IMPORTANT 🔥)
// 🧠 Concept

// Desktop → 3 cards in row

// Mobile → 1 card

// Use Flexbox + Media Query



import React from 'react'
import Cards from './Components/Cards'

function App(){

  return (
    <div>
        <Cards />
        <Cards />
        <Cards />
      
    </div>
  )
}

export default App












