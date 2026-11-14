// 🧩 3️⃣ Form Submit Handling
// ❗ Important Concept

// React me form submit pe:

// e.preventDefault()


// warna page reload ho jaayega ❌


// 🧪 Example 2: Basic Form Submit

// 📁 components/LoginForm.jsx

import { useState } from 'react'

function LoginForm(){
    const [email,setEmail]=useState("");

    function handlesubmit(e){
        e.preventDefault();
        console.log("Email:",email);
    }

  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'

        />
        </form>

        <button type='submit'>
            Login
        </button>
      
    </div>
  )
}

export default LoginForm



// Logic

// Submit button click

// handleSubmit run

// Page reload stop

// Data access milta hai

// 🌍 Real World

// Login

// Newsletter

// OTP submit
