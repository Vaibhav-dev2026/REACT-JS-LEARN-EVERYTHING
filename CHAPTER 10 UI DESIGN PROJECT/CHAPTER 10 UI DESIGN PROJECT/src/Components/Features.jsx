// 🧱 STEP 4: Features Section
// 📁 src/components/Features.jsx

// 🧠 Concept:

// Grid layout

// Responsive (mobile = 1, desktop = 3)

// import React from 'react'
import FeatureCard from "./FeatureCard";

function Features(){
  return (
    <section className="grid md:grid-cols-3 px-6 py-12">
        <FeatureCard
         title="AI Task Manager" 
        desc="Automatically organize your daily tasks." 
        
        />
        <FeatureCard
         title="Focus Mode" 
        desc="AI blocks distractions for deep work." 
        
        />
        <FeatureCard
         title="Smart Insights" 
        desc="Get productivity insights powered by AI." 
        
        />
        
    </section>
  )
}

export default Features

