// Bhai 💙 CHAPTER 14 – FORM HANDLING IN REACT
// Ye chapter bahut zyada IMPORTANT hai, kyunki:

// 👉 Login
// 👉 Signup
// 👉 Contact form
// 👉 Checkout
// 👉 Admin panel

// sab forms ke bina possible hi nahi hai

// Main tujhe 0 se HERO level tak le jaaunga:

// definition

// concept

// logic

// line-by-line code

// real world project

// common mistakes

// Sab kuch beginner-friendly Hinglish me.

// 🔥 CHAPTER 14: FORM HANDLING IN REACT
// 🧠 1️⃣ Form Handling kya hota hai? (VERY BASIC)

// Form handling =

// User se input lena, us data ko store karna, validate karna aur submit karna

// HTML me kya hota tha?
// <form>
//   <input />
//   <button>Submit</button>
// </form>


// ❌ Problem:

// Page reload

// Data control React ke paas nahi

// ⚛️ React ka concept (CORE IDEA)

// 👉 React me form = controlled by STATE

// Matlab:

// Input ka value → state se aata hai

// Input change → state update hoti hai

// 🧩 2️⃣ Controlled Component (MOST IMPORTANT TERM)
// 📖 Definition

// Jab input ka value React state control kare → Controlled Component


import React from 'react'
import NameForm from './Components/NameForm'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import ContactForm from './Components/ContactForm'
function App(){
  return (
    <div>
      <NameForm />
      <LoginForm />
      <SignupForm />
      <ContactForm /> 
      

    
      
      
      
    </div>
  )
}

export default App

