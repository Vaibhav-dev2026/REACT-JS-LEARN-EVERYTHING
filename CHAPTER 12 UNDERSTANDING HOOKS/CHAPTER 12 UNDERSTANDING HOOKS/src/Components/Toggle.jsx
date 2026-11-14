// ✅ 1️⃣ Toggle Button (ON / OFF)
// 🧠 Concept Used

// useState

// Conditional rendering

// Event handling

// 🧩 Approach / Logic

// Ek boolean state rakhenge (true / false)

// Button click pe value ulta kar denge

// State ke basis pe text change hoga

// 📁 components/Toggle.jsx


import { useState } from 'react'
import React from 'react'


function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleHandler() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggleHandler}>
        Toggle
      </button>
    </div>
  );
}

export default Toggle;


// 🧠 Line-by-Line Explanation
// const [isOn, setIsOn] = useState(false);


// ➡️ Boolean state, initially OFF

// setIsOn(!isOn);


// ➡️ True → False, False → True

// {isOn ? "ON" : "OFF"}


// ➡️ Conditional rendering

// 🌍 Real World Use

// Wi-Fi ON/OFF

// Dark mode toggle

// Notification switch
