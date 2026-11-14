// 🟢 BEGINNER PRACTICE (FOUNDATION)
// 1️⃣ Button banao (Tailwind)
// 🧠 Concept

// Tailwind me:

// CSS class likhne ki jagah utility classes

// Button = padding + color + rounded + hover

// ✅ Code (Button.jsx)

import React from 'react'

function Button(){
  return (
    <button className='px-6 py-2 bg-blue-600 text-white rounded'>
        Click Me
    </button>
  )
}
// 2️⃣ Text center karo
// 🧠 Concept

// text-center → horizontal text center

// flex + justify-center + items-center → full center


<div className="min-h-screen bg-gray-100">
    <h1 className="text-center text-2xl font-bold">
  Welcome to Tailwind
</h1>

<button className='px-6 py-2 bg-blue-600 text-white rounded'>
        Click Me
    </button>
  
</div>

// 3️⃣ Background color do
// 🧠 Concept

// bg-* = background color

// min-h-screen = full screen height

// ✅ Example



export default Button
