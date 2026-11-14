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

import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;


