// 🚀 CHAPTER 13: ADVANCED STATE MANAGEMENT (React)
// 🧠 Sabse pehle CLEAR karo ye baat

// ❓ State management ka matlab kya?

// 👉 App ke data ko sahi jagah, sahi time pe, sahi tarike se handle karna

// Jaise:

// User logged in hai ya nahi

// Cart me kitne items hain

// Theme dark hai ya light

// Multiple components ko same data chahiye

// 🧩 1️⃣ Problem with BASIC useState (WHY ADVANCED?)
// ❌ Problem Scenario
// App
//  ├── Navbar (cart count)
//  ├── ProductList
//  │     └── ProductCard
//  └── CartPage


// 👉 Cart ka data:

// Navbar ko chahiye

// ProductCard ko chahiye

// CartPage ko chahiye

// ❌ Agar har jagah useState lagaya:

// Data mismatch

// Props drilling

// Code messy

// ⚠️ PROPS DRILLING (COMMON CONFUSION)
// <App>
//   <Navbar cartCount={count} />
//   <Product cartCount={count} setCount={setCount} />
// </App>


// 👉 Data unnecessary pass ho raha hai

// 🧠 Solution = Advanced State Management

// 🟢 LEVEL 1: LIFTING STATE UP
// 🧠 Concept

// State ko parent component me rakho, children ko pass karo

// 📁 Structure
// App.jsx
// ├── Navbar.jsx
// ├── Product.jsx

// 📄 App.jsx
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Product from "./components/Product";

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <>
//       <Navbar count={cartCount} />
//       <Product setCount={setCartCount} />
//     </>
//   );
// }

// export default App;

// 📄 Navbar.jsx
// function Navbar({ count }) {
//   return <h2>Cart: {count}</h2>;
// }

// export default Navbar;

// 📄 Product.jsx
// function Product({ setCount }) {
//   return (
//     <button onClick={() => setCount(prev => prev + 1)}>
//       Add to Cart
//     </button>
//   );
// }

// export default Product;

// 🧠 Real World Use

// Small apps

// Limited components

// ❌ But large apps me fail ho jata hai

// 🔵 LEVEL 2: useReducer (IMPORTANT)
// 🧠 Definition

// useReducer is used when state logic complex ho

// ❓ Kab useReducer use kare?

// Multiple states

// Conditional logic

// Redux jaise pattern chahiye

// 🧩 Basic Structure
// const [state, dispatch] = useReducer(reducer, initialState);

// 📁 components/CounterReducer.jsx
// import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// function CounterReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>{state.count}</h2>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// }

// export default CounterReducer;

// 🧠 Concepts Used

// Reducer = pure function

// Action = kya karna hai

// State = data

// 🌍 Real World Use

// Forms

// Cart logic

// Authentication

// 🔴 LEVEL 3: CONTEXT API (MOST IMPORTANT)
// 🧠 Definition

// Context API allows global state sharing without props drilling

// 🧩 Use Case

// User login

// Theme

// Cart

// Language

// 📁 Folder Structure
// src/
// ├── context/
// │   └── CartContext.jsx
// ├── components/
// │   ├── Navbar.jsx
// │   └── Product.jsx
// ├── App.jsx

// 📄 context/CartContext.jsx
// import { createContext, useState } from "react";

// export const CartContext = createContext();

// function CartProvider({ children }) {
//   const [cart, setCart] = useState(0);

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartProvider;

// 📄 App.jsx
// import CartProvider from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Product from "./components/Product";

// function App() {
//   return (
//     <CartProvider>
//       <Navbar />
//       <Product />
//     </CartProvider>
//   );
// }

// export default App;

// 📄 Navbar.jsx
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Navbar() {
//   const { cart } = useContext(CartContext);
//   return <h2>Cart: {cart}</h2>;
// }

// export default Navbar;

// 📄 Product.jsx
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Product() {
//   const { setCart } = useContext(CartContext);

//   return (
//     <button onClick={() => setCart(prev => prev + 1)}>
//       Add to Cart
//     </button>
//   );
// }

// export default Product;

// 🌍 Real World Use

// E-commerce

// Dashboards

// SaaS apps

// ⚠️ COMMON CONFUSIONS (VERY IMPORTANT)
// ❓ useState vs useReducer?

// Simple → useState

// Complex → useReducer

// ❓ Context vs Redux?

// Small/medium app → Context

// Very large app → Redux / Zustand

// ❓ Context slow hota hai?

// Overuse se

// Har cheez global mat banao ❌

// 🏗️ REAL WORLD PROJECT (ADVANCED)
// 🛒 MINI E-COMMERCE STATE SYSTEM
// Features

// Global cart

// Add/remove

// Navbar count

// Context + reducer

// 👉 Is project me sab kuch use hua:

// useState

// useReducer

// Context

// Props

// 📝 PRACTICE TASKS (MUST DO)

// 🟢 Beginner
// 1️⃣ Theme Context (dark/light)

// 🔵 Medium
// 2️⃣ Auth Context (login/logout)

// 🔴 Advanced
// 3️⃣ Cart with reducer + context

// ✅ CHAPTER COMPLETE KAB MANU?

// ✔ Props drilling ka pain samajh aa jaye
// ✔ Context create/use kar sako
// ✔ Reducer logic likh sako
// ✔ Global vs local state ka decision kar sako

// import { useState } from "react";
// import Navbar from "./Components/Navbar";
// import Product from "./Components/Product";
// import CounterReducer from "./Components/CounterReducer";
// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <>
//       <Navbar count={cartCount} />
//       <Product setCount={setCartCount} />
//       <CounterReducer />
//     </>
//   );
// }

// export default App;

// 🧠 Concepts Used

// Reducer = pure function

// Action = kya karna hai

// State = data

// 🌍 Real World Use

// Forms

// Cart logic

// Authentication



import CartProvider from "./context/CartContext";
import Navbar1 from "./Components/Navbar1";
import Product1 from "."

function App() {
  return (
    <CartProvider>
      <Navbar1 />
      <Product1 />
    </CartProvider>
  );
}

export default App;

