
// 🔥 CHAPTER 12: UNDERSTANDING HOOKS (React)
// 🧠 1️⃣ Hooks kya hote hain? (VERY BASIC)
// ❓ Problem (old React)

// Pehle:

// State sirf class components me hoti thi

// Logic reuse mushkil tha

// ✅ Solution

// Hooks = functions jo React ki features use karne dete hain

// 📌 Hooks se:

// State use kar sakte ho

// Lifecycle handle kar sakte ho

// Logic reuse kar sakte ho

// 📖 DEFINITION (Interview Ready)

// Hooks are special functions that let you “hook into” React features like state and lifecycle from function components.

// ⚠️ 2️⃣ Hooks Rules (VERY IMPORTANT)

// ❌ Galat

// Loop ke andar

// Condition ke andar

// Normal JS function me

// ✅ Sahi

// Component ke top level pe

// Sirf React function component me

// 🧩 3️⃣ Most Important Hooks (Beginner → Intermediate)
// Hook	Use
// useState	State
// useEffect	Side effects
// useRef	DOM / value store
// useContext	Global data

// 👉 Is chapter me useState + useEffect MASTER karenge

// 📁 4️⃣ RECOMMENDED FOLDER STRUCTURE
// src/
// │
// ├── components/
// │   ├── Counter.jsx
// │   ├── Timer.jsx
// │   ├── TaskManager.jsx
// │
// ├── hooks/
// │   └── useCounter.js   ← custom hook (later)
// │
// ├── pages/
// │   └── Home.jsx
// │
// ├── App.jsx
// ├── main.jsx
// └── index.css


// ✔ UI → components
// ✔ Logic reuse → hooks
// ✔ Screens → pages

// 🔵 5️⃣ useState Hook (CORE HOOK)
// 📖 Definition

// useState lets you add state (memory) to a function component.

// ✅ Syntax
// const [state, setState] = useState(initialValue);

// 🧠 Example: Counter

// 📁 components/Counter.jsx

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

// export default Counter;

// 🧠 Logic

// count = value

// setCount = update function

// UI auto update hoti hai

// 🌍 Real World Use

// Likes

// Cart items

// Form input

// Toggles

// 🔵 6️⃣ useEffect Hook (SIDE EFFECTS)
// 📖 Definition

// useEffect runs code after component renders.

// 📌 Side effects:

// API calls

// Timers

// Event listeners

// ✅ Syntax
// useEffect(() => {
//   // side effect
// }, [dependency]);

// 🧠 Example: Timer

// 📁 components/Timer.jsx

// import { useEffect, useState } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(time + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [time]);

//   return <h2>Time: {time}</h2>;
// }

// export default Timer;

// 🧠 Logic

// useEffect runs after render

// setInterval = side effect

// cleanup function prevents memory leak

// 🌍 Real World Use

// Live clock

// OTP timer

// Auto refresh

// 🔥 7️⃣ REAL WORLD PROJECT (HOOKS BASED)
// 📝 Project: Smart Task Manager

// 📌 Concepts used:

// useState

// useEffect

// Functions

// Events

// 📁 components/TaskManager.jsx

// import { useState, useEffect } from "react";

// function TaskManager() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     console.log("Tasks updated:", tasks);
//   }, [tasks]);

//   function addTask() {
//     if (!task.trim()) return;
//     setTasks([...tasks, task]);
//     setTask("");
//   }

//   function deleteTask(index) {
//     setTasks(tasks.filter((_, i) => i !== index));
//   }

//   return (
//     <div>
//       <h1>Task Manager</h1>

//       <input
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((t, i) => (
//           <li key={i}>
//             {t}
//             <button onClick={() => deleteTask(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskManager;

// 🧠 Real World Mapping
// Feature	App
// useState	App memory
// useEffect	Analytics
// Functions	User actions
// 📝 8️⃣ PRACTICE TASKS (DO THIS)
// 🟢 Beginner

// 1️⃣ Toggle button (ON/OFF)
// 2️⃣ Input text show live

// 🔵 Medium

// 3️⃣ Counter with limit
// 4️⃣ Timer start/stop

// 🔴 Challenge

// 5️⃣ Theme switcher (dark/light)
// 6️⃣ Shopping cart with total

// 🚀 9️⃣ Chapter COMPLETE kab?

// ✔ Hooks rules samajh aa gaye
// ✔ useState confident
// ✔ useEffect ka use samajh aa gaya
// ✔ Small app bana pa rahe ho


import React from 'react'
import Counter from './Components/Counter'
import Timer from './Components/Timer'
import TaskManager from './Components/TaskManager'
import Toggle from './Components/Toggle'
import Liveinput from './Components/Liveinput'
import Limit from './Components/Limit'
import Timing from './Components/Timing'
import Theme from './Components/Theme'
import Cart from './Components/Shopping'

function App(){
  return (
    // <Counter />
    // <Timer />
    // <TaskManager />
    // <Toggle />
    // <Liveinput />
    // <Limit />
    // <Timing />
    // <Theme />
    <Cart />
  )
}

export default App


