// 5️⃣ Responsive Grid
// 🧠 Concept

// Tailwind me:

// grid-cols-1 → mobile

// md:grid-cols-2 → tablet

// lg:grid-cols-3 → desktop

import React from 'react'
function Grid(){
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      <Card />
      <Card />
      <Card />
      
    </div>
  )
}

export default Grid
