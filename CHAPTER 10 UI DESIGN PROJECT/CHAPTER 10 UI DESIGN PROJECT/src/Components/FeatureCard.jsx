// 🧱 STEP 3: Feature Card (Reusable)
// 📁 src/components/FeatureCard.jsx

// 🧠 Concept:

// Props = reusable UI

// Hover effect = modern UI

// import React from 'react'

function FeatureCard({title,desc}){
  return (
    <div className='border rounded-xl p-6 hover:shadow-lg transition'>
        <h3 className='font-semibold text-lg mb-2'>{title}</h3>
        <p className="text-gray-500">{desc}</p>
        
      
    </div>
  )
}

export default FeatureCard
