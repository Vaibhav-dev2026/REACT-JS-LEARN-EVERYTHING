// 🧩 4️⃣ Multiple Inputs (IMPORTANT)
// ❓ Problem

// Har input ke liye alag state banana tedious ho jata hai

// ✅ Best Practice: Object State

// 📁 components/SignupForm.jsx

import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button>Signup</button>
    </form>
  );
}

export default SignupForm;



// 🧠 Deep Logic (IMPORTANT)
// name attribute input ko identify karta hai

// [e.target.name] → dynamic key

// ...formData → purana data safe

// 🌍 Real World
// Signup forms

// Checkout forms

// Profile edit

