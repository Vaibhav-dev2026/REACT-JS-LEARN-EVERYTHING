// 🔥 CHAPTER 9: INTRO TO TAILWIND CSS (React ke liye)
// 🧠 Tailwind CSS kya hota hai? (Simple Definition)

// Tailwind CSS ek utility-first CSS framework hai
// Matlab:

// Pehle .css file likhne ke bajay

// Direct HTML / JSX ke andar classes likhte ho

// 👉 CSS likhne ka speed ×10 ho jata hai


// ❌ Normal CSS vs ✅ Tailwind CSS
// ❌ Normal CSS

// .card{
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
// }

/* <div className="card">Hello</div> */

// ✅ Tailwind CSS


// <div className="bg-white p-5 rounded-lg">
//   Hello
// </div>

// 👉 No extra CSS file needed

// 🤔 React me Tailwind kyun use hota hai?

// Real world reasons:

// Component ke saath styling

// No class name conflicts

// Responsive design easy

// Fast UI development

// Industry standard (Startups + MNCs)


// 🧱 Tailwind Basic Classes (MUST KNOW)
// 🎨 Colors

// bg-black
// text-white
// bg-blue-500

// 📦 Spacing
// p-4   // padding
// m-4   // margin

// 📐 Size
// w-64
// h-32


// 🔤 Text
// text-xl
// font-bold
// text-center


// 🧩 FIRST REACT COMPONENT (Tailwind)
// App.jsx

// import Card from "./Card"

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <Card />
//     </div>
//   )
// }

// export default App


// 🧠 IMPORTANT CONCEPTS (INTERVIEW LEVEL)
// 1️⃣ Utility-First Approach

// Small reusable classes

// No custom CSS needed


// 2️⃣ Mobile-First Design
// className="text-sm md:text-lg lg:text-xl"

// 3️⃣ Responsive Layout
// className="grid grid-cols-1 md:grid-cols-3 gap-6"

// import React from 'react'
// import ProductCard from './Components/ProductCard'
// function App(){
//   return (
//     <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
//       <ProductCard name="Laptop" price="50000" />
//       <ProductCard name="Mobile" price="20000" />
//       <ProductCard name="Headphones" price="3000" />
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Button from './Components/Button'
// function App(){
//   return (
//     <Button />
//   )
// }

// export default App

// 🔵 MEDIUM PRACTICE (REAL UI FEEL)
// 4️⃣ Card Hover Effect
// 🧠 Concept

// hover:* → hover state

// transition → smooth animation

// shadow → elevation feel

// import React from 'react'
// import Card from './Components/Card'

// function App(){
//   return (
//     <Card />
//   )
// }

// export default App


// 5️⃣ Responsive Grid
// 🧠 Concept

// Tailwind me:

// grid-cols-1 → mobile

// md:grid-cols-2 → tablet

// lg:grid-cols-3 → desktop

// import React from 'react'
// import Grid from './Components/Grid'
// import Card from './Components/Card'

// function App(){
//   return (
//     <div>
//             <Card />
//     <Card />
//     <Card />
//         <Grid />
//     </div>

      

//   )
// }

// export default App

// 🔴 CHALLENGE (REAL WORLD UI)
// 6️⃣ Navbar + Mobile Menu UI
// 🧠 Concept Breakdown
// Feature	---Tailwind
// Flex layout----	flex justify-between
// Hide on desktop---	md:hidden
// Show on desktop---	hidden md:flex
// State---useState



// App.jsx (Combine Everything)


import Button from "./Components/Button";
import Card from "./Components/Card";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";


function App() {
  return (
   <>
      <Navbar />
      <div className="p-6 space-y-6">
        <Button />
        <Grid />
      </div>
    </>
  );
}

export default App;

// 🧠 IMPORTANT CONCEPT CLEARANCE
// ❓ Component CSS vs Tailwind?

// ✔ Tailwind recommended
// ✔ No class conflicts
// ✔ Faster UI building
// ✔ Industry standard (2026)



// ❓ MOST IMPORTANT QUESTION (Tera doubt)
// ❓ Tailwind vs CSS — kya use kare?

// 👉 Industry rule:

// Small projects → Tailwind

// React apps → Tailwind

// Custom design system → Tailwind + CSS

// 👉 Tu Tailwind pe switch karna bilkul sahi hai
