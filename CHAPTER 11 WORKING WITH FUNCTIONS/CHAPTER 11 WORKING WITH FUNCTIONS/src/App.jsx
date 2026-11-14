// 🔥 CHAPTER 11: WORKING WITH FUNCTIONS (React)

// React me sab kuch function ke around ghoomta hai
// Components = Functions
// Events = Functions
// Logic = Functions

// 🧠 1️⃣ Function kya hota hai? (VERY BASIC)
// Normal JavaScript function

// function add(a, b) {
//   return a + b;
// }
// add();
// // ➡️ Kaam: reusable logic

// 🧠 2️⃣ React me function ka role

// React me function UI return karta hai

// 🧩 4️⃣ Types of Functions in React
// 1️⃣ Component Function
// function Navbar() {
//   return <nav>Navbar</nav>;
// }

// 2️⃣ Event Handler Function
// function handleClick() {
//   alert("Clicked");
// }


// Used like:

// <button onClick={handleClick}>Click</button>

// 3️⃣ Helper / Utility Function

// 📁 utils/helpers.js

// export function formatPrice(price) {
//   return "₹" + price;
// }

// 🔥 5️⃣ Real World Example – Counter (Function + State)
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


// 🧠 Logic:

// increase() = function

// Button click → function runs

// UI updates

// ⚡ 6️⃣ Arrow Functions (MOST USED)
// const sayHi = () => {
//   console.log("Hi");
// };


// React me mostly arrow functions use hote hain:

// <button onClick={() => setCount(count + 1)}>
//   Increase
// </button>

// 🏗️ 7️⃣ REAL WORLD MINI PROJECT
// 📝 "Task Manager"
// Features:

// Add task

// Delete task

// Button click functions

// 📁 components/TaskApp.jsx
// import { useState } from "react";

// function TaskApp() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   function addTask() {
//     if (task === "") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   }

//   function deleteTask(index) {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
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

// export default TaskApp;

// 🧠 8️⃣ Important Concepts (INTERVIEW LEVEL)
// ❓ Function ko JSX me kaise pass karte ho?
// <button onClick={handleClick}></button>

// ❓ Function call vs reference difference?

// ❌ WRONG:

// onClick={handleClick()}


// ✅ RIGHT:

// onClick={handleClick}

// ❓ Arrow function kab use karte ho?

// Jab arguments pass karne ho

// onClick={() => deleteTask(id)}

// 📝 9️⃣ PRACTICE TASKS (DO THIS)
// 🟢 Beginner

// 1️⃣ Ek button banao
// 2️⃣ Click pe console log karo
// 3️⃣ Function alag likho

// 🔵 Medium

// 4️⃣ Counter banao (+ / -)
// 5️⃣ Reset button add karo

// 🔴 Challenge

// 6️⃣ Shopping cart:

// Add item

// Remove item

// Total count show

// 🚀 10️⃣ Ye chapter kab COMPLETE samjhu?

// ✔ Function likhne me hesitation na ho
// ✔ Event handle samajh aa jaye
// ✔ State + function connect ho jaye
// ✔ Small logic khud bana pao


// import React from 'react'
// import Header from './Components/Header'
// import Button from './Components/Button'




// function App(){
//   return (
//     <div>
//     <Header />
//     <Button />
//     <button onClick={Button}>Click</button>


//     </div>

//   )
// }

// export default App


// import React from 'react'
// import Counter from './Components/Counters'

// function App(){
//   return (
//     <Counter/>
//   )
// }

// export default App


// import React from 'react'
// import Tasks from './Components/Tasks'

// function App(){
//   return (
//     <Tasks />
//   )
// }

// export default App


// import React from 'react'
// import ClickLogger from './Components/ClickLogger'

// function App(){
//   return (
//     <ClickLogger />
//   )
// }

// export default App
// import React from 'react'
// import Counter from './Components/Counters'

// const App = () => {
//   return (
//     <Counter />
//   )
// }

// export default App


import React from 'react'
import Cart from './Components/Cart'

function App(){
  return (
    <Cart />
  )
}

export default App

