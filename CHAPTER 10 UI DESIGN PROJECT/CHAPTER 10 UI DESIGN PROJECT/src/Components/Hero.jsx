// 🧱 STEP 2: Hero Section
// 📁 src/components/Hero.jsx

// 🧠 Concept:

// Hero = first impression

// Clear heading + subtext + CTA


// import React from 'react'

function Hero(){
  return (
    <section className='text-center py-16 px-4'>
        <h2 className='text-4xl font-bold mb-4'>
            Boost Your Productivity with AI

        </h2>
        <p className='text-gray-500 mb-6'>
             Smart tools to manage tasks, focus better and work faster.

        </p>
        <button className='bg-black text-white px-6 py-3 rounded'>
              Try AI Now

        </button>
    </section>
  )
}

export default Hero
