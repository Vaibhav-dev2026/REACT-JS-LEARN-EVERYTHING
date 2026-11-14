// 🧠 Concept:

// flex → layout

// justify-between → left + right

// Clean CTA button

// 🧱 STEP 1: Navbar Component
// 📁 src/components/Navbar.jsx

// import React from 'react'

function Navbar(){
  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-black text-white">
        <h1 className="text-xl font-bold">AI DESK</h1>
        <button className="bg-white text-black px-4 py-2 rounded">GET STARTED</button>
    </nav>
  )      
}
export default Navbar
