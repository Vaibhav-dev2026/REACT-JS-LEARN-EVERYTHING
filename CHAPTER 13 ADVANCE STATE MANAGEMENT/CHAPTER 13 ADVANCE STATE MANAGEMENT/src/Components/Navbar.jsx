// 🟢 LEVEL 1: LIFTING STATE UP
// 🧠 Concept

// State ko parent component me rakho, children ko pass karo

// 📁 Structure
// App.jsx
// ├── Navbar.jsx
// ├── Product.jsx

import React from 'react'


function Navbar({count}){
  return (
    <h2>Cart:{count}</h2>
  )
}

export default Navbar

// 🧠 Real World Use

// Small apps

// Limited components

// ❌ But large apps me fail ho jata hai
