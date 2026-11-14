// 🔵 MEDIUM PRACTICE (REAL UI FEEL)
// 4️⃣ Card Hover Effect
// 🧠 Concept

// hover:* → hover state

// transition → smooth animation

// shadow → elevation feel

import React from 'react'

function Card(){
  return (
    <div className='w-64 p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-duration-300'>
        <h2 className='text-xl font-semibold'>Product</h2>
        <p className='text-gray-600'>999</p>

      
    </div>
  )
}

export default Card
